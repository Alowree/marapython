---
title: Github Rookies
abbrlink: 106702426
date: 2021-08-03 14:52:37
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
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

## To Create a New Repository

1. Repository name
2. Description
3. Public / Private
4. Initialize this repository with a README
5. Add .gitignore
6. Add a license

## To Connect the Repository

https://github.com:Alowree/Hello-World

1. README.md
2. Github Flavored Markdown

## To Publish Code on Github

1. `git clone` repository to local

```bash
$ git clone git@github.com:Alowree/Hello-World.git
Cloning into 'Hello-World'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
```

2. Create a code file locally, write some codes, and save the file.

3. Check with `git status` command

```bash
$ cd Hello-World
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hello-world.php

nothing added to commit but untracked files present (use "git add" to track)
```

4. `git add` and `git commit`

```bash
$ git add hello-world.php
$ git commit -m "Add hello world script by php"
[main b0dadc4] Add hello world script by php
 1 file changed, 5 insertions(+)
 create mode 100644 hello-world.php
```

5. `git log`

```bash
$ git log
commit b0dadc41fb2bc53d5d94ee272d47d70fa58953b1 (HEAD -> main)
Author: Alowree <alowree@hotmail.com>
Date:   Tue Aug 3 15:07:04 2021 +0800

    Add hello world script by php

commit 3dc8f6dfbc023e2749424481c4359e7a97651b74 (origin/main, origin/HEAD)
Author: Alowree Xu <alowree@hotmail.com>
Date:   Tue Aug 3 14:49:38 2021 +0800

    Initial commit
```

6. `git push`

```bash
$ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 327 bytes | 327.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:Alowree/Hello-World.git
   3dc8f6d..b0dadc4  main -> main
```

Now your code files have been published successfully on Github.

{% note red 'fas fa-question' simple %}

What is the difference between `master` and `main` when creating repositories on Github?

{% endnote %}
