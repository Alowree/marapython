---
title: Butterfly主题的Hexo博客如何修改站点logo
abbrlink: 3
date: 2021-08-23 11:25:54
updated:
tags: [Hexo, Butterfly]
categories: Hexo
keywords:
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-jo%C3%A3o-jesus-2480072.jpg
toc:
toc_number:
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

## Background

On the upper left corner, the rendered blog name `FINEQ` is of plain text. For some folks, they may want to use an image rather than a text-based name. In this article we will explore how to achieve the goal and discuss the basics behind the codes. 

## Simple Fix

- Open file `root/themes/butterfly/layout/includes/header/nav.pug` and make following changes:

Before change:

```pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
```

After change:

```pug
nav#nav
  span#blog_name
    // a#site-name(href=url_for('/')) #[=config.title]
    a#site-name(href=url_for('/'))
      img(src='/img/logo_39x39.png')
```

- Put your logo image `logo_39x39.png` under path `root/themes/butterfly/source/img/`
- `hexo cl && hexo g && hexo s`

Merely three steps and you are all set. 

## Dig Further on `#[=config.title]`

## Pug

npm install pug

npm install pug-cli -g

`pug` is a lazy or automatic way of generating HTML codes, using simplified HTML tags.



## Reference

[1] [Pug: Interpolation](https://pugjs.org/language/interpolation.html)



