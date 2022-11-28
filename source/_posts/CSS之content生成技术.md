---
title: CSS之content生成技术
toc_number: true
large: true
description: >-
  In CSS, <code>::before</code> creates a pseudo-element that is the first child
  of the selected element, and <code>::after</code> creates a pseudo-element
  that is the last child of the selected element.
abbrlink: '1766'
date: 2022-10-13 21:45:16
updated:
tags:
categories: CSS
keywords:
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

> 我们希望伪元素保持良好的灵活性，可以自动继承其宿主元素的尺寸，甚至当宿主元素的尺寸是由其内容来决定时仍然如此。一个简单的办法是给宿主元素应用`position: relative`样式，并为伪元素设置`position: absolute`，然后再把所有偏移量设置为零，以便让它在水平和垂直方向上都被拉伸至宿主元素的尺寸。代码看起来是这样的：
>
> ```CSS
> .button{
>     position:relative;
>     /* 其他的文字颜色、内边距等样式…… */
> }
> .button::before{
>     content:'';
>     position:absolute;
>     top:0;
>     right:0;
>     bottom:0;
>     left:0;
> }
> ```
>
>
> 此时，用伪元素生成的方块是重叠在内容之上的，一旦给它设置背景，就会遮住内容。为了修复这个问题，我们可以给伪元素设置`z-index: -1`样式，这样它的堆叠层次就会被推到宿主元素之后。
