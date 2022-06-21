---
title: Hexo Butterfly的标签外挂（一）
tags:
  - Hexo
  - Butterfly
  - Tag Plugins
categories: Hexo
toc_number: true
abbrlink: hexo-tag-plugins-1
date: 2021-09-16 07:33:44
updated:
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

首先，这篇文章的题目似乎改作《Hexo的标签外挂》会更为适合，因为本文内容并不涉及到Butterfly主题。但考虑到后面其他两篇文章的行文逻辑顺序，就统一命名为《Hexo Butterfly的标签外挂》，共三篇，此为其一。

Hexo原生就带有标签外挂，在官网上也有技术文档。这些标签中，最常用当然要属的`blockquote`和`codeblock`这两个。使用Typora编辑博客文章的时候，要调用这两种最常用的样式，当然还是使用Markdown的标准语法最为便捷，不但输入的格式化代码较少，而且在Typora里面可以即时预览样式。但是，如果使用Hexo的标签外挂，博客站点就可以拥有更为丰富的展示样式可供我们选用。使用标签外挂无法在Typora里面即时预览，必须使用`hexo cl`，`hexo g`，和`hexo s`在本地浏览器下建立服务后才能预览。本文主要来尝试一下官网介绍的各种标签的使用方法，看下实际预览效果。



- blockquote
- codeblock
- pullquote
- jsfiddle
- gist
- iframe
- link
- include_code
- youtube
- vimeo
- post_path, post_link
- asset_path, asset_img, asset_link
- raw

## blockquote

在文章中插入引言，可包含作者、来源和标题。

**标签语法**

```markdown
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

**Demo 1** 没有提供参数，则只输出普通的 blockquote，相当于Markdown的引用语法<kbd>\></kbd>+<kbd>空格</kbd>+文本

```markdown
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Demo 2** 引用书上的句子

```markdown
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Demo 3** 引用 Twitter

```markdown
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Demo 4** 引用网络上的文章

```markdown
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## codeblock

在Typora里要调用代码块样式，可以分别使用三个点号（three backticks）一前一后包围代码块即可，并且在前面的三个点号后面紧跟语言的名称。使用Markdown的博主99%都非常熟悉这个语法，在此就不再赘述。

## iframe

**标签语法**

```markdown
{% iframe url [width] [height] %}

url		: 直接使用来自bilibili的视频链接
[width]		: 直接使用整数，单位是pixel。建议使用`100%`，即满屏。
[height]	: 直接使用整数，单位是pixel。建议使用`100%`，即满屏。
```

**代码实例**

```markdown
{% iframe //player.bilibili.com/player.html?aid=248141899&bvid=BV12v41157Mb&cid=339791117&page=1 100% 100% %}

<iframe src="//player.bilibili.com/player.html?aid=548164883&bvid=BV1fq4y1A7nq&cid=413312905&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<div align=center class="aspect-ratio">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1fq4y1A7nq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

**样式预览**

{% iframe //player.bilibili.com/player.html?aid=248141899&bvid=BV12v41157Mb&cid=339791117&page=1 100% 100% %}

<iframe src="//player.bilibili.com/player.html?aid=548164883&bvid=BV1fq4y1A7nq&cid=413312905&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<div align=center class="aspect-ratio">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1fq4y1A7nq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



## link

关于`link`标签，请参考下一篇文章，[Hexo Butterfly 的标签外挂（三）](https://marapython/posts/2118605294/#link链接卡片)，将介绍由插件`hexo-tag-plugins`引入的`link`标签之使用方法。之所以不在这里继续介绍Hexo原生的`link`标签，是因为我的一个猜测：在安装了 `hexo-tag-plugins` 插件之后，插件内的 `link` 标签将会覆盖 Hexo 的原生 `link` 标签。所以，在这里刻舟求剑地调试所谓Hexo的原生`link`标签是没有意义的，因为它已经被overwritten，原有样式不再生效了。

## youtube

由于国情的原因，`youtube`和`vimeo`这两个标签在国内应该是无法直接使用的。要实现类似的功能，请参考[`video`标签](https://marapython/posts/2118605294/#video)和[`iframe`标签](#iframe)的使用方法。

## vimeo

由于国情的原因，`youtube`和`vimeo`这两个标签在国内应该是无法直接使用的。要实现类似的功能，请参考[`video`标签](https://marapython/posts/2118605294/#video)和[`iframe`标签](#iframe)的使用方法。



## 参考资料

- Hexo官网：[标签插件（Tag Plugins）](https://hexo.io/zh-cn/docs/tag-plugins)
