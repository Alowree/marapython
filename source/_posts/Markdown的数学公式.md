---
title: Markdown的数学公式
toc_number: true
abbrlink: markdown-math
date: 2022-01-02 10:33:49
updated:
tags: [Markdown, Typora, 数学公式]
categories: Markdown
keywords:
description:
top_img:
comments:
cover:
toc:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index:
---

最近在补习《概率论与数理统计》，需要写数学公式，于是总结一下。

在本文中我们将重点了解：在Typora里面，如何使用Markdown语法录入一些常用的数学公式，包括希腊字母，运算符号，图形符号等。

## 语法

- 行内公式，可以选择使用前后各一个 <code>\$...\$</code>或者前后各两个<code>\$\$...\$$</code>
- 块状公式，需要重起一个段落，输入<code>\$\$</code>然后回车，Typora会自动生成块状公式输入区域





## 希腊字母

$\Alpha$

$\Beta$

$\Epsilon$

大写Alpha、Beta、Epsilon这三个字母在Typora内可以正常渲染，但在Butterfly主题下无法渲染，原因未知。除此之外的其他希腊字母均渲染正常。例如：

1. 小写字母，使用 `\alpha`, `\beta`, …, `\omega`可以渲染为： $\alpha$,$\beta$,...,$\omega$
2. 大写字母，使用 `\Gamma`, `\Delta`, …, `\Omega`可以渲染为：$\Gamma$,$\Delta$,...,$\Omega$
3. 三个无法正常渲染大写字母，在公式语法里面，直接使用大写字母A、B、E代替即可。
4. 个别的字母存在不同的形态： 
   1. `\epsilon \varepsilon`，$\epsilon \varepsilon$；
   2.  `\phi \varphi` ，$\phi \varphi$；



需要知道，所有的各种数学字符，本质都属于已经包含在Unicode内的一个个子集。所以，也可以使用相应的HTML标识或者代码来输入这些数学字符。




| Character | Unicode | HTML Numeric Code | HTML Named Code | Markdown Syntax |
| :-------: | :-----: | :---------------: | :-------------: | :--------------:|
|     Α     | U+0391  |      `&#913;`     |     `&Alpha;`|`\Alpha`   |
|     Β     | U+0392  |      `&#914;`     |     `&Beta;`|`\Beta`    |
|     Γ     | U+0393  |      `&#915;`     |     `&Gamma;`|`\Gamma`   |
|     Δ     | U+0394  |      `&#916;`     |     `&Delta;`|`\Delta`   |
|     Ε     | U+0395  |      `&#917;`     |    `&Epsilon;`|`\Epsilon`  |
|     Ζ     | U+0396  |      `&#918;`     |     `&Zeta;`|`\Zeta`    |
|     Η     | U+0397  |      `&#919;`     |      `&Eta;`|`\Eta`    |
|     Θ     | U+0398  |      `&#920;`     |     `&Theta;`|`\Theta`   |
|     Ι     | U+0399  |      `&#921;`     |     `&Iota;`|`\Iota`    |
|     Κ     | U+039A  |      `&#922;`     |     `&Kappa;`|`\Kappa`   |
|     Λ     | U+039B  |      `&#923;`     |    `&Lambda;`|`\Lambda`   |
|     Μ     | U+039C  |      `&#924;`     |      `&Mu;`|`\Mu`     |
|     Ν     | U+039D  |      `&#925;`     |      `&Nu;`|`\Nu`     |
|     Ξ     | U+039E  |      `&#926;`     |      `&Xi;`|`\Xi`     |
|     Ο     | U+039F  |      `&#927;`     |    `&Omicron;`|`\Omicron`  |
|     Π     | U+03A0  |      `&#928;`     |      `&Pi;`|`\Pi`     |
|     Ρ     | U+03A1  |      `&#929;`     |      `&Rho;`|`\Rho`    |
|     Σ     | U+03A3  |      `&#931;`     |     `&Sigma;`|`\Sigma`   |
|     Τ     | U+03A4  |      `&#932;`     |      `&Tau;`|`\Tau`    |
|     Υ     | U+03A5  |      `&#933;`     |    `&Upsilon;`|`\Upsilon`  |
|     Φ     | U+03A6  |      `&#934;`     |      `&Phi;`|`\Phi`    |
|     Χ     | U+03A7  |      `&#935;`     |      `&Chi;`|`\Chi`    |
|     Ψ     | U+03A8  |      `&#936;`     |      `&Psi;`|`\Psi`    |
|     Ω     | U+03A9  |      `&#937;`     |     `&Omega;`|`\Omega`   |
|     α     | U+03B1  |      `&#945;`     |     `&alpha;`|`\alpha`   |
|     β     | U+03B2  |      `&#946;`     |     `&beta;`|`\beta`    |
|     γ     | U+03B3  |      `&#947;`     |     `&gamma;`|`\gamma`   |
|     δ     | U+03B4  |      `&#948;`     |     `&delta;`|`\delta`   |
|     ε     | U+03B5  |      `&#949;`     |    `&epsilon;`|`\epsilon`  |
|     ζ     | U+03B6  |      `&#950;`     |     `&zeta;`|`\zeta`    |
|     η     | U+03B7  |      `&#951;`     |      `&eta;`|`\eta`  |
|     θ     | U+03B8  |      `&#952;`     |     `&theta;`|`\theta`   |
|     ι     | U+03B9  |      `&#953;`     |     `&iota;`|`\iota`    |
|     κ     | U+03BA  |      `&#954;`     |     `&kappa;`|`\kappa`   |
|     λ     | U+03BB  |      `&#955;`     |    `&lambda;`|`\lambda`   |
|     μ     | U+03BC  |      `&#956;`     |      `&mu;`|`\mu`     |
|     ν     | U+03BD  |      `&#957;`     |      `&nu;`|`\nu`     |
|     ξ     | U+03BE  |      `&#958;`     |      `&xi;`|`\xi`     |
|     ο     | U+03BF  |      `&#959;`     |    `&omicron;`|`\omicron`  |
|     π     | U+03C0  |      `&#960;`     |      `&pi;`|`\pi`     |
|     ρ     | U+03C1  |      `&#961;`     |      `&rho;`|`\rho`    |
|     σ     | U+03C3  |      `&#963;`     |     `&sigma;`|`\sigma`   |
|     τ     | U+03C4  |      `&#964;`     |      `&tau;`|`\tau`    |
|     υ     | U+03C5  |      `&#965;`     |    `&upsilon;`|`\upsilon`  |
|     φ     | U+03C6  |      `&#966;`     |      `&phi;`|`\phi`    |
|     χ     | U+03C7  |      `&#967;`     |      `&chi;`|`\chi`    |
|     ψ     | U+03C8  |      `&#968;`     |      `&psi;`|`\psi`    |
|     ω     | U+03C9  |      `&#969;`     |     `&omega;`|`\omega`   |







## 矩阵

无括号

```markdown
$$
\begin{matrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{matrix}
$$
```

$$
\begin{matrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{matrix}
$$

圆括号

```markdown
 $$
 \begin{pmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{pmatrix}
 $$
```

$$
\begin{pmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{pmatrix}
$$

方括号

```markdown
$$
 \begin{bmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{bmatrix}
$$
```

$$
 \begin{bmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{bmatrix}
$$

大括号

```markdown
$$
 \begin{Bmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{Bmatrix}
$$
```

$$
\begin{Bmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{Bmatrix}
$$

竖线

```markdown
$$
 \begin{vmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{vmatrix}
$$
```

$$
 \begin{vmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{vmatrix}
$$



双竖线

```markdown
$$
 \begin{Vmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{Vmatrix}
$$
```

$$
\begin{Vmatrix}
 0&1&2\\
 3&4&5\\
 6&7&8\\
 \end{Vmatrix}
$$

## 箭头

在Typora里面使用语法生成箭头时，经常会忘记在相应语法两边各添加`$`，导致渲染失败。

```markdown
### 普通箭头

箭头形状 | MarkDown
 :-: | - 
$\uparrow$ | \$\uparrow$
$\Uparrow$ | \$\Uparrow$
$\downarrow$ | \$\downarrow$
$\Downarrow$ | \$\Downarrow$
$\leftarrow$ | \$\leftarrow$
$\Leftarrow$ | \$\Leftarrow$
$\rightarrow$ | \$\rightarrow$
$\Rightarrow$ | \$\Rightarrow$
$\updownarrow$ | \$\updownarrow$
$\Updownarrow$ | \$\Updownarrow$
$\leftrightarrow$ | \$\leftrightarrow$
$\Leftrightarrow$ | \$\Leftrightarrow$

### 长箭头

箭头形状 | MarkDown
 :-: | - 
$\longleftarrow$ | \$\longleftarrow$
$\Longleftarrow$| \$\Longleftarrow$
$\longrightarrow$ | \$\longrightarrow$
$\Longrightarrow$ | \$\Longrightarrow$
$\longleftrightarrow$ | \$\longleftrightarrow$
$\Longleftrightarrow$ | \$\Longleftrightarrow$

### 其他箭头

箭头形状 | MarkDown
 :-: | - 
$\twoheadrightarrow$ | \$\twoheadrightarrow$
$\rightarrowtail$ | \$\rightarrowtail$
$\looparrowright$ | \$\looparrowright$
$\curvearrowright$ | \$\curvearrowright$
$\circlearrowright$ | \$\circlearrowright$
$\Rsh$ | \$\Rsh$
$\multimap$ | \$\multimap$
$\leftrightsquigarrow$ | \$\leftrightsquigarrow$
$\rightsquigarrow$ | \$\rightsquigarrow$
$\leadsto$ | \$\leadsto$
$\nearrow$ | \$\nearrow$
$\searrow$ | \$\searrow$
$\swarrow$ | \$\swarrow$
$\nwarrow$ | \$\nwarrow$
$\nleftarrow$ | \$\nleftarrow$
$\nLeftarrow$ | \$\nLeftarrow$
$\nrightarrow$ | \$\nrightarrow$
$\nRightarrow$ | \$\nRightarrow$
$\nleftrightarrow$ | \$\nleftrightarrow$
$\nLeftrightarrow$ | \$\nLeftrightarrow$
$\dashrightarrow$ | \$\dashrightarrow$
$\dashleftarrow$ | \$\dashleftarrow$
$\leftleftarrows$ | \$\leftleftarrows$
$\leftrightarrows$ | \$\leftrightarrows$
$\Lleftarrow$ | \$\Lleftarrow$
$\twoheadleftarrow$ | \$\twoheadleftarrow$
$\leftarrowtail$ | \$\leftarrowtail$
$\looparrowleft$ | \$\looparrowleft$
$\curvearrowleft$ | \$\curvearrowleft$


箭头形状 | MarkDown
 :-: | - 
$\circlearrowleft$ | \$\circlearrowleft$
$\Lsh$ | \$\Lsh$
$\mapsto$ | \$\mapsto$
$\hookleftarrow$ | \$\hookleftarrow$
$\hookrightarrow$ | \$\hookrightarrow$
$\upharpoonright$ | \$\upharpoonright$
$\upharpoonleft$ | \$\upharpoonleft$
$\downharpoonright$ | \$\downharpoonright$
$\downharpoonleft$ | \$\downharpoonleft$
$\leftharpoonup$ | \$\leftharpoonup$
$\rightharpoonup$ | \$\rightharpoonup$
$\rightharpoondown$ | \$\rightharpoondown$
$\leftharpoondown$ | \$\leftharpoondown$
$\upuparrows$ | \$\upuparrows$
$\downdownarrows$ | \$\downdownarrows$
$\rightrightarrows$ | \$\rightrightarrows$
$\rightleftarrows$ | \$\rightleftarrows$
$\leftleftarrows$ | \$\leftleftarrows$
$\leftrightarrows$ | \$\leftrightarrows$
$\rightleftharpoons$ | \$\rightleftharpoons$
$\leftrightharpoons$ | \$\leftrightharpoons$
```

### 普通箭头

箭头形状 | MarkDown
 :-: | - 
$\uparrow$ | \$\uparrow$
$\Uparrow$ | \$\Uparrow$
$\downarrow$ | \$\downarrow$
$\Downarrow$ | \$\Downarrow$
$\leftarrow$ | \$\leftarrow$
$\Leftarrow$ | \$\Leftarrow$
$\rightarrow$ | \$\rightarrow$
$\Rightarrow$ | \$\Rightarrow$
$\updownarrow$ | \$\updownarrow$
$\Updownarrow$ | \$\Updownarrow$
$\leftrightarrow$ | \$\leftrightarrow$
$\Leftrightarrow$ | \$\Leftrightarrow$

### 长箭头

箭头形状 | MarkDown
 :-: | - 
$\longleftarrow$ | \$\longleftarrow$
$\Longleftarrow$| \$\Longleftarrow$
$\longrightarrow$ | \$\longrightarrow$
$\Longrightarrow$ | \$\Longrightarrow$
$\longleftrightarrow$ | \$\longleftrightarrow$
$\Longleftrightarrow$ | \$\Longleftrightarrow$

### 其他箭头

箭头形状 | MarkDown
 :-: | - 
$\twoheadrightarrow$ | \$\twoheadrightarrow$
$\rightarrowtail$ | \$\rightarrowtail$
$\looparrowright$ | \$\looparrowright$
$\curvearrowright$ | \$\curvearrowright$
$\circlearrowright$ | \$\circlearrowright$
$\Rsh$ | \$\Rsh$
$\multimap$ | \$\multimap$
$\leftrightsquigarrow$ | \$\leftrightsquigarrow$
$\rightsquigarrow$ | \$\rightsquigarrow$
$\leadsto$ | \$\leadsto$
$\nearrow$ | \$\nearrow$
$\searrow$ | \$\searrow$
$\swarrow$ | \$\swarrow$
$\nwarrow$ | \$\nwarrow$
$\nleftarrow$ | \$\nleftarrow$
$\nLeftarrow$ | \$\nLeftarrow$
$\nrightarrow$ | \$\nrightarrow$
$\nRightarrow$ | \$\nRightarrow$
$\nleftrightarrow$ | \$\nleftrightarrow$
$\nLeftrightarrow$ | \$\nLeftrightarrow$
$\dashrightarrow$ | \$\dashrightarrow$
$\dashleftarrow$ | \$\dashleftarrow$
$\leftleftarrows$ | \$\leftleftarrows$
$\leftrightarrows$ | \$\leftrightarrows$
$\Lleftarrow$ | \$\Lleftarrow$
$\twoheadleftarrow$ | \$\twoheadleftarrow$
$\leftarrowtail$ | \$\leftarrowtail$
$\looparrowleft$ | \$\looparrowleft$
$\curvearrowleft$ | \$\curvearrowleft$


箭头形状 | MarkDown
 :-: | - 
$\circlearrowleft$ | \$\circlearrowleft$
$\Lsh$ | \$\Lsh$
$\mapsto$ | \$\mapsto$
$\hookleftarrow$ | \$\hookleftarrow$
$\hookrightarrow$ | \$\hookrightarrow$
$\upharpoonright$ | \$\upharpoonright$
$\upharpoonleft$ | \$\upharpoonleft$
$\downharpoonright$ | \$\downharpoonright$
$\downharpoonleft$ | \$\downharpoonleft$
$\leftharpoonup$ | \$\leftharpoonup$
$\rightharpoonup$ | \$\rightharpoonup$
$\rightharpoondown$ | \$\rightharpoondown$
$\leftharpoondown$ | \$\leftharpoondown$
$\upuparrows$ | \$\upuparrows$
$\downdownarrows$ | \$\downdownarrows$
$\rightrightarrows$ | \$\rightrightarrows$
$\rightleftarrows$ | \$\rightleftarrows$
$\leftleftarrows$ | \$\leftleftarrows$
$\leftrightarrows$ | \$\leftrightarrows$
$\rightleftharpoons$ | \$\rightleftharpoons$
$\leftrightharpoons$ | \$\leftrightharpoons$


## 数学符号

### 算术

```markdown
$\times \div \pm \mp$
$\sum \prod $
$\leq \leqslant \geq \geqslant \approx \sim \neq$
```

$\times \div \pm \mp$
$\sum \prod $
$\leq \leqslant \geq \geqslant \approx \sim \neq$

### 逻辑

```markdown
$\cap \cup$
```



$\cap \cup$

 

### 函数

```markdown
$\sin(x) \cos(t) \tan(y) \cot(x)$
$\exp(x) \log(x)$
$f'(x)$
$\int g(x)dx$
$\iint g(x,y)dxdy$
$\iiint g(x,y,z)dxdydz$
```

$\sin(x) \cos(t) \tan(y) \cot(x)$
$\exp(x) \log(x)$
$f'(x)$
$\int g(x)dx$
$\iint g(x,y)dxdy$
$\iiint g(x,y,z)dxdydz$



### 分式

```markdown
$$
\frac{n!}{k!(n-k)!}
$$
```

$$
\frac{n!}{k!(n-k)!}
$$

### 开方根

```markdown
\sqrt[n]{k}
```

$$
\sqrt[n]{k}
$$



## 参考资料

https://greek-alphabets.com/

https://www.overleaf.com/learn/latex/Mathematical_expressions

https://unicode-table.com/en/sets/mathematical-signs/

https://zhuanlan.zhihu.com/p/158156773

[Markdown常见数学符号收录](https://ydjsir.com.cn/2020/06/24/Math/#%E8%A1%8C%E5%86%85%E4%B8%8E%E7%8B%AC%E8%A1%8C)

https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
