---
title: EndNote 書目管理軟體日常操作紀錄
description: EndNote 書目管理軟體，個人習慣的使用方法紀錄。
draft: False
date: 2024-03-29
tags:
    - Microsoft Word
    - EndNote
    - 文書
---
# Introduction
[EndNote](https://endnote.com) 為常見的書目管理軟體之一，為 [Clarivate](https://clarivate.com/) 公司開發的專有軟體。  
除了 EndNote 外仍有其他書目管理解決方案，如 Elsevier 開發的 [Mendeley](https://www.mendeley.com/) 為免費軟體，開源的 [Zotero](https://www.zotero.org/)(GNU AGPL v3)、[JabRef](https://www.jabref.org/)(MIT) 等軟體。個人主要使用 EndNote，亦使用過 JabRef，選擇方面並無特別理由，本文不評論不同書目管理軟體間的差異，僅針對日常 EndNote 常用操作進行紀錄。  
截至文章撰寫期間，EndNote 最新版本為 EndNote 21.2 (Bld 17387)，本紀錄使用本版本進行示範。

---
# 檔案系統
## Libary 檔案系統
在初次使用時，啟動介面如圖 1 所示。使用 EndNote 進行書目管理前需先建立一用於儲存資料用之 Libary，所有的書目資料以及文件都會儲存在 Libary 中。  
可以依照不同用途及需求建立不同的 Libary，在進行資料轉移時也可透過整個 Libary 移動（或複製）的方式轉移到其他位址。  
一完整的 Libary 在檔案系統中包含了一 `LibaryName.enl` 文件及一 `LibaryName.Data` 之資料夾（假設建立一「示範」Libary，則該 Libary 在文件結構中存在 `示範.enl` 文件與`示範.Data` 資料夾，命名可以使用中文）
<center><img style = "max-height: 500px;" src="3-EndNote日常操作_1.avif"/></center>  
<center>圖 1. 初始啟動程式。</center> 

---
## Styles/Filters/Connections 檔案系統
在 EndNote 中，除了 Libary 檔案系統保存了文獻資訊外，存在三種輔助 EndNote 客製化使用的附加資訊（可以把它想像為可自定義的擴充套件）：
- [引用格式（Output Styles）](https://endnote.com/downloads/styles)
- [標記模板（Import Filters）](https://endnote.com/downloads/filters)
- [線上資料庫連結（Connection）](https://endnote.com/downloads/connections)

檔案格式分別為 `.ens`、`.enf`、`.enz`。  
在 Microsoft Windows 作業系統中，這三種附加資訊分別存在特定位址的位址的 `Styles`、`Filters`、`Connections`。  
其中，三種附加資訊之預設安裝資訊會存在 `<安裝位址>\` 中，而自訂的或額外添加的將儲存在系統槽使用者資料中。  
- 預設安裝位址為：`C:\Program Files (x86)\EndNote <版本號>\`。  
- 使用者資料夾位址為：`C:\Users\<UserName>\Documents\Endnote\`。  

---
# 基本操作
## 建立 Libary
在管理書目前，需先有一個用於存放書目資訊的 Libary，使用 `File\New...` 可在指定地點建立 EndNote Libary (*.enl) 檔案系統。
若是已經擁有 Libary 時，則透過 `File\Open Libary...` 來開啟。可以用於多 Libary 情境或是轉移到其他環境使用。

## 設定雲端同步
EndNote 可以透過雲端的方式，使==一個 Libary== 在多電腦上同步。  
1.  使用 `Edit\Preferences...` 進入 EndNote 設定視窗。
2.  進入 `Sync` 目錄點擊 `Enable Sync`。
3.  輸入 EndNote 帳號密碼或是點擊 `Sign Up` 註冊帳號，之後點擊 `ok` 即可。
4.  確認同步的 Libary 位址後即可 `確定` 並關閉。
5.  之後可在該 Libary 看到同步狀態（Sync Status），以及若沒有自動同步時可手動請求同步，如圖 2 所示。
<center><img style = "max-height: 500px;" src="3-EndNote日常操作_2.avif"/></center>  
<center>圖 2. 雲端同步。</center> 

## 新增書目資訊
### 使用引用格式匯入
在多數引用文獻索引型資料庫（如 [Web of Science](https://www.webofscience.com/wos/woscc/basic-search)、[Scopus](https://www.scopus.com/search/form.uri)、[Dimensions](https://www.dimensions.ai/)、[Google Scholar](https://scholar.google.com.tw/)）以及出版商資料庫（如 [ScienceDirect](https://www.sciencedirect.com/)、[IEEE *Xplore*](https://ieeexplore.ieee.org/Xplore/home.jsp)、[Springer Link](https://link.springer.com/)、[Wiley](https://onlinelibrary.wiley.com/)、[MDPI](https://www.mdpi.com/)）查詢文獻時，基本都支持將文獻書目資訊匯出成引用格式。  
EndNote 可以透過讀取引用格式資訊匯入書目資訊。預設包含支援自身的 ISI Common Export Format (\*.cwi) 格式、RIS Formatted File (\*.ris) 等格式。  
若僅有無法讀取的格式時，可以透過增加標記模板（Import Filters）解決，於[官網](https://endnote.com/downloads/filters)或自訂建立以供資訊匯入使用。  
然而，對於一般使用時，建議選擇匯出 \*.cwi 或是 \*.ris 格式，個人作法是當不知道的時候就選擇 RIS 格式，多數資料庫皆支援此種引用格式的匯出。

### 使用 Pdf 格式文件匯入
EndNote 可以讀取 Pdf 判斷書目資訊。個人不太建議直接使用此方法，可能會出現錯誤，可自行評估使用。

### 手動添加
當有些非學術文章的資料需要引用時，例如統計資料庫、網頁資訊等，個人常用的方法是使用手動添加方式完成。  
使用 `References\New Reference` 或快捷鍵 `ctrl + N` 進入手動添加書目資訊的頁面。在此選擇 Reference Type，並填寫相對應的內容即可。  

#### 備註-作者為組織時
當作者是組織或其他必須保持完整的名詞時，如美國能源部 "Department of Energy"。  
如果直接在 Author 欄位填入 "Department of Energy"，EndNote 會認為是一位性 "Energy" 名 "Department of" 的作者（Energy, D. o.）。  
因此，需在 Author 後加入一英文逗號符號以告知 EndNote 此非人名，如 "Department of Energy,"。

### 更新書目資訊
本人習慣在匯入任何一筆書目資訊時進行書目資訊更新，可以使用 `References\Find Reference Updates` 功能（右鍵選單也有），讓 EndNote 自行檢查是否有更完整的資訊。  
這個步驟不僅是在檢查是否有文章資訊更新，同時也是確保資料完整性及正確性。在源頭確保資料的正確性可以節省很多在完稿時的檢查調整工作。  
特別明顯的像是在匯入 ScienceDirect 匯出的 RIS 時，DOI 欄位往往是整個 URL 位址，而該欄位僅需填寫 DOI 編號。這個差異會在某些書目引用格式在註明 DOI 時出現 `https://https://doi.org/...` 或是 `doi: https://doi.org/...` 等不正確或不一致的情況。

---
## Groups & Group Set
在 EndNote 中，書目可使用 Geoups 進行歸納。可以將其比喻作標籤，一筆書目可以沒有 Groups（會被歸類在 Unfiled 區域）或同時擁有一個以上的 Groups。  
而 Groups 可以為二層樹狀結構。母層稱為 Group Set，每個 Group Set 中可以包含有多個 Group。需注意的是 Group Set 不能建立在 Group Set 之下，且書目不可標記為 Group Set。

---
## 引用 Libary 中的書目
### 引用書目資料
若安裝了 EndNote，在 Microsoft Word 中會安裝 EndNote Cite While You Write 增益集，在文章撰寫過程需要引用書目資料時，先選定要引用的書目資料，再透過 EndNote 上大大的 `”` 符號或是 EndNote 增益集中的 Insert Citation 選擇要引用的書目資料，如圖 3。
<center><img style = "max-height: 500px;" src="3-EndNote日常操作_3.avif"/></center>  
<center>圖 3.書目資料於 Microsoft Word 中引用。</center> 

### 書目引用格式
當使用 Microsoft Word 中的 EndNote 增益集引用資料後，EndNote 會在文件中指定位置添加參考書目的功能變數，該功能變數會依書目資訊以及書目引用格式（Output Styles）變化。  
可在 Microsoft Word 的 EndNote 標籤列中 Bibliography 項目進行操作。可於 `Style` 選擇書目引用格式的樣式，並使用 `Update Citation and Bibliography` 刷新。而當文件完稿時，可使用 `Convert Citations and Biblography` 將所有參考點轉換為純文字。

# 進階操作
## 書目引用格式調整
### 修改現有格式
當沒有符合需求的書目引用格式（Output Styles）時，就必須自行定義了。其中，最簡單的方式莫過於在現有格式的基礎下進行微調。以下為基礎操作步驟：
1. 進入書目引用格式管理器：`Tools\Output Styles\Output Style Manager...`。
2. 決定參考的現有格式（或是赴 [EndNote 引用格式下載處](https://endnote.com/downloads/styles)尋找適當的引用格式）。
3. 進入編輯模式：`右鍵\Edit Style...`。
4. 另存新 Style 格式文件：`File\Save As...`，並命名自訂的 Style 名稱。
5. 開始修改，右邊的項目逐項都可以客制化調整，惟本文僅記錄較可能會使用到的部分，不對各項目詳細說明：
   1. Jurnal Names（期刊名稱）：
      - Use full journal name：顯示期刊全名。
      - Abbreviation 1~3：顯示期刊縮寫（三種）。
      - Don't replace：直接顯示參考書目資料的期刊名稱欄位資料。
   2. Citation/Templates（文章內的引用）：格式可自行調整。
   3. Bibliography/Templates（文章後的參考文獻格式）：不同書目資料種類之書目引用格式可自行調整。
   4. Bibliography/Layout（文章後的參考文獻樣式）：
      - Staet each reference with：每筆參考文獻開頭統一添加的內容（如 "Bibliography Number." 自動編號很常使用）。
      - End each reference with：每筆參考文獻結尾統一添加的內容。
   5. Bibliography/Title Capitalization（文章後參考文獻標題樣式）：
      - Leave titles as entered：直接顯示參考書目資料的標題欄位資料。
      - Headline style capitalization：除介係詞外，字首大小。
      - Sentence style capitalization：句首大寫。
6. 儲存修改：`File\Save` 或快捷鍵 `ctrl + S`
### 建立新格式
1. 進入書目引用格式管理器：`Tools\Output Styles\Output Style Manager...`。
2. 建立新書目引用格式：`右鍵\New Styles...`。
3. 編輯新書目引用格式。
4. 儲存修改。

## 中英參考格式混用
由於中文與英文參考文獻之作者、標點符號等引用格式通常不同，使用 EndNote 時同時僅能存在一種書目引用格式。因此，若參考文獻同時存在中英文時將難以統一。主要有以下策略：
- **無視它**：直接以主要參考文獻格式進行引用，最後再手動調整。適用於中英文獻數量差異懸殊時。
- **合併文件**：文章撰寫完成後，分別以中文及英文書目引用格式存檔，並擇一將另一者合併近來。適用於中英文獻數量差異不大時。
- **自訂書目類別與書目引用格式**：指定一書目類別用於歸納特定語言的書目資料，之後修改書目引用格式使該書目類別的書目引用格式符合該語言。適用於中英文獻數量差異不大時。

---
# 個人使用習慣紀錄
## Notes & Rating
本人在使用 EndNote 時，每當新增一筆書目資料，除了都會更新書目資訊以及將其歸納至其相關的 Groups 外，因為大多數時候要回去找特定文獻時，僅看作者、年分、標題不容易馬上聯想到是哪筆書目資料。因此，會另外在 Notes 欄位新增這筆書目的重要記憶點，並且為其重要性使用 Rating 進行標記。  
這二個欄位不一定預設開啟，可自 `Edit\Preferences...\Display Fields` 自行開啟與調整顯示欄位順序，本人設定如圖 3 所示。

<center><img style = "max-height: 500px;" src="3-EndNote日常操作_4.avif"/></center>  
<center>圖 4. Display Fields Setting。</center> 