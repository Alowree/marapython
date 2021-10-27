---
title: Hexo博客本地生产环境的备份
toc_number: true
abbrlink: 1561081268
date: 2021-10-26 15:18:11
updated:
tags:
categories:
keywords:
description:
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

## 主电脑上的博客目录备份至远程仓库

1. 安装插件

   ```bash
   npm install hexo-git-backup --save
   ```

2. 到 Hexo 博客根目录的 `_config.yml` 配置文件里添加以下配置：

   ```yml
   backup:
     type: git
     theme: butterfly
     message: To back up my locale Hexo production folder to a remote repository
     repository:
       github: git@github.com:Alowree/marapython.git,production
   ```

   参数解释：

   - theme：博客目录里可能已经安装了多个主题，这里只填你正在使用、需要备份的主题名称即可。
   - message：自定义提交信息
   - repository：博客的远程仓库名，注意仓库地址后面要添加一个分支名，比如我创建了一个production分支。这样master分支用来部署静态博客，而production分支用来备份生产环境。

3. 最后使用以下命令备份你的博客：

   ```bash
   hexo backup
   ```

   在未添加production备份分支时，仓库原来只有一个master分支；在运行完`hexo backup`命令、成功添加production分支以后，在仓库可以查看到多了一个production分支。同时，`bash`的命令提示行上部，当前目录的后面，也添加了`(master)`信息。

4. 下一步，如果有需要（比如说更换工作电脑以后），我们可以从仓库随时拉取这个`production`分支到新的电脑，那今天的备份工作就算成功了。



## 新电脑上从远程仓库拉取备份资料

这个需要在新电脑上试运行。



## 思考问题

或许将备份存放在同一仓库的`production`分支并不是一个好主意？为什么不存放在一个单独的仓库比如`marapython-production`？

## 参考资料

[使用 Hexo-Git-Backup 插件备份你的 Hexo 博客](https://www.itrhx.com/2019/09/29/A53-hexo-backup/)

[hexo-git-backup 博客备份及恢复](https://xiaoliblog.cn/page/hexobackup.html)

