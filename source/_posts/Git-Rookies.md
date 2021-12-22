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

这篇日志节选改编自**大塚弘记**的《Github入门与实践》，主要介绍Git的基本知识和操作方法。

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

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

如果初始化成功，执行了`git init`命令的目录下就会生成`.git`目录。这个`.git`目录里存储着管理当前目录内容所需的仓库数据。在Git中，我们将这个`D:/Xsite`目录的内容称为“**附属于该仓库的工作树**”。

**工作树**的概念，对于半路的coder们可能一时难以理解，相关概念的梳理和澄清我们先稍微往后放一放。到这里，我们只需要知道两点：

- 在Windows中，一般称working directory，**工作目录**，例如上面示例代码中的工作目录`D:/Xsite`
- 在Bash中，它的正式名称则是working tree，**工作树**。

### `git status`--查看仓库的状态

工作树和仓库在被操作的过程中，状态会不断发生变化。下面，我们来实际查看一下当前状态。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

结果显示，我们当前正处于master分支下。接着还显示了没有可以提交的内容。所谓**提交**（commit），是指“记录工作树中所有文件的当前状态”。想要了解更多，可以参考`git commit`的[官方文档](https://git-scm.com/docs/git-commit)。

尚没有可提交的内容，就是说我们建立的这个仓库中还没有启示任何文件的任何状态。下面，我们新建一个文件README.md作为管理对象，为第一次提交做准备。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ touch README.md
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

可以看到在Untracked files中显示了README.md文件。

### `git add`--向暂存区中添加文件

如果只是用Git仓库的**工作树**创建了文件，那么该文件并不会被记入Git仓库的版本管理对象当中。因此我们用`git status`命令查看README.md文件时，它会显示在Untracked files里。
要想让文件成为Git仓库的管理对象，就需要用`git add`命令将其加入**暂存区**（Stage或者Index）中。暂存区是提交之前的一个临时区域。

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

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ 
```

将README.md文件加入暂存区后，`git status`命令的显示结果发生了变化。可以看到，README.md文件显示在Changes to be committed中了。

### `git commit`--保存仓库的历史记录

`git commit`命令可以将当前暂存区中的文件实际保存到仓库的历史记录中。通过这些记录，我们就可以在工作树中复原文件。
我们来实际运行一下`git commit`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit -m "First commit"
[master (root-commit) 674e3a8] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

执行完`git commit`命令后再来查看当前状态。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git status
On branch master
nothing to commit, working tree clean

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

当前工作树处于刚刚完成提交的最新状态，所以结果显示没有更改。也就是说，`D:/Xsite`目录下的文件没有被修改。

### `git log`--查看提交日志

`git log`命令可以查看以往仓库中提交的日志。包括可以查看什么人在什么时候进行了提交或合并，以及操作前后有怎样的差别。关于合并我们会在后面解说。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git log
commit 6995243091b40f09da0774f8ef54eb85fc328c25 (HEAD -> master)
Author: Alowree <alowree@hotmail.com>
Date:   Fri Nov 26 11:17:15 2021 +0800

    First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

如上所述，`git log`命令可以利用多种参数帮助开发者把握以往提交的内容。不必勉强自己一次记下全部参数，每当有想查看的日志就积极去查，慢慢就能得心应手了。想要了解更多，可以参考`git log`的[官方文档](https://git-scm.com/docs/git-log)。

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

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

由于我们尚未用`git add`命令向暂存区添加任何东西，所以程序只会显示**工作树**与**最新提交状态**之间的差别，即`D:/Xsite`目录与仓库最新版本之间的差别。

用`git add`命令将README.md文件加入暂存区。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git diff

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
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

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

这里的HEAD是指向当前分支中最新一次提交的指针。

由于我们刚刚确认过两个提交之间的差别，所以直接运行`git commit`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit -m "Add index"
[master de35e44] Add index
 1 file changed, 1 insertion(+)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
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
~

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
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

在进行多个并行作业时，我们会用到**分支**。在这类并行开发的过程中，往往同时存在多个最新代码状态。如图4.1所示，从master分支创建feature-A分支和fix-B分支后，每个分支中都拥有自己的最新代码。master分支是Git默认创建的分支，因此基本上所有开发都是以这个分支为中心进行的。

[插图]
**图4.1 从master分支创建feature-A分支和fix-B分支**

不同分支中，可以同时进行完全不同的作业。等该分支的作业完成之后再与master分支合并。比如feature-A分支的作业结束后与master合并，如图4.2所示。

[插图]
**图4.2 feature-A分支作业结束后的状态**

通过灵活运用分支，可以让多人同时高效地进行并行开发。在这里，我们将带大家学习与分支相关的Git操作。

### `git branch`--显示分支一览表

`git branch`命令可以将分支名列表显示，同时可以确认当前所在分支。让我们来实际运行`git branch`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git branch
* master

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

可以看到master分支左侧标有`*`（星号），表示这是我们当前所在的分支。也就是说，我们正在master分支下进行开发。结果中没有显示其他分支名，表示本地仓库中只存在master一个分支。

### `git checkout -b feature-A`--创建、切换分支

如果想以当前的master分支为基础创建新的分支，我们需要用到`git checkout -b`命令。

**切换到feature-A分支并进行提交**

执行下面的命令，创建名为feature-A的分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git checkout -b feature-A
Switched to a new branch 'feature-A'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$
```

实际上，连续执行下面两条命令也能收到同样效果。

```bash
$ git branch feature-A
$ git checkout feature-A
```

创建feature-A分支，并将当前分支切换为feature-A分支。这时再来查看分支列表，会显示我们处于feature-A分支下。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git branch
* feature-A
  master

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$
```

feature-A分支左侧标有`*`，表示当前分支为feature-A。在这个状态下像正常开发那样修改代码、执行`git add`命令并进行提交的话，代码就会提交至feature-A分支。像这样不断对一个分支（例如feature-A）进行提交的操作，我们称为“培育分支”。

下面来实际操作一下。在README.md文件中添加一行。

```markdown
# Git教程

- feature A
```

这里我们添加了feature-A这样一行字母，然后进行提交。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git commit -m "Add feature-A"
[feature-A 8a6c8b9] Add feature-A
 1 file changed, 5 insertions(+), 1 deletion(-)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$
```

于是，这一行就添加到feature-A分支中了。

**切换到master分支**

现在我们再来看一看master分支有没有受到影响。首先切换至master分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git checkout master
Switched to branch 'master'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

然后查看README.md文件，会发现README.md文件仍然保持原先的状态，并没有被添加文字。feature-A分支的更改不会影响到master分支，这正是在开发中创建分支的优点。只要创建多个分支，就可以在不互相影响的情况下同时进行多个功能的开发。

**切换回上一个分支**

现在，我们再切换回feature-A分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git checkout -
Switched to branch 'feature-A'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$
```

像上面这样用`-`（连字符）代替分支名，就可以切换至上一个分支。当然，将`-`替换成feature-A同样可以切换到feature-A分支。

### 特性分支

Git与Subversion（SVN）等集中型版本管理系统不同，创建分支时不需要连接中央仓库，所以能够相对轻松地创建分支。因此，当今大部分工作流程中都用到了特性（Topic）分支。

**特性分支**顾名思义，是集中实现单一特性（主题），除此之外不进行任何作业的分支。在日常开发中，往往会创建数个特性分支，同时在此之外再保留一个随时可以发布软件的稳定分支。稳定分支的角色通常由master分支担当（图4.3）。

[插图]
**图4.3 特性分支的概念**

之前我们创建了feature-A分支，这一分支主要实现feature-A，除feature-A的实现之外不进行任何作业。即便在开发过程中发现了BUG，也需要再创建新的分支，在新分支中进行修正。

基于特定主题的作业在特性分支中进行，主题完成后再与master分支合并。只要保持这样一个开发流程，就能保证master分支可以随时供人查看。这样一来，其他开发者也可以放心大胆地从master分支创建新的特性分支。

### 主干分支

**主干分支**是刚才我们讲解的特性分支的原点，同时也是合并的终点。通常人们会用master分支作为主干分支。主干分支中并没有开发到一半的代码，可以随时供他人查看。

有时我们需要让这个主干分支总是配置在正式环境中，有时又需要用标签Tag等创建版本信息，同时管理多个版本发布。拥有多个版本发布时，主干分支也有多个。

### `git merge`--合并分支

接下来，我们假设feature-A已经实现完毕，想要将它合并到主干分支master中。首先切换到master分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-A)
$ git checkout master
Switched to branch 'master'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

然后合并feature-A分支。为了在历史记录中明确记录下本次分支合并，我们需要创建合并提交。因此，在合并时加上`--no-ff`参数。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git merge --no-ff feature-A
hint: Waiting for your editor to close the file...
```

随后编辑器会启动，这是一个位于`D:/Xsite/.git/MERGE_MSG`的文本文件，用于录入合并提交的信息。

```text
Merge branch 'feature-A'
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
```

默认信息中已经包含了是从feature-A分支合并过来的相关内容，所以可不必做任何更改。将编辑器中显示的内容保存，关闭编辑器，然后就会看到下面的结果。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git merge --no-ff feature-A
Merge made by the 'recursive' strategy.
 README.md | 6 +++++-
  1 file changed, 5 insertions(+), 1 deletion(-)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

这样一来，feature-A分支的内容就合并到master分支中了。

### `git log --graph`--以图表形式查看分支

用`git log --graph`命令进行查看的话，能很清楚地看到特性分支（feature-A）提交的内容已被合并。除此以外，特性分支的创建以及合并也都清楚明了。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git log --graph
*   commit b3cb8726152443ab1657a9766fb9174d72743495 (HEAD -> master)
|\  Merge: 794005d cd77e04
| | Author: Alowree <alowree@hotmail.com>
| | Date:   Fri Nov 26 12:04:00 2021 +0800
| |
| |     Merge branch 'feature-A'
| |
| * commit cd77e04b93385939b0f10671116fd5fbf096c82d (feature-A)
|/  Author: Alowree <alowree@hotmail.com>
|   Date:   Fri Nov 26 11:51:33 2021 +0800
|
|       Add feature-A
|
* commit 794005d24f99b6b7dee2da8b045cb55c6e400dc2
| Author: Alowree <alowree@hotmail.com>
| Date:   Fri Nov 26 11:40:50 2021 +0800
|
|     Add index
|
* commit 6995243091b40f09da0774f8ef54eb85fc328c25
  Author: Alowree <alowree@hotmail.com>
  Date:   Fri Nov 26 11:17:15 2021 +0800

      First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

`git log --graph`命令可以用图表形式输出提交日志，非常直观，请大家务必记住。

## 更改提交的操作

### `git reset`--回溯历史版本

通过前面学习的操作，我们已经学会如何在实现功能后进行提交，累积提交日志作为历史记录，借此不断培育一款软件。

Git的另一特征便是可以灵活操作历史版本。借助分散仓库的优势，可以在不影响其他仓库的前提下对历史版本进行操作。

在这里，为了让各位熟悉对历史版本的操作，我们先回溯历史版本，创建一个名为fix-B的特性分支（图4.4）。

[插图]
**图4.4 回溯历史，创建fix-B分支**

**回溯到创建feature-A分支前**

让我们先回溯到上一节feature-A分支创建之前，创建一个名为fix-B的特性分支。

要让仓库的HEAD、暂存区、当前工作树回溯到指定状态，需要用到`git reset --hard`命令。只要提供目标时间点的哈希值，为了便于输入通常只提供前七位，就可以完全恢复至该时间点的状态。事不宜迟，让我们执行下面的命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git reset --hard 6995243091b40f09da0774f8ef54eb85fc328c25
HEAD is now at 6995243 First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ 
```

我们已经成功回溯到特性分支（feature-A）创建之前的状态。由于所有文件都回溯到了指定哈希值对应的时间点上，README.md文件的内容也恢复到了当时的状态。

**创建fix-B分支**

现在我们来创建特性分支（fix-B）。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git checkout -b fix-B
Switched to a new branch 'fix-B'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$
```

作为这个主题的作业内容，我们在README.md文件中添加一行文字。

```markdown
- fix-B
```

然后直接提交README.md文件。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$ git commit -m "Fix B"
[fix-B 883cd09] Fix B
 1 file changed, 1 insertion(+)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$
```

现在的状态如图4.5所示。接下来我们的目标是图4.6中所示的状态，即主干分支合并feature-A分支的修改后，又合并了fix-B的修改。

[插图]
**图4.5 当前fix-B分支的状态**

[插图]
**图4.6 fix-B分支的下一步目标**

**推进至feature-A分支合并后的状态**

首先恢复到feature-A分支合并后的状态。不妨称这一操作为“推进历史”。

`git log`命令只能查看以当前状态为终点的历史日志。所以这里要使用`git reflog`命令，查看当前仓库的操作日志。在日志中找出回溯历史之前的哈希值，通过`git reset --hard`命令恢复到回溯历史前的状态。

首先执行`git reflog`命令，查看当前仓库执行过的操作的日志。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$ git reflog
883cd09 (HEAD -> fix-B) HEAD@{0}: commit: Fix B
6995243 (master) HEAD@{1}: checkout: moving from master to fix-B
6995243 (master) HEAD@{2}: reset: moving to 699524
b3cb872 HEAD@{3}: merge feature-A: Merge made by the 'recursive' strategy.
794005d HEAD@{4}: checkout: moving from feature-A to master
cd77e04 (feature-A) HEAD@{5}: checkout: moving from master to feature-A
794005d HEAD@{6}: checkout: moving from feature-A to master
cd77e04 (feature-A) HEAD@{7}: commit: Add feature-A
794005d HEAD@{8}: checkout: moving from master to feature-A
794005d HEAD@{9}: commit: Add index
6995243 (master) HEAD@{10}: commit (initial): First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$
```

在日志中，我们可以看到commit、checkout、reset、merge等Git命令的执行记录。只要不进行Git的GC（Garbage Collection，垃圾回收），就可以通过日志随意调取近期的历史状态，就像给时间机器指定一个时间点，在过去未来中自由穿梭一般。即便开发者错误执行了Git操作，基本也都可以利用`git reflog`命令恢复到原先的状态，所以请各位读者务必牢记本部分。

从上面数第四行表示feature-A特性分支合并后的状态，对应哈希值为`b3cb872`。我们将HEAD、暂存区、工作树恢复到这个时间点的状态。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (fix-B)
$ git checkout master
Switched to branch 'master'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git reset --hard b3cb872
HEAD is now at b3cb872 Merge branch 'feature-A'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

之前我们使用`git reset --hard`命令回溯了历史，这里又再次通过它恢复到了回溯前的历史状态。当前的状态如图4.7所示。

[插图]
**图4.7 恢复历史后的状态**

### 消除冲突

现在只要合并fix-B分支，就可以得到我们想要的状态。让我们赶快进行合并操作。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git merge --no-ff fix-B
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master|MERGING)
$
```

这时，系统告诉我们README.md文件发生了**冲突**（Conflict）。系统在合并README.md文件时，feature-A分支更改的部分与本次想要合并的fix-B分支更改的部分发生了冲突。

不解决冲突就无法完成合并，所以我们打开README.md文件，解决这个冲突。

**查看冲突部分并将其解决**

用编辑器打开README.md文件，就会发现其内容变成了下面这个样子。

```markdown
# Git教程

<<<<<<< HEAD

  - feature-A
=======
  - fix-B
>>>>>>> fix-B
```

`=======`以上的部分是当前HEAD的内容，以下的部分是要合并的fix-B分支中的内容。我们在编辑器中将其改成想要的样子。

```markdown
# Git教程

  - feature-A
  - fix-B
```

如上所示，本次修正让feature-A与fix-B的内容并存于文件之中。但是在实际的软件开发中，往往需要删除其中之一，所以各位在处理冲突时，务必要仔细分析冲突部分的内容后再行修改。

**提交解决后的结果**

冲突解决后，执行`git add`命令与`git commit`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master|MERGING)
$ git add README.md

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master|MERGING)
$ git commit -m "Fix conflict"
[master c042d99] Fix conflict

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

由于本次更改解决了冲突，所以提交信息记为"Fix conflict"。

### `git commit --amend`——修改提交信息

要修改上一条提交信息，可以使用`git commit --amend`命令。

我们将上一条提交信息记为了"Fix conflict"，但它其实是fix-B分支的合并，解决合并时发生的冲突只是过程之一，这样标记实在不妥。于是，我们要修改这条提交信息。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit --amend
hint: Waiting for your editor to close the file...
```

执行上面的命令后，编辑器就会启动，`D:/Xsite/.git/COMMIT_EDITMSG`。

```text
Fix conflict

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Nov 26 14:01:22 2021 +0800
#
# On branch master
# Changes to be committed:
#    modified:   README.md
#
```

编辑器中显示的内容如上所示，其中包含之前的提交信息。请将提交信息的部分修改为Merge branch 'fix-B'，然后保存文件，关闭编辑器，随后会显示下面这条结果。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git commit --amend
[master 7c573d6] Merge branch "fix-B"
 Date: Fri Nov 26 14:01:22 2021 +0800

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

现在执行git log --graph命令，可以看到提交日志中的相应内容也已经被修改。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git log --graph
*   commit 7c573d677ec849f70e9f2fae216a3af360c4550f (HEAD -> master)
|\  Merge: b3cb872 883cd09
| | Author: Alowree <alowree@hotmail.com>
| | Date:   Fri Nov 26 14:01:22 2021 +0800
| |
| |     Merge branch "fix-B"
| |
| * commit 883cd09bdbf75c260e7c73fc1bb98f58483d47a6 (fix-B)
| | Author: Alowree <alowree@hotmail.com>
| | Date:   Fri Nov 26 13:41:54 2021 +0800
| |
| |     Fix B
| |
* |   commit b3cb8726152443ab1657a9766fb9174d72743495
|\ \  Merge: 794005d cd77e04
| | | Author: Alowree <alowree@hotmail.com>
| | | Date:   Fri Nov 26 12:04:00 2021 +0800
| | |
| | |     Merge branch 'feature-A'
| | |
| * | commit cd77e04b93385939b0f10671116fd5fbf096c82d (feature-A)
|/ /  Author: Alowree <alowree@hotmail.com>
| |   Date:   Fri Nov 26 11:51:33 2021 +0800
| |
| |       Add feature-A
| |
* | commit 794005d24f99b6b7dee2da8b045cb55c6e400dc2
|/  Author: Alowree <alowree@hotmail.com>
|   Date:   Fri Nov 26 11:40:50 2021 +0800
|
|       Add index
|
* commit 6995243091b40f09da0774f8ef54eb85fc328c25
  Author: Alowree <alowree@hotmail.com>
  Date:   Fri Nov 26 11:17:15 2021 +0800

      First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

### `git rebase -i`--压缩历史

在合并特性分支之前，如果发现已提交的内容中有些许拼写错误等，不妨提交一个修改，然后将这个修改包含到前一个提交之中，压缩成一个历史记录。这是个会经常用到的技巧，让我们来实际操作体会一下。

**创建feature-C分支**

首先，新建一个feature-C特性分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git checkout -b feature-C
Switched to a new branch 'feature-C'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$
```

作为feature-C的功能实现，我们在README.md文件中添加一行文字，并且故意留下拼写错误，以便之后修正。

```markdown
# Git教程

  - feature-A
  - fix-B
  - faeture-C
```

提交这部分内容。这个小小的变更就没必要先执行`git add`命令再执行`git commit`命令了，我们用`git commit -am`命令来一次完成这两步操作。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git commit -am "Add feature-C"
[feature-C f7bd391] Add feature-C
 1 file changed, 1 insertion(+), 1 deletion(-)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$
```

**修正拼写错误**

现在来修正刚才预留的拼写错误。请各位自行修正README.md文件的内容，修正后的差别如下所示。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git diff
diff --git a/README.md b/README.md
index 82c3aa7..9ff8d3b 100644
--- a/README.md
+++ b/README.md
@@ -2,5 +2,5 @@

 - feature-A
 - fix-B
-- faeture-C
+- feature-C


Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$
```

然后进行提交。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git commit -am "Fix typo"
[feature-C e1781db] Fix typo
 1 file changed, 1 insertion(+), 1 deletion(-)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$
```

错字漏字等失误称作typo，所以我们将提交信息记为"Fix typo"。实际上，我们不希望在历史记录中看到这类提交，因为健全的历史记录并不需要它们。如果能在最初提交之前就发现并修正这些错误，也就不会出现这类提交了。

**更改历史**

因此，我们来更改历史。将"Fix typo"修正的内容与之前一次的提交合并，在历史记录中合并为一次完美的提交。为此，我们要用到`git rebase`命令。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git rebase -i HEAD～2
hint: Waiting for your editor to close the file...
```

用上述方式执行git rebase命令，可以选定当前分支中包含HEAD（最新提交）在内的两个最新历史记录为对象，并在编辑器中打开`D:/Xsite/.git/rebase-merge/git-rebase-todo`

```text
pick f7bd391 Add feature-C
pick e1781db Fix typo

# Rebase 7c573d6..e1781db onto 7c573d6 (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

我们将`e1781db`的Fix typo的历史记录压缩到`f7bd391`的Add feature-C里。按照下图所示，将`e1781db`左侧的pick部分删除，改写为fixup。

```text
pick f7bd391 Add feature-C
fixup e1781db Fix typo
```

保存编辑器里的内容，关闭编辑器。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git rebase -i HEAD~2
Successfully rebased and updated refs/heads/feature-C.

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ 
```

系统显示rebase成功。也就是以下面这两个提交作为对象，将"Fix typo"的内容合并到了上一个提交 "Add feature-C"中，改写成了一个新的提交。

- f7bd391 Add feature-C
- e1781db Fix typo

现在再查看提交日志时会发现Add feature-C的哈希值已经不是`f7bd391`了，这证明提交已经被更改。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git log --graph
* commit 1fd7107c8ab29bda5ccd8b70a16284d02b70a7d0 (HEAD -> feature-C)
| Author: Alowree <alowree@hotmail.com>
| Date:   Fri Nov 26 14:41:45 2021 +0800
|
|     Add feature-C
|
*   commit 7c573d677ec849f70e9f2fae216a3af360c4550f (master)
|\  Merge: b3cb872 883cd09
| | Author: Alowree <alowree@hotmail.com>
| | Date:   Fri Nov 26 14:01:22 2021 +0800
| |
| |     Merge branch "fix-B"
| |
| * commit 883cd09bdbf75c260e7c73fc1bb98f58483d47a6 (fix-B)
| | Author: Alowree <alowree@hotmail.com>
| | Date:   Fri Nov 26 13:41:54 2021 +0800
| |
| |     Fix B
| |
* |   commit b3cb8726152443ab1657a9766fb9174d72743495
|\ \  Merge: 794005d cd77e04
| | | Author: Alowree <alowree@hotmail.com>
| | | Date:   Fri Nov 26 12:04:00 2021 +0800
| | |
| | |     Merge branch 'feature-A'
| | |
| * | commit cd77e04b93385939b0f10671116fd5fbf096c82d (feature-A)
|/ /  Author: Alowree <alowree@hotmail.com>
| |   Date:   Fri Nov 26 11:51:33 2021 +0800
| |
| |       Add feature-A
| |
* | commit 794005d24f99b6b7dee2da8b045cb55c6e400dc2
|/  Author: Alowree <alowree@hotmail.com>
|   Date:   Fri Nov 26 11:40:50 2021 +0800
|
|       Add index
|
* commit 6995243091b40f09da0774f8ef54eb85fc328c25
  Author: Alowree <alowree@hotmail.com>
  Date:   Fri Nov 26 11:17:15 2021 +0800

      First commit

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$
```

这样一来，Fix typo就从历史中被抹去，也就相当于Add feature-C中从来没有出现过拼写错误。这算是一种良性的历史改写。

**合并至master分支**

feature-C分支的使命告一段落，我们将它与master分支合并。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-C)
$ git checkout master
Switched to branch 'master'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git merge --no-ff feature-C
Merge made by the 'recursive' strategy.
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

master分支整合了feature-C分支。开发进展顺利。

## 推送至远程仓库

Git是分散型版本管理系统，但我们前面所学习的，都是针对单一本地仓库的操作。下面，我们将开始接触远在网络另一头的远程仓库。远程仓库顾名思义，是与我们本地仓库相对独立的另一个仓库。让我们先在GitHub上创建一个仓库，并将其设置为本地仓库的远程仓库。

请参考第3章的3.2节在GitHub上新建一个仓库。为防止与其他仓库混淆，仓库名请与本地仓库保持一致，即`Xsite`。创建时请不要勾选`Initialize this repository with a README`选项（图4.8）。因为一旦勾选该选项，GitHub一侧的仓库就会自动生成README文件，从创建之初便与本地仓库失去了整合性。虽然到时也可以强制覆盖，但为防止这一情况发生还是建议不要勾选该选项，直接点击`Create repository`创建仓库。

[插图]
**图4.8 不要勾选该选项**

### `git remote add`--添加远程仓库

在GitHub上创建的仓库路径为`git@github.com:用户名/Xsite.git`。现在我们用`git remote add`命令将它设置成本地仓库的远程仓库。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git remote add origin git@github.com:Alowree/Xsite.git

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

按照上述格式执行`git remote add`命令之后，Git会自动将`git@github.com:Alowree/Xsite.git`远程仓库的名称设置为origin（标识符）。

### `git push`--推送至远程仓库

**推送至master分支**

如果想将当前分支下本地仓库中的内容推送给远程仓库，需要用到git push命令。现在假定我们在master分支下进行操作。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git push -u origin master
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (20/20), 1.49 KiB | 508.00 KiB/s, done.
Total 20 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), done.
To github.com:Alowree/Xsite.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$
```

像这样执行`git push`命令，当前分支的内容就会被推送给远程仓库origin的master分支。`-u`参数可以在推送的同时，将origin仓库的master分支设置为本地仓库当前分支的upstream（上游）。添加了这个参数，将来运行`git pull`命令从远程仓库获取内容时，本地仓库的这个分支就可以直接从origin的master分支获取内容，省去了另外添加参数的麻烦。

执行该操作后，当前本地仓库master分支的内容将会被推送到GitHub的远程仓库中。在GitHub上也可以确认远程master分支的内容和本地master分支相同。

**推送至master以外的分支**

除了master分支之外，远程仓库也可以创建其他分支。举个例子，我们在本地仓库中创建feature-D分支，并将它以同名形式push至远程仓库。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (master)
$ git checkout -b feature-D
Switched to a new branch 'feature-D'

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-D)
$
```

我们在本地仓库中创建了feature-D分支，现在将它push给远程仓库并保持分支名称不变。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-D)
$ git push -u origin feature-D
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'feature-D' on GitHub by visiting:
remote:      https://github.com/Alowree/Xsite/pull/new/feature-D
remote:
To github.com:Alowree/Xsite.git
 * [new branch]      feature-D -> feature-D
Branch 'feature-D' set up to track remote branch 'feature-D' from 'origin'.

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-D)
$
```

现在，在远程仓库的GitHub页面就可以查看到feature-D分支了。

## 从远程仓库获取

上一节中我们把在GitHub上新建的仓库设置成了远程仓库，并向这个仓库push了feature-D分支。现在，所有能够访问这个远程仓库的人都可以获取feature-D分支并加以修改。

本节中我们从实际开发者的角度出发，在另一个目录下新建一个本地仓库，学习从远程仓库获取内容的相关操作。这就相当于我们刚刚执行过push操作的目标仓库又有了另一名新开发者来共同开发。

### `git clone`--获取远程仓库

**获取远程仓库**

首先我们换到其他目录`D:/Team`下，将GitHub上的仓库clone到本地。注意不要与之前操作的仓库在同一目录`D:/Xsite`下。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB
$ git clone git@github.com:Alowree/Xsite.git
Cloning into 'Xsite'...
remote: Enumerating objects: 20, done.
remote: Counting objects: 100% (20/20), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 20 (delta 3), reused 20 (delta 3), pack-reused 0
Receiving objects: 100% (20/20), done.
Resolving deltas: 100% (3/3), done.

Administrator@MICRO-101121100 MINGW64 /d/TeamB
$
```

执行`git clone`命令后我们会默认处于master分支下，同时系统会自动将origin设置成该远程仓库的标识符。也就是说，当前本地仓库的master分支与GitHub端远程仓库（origin）的master分支在内容上是完全相同的。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB
$ git branch -a
fatal: not a git repository (or any of the parent directories): .git

Administrator@MICRO-101121100 MINGW64 /d/TeamB
$ cd Xsite

Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (master)
$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/feature-D
  remotes/origin/master

Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (master)
$
```

我们用`git branch -a`命令查看当前分支的相关信息。添加`-a`参数可以同时显示本地仓库和远程仓库的分支信息。

结果中显示了remotes/origin/feature-D，证明我们的远程仓库中已经有了feature-D分支。

**获取远程的feature-D分支**

我们试着将feature-D分支获取至本地仓库。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (master)
$ git checkout -b feature-D origin/feature-D
Switched to a new branch 'feature-D'
Branch 'feature-D' set up to track remote branch 'feature-D' from 'origin'.

Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$
```

`-b`参数的后面是本地仓库中新建分支的名称。为了便于理解，我们仍将其命名为feature-D，让它与远程仓库的对应分支保持同名。新建分支名称后面是获取来源的分支名称。例子中指定了origin/feature-D，就是说以名为origin的仓库（这里指GitHub端的仓库）的feature-D分支为来源，在本地仓库中创建feature-D分支。

**向本地的feature-D分支提交更改**

现在假定我们是另一名开发者，要做一个新的提交。在README. md文件中添加一行文字，查看更改。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$ git diff
diff --git a/README.md b/README.md
index 9ff8d3b..f40774a 100644
--- a/README.md
+++ b/README.md
@@ -3,4 +3,5 @@
 - feature-A
 - fix-B
 - feature-C
+- feature-D


Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$
```

按照之前学过的方式提交即可。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$ git commit -am "Add feature-D"
[feature-D 39d7b8a] Add feature-D
 1 file changed, 1 insertion(+)

Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$
```

**推送feature-D分支**

现在来推送feature-D分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 278 bytes | 278.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:Alowree/Xsite.git
   5119843..39d7b8a  feature-D -> feature-D

Administrator@MICRO-101121100 MINGW64 /d/TeamB/Xsite (feature-D)
$
```

从远程仓库获取feature-D分支，在本地仓库中提交更改，再将feature-D分支推送回远程仓库，通过这一系列操作，就可以与其他开发者相互合作，共同培育feature-D分支，实现某些功能。

### `git pull`--获取最新的远程仓库分支

现在我们放下刚刚操作的目录，回到原先的那个目录下。这边的本地仓库中只创建了feature-D分支，并没有在feature-D分支中进行任何提交。然而远程仓库的feature-D分支中已经有了我们刚刚推送的提交。这时我们就可以使用`git pull`命令，将本地的feature-D分支更新到最新状态。当前分支为feature-D分支。

```bash
Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-D)
$ git pull origin feature-D
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 258 bytes | 10.00 KiB/s, done.
From github.com:Alowree/Xsite
 * branch            feature-D  -> FETCH_HEAD
   5119843..39d7b8a  feature-D  -> origin/feature-D
Updating 5119843..39d7b8a
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)

Administrator@MICRO-101121100 MINGW64 /d/Xsite (feature-D)
$
```

GitHub端远程仓库中的feature-D分支是最新状态，所以本地仓库中的feature-D分支就得到了更新。今后只需要像平常一样在本地进行提交再push给远程仓库，就可以与其他开发者同时在同一个分支中进行作业，不断给feature-D增加新功能。

**如果两人同时修改了同一部分的源代码，push时就很容易发生冲突。**所以多名开发者在同一个分支中进行作业时，为减少冲突情况的发生，建议更频繁地进行push和pull操作。

## 思考问题

使用`Hexo`框架搭建的本地博客生产环境，这个文件夹内部已经生成`.deploy_git`和`.github`两个文件夹，以及`.gitignore`一个文本文件。我们能否使用`Git`对博客文件夹进行版本管理，能否使用`Git`将博客文件夹推送至远程仓库（做备份），能否使用`Git`从远程仓库获取（以实现并行开发）？

当要合并两个不同的分支时，**冲突**是必定会出现的，因为在实际开发进程中的两个分支必定有所不同。
