---
title: 文獻計量學（Bibliometric）
description: 文獻計量學（Bibliometric）之簡介。
draft: False
date: 2024-02-05
tags:
    - 學科
    - 自我學習
    - 文獻計量分析
---

# 文獻計量分析類別
<center>
<img style = "max-height: 500px;" src="/20240205_Bibliometric_1.avif" class="Invertible" />  
圖 1. 文獻計量分析工具箱 (Donthu et al., 2021)。
</center>

- **Performance analysis** 績效分析  
	- 意義：找出國家、大學、研究人員對領域的貢獻、影響力。  
	- 有許多指標如出版量、協作量等等，以每年或每個研究組成作為衡量標準。
- **Science mapping** 科學映射  
	- 意義：利用科學對應圖呈現科學研究領域的結構與動向。  
	- **Citation analysis** 引用分析  
		- 意義：透過確定研究領域中**最具影響力的出版物**分析出版物間的關係。  
		- 分析單位：文件。  
		- Date需求：作者姓名(Author Name)、引用數(Citations)、標題(Title)、 期刊(Journals)、DOI、參考文獻(References)。
	- **Co-citation analysis** 共被引分析
		- 意義：分析被引用出版物間的關係，以了解研究領域**基礎主題**的發展。
		- 分析單位：文件。
		- Date需求：參考文獻(References)
	- **Bibliographic coupling** 書目耦合、書目連結。
		- 意義：分析引用出版物之間的關係，以了解研究主題**周期性**或**目前發展**。
		- 分析單位：文件。
		- Date需求：作者姓名(Author Name)、標題(Title)、期刊(Journals)、DOI、參考文獻(References)。
	- **Co-word analysis** 詞語共現分析
		- 意義：透過分析書面內容探索研究領域中主題間現在或未來的關係。
		- 分析單位：單詞。
		- Date需求：標題(Title)、摘要(Abstract)、作者(Author)、關鍵詞索引(Keywords Index)、關鍵詞(Keywords)、全文(Full Text)。
	- **Co-authorship analysis** 共同撰述分析、共同作者分析
		- 研究作者間社會互動關係及從屬關係，以及對研究領域發展的影響。
		- 分析單位：作者、所屬機構。
		- Date需求：作者(Author)、所屬機構(Affiliation (Institution and Country))。

# 文獻計量分析工具
- Network metrics（文獻計量網路指標）：
	- 度量方式：
		- 中心度（Degree of Ｃentrality）：研究對象在網路中的關聯數量。
		- 中介中心度（Betweenness Ｃentrality）：節點在未連接的節點組間承載信息的能力。
		- 特徵向量中心性（Eigenvector Ｃentrality）：連接數相同的節點，相鄰節點分數更高的節點會比相鄰節點分數更低的節點分數高。
		- 接近中心性（Closeness Ｃentrality）：節點更接近網路中其他節點則分數越高，因此節點越接近中心就越接近所有其他節點。
		- 網頁排名（Page Rank）
- 聚類分析：
	- 目標：創建主題
- 可視化：
	- [VOSviewer](20240205_文獻計量分析工具_VOSviewer)
	- Bibliometrix Pack in R
	- Bibexcel
	- Pajek
	- Gephi

<center>
表 1. 文獻計量分析相關軟體 (Ermel et al., 2021)。
</center>  

| Software                  | Topology/Analysis                                       |                                    |
| ------------------------- | ------------------------------------------------------- | ---------------------------------- |
| Bibexcel                  | - Bibliographic coupling<br />- Co-word                 | - Co-authorship<br />- Co-citation |
| CiteSpace                 | - Bibliographic coupling<br />- Co-word                 | - Co-authorship<br />- Co-citation |
| CoPalRed                  | - Co-word                                               |                                    |
| IN-SPIRE                  | - Co-word                                               |                                    |
| Leydesdorff’s  Software   | - Bibliographic coupling<br />- Co-word<br />- Citation | - Co-authorship<br />- Co-citation |
| Network  Workbench  Tool  | - Bibliographic coupling<br />- Co-word<br />- Citation | - Co-authorship<br />- Co-citation |
| Science  of  Science Tool | - Bibliographic coupling<br />- Co-word<br />- Citation | - Co-authorship<br />- Co-citation |
| VantagePoint              | - Co-authorship<br />- Citation                         | - Co-citation<br />- Co-word       |
| VosViewer                 | - Bibliographic coupling<br />- Co-word                 | - Co-authorship<br />- Co-citation |
| Pajek                     | - Main path analysis                                    | - Citation                         |
| SciMat                    | - Co-authorship<br />- Co-word                          | - Co-citation<br />- Citation      |


# References

1. Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., & Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. _Journal of Business Research_, 133, 285-296. https://doi.org/10.1016/j.jbusres.2021.04.070
2. Ermel, A. P. C., Lacerda, D. P., Morandi, M. I. W. M., & Gauss, L. (2021). *Literature Reviews* (1 ed.). Springer Cham. https://doi.org/10.1007/978-3-030-75722-9
