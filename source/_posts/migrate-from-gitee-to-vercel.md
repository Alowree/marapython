---
title: MaraPython正式迁移托管至Vercel
toc_number: true
abbrlink: 19966222
date: 2021-10-18 16:12:14
updated:
tags: [Hexo, Github, Vercel]
categories: Hexo
keywords:
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-dhaval-maru-7079400.jpg
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

今天真是个好日子，值得纪念一下，终于弃坑WordPress + Tempera + 腾讯云，全身心拥抱Hexo + Butterfly + Github + Vercel，立贴为证。

## Github Pages

Github Pages支持将`git@github.com:用户名/用户名.github.io`仓库内的静态网站解析到个人域名，不支持将其他仓库例如`git@github.com:用户名/marapython.git`内的静态网站解析到个人域名。由于Github Pages站点+域名已经移作他用，MaraPython.com这个站点只能重新想办法。

## Gitee Pages

Gitee Pages也支持将`git@gitee.com:用户名/用户名.gitee.io`仓库内的静态网站解析到个人域名，但是每次`hexo d`布署之后需要去Gitee站点手动更新，非常反人性。

## Github + Vercel

再后来，就发现可以将Github上的任意仓库导入、布署至Vercel这个神仙网站。Vercel不但支持第三方域名解析，貌似还有加速功能，最重要的是免费。

## 参考资料

[静态托管平台收集](https://zhuanlan.zhihu.com/p/180152636)

[vercel是什么神仙网站？](https://i-tech.tech/iloveu/44d57db9.html)

