---
title: git submodule 操作紀錄
draft: False
date: 2024-02-19
tags:
    - git
    - 素養
    - 開發
    - 自我學習
---
# Introduction
原本為方便將網頁與結構設計以及文章合併作為一個 Github 儲存庫（Repository）管理。但是在撰寫文章內容時發現兩個部份的提交（Commit），在回頭管理時要花比較多的時間檢視。  
因此，改為使用 git 的 submodule 功能，將兩個部分分開管理。同時可以將文章部分單獨於一個儲存庫開放取用，供未來有人提供改善建議。  
使用此紀錄操作流程，避免自己忘記。

# 操作流程
1. 先在目標位置（如 Github）建立一個子儲存庫。
2. 複製原本的母儲存庫並切換至該目錄：
	```
	git clone <母儲存庫位址> <母儲存庫放置資料夾>
	cd <母儲存庫放置資料夾>
	```
3. 刪除母儲存庫之 origin remote：
	```
	git remote rm origin
	```
4. 僅留下母儲存庫中，要放在子儲存庫中之資料夾：
	```
	git filter-branch --subdirectory-filter <子儲存庫要的資料夾> -- --all
	```
5. 僅查內容無誤後，重新添加子儲存庫之 origin remote 並推送：
	```
	git remote add origin <子儲存庫位址>
	git push
	```
6. 檢查子儲存庫內容無誤後，刪除母儲存庫中要使用子儲存庫替代的地方（前面的 ```<子儲存庫要的資料夾>```）：
	```
	git rm -r <要使用子儲存庫取代的資料夾>
	```
7. 使用 git submodule 將子儲存庫附加於母儲存庫之相應位置：
	```
	git submodule add <子儲存庫位址（Url）> <要使用子儲存庫取代的資料夾>
	```
8. 檢查能順利執行後進行提交與推送：
    ```
	git commit
	git push
	```

# References

1. Puck Wang. (2020). *Git 進階應用 Submodule 與 Subtree，使用它們來拆分專案*. https://blog.puckwang.com/posts/2020/git-submodule-vs-subtree/