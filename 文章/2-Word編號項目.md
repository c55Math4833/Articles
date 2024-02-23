---
title: Microsoft Word 日常操作紀錄-編號項目
description: Microsoft Word 自動編號上個人習慣的使用方法紀錄。
draft: False
date: 2024-02-16
tags:
    - Microsoft Word
    - 編號
    - 文書
    - 美工
---
# Introduction
Microsoft Word 是使用 Microsoft Windows 以及 macOS 作業系統下常使用的文書商業軟體。  
本文用於逐步紀錄本人曾用過在 Office Open XML (docx) 中使用的圖表自動編號方法。其中，個人因其可擴展性較高，推建使用第一種方法，但鑒於可能在本人不清楚的領域可能存在方法相容性之差異，因此仍是附上說明。  
以下內容使用 Microsoft Word LTSC 專業增強版 2021 作為示範。

---
# 範例文件
本文將建立[範例文件](/文章/docs/2-Word編號項目_範例文件.docx)，進行操作步驟及效果的說明。範例如圖 1。其中，相同顏色處指編號項目參照目標。  
<center><img style = "max-height: 500px;" src="2-Word編號項目_1.avif"/></center>  
<center>圖 1. 範例文件。</center> 

---
# 方法一-標號
## 操作步驟
1. 使用標號功能：選定標號放置位置 > 參考資料 > 標號 > 插入標號。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_2.avif"/></center>  
    <center>圖 2. 方法一：步驟1。</center>  
2. 新增標號：新增標籤 > 定義標籤名稱 > 確定。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_3.avif"/></center>  
    <center>圖 3. 方法一：步驟2。</center>  
3. 視需求調整標號格式（可選）：調整標號之編號格式（本例中於「圖 1」後方添加一英文句號） > 調整編號方式 > 確定。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_4.avif"/></center>  
    <center>圖 4. 方法一：步驟3。</center>  
4. 調整標號：現已成功建立一標號，調整標號到想要的位置，如圖 5 所示。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_5.avif"/></center>  
    <center>圖 5. 方法一：步驟4。</center>  
    接著，針對第二張圖的標號添加方法有二：  

    1. 複製已建立的標號至下一張圖 > 標號之編號部分為功能變數，右鍵「更新功能變數(<u>U</u>)」（或使用 F9 更新選取範圍內之功能變數）。
    2. 參考資料 > 插入標號 > 選定剛才新增的標號格式 > 確定。 
5. 其他標號方式依此類推，成果如圖 6 所示（本試例之表標號於標號格式部分調整勾選「包含章節編號(<u>C</u>)」，起始樣式使用「標題 2」，供效果參考）。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_6.avif"/></center>  
    <center>圖 6. 方法一：標號建立成果。</center>  
6. 使用交互參照功能：選定標號交互參照放置位置 > 參考資料 > 標號 > 交互參照。
7. 插入交互參照：選擇參照類型（前面新增的項目） > 調整插入參照類型（通常選用「僅標籤及數字」） > 插入，如圖 7 。成果如圖 8 ，[成果範例文件](/文章/docs/2-Word編號項目_範例文件_標號.docx)。 
    <center><img style = "max-height: 500px;" src="2-Word編號項目_7.avif"/></center>  
    <center>圖 7. 方法一：交互參照使用。</center>  
    <center><img style = "max-height: 500px;" src="2-Word編號項目_8.avif"/></center>  
    <center>圖 8. 方法一：編號項目完成編輯。</center> 

---

# 方法二-多層次清單
## 操作步驟
1. 使用定義樣式功能：選定標號放置位置 > 常用 > 樣式 > 建立樣式(<u>S</u>) > 命名。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_9.avif"/></center>  
    <center>圖 9. 方法二：使用定義樣式功能。</center> 
2. 建立圖與表樣式：設定名稱（本試例建立樣式為「圖」及「表」），並於「修改」處視需求調整格式後於欲使用該樣式處使用樣式。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_10.avif"/></center>  
    <center>圖 10. 方法二：建立圖樣式。</center> 
3. 編輯整份文件之多層次清單 > 選到最下面的清單階層（通常不會用到這些層級） > 設定想要使用的格式，並將階層連結至樣式（本試例圖與表使用不同標號樣式供參考）。
    <center><img style = "max-height: 500px;" src="2-Word編號項目_11.avif"/></center>  
    <center>圖 11. 方法二：編輯多層次清單。</center>  
    <center><img style = "max-height: 500px;" src="2-Word編號項目_12.avif"/></center>  
    <center>圖 12. 方法二：標號建立成果。</center>   
4. 使用交互參照功能：選定標號交互參照放置位置 > 參考資料 > 標號 > 交互參照。
5. 插入交互參照：選擇參照類型「編號項目」 > 調整插入參照類型（通常選用「段落編號」） > 插入，如圖 13 。成果如圖 14 ，[成果範例文件](/文章/docs/2-Word編號項目_範例文件_多層次清單.docx)。 
    <center><img style = "max-height: 500px;" src="2-Word編號項目_13.avif"/></center>  
    <center>圖 13. 方法二：交互參照使用。</center>  
    <center><img style = "max-height: 500px;" src="2-Word編號項目_14.avif"/></center>  
    <center>圖 14. 方法二：編號項目完成編輯。</center> 
