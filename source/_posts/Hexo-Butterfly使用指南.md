---
title: Hexo Butterfly使用指南
abbrlink: 3468678593
date: 2021-09-12 11:42:42
updated:
tags:
categories: Hexo
keywords: [Hexo, Butterfly]
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-asim-alnamat-442189.jpg
toc:
toc_number: true
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

## Configuration

- os: Windows_NT 10.0.19042 win32 x 64
- node: 14.16.1
- hexo: 5.4.0
- butterfly: 3.8.3

This section comes directly from User Guide [Butterfly 安裝文檔(二) 主題頁面](https://butterfly.js.org/posts/dc584b87/)

## Front-matter

Front-matter is the top area of each markdown file, used to designate various variables of certain files. 

-  Page Front-matter is used for `Page` configurations
-  Post Front-matter is used for `Post` configurations

## Tags Page

Remember to add `type: tags` into the Front-matter of Tags Page.

## Categories Page

Remember to add `type: categories` into the Front-matter of Categories Page.

## Link Page

Here are the steps to create a Link Page for your blog. 

### Create a Link Page

1. Go to root directory
2. Input `hexo new page link`
3. `source/link/index.md` will be generated
4. Add `type: link` into the Front-matter of index.md

```markdown
title: 友情链接
date: 2021-08-25 09:25:16
type: "link"
```

### Add Links

Create a `link.yml` file under path `source/_data`

```yml
- class_name: 友情链接
  class_desc: 三人行，必有我师
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简洁且高效的博客框架
    - name: Butterfly
      link: https://https://butterfly.js.org/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 蝴蝶般美丽的主题
    - name: 张洪Heo
      link: https://blog.zhheo.com/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 产品设计师的知识博客

- class_name: 常用网站
  class_desc: 工具类
  link_list:
    - name: 知犀
      link: https://www.zhixi.com/
      avatar: 
      descr: 思维导图
    - name: Figma
      link: https://www.figma.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 在线电商制图利器
    - name: Real Python
      link: https://realpython.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: Python Tutorials 
```

`class_name` and `class_desc` both support `html` tags.  This part of content as in `source/_data/link.yml` will be displayed on the top of your `link` Page, with layout preset by `Butterfly` theme.

### Customize the layout

If you don't like the default layout and want to customize for your own, do it in `source/link/index.md` file. 



