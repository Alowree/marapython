---
title: Hexo Butterfly的主题插件
categories: Hexo
abbrlink: butterfly-plug-ins
date: 2021-09-27 12:25:20
updated:
tags:
keywords:
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-ag-zn-4075452.jpg
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

## 固定链接

在站点配置文件`_config.yml`里面，站点URL的默认设置如下：

```yml
url: https://alowree.gitee.io
permalink: :year/:month/:day/:title/
```

这样，每当发布一篇新的博客文章，生成的URL链接格式类似于：

`https://alowree.gitee.io/2021/9/27/文章标题`

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