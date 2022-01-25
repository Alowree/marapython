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

- 行内公式，可以选择使用前后各一个 <code>\$...\$</code>或者前后各两个<code>\$\$...\$\$</code>
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
|     Α     | U+0391  |      `&#913;`     |     `&Alpha;`|<code>$\Alpha$</code>   |
|     Β     | U+0392  |      `&#914;`     |     `&Beta;`|<code>$\Beta$</code>    |
|     Γ     | U+0393  |      `&#915;`     |     `&Gamma;`|<code>$\Gamma$</code>   |
|     Δ     | U+0394  |      `&#916;`     |     `&Delta;`|<code>$\Delta$</code>   |
|     Ε     | U+0395  |      `&#917;`     |    `&Epsilon;`|<code>$\Epsilon$</code>  |
|     Ζ     | U+0396  |      `&#918;`     |     `&Zeta;`|<code>$\Zeta$</code>    |
|     Η     | U+0397  |      `&#919;`     |      `&Eta;`|<code>$\Eta$</code>    |
|     Θ     | U+0398  |      `&#920;`     |     `&Theta;`|<code>$\Theta$</code>   |
|     Ι     | U+0399  |      `&#921;`     |     `&Iota;`|<code>$\Iota$</code>    |
|     Κ     | U+039A  |      `&#922;`     |     `&Kappa;`|<code>$\Kappa$</code>   |
|     Λ     | U+039B  |      `&#923;`     |    `&Lambda;`|<code>$\Lambda$</code>   |
|     Μ     | U+039C  |      `&#924;`     |      `&Mu;`|<code>$\Mu$</code>     |
|     Ν     | U+039D  |      `&#925;`     |      `&Nu;`|<code>$\Nu$</code>     |
|     Ξ     | U+039E  |      `&#926;`     |      `&Xi;`|<code>$\Xi$</code>     |
|     Ο     | U+039F  |      `&#927;`     |    `&Omicron;`|<code>$\Omicron$</code>  |
|     Π     | U+03A0  |      `&#928;`     |      `&Pi;`|<code>$\Pi$</code>     |
|     Ρ     | U+03A1  |      `&#929;`     |      `&Rho;`|<code>$\Rho$</code>    |
|     Σ     | U+03A3  |      `&#931;`     |     `&Sigma;`|<code>$\Sigma$</code>   |
|     Τ     | U+03A4  |      `&#932;`     |      `&Tau;`|<code>$\Tau$</code>    |
|     Υ     | U+03A5  |      `&#933;`     |    `&Upsilon;`|<code>$\Upsilon$</code>  |
|     Φ     | U+03A6  |      `&#934;`     |      `&Phi;`|<code>$\Phi$</code>    |
|     Χ     | U+03A7  |      `&#935;`     |      `&Chi;`|<code>$\Chi$</code>    |
|     Ψ     | U+03A8  |      `&#936;`     |      `&Psi;`|<code>$\Psi$</code>    |
|     Ω     | U+03A9  |      `&#937;`     |     `&Omega;`|<code>$\Omega$</code>   |
|     α     | U+03B1  |      `&#945;`     |     `&alpha;`|<code>$\alpha$</code>   |
|     β     | U+03B2  |      `&#946;`     |     `&beta;`|<code>$\beta$</code>    |
|     γ     | U+03B3  |      `&#947;`     |     `&gamma;`|<code>$\gamma$</code>   |
|     δ     | U+03B4  |      `&#948;`     |     `&delta;`|<code>$\delta$</code>   |
|     ε     | U+03B5  |      `&#949;`     |    `&epsilon;`|<code>$\epsilon$</code>  |
|     ζ     | U+03B6  |      `&#950;`     |     `&zeta;`|<code>$\zeta$</code>    |
|     η     | U+03B7  |      `&#951;`     |      `&eta;`|<code>$\eta$</code>  |
|     θ     | U+03B8  |      `&#952;`     |     `&theta;`|<code>$\theta$</code>   |
|     ι     | U+03B9  |      `&#953;`     |     `&iota;`|<code>$\iota$</code>    |
|     κ     | U+03BA  |      `&#954;`     |     `&kappa;`|<code>$\kappa$</code>   |
|     λ     | U+03BB  |      `&#955;`     |    `&lambda;`|<code>$\lambda$</code>   |
|     μ     | U+03BC  |      `&#956;`     |      `&mu;`|<code>$\mu$</code>     |
|     ν     | U+03BD  |      `&#957;`     |      `&nu;`|<code>$\nu$</code>     |
|     ξ     | U+03BE  |      `&#958;`     |      `&xi;`|<code>$\xi$</code>     |
|     ο     | U+03BF  |      `&#959;`     |    `&omicron;`|<code>$\omicron$</code>  |
|     π     | U+03C0  |      `&#960;`     |      `&pi;`|<code>$\pi$</code>     |
|     ρ     | U+03C1  |      `&#961;`     |      `&rho;`|<code>$\rho$</code>    |
|     σ     | U+03C3  |      `&#963;`     |     `&sigma;`|<code>$\sigma$</code>   |
|     τ     | U+03C4  |      `&#964;`     |      `&tau;`|<code>$\tau$</code>    |
|     υ     | U+03C5  |      `&#965;`     |    `&upsilon;`|<code>$\upsilon$</code>  |
|     φ     | U+03C6  |      `&#966;`     |      `&phi;`|<code>$\phi$</code>    |
|     χ     | U+03C7  |      `&#967;`     |      `&chi;`|<code>$\chi$</code>    |
|     ψ     | U+03C8  |      `&#968;`     |      `&psi;`|<code>$\psi$</code>    |
|     ω     | U+03C9  |      `&#969;`     |     `&omega;`|<code>$\omega$</code>   |







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

## 括号

### 小括号与方括号

使用原始的`( )` ，`[ ]` 即可，如`$(2+3)[4+4]$` ：$(2+3)[4+4]$

使用`\left(`或`\right)`使符号大小与邻近的公式相适应（该语句适用于所有括号类型），如`$\left(\frac{x}{y}\right)$` ：$\left(\frac{x}{y}\right)$

### 大括号

由于大括号`{}` 被用于分组，因此需要使用`\{`和`\}`表示大括号，也可以使用`\lbrace` 和`\rbrace`来表示。如`$\{a*b\}:a*b$` 或`$\lbrace x*y\rbrace :x*y$` 表示$\{a*b\}:a*b$或$\lbrace x*y\rbrace :x*y$

### 尖括号

区分于小于号和大于号，使用`\langle` 和`\rangle` 表示左尖括号和右尖括号。如`$\langle x \rangle$` 表示：$\langle x \rangle$。



## 箭头

在Typora里面使用语法生成箭头时，经常会忘记在相应语法两边各添加`$`，导致渲染失败。

```markdown
### 普通箭头

箭头形状 | Markdown
 :-: | - 
$\uparrow$ | `$\uparrow$`
$\Uparrow$ | `$\Uparrow$`
$\downarrow$ | `$\downarrow$`
$\Downarrow$ | `$\Downarrow$`
$\leftarrow$ | `$\leftarrow$`
$\Leftarrow$ | `$\Leftarrow$`
$\rightarrow$ | `$\rightarrow$`
$\Rightarrow$ | `$\Rightarrow$`
$\updownarrow$ | `$\updownarrow$`
$\Updownarrow$ | `$\Updownarrow$`
$\leftrightarrow$ | `$\leftrightarrow$`
$\Leftrightarrow$ | `$\Leftrightarrow$`

### 长箭头

箭头形状 | Markdown
 :-: | - 
$\longleftarrow$ | `$\longleftarrow$`
$\Longleftarrow$| `$\Longleftarrow$`
$\longrightarrow$ | `$\longrightarrow$`
$\Longrightarrow$ | `$\Longrightarrow$`
$\longleftrightarrow$ | `$\longleftrightarrow$`
$\Longleftrightarrow$ | `$\Longleftrightarrow$`

### 其他箭头

箭头形状 | Markdown
 :-: | - 
$\twoheadrightarrow$ | `$\twoheadrightarrow$`
$\rightarrowtail$ | `$\rightarrowtail$`
$\looparrowright$ | `$\looparrowright$`
$\curvearrowright$ | `$\curvearrowright$`
$\circlearrowright$ | `$\circlearrowright$`
$\Rsh$ | `$\Rsh$`
$\multimap$ | `$\multimap$`
$\leftrightsquigarrow$ | `$\leftrightsquigarrow$`
$\rightsquigarrow$ | `$\rightsquigarrow$`
$\leadsto$ | `$\leadsto$`
$\nearrow$ | `$\nearrow$`
$\searrow$ | `$\searrow$`
$\swarrow$ | `$\swarrow$`
$\nwarrow$ | `$\nwarrow$`
$\nleftarrow$ | `$\nleftarrow$`
$\nLeftarrow$ | `$\nLeftarrow$`
$\nrightarrow$ | `$\nrightarrow$`
$\nRightarrow$ | `$\nRightarrow$`
$\nleftrightarrow$ | `$\nleftrightarrow$`
$\nLeftrightarrow$ | `$\nLeftrightarrow$`
$\dashrightarrow$ | `$\dashrightarrow$`
$\dashleftarrow$ | `$\dashleftarrow$`
$\leftleftarrows$ | `$\leftleftarrows$`
$\leftrightarrows$ | `$\leftrightarrows$`
$\Lleftarrow$ | `$\Lleftarrow$`
$\twoheadleftarrow$ | `$\twoheadleftarrow$`
$\leftarrowtail$ | `$\leftarrowtail$`
$\looparrowleft$ | `$\looparrowleft$`
$\curvearrowleft$ | `$\curvearrowleft$`


箭头形状 | Markdown
 :-: | - 
$\circlearrowleft$ | `$\circlearrowleft$`
$\Lsh$ | `$\Lsh$`
$\mapsto$ | `$\mapsto$`
$\hookleftarrow$ | `$\hookleftarrow$`
$\hookrightarrow$ | `$\hookrightarrow$`
$\upharpoonright$ | `$\upharpoonright$`
$\upharpoonleft$ | `$\upharpoonleft$`
$\downharpoonright$ | `$\downharpoonright$`
$\downharpoonleft$ | `$\downharpoonleft$`
$\leftharpoonup$ | `$\leftharpoonup$`
$\rightharpoonup$ | `$\rightharpoonup$`
$\rightharpoondown$ | `$\rightharpoondown$`
$\leftharpoondown$ | `$\leftharpoondown$`
$\upuparrows$ | `$\upuparrows$`
$\downdownarrows$ | `$\downdownarrows$`
$\rightrightarrows$ | `$\rightrightarrows$`
$\rightleftarrows$ | `$\rightleftarrows$`
$\leftleftarrows$ | `$\leftleftarrows$`
$\leftrightarrows$ | `$\leftrightarrows$`
$\rightleftharpoons$ | `$\rightleftharpoons$`
$\leftrightharpoons$ | `$\leftrightharpoons$`
```

### 普通箭头

箭头形状 | Markdown
 :-: | - 
$\uparrow$ | <code>$\uparrow$</code> 
$\Uparrow$ | <code>$\Uparrow$</code> 
$\downarrow$ | <code>$\downarrow$</code> 
$\Downarrow$ | <code>$\Downarrow$</code> 
$\leftarrow$ | <code>$\leftarrow$</code> 
$\Leftarrow$ | <code>$\Leftarrow$</code> 
$\rightarrow$ | <code>$\rightarrow$</code> 
$\Rightarrow$ | <code>$\Rightarrow$</code> 
$\updownarrow$ | <code>$\updownarrow$</code> 
$\Updownarrow$ | <code>$\Updownarrow$</code> 
$\leftrightarrow$ | <code>$\leftrightarrow$</code> 
$\Leftrightarrow$ | <code>$\Leftrightarrow$</code> 

### 长箭头

箭头形状 | Markdown
 :-: | - 
$\longleftarrow$ | <code>$\longleftarrow$</code> 
$\Longleftarrow$| <code>$\Longleftarrow$</code> 
$\longrightarrow$ | <code>$\longrightarrow$</code> 
$\Longrightarrow$ | <code>$\Longrightarrow$</code> 
$\longleftrightarrow$ | <code>$\longleftrightarrow$</code> 
$\Longleftrightarrow$ | <code>$\Longleftrightarrow$</code> 

### 其他箭头

箭头形状 | Markdown
 :-: | - 
$\twoheadrightarrow$ | <code>$\twoheadrightarrow$</code> 
$\rightarrowtail$ | <code>$\rightarrowtail$</code> 
$\looparrowright$ | <code>$\looparrowright$</code> 
$\curvearrowright$ | <code>$\curvearrowright$</code> 
$\circlearrowright$ | <code>$\circlearrowright$</code> 
$\Rsh$ | <code>$\Rsh$</code> 
$\multimap$ | <code>$\multimap$</code> 
$\leftrightsquigarrow$ | <code>$\leftrightsquigarrow$</code> 
$\rightsquigarrow$ | <code>$\rightsquigarrow$</code> 
$\leadsto$ | <code>$\leadsto$</code> 
$\nearrow$ | <code>$\nearrow$</code> 
$\searrow$ | <code>$\searrow$</code> 
$\swarrow$ | <code>$\swarrow$</code> 
$\nwarrow$ | <code>$\nwarrow$</code> 
$\nleftarrow$ | <code>$\nleftarrow$</code> 
$\nLeftarrow$ | <code>$\nLeftarrow$</code> 
$\nrightarrow$ | <code>$\nrightarrow$</code> 
$\nRightarrow$ | <code>$\nRightarrow$</code> 
$\nleftrightarrow$ | <code>$\nleftrightarrow$</code> 
$\nLeftrightarrow$ | <code>$\nLeftrightarrow$</code> 
$\dashrightarrow$ | <code>$\dashrightarrow$</code> 
$\dashleftarrow$ | <code>$\dashleftarrow$</code> 
$\leftleftarrows$ | <code>$\leftleftarrows$</code> 
$\leftrightarrows$ | <code>$\leftrightarrows$</code> 
$\Lleftarrow$ | <code>$\Lleftarrow$</code> 
$\twoheadleftarrow$ | <code>$\twoheadleftarrow$</code> 
$\leftarrowtail$ | <code>$\leftarrowtail$</code> 
$\looparrowleft$ | <code>$\looparrowleft$</code> 
$\curvearrowleft$ | <code>$\curvearrowleft$</code> 


箭头形状 | Markdown
 :-: | - 
$\circlearrowleft$ | <code>$\circlearrowleft$</code> 
$\Lsh$ | <code>$\Lsh$</code> 
$\mapsto$ | <code>$\mapsto$</code> 
$\hookleftarrow$ | <code>$\hookleftarrow$</code> 
$\hookrightarrow$ | <code>$\hookrightarrow$</code> 
$\upharpoonright$ | <code>$\upharpoonright$</code> 
$\upharpoonleft$ | <code>$\upharpoonleft$</code> 
$\downharpoonright$ | <code>$\downharpoonright$</code> 
$\downharpoonleft$ | <code>$\downharpoonleft$</code> 
$\leftharpoonup$ | <code>$\leftharpoonup$</code> 
$\rightharpoonup$ | <code>$\rightharpoonup$</code> 
$\rightharpoondown$ | <code>$\rightharpoondown$</code> 
$\leftharpoondown$ | <code>$\leftharpoondown$</code> 
$\upuparrows$ | <code>$\upuparrows$</code> 
$\downdownarrows$ | <code>$\downdownarrows$</code> 
$\rightrightarrows$ | <code>$\rightrightarrows$</code> 
$\rightleftarrows$ | <code>$\rightleftarrows$</code> 
$\leftleftarrows$ | <code>$\leftleftarrows$</code> 
$\leftrightarrows$ | <code>$\leftrightarrows$</code> 
$\rightleftharpoons$ | <code>$\rightleftharpoons$</code> 
$\leftrightharpoons$ | <code>$\leftrightharpoons$</code> 


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
$\cap \cup \bigwedge \bigvee \and \or$
```



$\cap \cup \bigwedge \bigvee \and \or$

 

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
