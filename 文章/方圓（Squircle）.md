---
title: 方圓（Squircle）
description: 方圓型（Squircle）的介紹以及於 Adobe illustrator 的實現。
draft: False
date: 2024-02-02
tags:
  - 設計
  - 美工
---
方圓型（Squircle），亦稱為 Lamé Curve 或 Lamé Oval。該形狀介於方形（Square）與圓形（Circle）之間。有別於圓角矩形（Rounded Rectangle），其形狀本身不存在直線。同時保有矩形的秩序結構嚴謹以及與圓形的和諧圓潤特性。  

# Introduction
## 方圓型
方圓型於 1818 年由 Gabriel Lamé 首次討論 (Lamé, G, 1818)  
其可由以下數學方程式表示：  
$$
x^{2n}+y^{2n}=1 \tag{1}\label{1}
$$  

其中，當式 $\eqref{1}$ 之 $n = 1$ 時為圓形，而 $n \rightarrow \infty$ 則為方形。其效果如：  
<center><img src="/Squircle.svg" class="Invertible" style = "max-height: 500px;" /></center>    
<center>圖 1. 第一象限的方圓型（改繪自 (Li & Boyd, 2015)）。</center>   

---  
## 方圓型之矩形擴展
該方程式可進一步擴展為矩形，擴展如下：
$$
\left|\frac{2x}{w}\right|^{2n}+\left|\frac{2y}{h}\right|^{2n}=1  \tag{2}\label{2}
$$  

其中，式 $\eqref{2}$ 之 $w$ 指矩形寬度； $h$ 指矩形高度。  




# References
1. Lamé, Gabriel. (1818). _Examen des différentes méthodes employées pour résoudre les problèmes de géométrie_. Mme. Ve. Courcier, imprimeur-libraire.
2. Li, S., & Boyd, J. P. (2015). Approximation on non-tensor domains including squircles, Part III: Polynomial hyperinterpolation and radial basis function interpolation on Chebyshev-like grids and truncated uniform grids. _Journal of Computational Physics_, 281, 653-668. https://doi.org/10.1016/j.jcp.2014.10.035  
3. Foo, P. _Superellipse: Turning a Circle into a Square_. https://sciencefocus.hkust.edu.hk/superellipse-turning-a-circle-into-a-square

