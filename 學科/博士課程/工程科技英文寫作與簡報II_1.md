---
title: 工程科技英文寫作與簡報 II
description: 博士課程\工程科技英文寫作與簡報II
draft: False
date: 2024-02-26
tags:
  - 博士課程
  - 英文
  - 寫作
---
本項筆記為就讀博士期間撰寫之課程筆記。  
課程使用之教科書為：  
> Wallace, S. (2014). <i>How to Attend, Speak or Present a Poster at an Academic Conference</i> (Third Edition). Wallace Academic Editing. https://textbooks.tw/products/how-to-attend-speak-or-present-a-poster-at-an-academic-conference-third-edition

> 26/02/2024 14:35
# 研討會流程
```mermaid
flowchart LR
	A["Call for Papers"]
	B{"Preparation of Manuscript"}
	C1["500-word Abstract"]
	C2["Two-page Abstract"]
	C3["Full Paper"]
	D{"Review Process"}
	E1["Accept"]
	E2(("Reject"))
	F["Full Paper"]
	G(("Oral
  Presentation
	Poster"))
	H(("Proceeding"))
		A-->B
		B--Submission-->C1-->D
		B--Submission-->C2-->D
		B--Submission-->C3-->D
		D-->E1-->F
		D-->E2
		F-->G
    H-.->G
		C1-.->H
		C2-.->H
		C3-.->H
		E1-.->H
```

# 研究數據管理
在做研究時，不一定研究數據都值得發表最好的 SCI 期刊的內容，可能的發表執行方式如下：
```mermaid
flowchart LR
	A(["很好的研究成果 A"])
	B(["一般的研究成果 B"])
	A---->C
	B---->C
	A---->D
	B---->E
	E-->F
	A---->G
	B---->G
	G-->H
	subgraph 建議方式 1
	C{{"很好的 SCI 期刊發表"}}
	end
	subgraph 建議方式 2
	D{{"一般的 SCI 期刊發表"}}
	E["研討會文章發表"]
	F{{"轉投 EI 期刊發表"}}
	end
	subgraph 不建議的方式
	G["研討會文章發表"]
	H{{"轉投 EI 期刊發表"}}
	end
```

# 如何確定一個研討會是大型研討會還是小型研討會?
1. **依據議程辦理期程**：通常大於二日的為大型研討會。
2. **依據截稿日與會議日**：截稿日與研討會會議日期之間的間隔若小，顯示文章在 Review 程序花的時間少，通常表示為小型研討會。
3. **依據委員會成員**：委員會成員組成若皆為同一個國家通常不是國際研討會。
4. **依據研討會主要議題**：通常主題單一，其中可能依照專業細節分配不同組別，這類型的參與者多為專家。而主題較為繁雜的研討會參與者較為多元。需針對報告內容相應調整。