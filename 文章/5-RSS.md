---
title: RSS - 從演算法束縛到自主選讀
description: 儘管 RSS 在現今已經鮮少在周遭生活中被提及，但它仍然是資訊獲取的重要工具。
disableSPA: True
discussion: True
draft: False
date: 2025-08-21
tags:
   - 資訊過載
   - RSS
   - 想法
   - 隱私
cloudjs:
   - "https://cdn.jsdelivr.net/npm/chart.js"
---
# 前言
在現今被網路、大數據、AI 所賦能的時代，資訊獲取的方式也隨之演變。過去以書籍、刊物、報紙等為主的資訊獲取方式，逐漸被人人可發表、人人可獲取的網路資訊所佔據主導地位，媒體能承載的資訊量與多樣性也隨之增加。任何擁有網路的人都能享受龐大的資訊紅利。  

儘管如此，這份便利背後卻暗藏問題。我們的資訊來源逐漸被少數模式所壟斷：  
- **社群媒體平台** 透過演算法推薦系統將資訊推送給用戶，了解用戶的喜好與行為，並根據這些數據來推薦內容以及實現精準行銷。
- **新聞媒體平台** 則是透過調整內容以迎合點擊率、瀏覽量等數據，這導致了許多內容為了吸引眼球而過度渲染或誇大事實。

這些看似讓資訊觸手可及的機制背後，同時也帶來了資訊過載、同溫層效應、隱私爭議，甚至塑造被動接受資訊的習慣等問題。當資訊來源被集中於少數平台時，使用者的自主性與選擇權也受到剝奪，甚至難以察覺自己正被演算法引導與觀點塑造。  
同時，短影音、直播等新興媒體形式的興起，進一步改變了人們獲取資訊的方式。高度壓縮、娛樂化的資訊在爭奪注意力的同時，也犧牲了資訊的深度與品質，使得人們的專注力被不斷切割，難以深入理解。

近二年來，AI 的興起更是加速將這些問題推向了極致。AI 檢索與演算法的發展雖然使其能在最短時間內整理龐大內容，但同時也可能會進一步強化同溫層效應，甚至被惡意利用來操控輿論。當單一路徑的資訊偏差逐漸加劇，我們更難意識到「選擇」的重要。

在這樣的環境下，資訊獲取不再只是單純的閱讀或收集，而是一場與注意力、時間與自主判斷力的拉鋸。資訊的快速與便利固然可喜，但並非所有資訊來源都能保證品質，許多內容仍受商業或政治因素影響，甚至刻意毒害資訊環境，導致使用者難以分辨真偽。如何在過度飽和的資訊流裡維持主動性、避免被動接受，成為一種新的課題。

筆者在四年前開始嘗試使用一種看似「老派」的工具——RSS（Really Simple Syndication，簡易資訊聚合）。在這段時間裡，我發現 RSS 不僅能有效降低資訊過載，還能讓我重新找回對資訊的篩選與掌控權。令我驚訝的是，作為一項於 1999 年發展的技術（比筆者晚一年誕生），我周遭大多數人對 RSS 幾乎毫無概念，彷彿這項工具在社群與演算法的浪潮中被徹底遺忘成為了小眾興趣。也因此，我希望透過本文介紹 RSS，這個傳統卻依然強大、甚至可能在 AI 時代重拾主導權的資訊獲取方式。

# 介紹 RSS (Really Simple Syndication)
RSS 是一種標準化的資訊傳遞格式，RSS 自 1999 年起發展，並在 2000 年左右逐漸普及，曾是無數人追蹤新聞與部落格的主要工具。它允許網站將最新的內容以結構化的方式提供給用戶。用戶可以透過 RSS 閱讀器訂閱不同網站的「RSS Feed（資訊來源）」。RSS 閱讀器會定期檢查這些 Feed 是否有更新，並從中獲取多個網站的最新資訊，而無需逐一遍歷訪問每個網站（或應用程式）。  
其類似於過去訂閱電子郵件電子報，但 RSS 的優勢在於它不需要提供個人資訊（沒錯，連 email 地址都不需要），而且及時性更高，相比週報、月報等形式，RSS 能夠即時獲取最新內容。這使得 RSS 成為一種高效、去中心化的資訊獲取方式。

雖然隨著社群平台的崛起，RSS 的使用率逐漸下滑，甚至被視為「小眾工具」，但它在資訊自主性、隱私保障與純粹閱讀體驗上的價值，至今仍無可替代。更重要的是，在 AI 與演算法加劇資訊單一化的今天，RSS 在這樣的環境下更顯價值。  
以台灣為例，由其搜尋熱度（圖 1）可以觀察到，約在 2004~2008 年間，RSS 的關注度達到高峰。然而隨著社交媒體與即時通訊發展逐漸受到冷落，而在 2013 年 7 月 Google 閱讀器（Google Reader）正式關閉服務迄今，RSS 的關注度都是緊貼著地板。

<center><canvas id="RSS_Google_Trends" style="width:100%;max-width:600px"></canvas></center>
<center>圖 1. RSS 議題搜尋熱度（<a href="https://trends.google.com.tw/trends/explore?date=all&geo=TW&q=RSS&hl=zh-TW">Google Trends</a>，擷取日期：2025-08-20）。</center>

整體來說，RSS 的優缺點歸納如下：
- **優點**：
   1. **資訊自主性**：
      - 用戶可以維持媒體選讀的自主性，根據自身興趣主動訂閱來源，不受社群平台演算法綁架。
      - 內容更符合個人興趣，減少干擾。
      - 減少被動接受內容的風險，保有資訊選讀的主導權。
   2. **去干擾化**：
      - 多數 RSS Feed 通常僅包含內容本身，沒有廣告、評論或其他彈出視窗干擾元素。
      - 提供相對純粹、乾淨的閱讀體驗。
   3. **效率集中**：
      - RSS 閱讀器可集中管理多個來源，不必逐一造訪網站。
      - RSS 不僅限於新聞，還能訂閱部落格文章、Podcast 節目、YouTube 影片、學術論文、論壇更新，甚至軟體更新通知、食譜、或特定網站的客製化資訊。
      - 許多 RSS 閱讀器還支援分類、標籤、搜尋、過濾等功能，讓資訊管理更有效率。像是筆者分為 `科技`、`學術`、`環境`、`新聞`、`興趣` 等類別。
   4. **隱私保障**：
      - RSS 本身不會回傳個人資訊給內容提供者，因此網站無法追蹤用戶行為。對於關注隱私的人而言，這是一個安全的資訊獲取方式。
      - 但需注意：由於 RSS 閱讀器或第三方服務開發簡單導致選擇多樣，某些產品或服務可能會收集使用者行為，需檢視該服務的隱私政策。
   5. **開放性與延伸應用**：
      - RSS 是開放標準，任何人都能建立、訂閱或開發相關應用。因此，無論電腦、手機或平板等媒介，只要有支援的閱讀器即可使用。
      - 多數 RSS 閱讀器都支援 OPML 格式的訂閱列表匯入與匯出，方便用戶在不同設備間同步或更換閱讀器。
      - 方便與其他工具整合（如筆記應用），可延伸出個人化的資訊工作流等功能。
      - 人工智慧的興起也顯示著 RSS 的潛力，AI 可以對資訊進行排序、聚類、摘要甚至提供推薦，大大增強其實用性。
- **缺點**：
   1. **需要主動維護**：
      - 用戶需自行尋找、訂閱並管理 RSS 來源。
      - 若來源網址變更或網站停更，必須自行調整。
      - 內容來源可能會被放棄或轉為付費牆，導致訂閱失效。
      - 部分 RSS 閱讀器需要自行設定或配置，對於不熟悉技術的用戶可能有一定門檻。像是筆者目前日常使用 Miniflux，過去使用 FreshRSS，就需要自行架設伺服器。然而，許多現成的雲端服務（如 Feedly、Inoreader）也提供了簡易的線上使用。
   2. **不利多數中心化平台商業模式**：
      - 主流社群媒體平台為鎖定用戶並利用演算法營利，通常不提供或刻意隱藏 RSS 訂閱服務。
      - 內容創作者難以統計訂閱人數或評估行銷效果，因此許多網站不再像以前一樣發布部落格內容，轉而使用社群媒體平台發布內容，導致 RSS 來源減少。
   3. **資訊更新延遲**：
      - 對於突發性新聞或需要即時優先排序的內容，RSS 可能不如主流新聞網站高效。
      - 雖然 RSS 可以提供最新的內容，但某些網站的更新頻率可能較低，導致用戶無法即時獲取最新資訊。
   4. **資訊過載問題**：
      - 一些網站的 RSS Feed 更新頻繁（例如新聞媒體每小時數十則新聞），可能導致資訊量龐大，難以管理。
      - 訂閱過多來源又沒適當分類或過濾時，未讀數字會像電子信箱或社群媒體通知一樣堆積，造成「閱讀壓力」，到最後可能會選擇放棄。
   5. **缺乏互動性**：
      - RSS 主要是單向傳遞內容，缺少社群平台的即時互動與討論功能。不過 RSS 的傳遞包含了內容的原始連結，用戶仍可透過點擊連結前往原網站進行互動。
      - RSS 通常僅傳送文字與基本媒體，較難完整呈現網站的互動性或多媒體設計。

# 我的 RSS 訂閱列表
筆者的 RSS 訂閱列表包含了各種來源，從新聞、科技、學術、個人興趣、以及開放軟體更新等。由於新聞媒體的 RSS Feed 量大且雜亂，筆者通常會選擇性地訂閱特定的新聞來源，而非全部。以下是筆者列舉一些個人常用的 RSS 訂閱來源，供讀者參考：
- **新聞**：
  - 政府機關資訊如[環境部新聞專區](https://enews.moenv.gov.tw/)等。
  - [商業週刊](https://www.businessweekly.com.tw/)：提供有關商業、經濟、科技等領域的最新報導。
  - [The Hacker News](https://thehackernews.com/)：提供有關網路安全、駭客攻擊等相關新聞。
  - [台灣電腦網路危機處理暨協調中心](https://www.twcert.org.tw/)：提供有關網路安全的最新資訊與警示。
  - [網管人](https://www.netadmin.com.tw/)：提供網路管理、資訊安全等相關議題的文章與討論。
  - [經理人月刊](https://www.managertoday.com.tw/)：提供有關商業管理、領導力、創新等相關議題的文章與討論。
- **科技**：
  - [iThome 新聞](https://www.ithome.com.tw/)：台灣的 IT 新聞網站，提供有關資訊科技、軟體開發、網路安全等相關新聞。
  - [MIT Technology Review](https://www.technologyreview.com/)：提供有關科技、創新的最新報導。每週會有一篇 The Download 精選文章。
  - [Towards Data Science - Medium](https://towardsdatascience.com)：Medium 上的資料科學相關文章，涵蓋 AI、機器學習、數據分析等領域。有些文章有 Medium 的付費牆。
- **學術**：
  - [nature 期刊](https://www.nature.com)：自然科學領域的期刊，提供最新的科學研究成果與評論。不過也有許多更正（Correction）或撤回（Retraction）訊息，可以考慮把這些訊息過濾掉。其中，也有如 Nature Materials 等子期刊，提供更專業的研究成果。有些文章有付費牆。
- **個人興趣**：
  - [MakerPRO](https://makerpro.cc/)：提供有關創客、DIY、電子製作等相關議題的文章與討論。
  - [Ivon 的部落格](https://ivonblog.com/)：時常分享開源軟體與自架設經驗，對於喜歡自架服務的使用者非常有幫助。
  - [電子製造，工作狂人 的部落格](https://www.researchmfg.com/)：分享電子製造相關專業技術知識。


<!--// remark-usage-ignore-next 13-->
<script>
  document.addEventListener('DOMContentLoaded',async function () {
   const data = [
     { year: 2004, month: 01, trends: 11 }, { year: 2004, month: 02, trends: 16 }, { year: 2004, month: 03, trends: 16 }, { year: 2004, month: 04, trends: 00 }, { year: 2004, month: 05, trends: 13 }, { year: 2004, month: 06, trends: 15 }, { year: 2004, month: 07, trends: 14 }, { year: 2004, month: 08, trends: 21 }, { year: 2004, month: 09, trends: 32 }, { year: 2004, month: 10, trends: 39 }, { year: 2004, month: 11, trends: 42 }, { year: 2004, month: 12, trends: 51 }, { year: 2005, month: 01, trends: 57 }, { year: 2005, month: 02, trends: 41 }, { year: 2005, month: 03, trends: 76 }, { year: 2005, month: 04, trends: 76 }, { year: 2005, month: 05, trends: 62 }, { year: 2005, month: 06, trends: 61 }, { year: 2005, month: 07, trends: 65 }, { year: 2005, month: 08, trends: 77 }, { year: 2005, month: 09, trends: 81 }, { year: 2005, month: 10, trends: 64 }, { year: 2005, month: 11, trends: 67 }, { year: 2005, month: 12, trends: 79 }, { year: 2006, month: 01, trends: 52 }, { year: 2006, month: 02, trends: 55 }, { year: 2006, month: 03, trends: 62 }, { year: 2006, month: 04, trends: 77 }, { year: 2006, month: 05, trends: 81 }, { year: 2006, month: 06, trends: 72 }, { year: 2006, month: 07, trends: 81 }, { year: 2006, month: 08, trends: 83 }, { year: 2006, month: 09, trends: 79 }, { year: 2006, month: 10, trends: 80 }, { year: 2006, month: 11, trends: 69 }, { year: 2006, month: 12, trends: 78 }, { year: 2007, month: 01, trends: 73 }, { year: 2007, month: 02, trends: 67 }, { year: 2007, month: 03, trends: 77 }, { year: 2007, month: 04, trends: 77 }, { year: 2007, month: 05, trends: 84 }, { year: 2007, month: 06, trends: 65 }, { year: 2007, month: 07, trends: 77 }, { year: 2007, month: 08, trends: 77 }, { year: 2007, month: 09, trends: 68 }, { year: 2007, month: 10, trends: 66 }, { year: 2007, month: 11, trends: 65 }, { year: 2007, month: 12, trends: 62 }, { year: 2008, month: 01, trends: 56 }, { year: 2008, month: 02, trends: 64 }, { year: 2008, month: 03, trends: 100 }, { year: 2008, month: 04, trends: 66 }, { year: 2008, month: 05, trends: 58 }, { year: 2008, month: 06, trends: 60 }, { year: 2008, month: 07, trends: 55 }, { year: 2008, month: 08, trends: 44 }, { year: 2008, month: 09, trends: 61 }, { year: 2008, month: 10, trends: 51 }, { year: 2008, month: 11, trends: 61 }, { year: 2008, month: 12, trends: 54 }, { year: 2009, month: 01, trends: 47 }, { year: 2009, month: 02, trends: 57 }, { year: 2009, month: 03, trends: 60 }, { year: 2009, month: 04, trends: 53 }, { year: 2009, month: 05, trends: 45 }, { year: 2009, month: 06, trends: 45 }, { year: 2009, month: 07, trends: 48 }, { year: 2009, month: 08, trends: 41 }, { year: 2009, month: 09, trends: 45 }, { year: 2009, month: 10, trends: 44 }, { year: 2009, month: 11, trends: 38 }, { year: 2009, month: 12, trends: 40 }, { year: 2010, month: 01, trends: 40 }, { year: 2010, month: 02, trends: 40 }, { year: 2010, month: 03, trends: 37 }, { year: 2010, month: 04, trends: 39 }, { year: 2010, month: 05, trends: 33 }, { year: 2010, month: 06, trends: 31 }, { year: 2010, month: 07, trends: 31 }, { year: 2010, month: 08, trends: 34 }, { year: 2010, month: 09, trends: 37 }, { year: 2010, month: 10, trends: 31 }, { year: 2010, month: 11, trends: 37 }, { year: 2010, month: 12, trends: 39 }, { year: 2011, month: 01, trends: 37 }, { year: 2011, month: 02, trends: 28 }, { year: 2011, month: 03, trends: 33 }, { year: 2011, month: 04, trends: 29 }, { year: 2011, month: 05, trends: 30 }, { year: 2011, month: 06, trends: 28 }, { year: 2011, month: 07, trends: 24 }, { year: 2011, month: 08, trends: 24 }, { year: 2011, month: 09, trends: 24 }, { year: 2011, month: 10, trends: 23 }, { year: 2011, month: 11, trends: 24 }, { year: 2011, month: 12, trends: 23 }, { year: 2012, month: 01, trends: 20 }, { year: 2012, month: 02, trends: 20 }, { year: 2012, month: 03, trends: 22 }, { year: 2012, month: 04, trends: 18 }, { year: 2012, month: 05, trends: 16 }, { year: 2012, month: 06, trends: 17 }, { year: 2012, month: 07, trends: 16 }, { year: 2012, month: 08, trends: 16 }, { year: 2012, month: 09, trends: 14 }, { year: 2012, month: 10, trends: 14 }, { year: 2012, month: 11, trends: 13 }, { year: 2012, month: 12, trends: 12 }, { year: 2013, month: 01, trends: 18 }, { year: 2013, month: 02, trends: 11 }, { year: 2013, month: 03, trends: 19 }, { year: 2013, month: 04, trends: 16 }, { year: 2013, month: 05, trends: 14 }, { year: 2013, month: 06, trends: 14 }, { year: 2013, month: 07, trends: 14 }, { year: 2013, month: 08, trends: 11 }, { year: 2013, month: 09, trends: 10 }, { year: 2013, month: 10, trends: 12 }, { year: 2013, month: 11, trends: 10 }, { year: 2013, month: 12, trends: 09 }, { year: 2014, month: 01, trends: 10 }, { year: 2014, month: 02, trends: 10 }, { year: 2014, month: 03, trends: 10 }, { year: 2014, month: 04, trends: 09 }, { year: 2014, month: 05, trends: 08 }, { year: 2014, month: 06, trends: 06 }, { year: 2014, month: 07, trends: 06 }, { year: 2014, month: 08, trends: 07 }, { year: 2014, month: 09, trends: 06 }, { year: 2014, month: 10, trends: 07 }, { year: 2014, month: 11, trends: 06 }, { year: 2014, month: 12, trends: 06 }, { year: 2015, month: 01, trends: 06 }, { year: 2015, month: 02, trends: 05 }, { year: 2015, month: 03, trends: 06 }, { year: 2015, month: 04, trends: 05 }, { year: 2015, month: 05, trends: 05 }, { year: 2015, month: 06, trends: 05 }, { year: 2015, month: 07, trends: 04 }, { year: 2015, month: 08, trends: 04 }, { year: 2015, month: 09, trends: 05 }, { year: 2015, month: 10, trends: 05 }, { year: 2015, month: 11, trends: 04 }, { year: 2015, month: 12, trends: 05 }, { year: 2016, month: 01, trends: 04 }, { year: 2016, month: 02, trends: 04 }, { year: 2016, month: 03, trends: 05 }, { year: 2016, month: 04, trends: 04 }, { year: 2016, month: 05, trends: 04 }, { year: 2016, month: 06, trends: 04 }, { year: 2016, month: 07, trends: 03 }, { year: 2016, month: 08, trends: 03 }, { year: 2016, month: 09, trends: 04 }, { year: 2016, month: 10, trends: 03 }, { year: 2016, month: 11, trends: 05 }, { year: 2016, month: 12, trends: 04 }, { year: 2017, month: 01, trends: 03 }, { year: 2017, month: 02, trends: 04 }, { year: 2017, month: 03, trends: 04 }, { year: 2017, month: 04, trends: 04 }, { year: 2017, month: 05, trends: 03 }, { year: 2017, month: 06, trends: 03 }, { year: 2017, month: 07, trends: 03 }, { year: 2017, month: 08, trends: 03 }, { year: 2017, month: 09, trends: 03 }, { year: 2017, month: 10, trends: 03 }, { year: 2017, month: 11, trends: 03 }, { year: 2017, month: 12, trends: 03 }, { year: 2018, month: 01, trends: 03 }, { year: 2018, month: 02, trends: 03 }, { year: 2018, month: 03, trends: 03 }, { year: 2018, month: 04, trends: 03 }, { year: 2018, month: 05, trends: 04 }, { year: 2018, month: 06, trends: 03 }, { year: 2018, month: 07, trends: 03 }, { year: 2018, month: 08, trends: 03 }, { year: 2018, month: 09, trends: 03 }, { year: 2018, month: 10, trends: 03 }, { year: 2018, month: 11, trends: 03 }, { year: 2018, month: 12, trends: 03 }, { year: 2019, month: 01, trends: 03 }, { year: 2019, month: 02, trends: 03 }, { year: 2019, month: 03, trends: 03 }, { year: 2019, month: 04, trends: 03 }, { year: 2019, month: 05, trends: 03 }, { year: 2019, month: 06, trends: 03 }, { year: 2019, month: 07, trends: 02 }, { year: 2019, month: 08, trends: 02 }, { year: 2019, month: 09, trends: 02 }, { year: 2019, month: 10, trends: 03 }, { year: 2019, month: 11, trends: 02 }, { year: 2019, month: 12, trends: 03 }, { year: 2020, month: 01, trends: 02 }, { year: 2020, month: 02, trends: 03 }, { year: 2020, month: 03, trends: 03 }, { year: 2020, month: 04, trends: 03 }, { year: 2020, month: 05, trends: 03 }, { year: 2020, month: 06, trends: 02 }, { year: 2020, month: 07, trends: 03 }, { year: 2020, month: 08, trends: 03 }, { year: 2020, month: 09, trends: 03 }, { year: 2020, month: 10, trends: 03 }, { year: 2020, month: 11, trends: 03 }, { year: 2020, month: 12, trends: 02 }, { year: 2021, month: 01, trends: 02 }, { year: 2021, month: 02, trends: 02 }, { year: 2021, month: 03, trends: 02 }, { year: 2021, month: 04, trends: 02 }, { year: 2021, month: 05, trends: 02 }, { year: 2021, month: 06, trends: 02 }, { year: 2021, month: 07, trends: 02 }, { year: 2021, month: 08, trends: 02 }, { year: 2021, month: 09, trends: 02 }, { year: 2021, month: 10, trends: 02 }, { year: 2021, month: 11, trends: 02 }, { year: 2021, month: 12, trends: 02 }, { year: 2022, month: 01, trends: 03 }, { year: 2022, month: 02, trends: 02 }, { year: 2022, month: 03, trends: 03 }, { year: 2022, month: 04, trends: 03 }, { year: 2022, month: 05, trends: 02 }, { year: 2022, month: 06, trends: 02 }, { year: 2022, month: 07, trends: 02 }, { year: 2022, month: 08, trends: 02 }, { year: 2022, month: 09, trends: 02 }, { year: 2022, month: 10, trends: 02 }, { year: 2022, month: 11, trends: 02 }, { year: 2022, month: 12, trends: 02 }, { year: 2023, month: 01, trends: 02 }, { year: 2023, month: 02, trends: 02 }, { year: 2023, month: 03, trends: 02 }, { year: 2023, month: 04, trends: 02 }, { year: 2023, month: 05, trends: 02 }, { year: 2023, month: 06, trends: 02 }, { year: 2023, month: 07, trends: 02 }, { year: 2023, month: 08, trends: 02 }, { year: 2023, month: 09, trends: 02 }, { year: 2023, month: 10, trends: 02 }, { year: 2023, month: 11, trends: 02 }, { year: 2023, month: 12, trends: 02 }, { year: 2024, month: 01, trends: 03 }, { year: 2024, month: 02, trends: 03 }, { year: 2024, month: 03, trends: 02 }, { year: 2024, month: 04, trends: 02 }, { year: 2024, month: 05, trends: 02 }, { year: 2024, month: 06, trends: 02 }, { year: 2024, month: 07, trends: 02 }, { year: 2024, month: 08, trends: 02 }, { year: 2024, month: 09, trends: 02 }, { year: 2024, month: 10, trends: 02 }, { year: 2024, month: 11, trends: 03 }, { year: 2024, month: 12, trends: 03 }, { year: 2025, month: 01, trends: 02 }, { year: 2025, month: 02, trends: 03 }, { year: 2025, month: 03, trends: 03 }, { year: 2025, month: 04, trends: 03 }, { year: 2025, month: 05, trends: 03 }, { year: 2025, month: 06, trends: 03 }, { year: 2025, month: 07, trends: 03 }, { year: 2025, month: 08, trends: 03 }
   ];
   new Chart('RSS_Google_Trends', {
     type: 'line',
     data: {
      labels: data.map(row => `${row.year}-${String(row.month).padStart(2, '0')}`),
      datasets: [{
         label: 'Google Trends',
         data: data.map(row => row.trends)}]},});});
</script>