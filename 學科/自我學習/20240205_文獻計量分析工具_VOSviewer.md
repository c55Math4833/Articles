---
title: 文獻計量分析工具-VOSviewer
description: VOSviewer 之簡介。
draft: False
date: 2024-02-05
tags:
    - 自我學習
    - 文獻計量分析
---
# Introduction
VOSviewer 是我認為很方便的[文獻計量](20240205_文獻計量分析（Bibliometric）)工具之一，因其快速且隨開及用的特性，個人很常使用其進行下述工作：
- 關鍵字檢視與檢索。
- 文獻搜尋領域初步查閱。

# 下載
VOSviewer 軟體可透過[官方網頁](https://www.vosviewer.com/)逕行下載。  
## 有安裝 Java
在 Windows 使用的話（本人沒有在 Linux 或 macOS 中用過，煩請自行嘗試），需先安裝 Java 8 以上的版本，Java 可由其[官方網頁](http://www.java.com/)獲得。  
再透過以下連結下載 VOSviewer 軟體：  
> 官方網頁 → Download → Download VOSviewer {Version} for Microsoft Windows systems  

## 不安裝 Java
然而，並非所有人電腦皆有安裝 Java ，且並非所有人皆願意在電腦為了偶爾使用用途而安裝不常用的軟體。本人為方便於其他電腦執行，使用以下方法打包為可移動之軟體：
1. 下載 jPortable64 下載器：透過 [jPortable64](https://portableapps.com/apps/utilities/java_portable_64)（若電腦非 64 位元則使用 [jPortable](https://portableapps.com/apps/utilities/java_portable)）取得可移動的 Java 執行環境。
2. 下載 VOSviewer：此時會取得一 .zip 文件。
    > 官方網頁 → Download → Download VOSviewer {Version} for other systems  
3. 建立一存放 VOSviewer 之資料夾。
4. 取得 jPortable64 並放到剛才建立的位置裡面：使用下載器可取得一「Java64」資料夾，放到想放的位置（個人建議與 VOSviewer 放在一起）。  
    <center><img style = "max-height: 500px;" src="/20240205_VOSviewer_NonJava_1.avif"/>  <img style = "max-height: 500px;" src="/20240205_VOSviewer_NonJava_2.avif"/>  </center>
5. 將第 2 步取得的 VOSviewer zip 文件中的 "VOSviewer.jar" 解壓縮至第 3 步建立之資料夾。
6. 於資料夾中新增文字文件，並將以下內容貼上：
    ```go
    @echo off
    if "%1"=="hide" (
        shift
        goto CmdBegin
    )
    start mshta vbscript:createobject("wscript.shell").run("""%~0"" hide",0)(window.close)&&exit
    :CmdBegin
    cd %~dp0
    set libclasspath=
    for %%f in (.\lib\*.jar) do (call :append_classpath %%f)
    goto proceed
    :append_classpath
    set libclasspath=%libclasspath%;%1
    goto :eof
    :proceed
    start /b .\Java64\bin\java.exe -Xmx10g -Xss2m -jar VOSviewer.jar %1 %2 %3 %4 %5 %6 %7 %8 %9
    ```
    其中，於最後一行可調整 Java 位址、記憶體大小，可視需求調整。
7. 將該文字文件另存新檔。其中，檔案名稱任意，但副檔名需為「.bat」，而存檔類型需為「所有檔案」。可得結果如下（本示範命名為「Run me.bat」）：
    <center><img style = "max-height: 500px;" src="/20240205_VOSviewer_NonJava_3.avif"/></center>
8. 執行該批次檔即可執行 VOSviewer。
9. ==注意==：本方法使用 jPortable，將不會自動更新 Java 版本，為保障資通訊安全請自行定期更新。

# VOSviewer 軟體基本操作步驟
1. Create → 建立文獻地圖 → 選擇資料輸入方式 → 選擇檔案（可複選）：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_1.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_2.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_3.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_4.avif"/>  
    </center>
2. 分析因子選擇：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_5.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_6.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_7.avif"/>  
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_8.avif"/>  
    </center>
3. 選擇閾值（以 KeyWords Plus 為例，關鍵字出現 5 次以上者將被統計出來）：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_9.avif"/>  
    </center>
4. 選擇匯出數量：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_10.avif"/>  
    </center>
5. 確認輸出項目（此階段可按右鍵匯出數據）：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_11.avif"/>  
    </center>
6. 取得結果：
    <center>
    <img style = "max-height: 500px;" src="/20240205_VOSviewer_12.avif"/>  
    </center>
