---
title: GitHub GPG 操作紀錄
draft: False
disableSPA: True
discussion: True
date: 2024-07-02
tags:
    - git
    - 開發
    - 自我學習
---
# Introduction
為確保代碼確實為作者所認可，可以用簽名的方式進行證明。就像是紙本文件可以透過簽名核章的方式確保此紙本文件是經自己驗證的，可透過字跡等方式讓他人查證，而數位的檔案同理可以透過家密語簽名的方式證明數位資料是經自己驗證的。PGP (Pretty Good Privacy) 是其中一個發展已久且應用廣泛（常用於電子郵件、數位密鑰）的工具。GPG (GNU Privacy Guard) 則是 PGP 的衍生替代自由軟體。

# 操作流程
主要參考自 [GitHub Docs](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
1. 安裝適用於自己作業系統的 [GPG(GnuPG)](https://www.gnupg.org/)。
2. 透過命令提示字元檢查是否有既有的 GPG 密鑰：  
	```powershell
	gpg --list-secret-keys --keyid-format=long
	```
3. 若沒有既有 GPG 密鑰或是有密鑰但想另外建立一個的話，使用以下代碼建立新的密鑰（若有既有密鑰並預計使用它可直接跳至下方第 5 步）：  
	```powershell
	gpg --full-generate-key
	```
	1. 其中，第一步驟為決定密鑰算法。截至目前，GitHub 支援 RSA、ElGamal、DSA、ECDH、ECDSA、EdDSA 算法，若沒特別需求可以直接用預設值 RSA，後面步驟已 RSA 為例。
	2. 第二步將定義密鑰長度。
	3. 第三步將定義此密鑰的使用期限，可調整從幾日、月、年到無期限 (0)。
	4. 第四步確認前三步是否有誤。
	5. 第五步輸入使用者資訊。分別是 Real name (名字，可自訂)、Email address (電子信箱，必須填 GitHub 中有紀錄的信箱或是 GitHub 提供的 [noreply 信箱](https://github.com/settings/emails)。惟須注意應與 Git 所設置的信箱一致，可察看[以下說明](#git-與密鑰信箱不一致))、Comment (備註，可自訂)
	6. 建立完密鑰後，可再次查看是否有既有的 GPG 密鑰：  
        ```powershell
        gpg --list-secret-keys --keyid-format=long
        ```
        會得到類似下輸出：  
        ```powershell
        sec   rsa..../AAAAAAAAAAAAAAAA 2024-01-01 [SC]
            2193FD34C34FC85DAC83F8D71A7F4F6E6684ACR7
        uid                 [ultimate] Real_Name (Comment) <Email_Address>
        ssb   rsa..../BBBBBBBBBBBBBBBB 2024-01-01 [E]
        ```
        此時，主要密鑰編號為 sec 列中的 `AAAAAAAAAAAAAAAA`
4. 產生公鑰：  
	```powershell
	gpg --armor --export AAAAAAAAAAAAAAAA
	```
	此時，將輸出開頭為 `-----BEGIN PGP PUBLIC KEY BLOCK-----`；結尾為 `-----END PGP PUBLIC KEY BLOCK-----` 的公鑰，將其含頭尾整段複製到 GitHub 帳號設定的 [SSH and GPG keys](https://github.com/settings/keys) > [New GPG key](https://github.com/settings/gpg/new) 中，並可自訂這個密鑰的標題方便記憶。
5. 更新 Git 設定，其他詳細可參考 [GitHub Docs](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)：  
	```powershell
	// 設定主密鑰
	git config --global user.signingkey AAAAAAAAAAAAAAAA
	// 設定預設使用 GPG 簽署所有提交
	git config --global commit.gpgsign true
	```

# 踩坑解決紀錄
## Git 與密鑰信箱不一致
當 GPG 密鑰資料填寫信箱時，需確認與 Git 設定的信箱相同。  
否則提交後將顯示 Unverified，並告知 `The email in this signature doesn’t match the committer email.`。
1. 檢查 Git config 中所記錄的信箱：
	```powershell
	 git config user.email
	```
2. 若與 GPG 密鑰信箱不同，可使用以下代碼更換信箱：
	```powershell
	 git config --global user.email "....@email..."
	```

## Windows 系統下 Git 找不到 GPG 路徑
有時候 Git 不知道 GPG 的安裝路徑，告知錯誤 `gpg: skipped : No secret key gpg: signing failed: No secret key`。  
此時，可使用以下代碼定義 GPG 安裝位置（[參考資料](https://stackoverflow.com/questions/36810467/git-commit-signing-failed-secret-key-not-available/51009405#51009405)）：  

```powershell
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
```