---
title: Git Rookies
abbrlink: 3239246065
date: 2021-08-03 16:00:30
updated:
tags: [Git]
categories: [Git]
keywords: [Git, Github]
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-vlad-kovriga-339119.jpg
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

这篇日志节选改编自大塚弘记的《Github入门与实践》，主要介绍Git的基本知识和操作方法。

Git是一个版本管理工具，特别适合对文本文件或者文本文件集合就时间线进行管理。程序员的代码一般都以文本格式存储和传输，所以代码文件特别适合使用Git进行版本管理。本文前半部分的的操作，都属于本地环境。后半部分内容，将涉及推送至远程仓库，或者从远程仓库拉取。

## 基本操作

### `git init`--初始化仓库

要使用Git进行版本管理，必须先初始化仓库。

```bash
Administrator@MICRO-101121100 MINGW64 /d
$ mkdir Xsite

Administrator@MICRO-101121100 MINGW64 /d
$ cd Xsite

Administrator@MICRO-101121100 MINGW64 /d/Xsite
$ git init
Initialized empty Git repository in D:/Xsite/.git/
```

如果初始化成功，执行了`git init`命令的目录下就会生成`.git`目录。这个`.git`目录里存储着管理当前目录内容所需的仓库数据。在Git中，我们将这个`D:/Xsite`目录的内容称为“附属于该仓库的工作树”。

**工作树**的概念，对于半路的coder们可能一时难以理解，相关概念的梳理和澄清我们先稍微往后放一放。到这里，我们只需要知道两点：

- 在Windows中，一般称working directory，工作目录，例如上面示例代码中的工作目录`D:/Xsite`
- 在Bash中，它的正式名称则是working tree，工作树。

### `git status`--查看仓库的状态

工作树和仓库在被操作的过程中，状态会不断发生变化。下面，我们来实际查看一下当前状态。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

结果显示，我们当前正处于master分支，接着还显示了没有可以提交的内容。所谓提交（commit），是指“记录工作树中所有文件的当前状态”。`git commit`的官方文档在[这里](https://git-scm.com/docs/git-commit)

尚没有可提交的内容，就是说我们建立的这个仓库中还没有启示任何文件的任何状态。下面，我们新建一个文件，为第一次提交做准备。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

可以看到在Untracked files中显示了README.md文件。

### `git add`--向暂存区中添加文件

如果只是用Git仓库的工作树创建了文件，那么该文件并不会被记入Git仓库的版本管理对象当中。因此我们用`git status`命令查看README.md文件时，它会显示在Untracked files里。
要想让文件成为Git仓库的管理对象，就需要用`git add`命令将其加入暂存区（Stage或者Index）中。暂存区是提交之前的一个临时区域。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

将README.md文件加入暂存区后，`git status`命令的显示结果发生了变化。可以看到，README.md文件显示在Changes to be committed中了。

**暂存区**

### `git commit`--保存仓库的历史记录

`git commit`命令可以将当前暂存区中的文件实际保存到仓库的历史记录中。通过这些记录，我们就可以在工作树中复原文件。
我们来实际运行一下`git commit`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit -m "First commit"
[master (root-commit) 674e3a8] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```

执行完`git commit`命令后再来查看当前状态。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master
nothing to commit, working tree clean
```

当前工作树处于刚刚完成提交的最新状态，所以结果显示没有更改。也就是说，`D:/Xsite`目录下的文件没有被修改。

### `git log`--查看提交日志

`git log`命令可以查看以往仓库中提交的日志。包括可以查看什么人在什么时候进行了提交或合并，以及操作前后有怎样的差别。关于合并我们会在后面解说。

如上所述，`git log`命令可以利用多种参数帮助开发者把握以往提交的内容。不必勉强自己一次记下全部参数，每当有想查看的日志就积极去查，慢慢就能得心应手了。`git log`官方文档在[这里](https://git-scm.com/docs/git-log)

### `git diff`--查看更改前后的差别

`git diff`命令可以查看工作树、暂存区、最新提交之间的差别。单从字面上可能很难理解，各位不妨跟着笔者的解说亲手试一试。
我们在刚刚提交的README.md中写点东西。

```markdown
# Git教程
```

这里用Markdown语法写下了一行题目。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git diff
diff --git a/README.md b/README.md
index e69de29..567b605 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1 @@
+# Git教程
\ No newline at end of file
```

由于我们尚未用`git add`命令向暂存区添加任何东西，所以程序只会显示工作树与最新提交状态之间的差别，即`D:/Xsite`目录与仓库最新版本之间的差别。

用`git add`命令将README.md文件加入暂存区。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git diff
```

现在执行`git diff`命令，由于工作树和暂存区的状态并无差别，结果什么都不会显示。

### `git diff HEAD`

要查看工作树与最新提交的差别，请执行以下命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git diff HEAD
diff --git a/README.md b/README.md
index e69de29..567b605 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1 @@
+# Git教程
\ No newline at end of file
```

这里的HEAD是指向当前分支中最新一次提交的指针。

由于我们刚刚确认过两个提交之间的差别，所以直接运行`git commit`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit -m "Add index"
[master de35e44] Add index
 1 file changed, 1 insertion(+)
```

保险起见，我们查一下提交日志，确认提交是否成功。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git log
commit de35e44e9756bafb1d2ffc47e8eb05cd0b0e87e6 (HEAD -> master)
Author: Alowree <alowree@hotmail.com>
Date:   Tue Aug 31 18:30:39 2021 +0800

    Add index

commit 674e3a82bb4a99d20ff1222f44ed373d30ac65e1
Author: Alowree <alowree@hotmail.com>
Date:   Tue Aug 31 16:02:46 2021 +0800

    First commit
```

成功查到了第二个提交。

### 概念小结

**工作树**，working tree

> A git repository can support multiple working trees, allowing you to check out more than one branch at a time. With `git worktree add` a new working tree is associated with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" prepared by `git-init` or `git-clone`. A repository has one main working tree (if it’s not a bare repository) and zero or more linked working trees. When you are done with a linked working tree, remove it with `git worktree remove`.

**暂存区**，staging area or index

> Unlike the other systems, Git has something called the "staging area" or "index". This is an intermediate area where commits can be formatted and reviewed before completing the commit.
>
> One thing that sets Git apart from other tools is that it's possible to quickly stage some of your files and commit them without committing all of the other modified files in your working directory or having to list them on the command line during the commit.

**Git仓库**，Git repository

> You typically obtain a Git repository in one of two ways:
>
> 1. You can take a local directory that is currently not under version control, and turn it into a Git repository, or
> 2. You can *clone* an existing Git repository from elsewhere.
>
> In either case, you end up with a Git repository on your local machine, ready for work.

![Index 1](https://git-scm.com/images/about/index1@2x.png)

Git提出的这种划分三个区域的模型，对于新手尤其是非程序员群体来讲可能难以理解。我们使用一个现实中实际仓库管理的例子来进行类比，方便理解。一个仓库经理，他既需要管理仓库中的物理意义上的货物，也需要管理IT系统内相应货物的电子记录。其他部门通常是通过IT系统来查询最新库存记录，我们把这个IT系统类比为Git repository。而物理仓库是动态变化的，可能有的送货已经进仓，但是没有入IT系统，比如说可能正在等待IQC的检验通过才可正常入系统接收，我们把物理仓库类比为Git working directory。我们把staging area类比为仓库的暂存区，存放供应商新的送货，但是需要经过IQC检验，PASS的话就可以正常入IT系统，FAIL的话就退货不入IT系统。

此时，你已经可以执行所有的基本本地 Git 操作，例如创建或克隆仓库，对仓库工作树进行更改，对相关更改进行寄存和提交，并查看仓库所经历的所有更改的历史。接下来，我们将介绍Git的杀手级功能：它的分支模型。

## 分支的操作



### `git branch`--显示分支一览表

### `git checkout -b feature-A`--创建、切换分支

### `git checkout master`--切换到master分支

### `git checkout -`--切换回上一个分支

### 特性分支

### 主干分支

### `git merge`--合并分支

### `git log --graph`--以图表形式查看分支

## 更改提交的操作

### `git reset`--回溯历史版本

### 消除冲突

### `git commit --amend`--修改提交信息

### `git rebase -i`--压缩历史



## 推送至远程仓库

### `git remote add`--添加远程仓库

### `git push`--推送至远程仓库

## 从远程仓库获取

### `git clone`--获取远程仓库

### `git pull`--获取最新的远程仓库分支

## 思考问题

使用`Hexo`框架搭建的本地博客生产环境，这个文件夹内部已经生成`.deploy_git`和`.github`两个文件夹，以及`.gitignore`一个文本文件。我们能否使用`Git`对博客文件夹进行版本管理，能否使用`Git`将博客文件夹推送至远程仓库（做备份），能否使用`Git`从远程仓库获取（以实现并行开发）？
