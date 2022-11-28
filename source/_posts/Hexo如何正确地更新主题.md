---
title: 如何正确地更新 Hexo 主题
toc_number: true
abbrlink: how-to-update
date: 2022-06-18 22:03:06
updated:
tags: [Hexo, Butterfly, Good Practices]
categories: Hexo
keywords:
description: 现在有更好的方法来科学地更新 butterfly 主题了。
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

## Amateurs

之前，安装 Hexo Butterfly 主题，都是严格按照官方指引，在 Hexo 根目录里直接克隆主题作者 jerryc127 的代码库：

```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
然后，魔改，魔改，魔改。

再然后，等主题作者再次发布更新之后，想要通过在`themes\butterfly`主题目录下运行 `git pull` 来升级，却被告知已经是最新版而无法更新。

```bash
Administrator@MICRO-202221358 MINGW64 /d/MaraPython/themes/butterfly (master)
$ git pull
Already up to date.
```

于是，只能手动删除`themes\butterfly`目录，再按照官方指引，在 Hexo 根目录里直接克隆主题作者 jerryc127 的代码库。

然后，再魔改，再魔改，再魔改。

现在有更好的方法来科学地更新 butterfly 主题了。

## Professionals

1、把自己魔改过的主题配置文件`_config.yml`和`_config.butterfly.yml`，还有主题文件夹`themes\butterfly`备份。

2、fork一份主题作者的主题仓库至自己的Github帐号，然后在你的 Hexo 根目录里克隆自己的仓库（注意：包含master和dev两个版本），也就是从主题作者那里fork来的代码库，如下：

```BASH
git clone -b master https://github.com/alowree/hexo-theme-butterfly.git themes/butterfly
```

![](https://image.marapython.com/fork.png)

3、把第1步中备份过的主题文件夹butterfly再覆盖过去`themes\butterfly`。此时，相当于本地主题文件夹`themes\butterfly`的working tree有了代码更新，可以使用 `git push` 将更新过的代码推到自己Github帐号下的主题仓库。

好的，7/19/2022发现主题已经更新到了4.3版本。

```BASH
Administrator@MICRO-202221358 MINGW64 /d/MaraPython/themes/butterfly (master)
$ git push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push github HEAD:production

To push to the branch of the same name on the remote, use

    git push github HEAD

To choose either option permanently, see push.default in 'git help config'.
```



4、等待主题作者再发布下一个更新，可测试如何解决冲突，即决定哪部分代码保留作者的更新，哪部分代码保留自己的魔改，然后merge就可以了。

世界清静了。Love & Peace.

代码仓库应该不可以嵌套。Hexo站点是一个仓库，master分支和production分支。`hexo\themes\butterfly`是从远程仓库clone下来，变成hexo的一部分，因而无法当成独立的仓库再去pull或者push操作。

那我们尝试将butterfly仓库分开独立操作。

1、在本地电脑桌面新建文件夹Desktop/themes_new_update，重新clone远程仓库主题，单独保存主题文件夹，不再放在hexo站点下面。

![image-20220906121708369](https://image.marapython.com/image-20220906121708369.png)

## 升级至4.5.1

新电脑，新系统。

MaraPython文件夹是丛远程仓库的`production`分支克隆下来的，所以内置的`MaraPython/themes/butterfly`的文件夹不能单独当作一个仓库从主题作者那里直接`git pull`。

把`butterfly`文件夹从本地站点里复制出来，粘贴到一个单独的位置，与远程仓库连接、更新之后，再复制回站点的文件夹。

1、`git init`

2、`git add .`

3、`git commit -m "initial commit to save all changes made to local repository"`

4、本地仓库与远程仓库关联 `git remote add origin git@github.com:alowree/hexo-theme-butterfly.git`

5、现在本地仓库的自己的魔改代码，远程仓库有主题作者的更新代码。直接`git pull`可以吗？

```BASH
$ git pull
remote: Enumerating objects: 5554, done.
remote: Counting objects: 100% (161/161), done.
remote: Compressing objects: 100% (111/111), done.
remote: Total 5554 (delta 67), reused 115 (delta 50), pack-reused 5393
Receiving objects: 100% (5554/5554), 2.49 MiB | 202.00 KiB/s, done.
Resolving deltas: 100% (3635/3635), done.
From github.com:alowree/hexo-theme-butterfly
 * [new branch]      dev        -> origin/dev
 * [new branch]      master     -> origin/master
 * [new tag]         1.0.0      -> 1.0.0
 * [new tag]         1.0.5      -> 1.0.5
 * [new tag]         1.0.6      -> 1.0.6
 * [new tag]         1.0.7      -> 1.0.7
 * [new tag]         1.0.8      -> 1.0.8
 * [new tag]         1.1.0      -> 1.1.0
 * [new tag]         1.1.5      -> 1.1.5
 * [new tag]         1.2.0      -> 1.2.0
 * [new tag]         2.0.0      -> 2.0.0
 * [new tag]         2.1.0      -> 2.1.0
 * [new tag]         2.2.0      -> 2.2.0
 * [new tag]         2.2.5      -> 2.2.5
 * [new tag]         2.3.0      -> 2.3.0
 * [new tag]         2.3.5      -> 2.3.5
 * [new tag]         3.0.0      -> 3.0.0
 * [new tag]         3.0.0-rc1  -> 3.0.0-rc1
 * [new tag]         3.0.0-rc2  -> 3.0.0-rc2
 * [new tag]         3.0.1      -> 3.0.1
 * [new tag]         3.1.0      -> 3.1.0
 * [new tag]         3.1.1      -> 3.1.1
 * [new tag]         3.2.0      -> 3.2.0
 * [new tag]         3.3.0      -> 3.3.0
 * [new tag]         3.4.0      -> 3.4.0
 * [new tag]         3.4.1      -> 3.4.1
 * [new tag]         3.4.2      -> 3.4.2
 * [new tag]         3.5.0      -> 3.5.0
 * [new tag]         3.5.1      -> 3.5.1
 * [new tag]         3.6.0      -> 3.6.0
 * [new tag]         3.6.1      -> 3.6.1
 * [new tag]         3.6.2      -> 3.6.2
 * [new tag]         3.7.0      -> 3.7.0
 * [new tag]         3.7.1      -> 3.7.1
 * [new tag]         3.7.5      -> 3.7.5
 * [new tag]         3.7.6      -> 3.7.6
 * [new tag]         3.7.7      -> 3.7.7
 * [new tag]         3.7.8      -> 3.7.8
 * [new tag]         3.8.0      -> 3.8.0
 * [new tag]         3.8.1      -> 3.8.1
 * [new tag]         3.8.2      -> 3.8.2
 * [new tag]         3.8.3      -> 3.8.3
 * [new tag]         3.8.4      -> 3.8.4
 * [new tag]         4.0.0      -> 4.0.0
 * [new tag]         4.0.1      -> 4.0.1
 * [new tag]         4.1.0      -> 4.1.0
 * [new tag]         4.2.0      -> 4.2.0
 * [new tag]         4.2.1      -> 4.2.1
 * [new tag]         4.2.2      -> 4.2.2
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master
```



再试另外一个命令

```BASH
Alowr@Alowree-Pro16 MINGW64 ~/Desktop/butterfly (master)
$ git pull origin master
From github.com:alowree/hexo-theme-butterfly
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```





## References

https://volantis.js.org/how-to-update/

https://www.php.cn/tool/git/487225.html

[Butterfly主题的安装及更新 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1935545)
