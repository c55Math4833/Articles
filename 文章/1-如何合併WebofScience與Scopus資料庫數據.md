---
title: 如何合併 Web of Science 與 Scopus 資料庫數據
description: 透過 R 的 bibliometrix 包合併 Web of Science 以及 Scopus 資料庫。
ogimage: 文章/og-images/1-CombinW&S.jpg
draft: False
date: 2024-02-07
tags:
    - 文獻計量分析
    - 開發
    - R
    - bibliometrix
    - Web of Science
    - Scopus
---
# Introduction
在進行[文獻計量分析](20240205_文獻計量分析（Bibliometric）)時，首先會進行主題訂定，接著透過彙整關鍵字等檢索邏輯在引用文獻索引型資料庫（Citation Databases）進行檢索。  
常見的資料庫如下 (Martín-Martín et al., 2021; Singh et al., 2021; Stahlschmidt & Stephen, 2022)：  
- [Web of Science](https://www.webofscience.com/wos/woscc/basic-search)：由 Eugene Garfield 於 1955 引入文獻索引的概念，並與他建立的 Institute of Scientific Information (ISI) 於 1964 建立了第一個引用索引 Science Citation Index (SCI)。持續擴大建立不同引用索引，並於 1997 年首次在線上發布。目前由 [Clarivate](https://clarivate.com/) 公司於 2016 年收購擁有。
- [Scopus](https://www.scopus.com/search/form.uri)：由 Elsevier 於 2004 年所創立，通常認為是全球資料量最大的文獻索引型資料庫。
- [Dimensions](https://www.dimensions.ai/)：由 Digital Science 於 2018 年所創立。
- [Google Scholar (Google 學術搜尋)](https://scholar.google.com.tw/)：由 Google 於 2004 年所創立。
- 其他：如 OpenCitations、PubMed、Lens.org 等，但個人並不常或不曾接觸。  

而雖然皆是文獻索引資料庫，但是他們在收錄範圍以及數據有所差異。主要原因包含 (Liu et al., 2021)：
- 使用出版日期版本政策不同。
- 資訊缺失。
- 資料重複。
- 詮釋資料（Metadata）存在錯誤。  

在文獻計量學實際的應用中，Web of Science 與 Scopus 的應用最為大宗，二者並無明確優劣之分，以往建議分別在二個資料庫進行檢索，並依據檢索結果評估使用何者較匹配自身的研究需求。而現在也逐漸出現合併二者檢索結果的研究，但仍為相對少數，主要由於收錄範圍、匯出格式等面相存在差異，使得若要整合檢索結果則須經一定處理才得以進行後續應用。不過要選擇何種方式則仍以研究目的為主(Echchakoui, 2020; Caputo & Kargina, 2022)。

---
# Merge Data from Web of Science & Scopus 
本人合併 Web of Science 與 Scopus 匯出資料之方法主要參考 Caputo 與 Kargina 於 2022 年討論的方法 (Caputo & Kargina, 2022)，進行細部改進並於合併過程增加一些檢查點，已確保資料之一致性。  
此方法使用到 R 語言之 Bibliometrix 函式庫，須先行安裝（相關操作可參考官方文件）。  
若有更佳之方法以及改善措施惠請來信指導，謝謝。

---
## 步驟 1：分別將檢索結果匯出為 BibTex 格式
自資料庫中檢索文件，並將所選文獻匯出，以供後續 Bibliometrix 進行讀取。  
- Web of Science：選定欲匯出之文獻 --> 匯出（Export） --> BibTex --> 記錄內容：完整記錄和被引參考文獻（Record Content: Full Record and Cited References）--> 匯出（Export）
- Scopus（一定要用英文版本，在網頁下方選擇「Switch to English」）：選定欲匯出之文獻 --> Export --> BibTex --> What information do you want to export?（選擇需要的類別）--> Export  

也可以匯出成其他偏好格式，這個階段主要是要匯出數據以供 Bibliometrix 讀取。截至本文撰寫日期目前支援格式如下（參照[官方說明文件](https://www.bibliometrix.org/vignettes/Data-Importing-and-Converting.html)）：
| Source         | Format                                           | Extension                       |
| -------------- | ------------------------------------------------ | ------------------------------- |
| Web of Science | - BibTeX<br />- plaintext<br />- EndNote Desktop | - .bib<br />- .txt<br />- .ciw  |
| Scopus         | - BibTeX<br />- CSV export                       | - .bib<br />- .txt’             |

---
## 步驟 2：將個別 BibTex 格式結果轉換為 Bibliometrix 格式
使用 R 語言之 Bibliometrix 函式庫轉換匯出數據為 Bibliometrix 可讀之格式。步驟如下述：  
1. 載入 Bibliometrix 函式庫。
    > ```library("bibliometrix")```
2. 轉換 Web of Science 匯出資料。  
    假設 Web of Science 匯出文件名稱為「savedrecs.bib」，則使用以下代碼將其轉換為 Bibliometrix 支援之 xlsx 格式：
    ```r
    file <- "savedrecs.bib"
    M <- convert2df(file, dbsource = "wos", format = "bibtex")
    write.xlsx(M, file = "WoS.xlsx")
    ```
1. 轉換 Scopus 匯出資料。  
    假設 Scopus 匯出文件名稱為「scopus.bib」，則使用以下代碼將其轉換為 Bibliometrix 支援之 xlsx 格式：
    ```r
    file <- "scopus.bib"
    N <- convert2df(file, dbsource = "scopus", format = "bibtex")
    write.xlsx(N, file = "Scopus.xlsx")
    ```
2. 最後，將獲得「WoS.xlsx」、「Scopus.xlsx」二份文件。

---
### 步驟 2.1：透過 Biblioshiny 操作 BibTex 格式轉換
該過程亦可透過 Bibliometrix 的 Biblioshiny 進行轉換（使用 GUI 介面操作）。步驟如下述：
1. 載入 Bibliometrix 函式庫。
    > ```library("bibliometrix")```
2. 啟動 Biblioshiny。
    > ```biblioshiny()```
    <center><img style = "max-height: 500px;" src="1-CombinW&S_1.avif"/></center>
3. 載入 Web of Science 匯出資料。
    > Data --> Load Data -->   
    > Please, choose what to do: "Import raw file(s)" -->   
    > Database: "Web of Science (WoS/WoK)" -->   
    > Choose a file: 選擇檔案或將檔案拖曳 -->   
    > ▶ Start  
    <center><img style = "max-height: 500px;" src="1-CombinW&S_2.avif"/></center>

    於此階段可以檢查載入數據比述及資訊資訊比例
4. 轉換 Web of Science 匯出資料。 
    >  Export collection --> Save as: Excel -->   
    > ▶ Export  
5. 載入與轉換 Scopus 匯出資料。
    與 Web of Science 操作方式同理。其中，Database 改成選取「Scopus」即可。

---
## 步驟 3：在 Excel 中整合數據
假設 Web of Science 匯出資料轉換為「WoS.xlsx」；Scopus 匯出資料轉換為「Scopus.xlsx」。透過以下步驟將二者合併為一個文件：  
1. 選擇一個文件作為基礎（個人習慣上使用 Web of Science 作為基礎）。
2. 將另一文件相同欄位資料移置對應位置（依照需求選擇需要的項目）。  
    可直接對應之項目：
    | Web of Science | Scopus (對應) | Web of Science | Scopus (對應)                    |
    | -------------- | ------------ | -------------- | -------------------------------- |
    | AB             | AB           | JI             | JI                               |
    | affiliations   | Affiliations | LA             | LA                               |
    | AU             | AU           | oa             | OA                               |
    | AU_UN          | AU_UN        | PP             | PP<br />Page.start<br />Page.end |
    | AU_UN_NR       | AU_UN_NR     | PU             | PU                               |
    | AU1_UN         | AU1_UN       | PY             | PY                               |
    | C1             | C1           | RP             | RP                               |
    | CR             | CR           | SN             | ISSN                             |
    | DB             | DB           | SO             | SO                               |
    | DE             | DE           | SR             | SR                               |
    | DI             | DI           | SR_FULL        | SR_FULL                          |
    | DT             | DT           | TC             | TC                               |
    | FU             | FU           | TI             | TI                               |
    | FX             | FX           | UT             | UT                               |
    | ID             | ID           | VL             | VL                               |
    | DB             | DB           |                |                                  |
    | J9             | J9           |                |                                  |           

    不可直接對應之項目：
    | Web of Science             | Scopus                     |
    | -------------------------- | -------------------------- |
    | AR（文章編號，不重要）       | Art..No.                   |
    | earlyaccessdate            | Author.s..ID               |
    | eissn                      | C1raw                      |
    | orcid.numbers              | Chemicals.CAS              |
    | researcherid.numbers       | CODEN                      |
    | usage.count.last.180.days  | Conference.code            |
    | web.of.science.categories. | Conference.date            |
    | web.of.science.index       | Conference.location        |
    | da（匯出日期，不重要）       | Conference.name            |
    | EM（電子信箱，不重要）       | Editors                    |
    | month                      | Funding.Text.2             |
    | NR                         | IS                         |
    | PA                         | ISBN                       |
    | PN                         | Manufacturers              |
    | SC                         | Molecular.Sequence.Numbers |
    | U2                         | Publication.Stage          |
    | GA                         | PubMed.ID                  |
    |                            | Sponsors                   |
    |                            | Tradenames                 |
    |                            | URL                        |

    其中，Web of Science 的匯出項目編碼解釋如[官方說明文件](https://webofscience.help.clarivate.com/en-us/Content/export-records.htm)之「All Export Field Tags」章節。

3. 刪除重複項。
    1. 自 DOI 檢查重複項：
        1. 使用 Excel 的「篩選」工具檢查「DI」欄位是否存在缺失值，將該數據列排除另外處理。
        2. 使用 Excel 的「條件式格式設定」工具，針對「DI」欄位進行重複項之醒目標記。
            > 「醒目提示儲存格規則」--> 「重複的值」
        3. 篩選刪除重複項目。
            > 選取所有資料 --> 「排序與篩選」 --> 「篩選」 --> 於「DI」欄位「依色彩篩選」選定被醒目標記的資料 -->  
            > 檢查「DI」欄位是否有缺失值先行排除另外處理
            > 選取重複資料之 Scopus 數據：於「DB」欄位篩選「SCOPUS」資料庫之文獻 -->
            > 選取所有資料列並「刪除列」 --> 清除篩選。
        4. 將「DI」欄位缺失之數據手動檢查後再將檢查過之數據列彙整放回。
    2. 自 Title 檢查重複項：
        1. 使用 Excel 的「條件式格式設定」工具，針對「TI」欄位進行重複項之醒目標記。
        2. 逐筆檢查是否存在重複項目並刪除重複之資料列。
        3. 以「TI」欄位進行排序，檢視是否有遺漏的重複項。

4. 檢查錯誤期刊縮寫（Journal Abbreviation）
    1. 擷取「SO」、「J9」、「JI」欄位至其他工作表。
    2. 全選擷取範圍，使用 Excel 之「資料」 --> 「移除重複項」工具移除重複內容。
    3. 將剩餘項目依照「SO」欄位排序，並對該欄位使用 Excel 的「條件式格式設定」工具，針對「SO」欄位進行重複項之醒目標記。
    4. 逐一檢查並統一文章之「J9」與「JI」資訊，若不清楚應以和者為主可自 Clarivate 公司的 [Journal Citation Reports](https://jcr.clarivate.com/jcr/home) 工具進行檢索。  
    舉例：檢索「ENERGY FOR SUSTAINABLE DEVELOPMENT」期刊，可從中得知其 JCR ABBREVIATION: "ENERGY SUSTAIN DEV"；ISO ABBREVIATION: "Energy Sustain Dev."。因此，標準資訊如下表：  

    | SO                                  | J9                 | JI                  |
    | ----------------------------------- | ------------------ | ------------------- |
    | ENERGY FOR SUSTAINABLE  DEVELOPMENT | ENERGY SUSTAIN DEV | ENERGY SUSTAIN DEV. |

    5. 以相同方式檢查「J9」與「JI」欄位。

5. 現在已得到一合併 Web of Science 以及 Scopus 資料庫文獻數據之 .xlsx 文件。可使用 Bibliometrix 讀取該文件並進行後續文獻計量分析。


---
# References
1. Clarivate. _The History of ISI and the work of Eugene Garfield_. https://clarivate.com/the-institute-for-scientific-information/history-of-isi/
2. Martín-Martín, A., Thelwall, M., Orduna-Malea, E. et al. Google Scholar, Microsoft Academic, Scopus, Dimensions, Web of Science, and OpenCitations' COCI: a multidisciplinary comparison of coverage via citations. _Scientometrics_ 126, 871–906 (2021). https://doi.org/10.1007/s11192-020-03690-4
3. Singh, V.K., Singh, P., Karmakar, M. et al. The journal coverage of Web of Science, Scopus and Dimensions: A comparative analysis. _Scientometrics_ 126, 5113–5142 (2021). https://doi.org/10.1007/s11192-021-03948-5
4. Stahlschmidt, S., Stephen, D. From indexation policies through citation networks to normalized citation impacts: Web of Science, Scopus, and Dimensions as varying resonance chambers. _Scientometrics_ 127, 2413–2431 (2022). https://doi.org/10.1007/s11192-022-04309-6
5. Liu, W., Huang, M. & Wang, H. Same journal but different numbers of published records indexed in Scopus and Web of Science Core Collection: causes, consequences, and solutions. _Scientometrics_ 126, 4541–4550 (2021). https://doi.org/10.1007/s11192-021-03934-x
6. Caputo, A., Kargina, M. A user-friendly method to merge Scopus and Web of Science data during bibliometric analysis. _J Market Anal_ 10, 82–88 (2022). https://doi.org/10.1057/s41270-021-00142-7
7. Echchakoui, S. Why and how to merge Scopus and Web of Science during bibliometric analysis: the case of sales force literature from 1912 to 2019. _J Market Anal_ 8, 165–184 (2020). https://doi.org/10.1057/s41270-020-00081-9