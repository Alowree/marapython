---
title: Git Good Practices
toc_number: true
description: 代码仓库应该有且只有一个主分支。提供给用户的代码重大版本发布应该永远来自主分支。
abbrlink: git-good-practices
date: 2022-06-14 10:05:38
updated:
tags: [Git, Good Practices]
categories: Git
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

一、主分支 master

代码仓库应该有且只有一个主分支。提供给用户的代码重大版本发布应该永远来自主分支。

二、开发分支 develop

项目的迭代、演进不应该在 master 主分支上直接进行，而是应该在最新 master 分支另辟一个 develop 分支来进行。

创建 develop 开发分支：

```
BASH
git checkout -b develop master
```

开发… 开发… 开发…

开发完毕之后，切换至 master 分支，对 develop 分支进行快进式合并：

```
BASH
git checkout master
git merge --no-ff develop
```

三、临时性分支

版本库两条主要分支：master 和 develop，前者用于正式发布，后者用于日常开发。

临时性分支主要有三种：

- 功能（feature）分支
- 预发布（release）分支
- 修补 bug（fixbug）分支
