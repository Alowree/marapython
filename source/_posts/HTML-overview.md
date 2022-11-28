---
title: HTML Overview
toc_number: true
abbrlink: html-overview
date: 2022-04-19 09:18:14
updated:
tags:
categories: HTML
keywords:
description: HTML (Hypertext Markup Language) is a web markup language that allows you to create web pages. HTML5 is the next major revision of the HTML standard superseding HTML 4.01, XHTML 1.0, and XHTML 1.1.
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

HTML 指的是 HTML4.01，XHTML 是 XML 风格的 HTML4.01，它是 HTML 的过渡版本。而 HTML5 指的是下一代 HTML，也就是 HTML4.01 的升级版。

## HTML4.01

HTML 的基本结构，我们从中可以看出，一个页面是由四个部分组成的：

- 一个文档声明：`<!DOCTYPE html>`
- 一个 html 标签对：`<html></html>`
- 一个 head 标签对：`<head></head>`
- 一个 body 标签对：`<body></body>`

在 HTML 中，一般来说，只有 6 个标签能放在 head 标签内：

- title 标签
- meta 标签
- link 标签
- style 标签
- script 标签
- base 标签

在 HTML 中，一般来说，有下列标签能放在 body 标签内：

- 标题标签：h1、h2、h3、h4、h5、h6。
- 段落标签：p
- 换行标签：br
- 文本标签：
  - 粗体标签：strong、b
  - 斜体标签：i、em、cite
  - 上标标签：sup
  - 下标标签：sub
  - 中划线标签：s
  - 下划线标签：u
  - 大字号标签：big
  - 小字号标签：small
- 水平线标签：hr
- div 标签
- 自闭合标签
  - `<meta/>`
  - `<link/>`
  - `<br/>`
  - `<hr/>`
  - `<img/>`
  - `<input/>`
- 块元素
  - h1~h6
  - p
  - div
  - hr
  - ol
  - ul
- 行内元素
  - strong
  - em
  - a
  - span
- 特殊符号

## HTML5

已废弃标签：

- basefont
- big
- center
- font
- s
- strike
- tt
- u

HTML5 新增的主要结构元素有 6 个：header、nav、article、aside、section、footer。

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title></title>
</head>
<body>
  <header></header>
  <nav></nav>
  <article>
   <header></header>
   content
   <footer></footer>
  </article>
  <aside></aside>
  <section>
   <header></header>
    content
  </section>
  <footer></footer>
</body>
</html>
```

这个图是结构元素最经典的一个使用图，从上面我们可以清晰看出 header 元素一般用于 3 个地方：页面头部、文章头部（article 元素）和区块头部（section 元素）。

### progress

```HTML
<progress max="100" value="60"/>
```

Typora 编辑器内不支持渲染，但导出 PDF 或 HTML 文件时会成功渲染。
