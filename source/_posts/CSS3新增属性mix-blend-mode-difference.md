---
title: 'CSS3新增属性mix-blend-mode: difference'
toc_number: true
categories: CSS
keywords: CSS3
abbrlink: mix-blend-mode
date: 2022-06-19 09:32:45
updated:
tags:
description: The <code>mix-blend-mode</code> property defines how an element’s content should blend with its background.
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

这里在 iCSS 前端趣闻公众号来看来的一篇 CSS 技巧文章，于是赶紧自己来实现一下。

原文示例代码：

```html
<div></div>
```



```CSS
div {
    height: 100vh;
    background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);

    &::before {
        content: "LOREM IPSUM";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        mix-blend-mode: difference;
        animation: move 3s infinite linear alternate;
    }
}
@keyframes move {
    0% {
        transform: translate(-30%, -50%);
    }
    100% {
        transform: translate(-70%, -50%);
    }
}
```
