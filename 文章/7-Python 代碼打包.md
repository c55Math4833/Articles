---
title: Python 代碼打包與代碼保護 (Windows)
draft: False
disableSPA: True
discussion: True
date: 2026-04-17
tags:
    - 開發
    - Python
    - 應用程式
---
# 前言 Introduction
在發布 Python 應用程式時，我們通常會面臨幾個挑戰：
- 如何讓沒有安裝 Python 環境的使用者（客戶）順利執行？
- 如何保護我辛苦編寫的原始碼不被輕易反組譯？
- 以及如何避免打包後的執行檔被防毒軟體誤判？

儘管最基礎的 PyInstaller 可以輕鬆將 Python 腳本打包成獨立的可執行檔（.exe），但其打包機制僅是將源碼打包壓縮，容易透過反編譯工具（如 pyinstxtractor）還原出原始程式碼。

因此，本文旨在進一步提升 Python 專案的安全性，透過 Cython 將核心程式碼編譯為 C 語言底層代碼，達到極高的混淆與保護效果，並探討如何在無網路的乾淨環境中建置編譯環境，最後透過數位簽章解決防毒軟體誤判問題。

**<span style="color: Red;">免責聲明與安全警告</span>**：
1. **<span style="color: Red;">僅增加破解難度，非絕對安全</span>**：本文介紹的方法（包含 Cython 與 Nuitka）主要是將 Python 轉譯為 C 語言並編譯為底層機器碼，藉此大幅提高逆向工程的門檻與破解難度。但請記住，世界上沒有絕對安全的防護，對於具備高度專業知識的逆向工程師而言，二進位檔仍有被分析與反編譯的可能。
2. **<span style="color: Red;">嚴禁非法用途</span>**：本文提供的代碼保護與打包技術僅供合法軟體開發、保護商業機密與學術交流之用。嚴禁將本篇技術用於開發惡意軟體（Malware）、木馬、規避資安防護系統或其他任何非法用途。若因不當使用造成任何法律責任，由使用者自行承擔。

## 方法概覽
Python 專案打包與保護的幾種常見方法有 PyInstaller、Nuitka 和 PyOxidizer。其中，PyOxidizer 雖然相對較新且理論速度較快，但目前維護狀況停滯，故本人暫不使用，亦不在本文的討論範圍內。以下是這些方法的比較：

| 框架           | PyInstaller                         | Nuitka                      |
|----------------|-------------------------------------|-----------------------------|
| 啟動速度       | 較慢 (需要解壓到磁碟)               | 快 (原生執行)               |
| 運行速度       | 標準 (與 CPython 一致)              | 有可能提升                  |
| 建置時間       | 快速 (數分鐘)                       | 緩慢 (數十分鐘)             |
| 支援程度       | 高 (社群資源最豐富)                 | 高 (有商業支援，持續更新)   |
| 二進位檔案大小 | 較大 (包含整個環境)                 | 小 (精簡依賴樹)             |
| 防毒軟體誤判   | 高                                  | 中等                        |
| 程式碼安全性   | 低 (易於反編譯，甚至有專門工具)     | 高 (轉換為 C 機器碼)        |
| 依賴管理       | 自動蒐集依賴 (但有時會漏掉或多打包) | 需要手動管理依賴 (但更精確) |


## 工具說明
工具說明，先不要急著安裝，等到實作看完再來決定要安裝哪些工具：
- [Cython](https://cython.org/): 一個將 Python 代碼編譯為 C 語言的工具，能夠顯著提升程式碼的執行效率與安全性。透過 Cython 編譯後的代碼難以被反編譯，提供了更高的保護效果。
  - **安裝**：使用 `pip install Cython` 指令安裝（注意大小寫不要錯了）。
- GCC: 輕量級的開源 C/C++ 編譯器。
  - **安裝**：Nuitka 可以自行安裝免安裝版本應用，不須另外安裝。
- [PyInstaller](https://pyinstaller.org/): Python 中最常用的打包工具套件，可將 Python 程式及其依賴項打包為獨立的執行檔。
  - **安裝**：使用 `pip install pyinstaller` 指令安裝（注意大小寫不要錯了）。
- [Nuitka](https://nuitka.net/): 類似 PyInstaller，同樣是打包 Python 的工具，不過是直接將 Python 代碼轉換為 C/C++ 代碼並編譯，提供更高的執行效率與安全性。
  - **安裝**：使用 `pip install nuitka` 指令安裝。
- [UPX](https://upx.github.io/): 一個流行的可執行檔壓縮工具，可以顯著減小打包後的執行檔大小。
  - **安裝**：前往官網下載適合你系統的版本，解壓後將 UPX 可執行檔所在的路徑添加到系統環境變量中。
    - 環境變量設定：設定 → 系統 → 系統資訊 → 進階系統設定 → 環境變量 → 系統變量 → Path → 編輯 → 新增 → 輸入 UPX 可執行檔所在的路徑。重啟命令提示字元或 PowerShell 以使變更生效。
- [Microsoft Visual C++ (MSVC)](https://visualstudio.microsoft.com): 用於編譯 C/C++ 代碼的工具，通常要建立 exe 執行檔都會需要這個工具。
  - 其中，需要安裝 `Visual C++ Build Tools`、`Windows SDK`。
  - **安裝**：前往官網下載並安裝，安裝過程中選擇上述組件。
    - 個人操作時：
      - Visual C++ Build Tools 安裝 MSVC x64 最新版。
      - Windows SDK 安裝最新版本。

# 方法實作 Methods Implementation

## 應用程式部屬 - PyInstaller
### 基礎應用程式部屬
最基本的打包方式是直接使用 PyInstaller。
- 要求：
  - 已安裝 Python 環境（建議使用虛擬環境，個人經驗 PyInstaller 常常會多包到其他套件導致檔案巨大）。
  - 已安裝專案所需的所有依賴套件。
  - 已安裝 PyInstaller。
- **步驟**：
  - **執行命令**：
    ```bash
    # 一般打包：將腳本打包成單一執行檔（-F）且帶有命令提示字元視窗（-c）
    .\python.exe -m PyInstaller -F -c test.py

    # 搭配 UPX 壓縮打包：需先下載 UPX 並指定 upx-dir 路徑
    .\python.exe -m PyInstaller -F -c --upx-dir "<UPX 路徑>" test.py
    ```
打包後的執行檔會在 `dist` 目錄下，檔案名稱與原始腳本相同（test.exe）。

### 進階保護：使用 Cython 進行主要功能的編譯
因為 PyInstaller 的打包機制是將 Python 代碼打包壓縮，極容易透過反編譯工具還原出原始程式碼，因此，我們可以使用 Cython 將核心程式碼編譯為 C 語言底層代碼，達到極高的混淆與保護效果。
- **要求**：
  - 已安裝 Python 環境（建議使用虛擬環境，勿使用 embeddable 嵌入式版本，否則無法編譯）。
  - 已安裝專案所需的所有依賴套件。
  - 已安裝 PyInstaller。
  - 已安裝 Cython。
  - 已安裝 MSVC（包含 Visual C++ Build Tools、Windows SDK）。
- **步驟**：
  1. 編寫 `setup.py` 腳本，使用 Cython 將核心模組程式碼編譯為 C 語言底層代碼。
       - **範例** (假設核心模組程式碼名稱為 `my_module.py`)：
         ```python
         from setuptools import setup
         from Cython.Build import cythonize

         setup(
             ext_modules=cythonize(["my_module.py"]),
         )
         ```
        > 註：如果核心程式碼中有使用到其他核心模組程式碼，則需要將這些模組也加入 `cythonize` 的列表中，以確保它們也被編譯為 C 語言底層代碼。
  2. 將代碼編譯為 C 語言底層代碼。
       - **執行命令**：
         ```bash
         python setup.py build_ext --inplace
         ```
       - 這會生成一個名為 `my_module.pyd` 的檔案（或更常見的名稱為 `my_module.cpXXX-XXX_XXX.pyd`），該檔案包含了編譯後的 C 語言底層代碼。
       - 這時，可以把原本的 `my_module.py` 和其他生成的檔案刪除；只保留 `my_module.pyd`，並在主程式中改為匯入 `my_module` 模組（不需要副檔名）。測試執行主程式，確保功能正常。
  3. 建立一個接入點腳本（例如 `main.py`），在其中匯入並使用編譯後的模組。（如果沒有這個步驟，PyInstaller 可能無法正確識別並打包編譯後的模組）
       - **範例**：
         ```python
         import my_module
         import <列出所有其他所需模組>

         if __name__ == "__main__":
             my_module.main()
         ```
  4. 使用 PyInstaller 打包接入點腳本（例如 `main.py`）。
       - **執行命令**：
         ```bash
         # 一般打包：將腳本打包成單一執行檔（-F）且帶有命令提示字元視窗（-c）
         python -m PyInstaller -F -c main.py
         # 搭配 UPX 壓縮打包：需先下載 UPX 並指定 upx-dir 路徑
         python -m PyInstaller -F -c --upx-dir "<UPX 路徑>" main.py
         ```
       - 打包後的執行檔會在 `dist` 目錄下，檔案名稱與接入點腳本相同（`main.exe`）。

#### 進階說明
如果想要進一步客製化打包過程，可以使用 PyInstaller 的 spec 文件來定義更詳細的打包配置，例如指定額外的資料檔案、排除特定模組、或是修改打包後的執行檔名稱等。這些配置可以幫助你更精確地控制打包過程，確保最終的執行檔符合你的需求。
- **生成 spec 文件**：
  ```bash
  python -m PyInstaller --clean main.spec
  ```
  這會生成一個名為 `main.spec` 的文件，你可以在其中修改打包配置。
- **修改 spec 文件**：
  打開 `main.spec` 文件，你可以在其中修改以下部分：
  - `datas`: 用於指定需要包含在打包中的額外資料檔案。
  - `hiddenimports`: 用於指定需要包含在打包中的隱藏模組。
  - `excludes`: 用於指定需要從打包中排除的模組。
  - `name`: 用於指定打包後的執行檔名稱。
  - `onefile`: 用於指定是否將所有檔案打包成單一執行檔。
- **使用修改後的 spec 文件打包**：
  ```bash
  python -m PyInstaller main.spec
  ```

## 應用程式部屬 - Nuitka
與「Cython + PyInstaller」的兩階段流程不同，Nuitka 旨在將整個 Python 專案一次性轉換為 C 語言並直接呼叫 C 編譯器生成獨立可執行檔。這種方法提供了極佳的保護效果且操作更加整合。
- **要求**：
  - 已安裝 Python 環境（建議使用虛擬環境）。
  - 已安裝專案所需的所有依賴套件。
  - 已安裝 Nuitka。
  - 以下兩個方法擇一：
    - 已安裝 MSVC（包含 Visual C++ Build Tools、Windows SDK）。
    - 已安裝 gcc。（如果選用這個方法的話，以下指令皆須加上 `--mingw64` 參數，Nuitka 會提示下載 gcc）
    > 註：其中，MSVC 相比 gcc 非常龐大。而整體而言，兩者運行能力差不多；但 MSVC 編譯於 Windows 系統相容性較為完整。因此，個人在快速迭代開發時會選用 gcc；而出問題或生產環境則使用 MSVC。

### 一般編譯打包-資料夾
這樣會編譯出一個包含所有依賴的==**資料夾**==，而非單一執行檔。這種模式下，執行檔會直接呼叫 C 編譯器生成原生機器碼，提供了更高的執行效率與安全性。
- **步驟**：
  - **執行命令**：
    ```bash
    python -m nuitka --standalone main.py
    ```
  - 這會在當前目錄下生成一個名為 `main.dist` 的資料夾，裡面包含了編譯後的可執行檔（`main.exe`）以及所有必要的依賴檔案。

### 一般編譯打包-單一執行檔
這樣會編譯出一個單一執行檔。
- **步驟**：
  - **執行命令**：
    ```bash
    python -m nuitka --onefile main.py
    ```
  - 這會在當前目錄下生成一個名為 `main.dist` 的資料夾，裡面包含了編譯後的可執行檔（`main.exe`）以及所有必要的依賴檔案。
  - 註：作者撰稿時，這個方法打包的檔案很容易被防毒軟體誤判為病毒。

### 進階參數
Nuitka 提供了豐富的參數與外掛來微調打包行為：
- `-windows-disable-console`：執行時隱藏命令提示字元視窗（非常適合 GUI 應用程式）。
- `-windows-icon-from-ico=icon.ico`：為生成的執行檔加入圖示。
- `-enable-plugin=upx`：啟用 UPX 壓縮外掛（需確保環境已安裝 UPX），進一步縮小檔案。
- `-include-data-dir=assets=assets`：將外部資源資料夾（例如圖片、設定檔）一併封裝。
- `-remove-output`：編譯完成後自動刪除臨時建置資料夾（.build）。

# 防毒軟體誤判
這應該是最大的坑了。因為程序被進行封裝，無論使用 PyInstaller 還是 Nuitka，打包出來的可執行檔都容易被各大防毒軟體（包含 Windows Defender）誤判為惡意軟體。主要因為惡意軟體也會運用這些技術來進行封裝、壓縮、混淆。  
以下對封裝打包的檔案提供一些解決方案：
1. **加入數位簽章**：使用數位簽章（如果是有信譽的機構頒發的更好），可以提升程序的可信度。
2. **提交惡意軟體分析**：提交防毒軟體公司誤報的程序讓其判斷（如 [Windows Defender](https://www.microsoft.com/en-us/wdsi/filesubmission)）。
3. **避免敏感操作**：開機自啟動、側錄、未經授權的連線行為等敏感操作容易被誤判為惡意軟體。
4. **不要檔案壓縮**：經過高度的壓縮、加密，容易被誤判為試圖混淆代碼。
4. **添加中繼資料**：有時，添加中繼資料包含版本、公司、版權等資訊，可以提升程序的可信度。

# 補充資料 - MSVC 離線安裝說明
筆者住宿地點的網路速度非常慢，線上安裝 MSVC 幾乎不可能，而且過程中幾乎做不了任何需要網路的事情。  
於本文，一併提供離線安裝 MSVC 的說明。
- **步驟**：
  1. 要先有一個網路環境好的地方。
  2. 下載 Visual Studio Build Tools，可由 [Visual Studio 官網](https://learn.microsoft.com/en-us/visualstudio/install/use-command-line-parameters-to-install-visual-studio?view=visualstudio) 下載。檔名為 [`vs_buildtools.exe`](https://download.visualstudio.microsoft.com/download/pr/2b23517b-e100-42e1-a560-063af6edc4ec/3e4ac9e45c4f91266a469b627aea818e130b5a17e59034d5324bbd6a16fafc55/vs_BuildTools.exe)。（下載下來檔名可能為 `vs_BuildTools.exe`）
  3. 建立一個目錄將下載的 `vs_BuildTools.exe` 放到該目錄中，該目錄將用於下載離線安裝包。
  4. 確認安裝元件識別碼。可由 [Visual Studio Build Tools 元件目錄](https://learn.microsoft.com/zh-tw/visualstudio/install/workload-component-id-vs-build-tools) 查詢。
      - Visual C++ Build Tools 安裝 MSVC x64 最新版。
      - Windows SDK 安裝最新版本。
      - 建議同時安裝推薦和可選元件，以確保編譯過程中不會因缺少元件而失敗。
  5. 使用以下命令下載離線安裝包：
      - **命令格式**：
          ```bash
          .\vs_BuildTools.exe ^
              --layout <目標目錄> ^
              --lang <語言> ^
              --add <Visual C++ Build Tools 識別碼> ^
              --add <Windows SDK 識別碼> ^
              --includeRecommended ^
              --includeOptional
          ```
      - **範例**：
          ```bash
          .\vs_BuildTools.exe ^
              --layout <目標目錄> ^
              --lang en-us ^
              --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 ^
              --add Microsoft.VisualStudio.Component.Windows11SDK.26100 ^
              --includeRecommended --includeOptional
          ```
  6. 離線安裝包下載完成後，將該目錄資料夾整個複製到目標機器上。
  7. 在目標機器打開剛才的資料夾，進入目錄 `certificates`，手動安裝裡面的所有憑證檔案。
  8. 回到目錄根目錄，使用以下命令進行安裝：`.\vs_BuildTools.exe --noWeb`
  9. 依步驟安裝即可。
