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

## Amateur

之前，安装 Hexo Butterfly 主题，都是严格按照官方指引，在 Hexo 根目录里直接克隆主题作者 jerryc127 的代码库：

```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
然后，魔改，魔改，魔改。

再然后，等主题作者再次发布更新之后，想要通过在`themes\butterfly`主题目录下运行 `git pull` 来升级，却被告知已经是最新版而无法更新。

于是，只能手动删除`themes\butterfly`目录，再按照官方指引，在 Hexo 根目录里直接克隆主题作者 jerryc127 的代码库。

然后，再魔改，再魔改，再魔改。

现在有更好的方法来科学地更新 butterfly 主题了。

## Professional

1、把自己魔改过的主题配置文件`_config.yml`和`_config.butterfly.yml`，还有主题文件夹`themes\butterfly`备份。

2、fork一份主题作者的主题仓库至自己的Github帐号，然后在你的 Hexo 根目录里克隆自己从主题作者那里fork来的代码库：

```BASH
git clone -b master https://github.com/alowree/hexo-theme-butterfly.git themes/butterfly
```

![](https://image.marapython.com/fork.png)

3、把第1步中备份过的主题文件夹butterfly再覆盖过去`themes\butterfly`。此时，相当于本地主题文件夹`themes\butterfly`的working tree有了代码更新，可以使用 `git push` 将更新过的代码推到自己Github帐号下的主题仓库。

4、等待主题作者再发布下一个更新，可测试如何解决冲突，即决定哪部分代码保留作者的更新，哪部分代码保留自己的魔改，然后merge就可以了。

世界清静了。Love & Peace.

## References

https://volantis.js.org/how-to-update/

https://www.php.cn/tool/git/487225.html
