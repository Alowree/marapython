---
title: Hexo 已安装插件
categories: Hexo
abbrlink: plug-ins
date: 2021-09-27 12:25:20
updated:
tags:
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

本文的主要目的在于记录Butterfly主题下，已经安装使用的各种插件。

## 文章加密

1. 安装插件
    ```bash
    npm install hexo-blog-encrypt --save
    ```
2. 在博客文章的Front Matter里面添加
    ```markdown
    password: test
    message: 本文已经加密，请输入密码：
    ```
    
## 插入B站视频

这里没有使用插件，直接使用HTML标签写就。

1. 直接在博客文章内帖入下列代码，用B站视频的嵌入代码来代替`<iframe>`、`</iframe>`之间的内容

   ```markdown
   <div align=center class="aspect-ratio">
       <iframe src="//player.bilibili.com/player.html?bvid=BV1fq4y1A7nq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
   </div>
   ```

2. 在`custom.css`里，添加下面的样式代码

   ```CSS
   /*哔哩哔哩视频适配*/
   .aspect-ratio {position: relative;width: 100%;height: 0;padding-bottom: 75%;margin: 3% auto;text-align: center;}      
   .aspect-ratio iframe {
       position: absolute;
       width: 100%;
       height: 100%;
       left: 0;
       top: 0;
   }
   ```

   

若未添加`.aspect-ratio`样式，预览样式如下：
<div align=center>
    <iframe src="//player.bilibili.com/player.html?bvid=BV1fq4y1A7nq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

添加`.aspect-ratio`样式以后，预览样式如下：
<div align=center class="aspect-ratio">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1fq4y1A7nq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
问题：

在Typora里面使用iframe可以直接看到视频，使用video则无法直接看到视频。为什么？应该如何解决？

## 固定链接

在站点配置文件`_config.yml`里面，站点URL的默认设置如下：

```yml
url: https://marapython.com
permalink: :year/:month/:day/:title/
```

这样，每当发布一篇新的博客文章，生成的URL链接格式类似于：

`https://marapython.com/2021/9/27/文章标题`

对于搜索引擎来说，一般的中小型网站，它只爬前3层，超过3层就不再爬取。如上所述，我们博客站点上的文章，其链接层次已经去到了第4层，是不利于搜索引擎爬取和收录的。因此，我们采用固定链接方式减少文章链接层次来达到SEO的目的。

1. 安装插件

   ```bash
   npm install hexo-abbrlink --save
   ```

2. 站点配置文件`_config.yml`里面，变更固定链接

   ```yml
   # permalink: :year/:month/:day/:title/
   permalink: posts/:abbrlink/
   ```

3. 站点配置文件`_config.yml`里面，继续添加

   ```yml
   # abbrlink config
   abbrlink:
     alg: crc32      #support crc16(default) and crc32
     rep: dec        #support dec(default) and hex
     drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
     # Generate categories from directory-tree
     # depth: the max_depth of directory-tree you want to generate, should > 0
     auto_category:
        enable: true  #true(default)
        depth:        #3(default)
        over_write: false 
     auto_title: false #enable auto title, it can auto fill the title by path
     auto_date: false #enable auto date, it can auto fill the date by time today
     force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.
   permalink_defaults:
   pretty_urls:
     trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
     trailing_html: true # Set to false to remove trailing '.html' from permalinks
   ```

经过以上配置，在`hexo new post "文章标题"`、`hexo generate`之后，在文章头部的`Front Matter`位置会生成类似于`abbrlink: 1155088082`这样的内容，那这篇文章的URL也就自然地成为了`https://marapython.com/posts/1155088082/`这样的格式。

如果我们觉得类似`1155088082`这样的数字没有什么实际意义，也可以手动地在文章头部的`Front Matter`位置把这串数字更改为包含实际意义的英文单词。比如我们把`1155088082`更改为`seo`以后，那这篇文章在重新生成以后，其URL就会自动变成`https://marapython.com/posts/seo/`了。

## 博客目录备份至远程仓库

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

## 从远程仓库拉取备份

这个需要在新电脑上试运行。

在新电脑D盘创建一个新的工作目录`Blogsite20220121`，进入`Blogsite202201021`鼠标右击选中`Get Bash Here`打开`bash`命令行，运行下面命令，克隆复制备份资料到新电脑。

```bash
git clone -b production https://github.com/Alowree/marapython.git MaraPython
```

将生产环境拉取至本地电脑之后，再在新电脑上安装Hexo：

```bash
cd MaraPython
```

```bash
npm install hexo-cli
```

```bash
hexo -v
```

```bash
npm install
```

```bash
npm install hexo-deployer-git --save
```

```bash
hexo cl
hexo g
hexo s
```

本地预览成功。



## 思考问题

或许将备份存放在同一仓库的`production`分支并不是一个好主意？为什么不存放在一个单独的仓库比如`marapython-production-backup`？

经测试，如果更改上述第2步中的远程仓库设置：

```yml
backup:
  type: git
  theme: butterfly
  message: To back up my locale Hexo production folder to a remote repository
  repository:
    github: git@github.com:Alowree/marapython-production-backup.git
```

再使用`hexo b`命令，这时并不能将生产目录成功备份至远程仓库`marapython-production-backup`，而是直接将生产目录更新到博客仓库`marapython`的`master`分支，并且覆盖和擦除了原来`hexo d`所部署的博客内容。This is weird. 可能插件本身就是按照设定的使用逻辑所开发出来，不能向单独的仓库进行备份，只能向博客仓库的另外一个分支备份吧。Anyway, forget it.

## 参考资料

[使用 Hexo-Git-Backup 插件备份你的 Hexo 博客](https://www.itrhx.com/2019/09/29/A53-hexo-backup/)

[hexo-git-backup 博客备份及恢复](https://xiaoliblog.cn/page/hexobackup.html)