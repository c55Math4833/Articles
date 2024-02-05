---
title: 方圓（Squircle）
description: 方圓型（Squircle）的介紹。
draft: False
date: 2024-02-02
tags:
  - 設計
  - 美工
---

方圓型（Squircle），亦稱為 Lamé Curve 或 Lamé Oval。該形狀介於方形（Square）與圓形（Circle）之間。有別於圓角矩形（Rounded Rectangle），其形狀本身不存在直線。同時保有矩形的秩序結構嚴謹以及與圓形的和諧圓潤特性。

# Introduction

## 方圓型

方圓型於 1818 年由 Gabriel Lamé 首次討論 (Lamé, G, 1818)。  
其可由以下數學方程式表示：

$$
x^{2n}+y^{2n}=1 \tag{1}\label{1}
$$

其中，當式 $\eqref{1}$ 之 $n = 1$ 時為圓形，而 $n \rightarrow \infty$ 則為方形。其效果如圖 1。

<center>
  <img class="Invertible">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.73" style = "max-height: 500px;">
      <defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231815;}.cls-1,.cls-3,.cls-4,.cls-5{stroke-width:0.1px;}.cls-2{stroke-width:0.05px;}.cls-3{stroke:#e60012;}.cls-4{stroke:#f39800;}.cls-5{stroke:#00a0e9;}.cls-10,.cls-11,.cls-6{font-size:1.5px;}.cls-6{fill:#e60012;}.cls-10,.cls-6{font-family:TimesNewRomanPSMT, Times New Roman;}.cls-7{fill:#f39800;}.cls-8{fill:#00a0e9;}.cls-9{fill:#000;}.cls-11{font-family:TimesNewRomanPS-BoldMT, Times New Roman;font-weight:700;}</style></defs>
      <rect class="cls-1" x="3.48" y="0.05" width="47.19" height="47.19"/><line class="cls-2" x1="6.03" y1="46.51" x2="6.03" y2="47.92"/><line class="cls-2" x1="20.06" y1="46.51" x2="20.06" y2="47.92"/><line class="cls-2" x1="34.08" y1="46.51" x2="34.08" y2="47.92"/><line class="cls-2" x1="48.1" y1="46.51" x2="48.1" y2="47.92"/><line class="cls-2" x1="4.17" y1="2.61" x2="2.76" y2="2.61"/><line class="cls-2" x1="4.17" y1="16.63" x2="2.76" y2="16.63"/><line class="cls-2" x1="4.17" y1="30.65" x2="2.76" y2="30.65"/><line class="cls-2" x1="4.17" y1="44.68" x2="2.76" y2="44.68"/><polyline class="cls-3" points="48.1 44.68 48.1 2.61 6.03 2.61"/><path class="cls-1" d="M48.1,44.68A42,42,0,0,0,6,2.61"/><path class="cls-4" d="M6,2.61c37.87,0,42.07,4.2,42.07,42.07"/><path class="cls-5" d="M6,2.61c31.56,0,42.07,10.51,42.07,42.07"/><text class="cls-6" transform="translate(42.71 4.45)"><tspan xml:space="preserve">n =  ∞</tspan><tspan class="cls-7"><tspan x="0" y="1.3">n = 2.0</tspan></tspan><tspan class="cls-8"><tspan x="0" y="2.6">n = 1.4</tspan></tspan><tspan class="cls-9"><tspan x="0" y="3.9">n = 1.0</tspan></tspan></text><text class="cls-10" transform="translate(4.72 49.2)">0.00</text><text class="cls-10" transform="translate(18.74 49.2)">0.25</text><text class="cls-10" transform="translate(32.77 49.2)">0.75</text><text class="cls-10" transform="translate(46.79 49.32)">1.00</text><text class="cls-10" transform="translate(1.51 43.37) rotate(90)">0.00</text><text class="cls-10" transform="translate(1.51 29.34) rotate(90)">0.25</text><text class="cls-10" transform="translate(1.51 15.32) rotate(90)">0.75</text><text class="cls-10" transform="translate(1.38 1.29) rotate(90)">1.00</text><text class="cls-11" transform="translate(26.69 50.24)">x</text><text class="cls-11" transform="translate(0.49 23.27) rotate(90)">y</text>
    </svg>
  </img>
</center>    
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
