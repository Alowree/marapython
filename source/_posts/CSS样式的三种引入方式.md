---
title: CSS样式的三种引入方式
toc_number: true
abbrlink: getting-started-with-css
date: 2022-04-17 09:29:26
updated:
tags:
categories: CSS
keywords:
description: CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood?
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

## Inline CSS

```CSS
<p style="color: blue;">This is a paragraph that is styled in Blue color by Inline CSS.</p>
```

直接在 HTML 文档中通过标签的 `style` 属性引入样式，适用于临时增加的一些 CSS 样式。

- The inline CSS helps you apply style rules to specific HTML elements.
- The `style` attribute specifies **properties** and **values**.
- The inline CSS is **limited**. For elaborate projects, you should consider other options: internal and external methods.

## Internal CSS

在 HTML 中，一般来说，只有 6 个标签能放在 head 标签内：

- title 标签
- meta 标签
- link 标签
- style 标签
- script 标签
- base 标签

其中，style 标签就是用来进行 internal CSS 引入的。如果是在一般的 HTML 页面上使用，直接在通过 style 标签按照如下方法引入即可。

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>CSS3 mix-blend-mode</title>
    <style type="text/css">
      .slidinglogo {
        height: 8em;
        background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
        position: relative;
      } 
      .slidinglogo::before {
        content: "MaraPython";
        font-size: 4em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        mix-blend-mode: difference;
        animation: move 3s infinite linear alternate;
      }
      @keyframes move {
        0% {
            transform: translate(-30%, -50%);
        }
        100% {
            transform: translate(-70%, -50%);
        }
      }
    </style>
</head>
<body>  
  <div class='slidinglogo'>这里其实有文字，但是被黑色背景覆盖了。</div> 
</body>
</html>
```

如果是在 Hexo 博客里面引用，可以将 CSS 样式代码复制至 custom.css 里面，然后在博客文章里直接使用 HMTL 引用即可。但是这样做有个问题，每一篇文章在被 Hexo 渲染生成 HTML 页面之后，custom.css 生成的 CSS 样式代码，将会插入到每一篇博客文章的 head 标签内部，产生额外开销。

```MARKDOWN
<div class='slidinglogo'>这里其实有文字，但是被黑色背景覆盖了。</div> 
```

显示效果如下：

这里其实有文字，但是被黑色背景覆盖了。

style 标签需要添加 type 属性吗？

> type 属性是必需的，定义 style 元素的内容。唯一可能的值是 “text/css”。

## External CSS

```HTML
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

## 如何选择

Use inline CSS for styling a single element, internal CSS for one page, and external CSS for a whole website.

Typora 本质上是一个 HTML+CSS 的渲染浏览器，所以每一个主题都对应有独立的 external CSS 文件。
