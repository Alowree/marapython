---
title: 如何在Hexo博客文章中添加思维导图
abbrlink: 3830822335
date: 2021-08-30 08:53:44
updated:
tags: [Hexo, Butterfly]
categories: [Hexo]
keywords:
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-jill-burrow-6858658.jpg
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

本博客乃基于[Hexo](https://hexo.io/zh-cn/index.html)框架，使用[Butterfly](https://butterfly.js.org/)主题搭建而成。所以本文从分类上来讲，当然也属于Hexo魔改系列。教程内容应该普遍适用于[Hexo](https://hexo.io/zh-cn/index.html)的各个主题，而不仅限于[Butterfly](https://butterfly.js.org/)。

2021年的今天，不论是在PC端还是浏览器端，已经有不少的`思维导图`制作工具，可以使我们方便快捷地生成一份逻辑清晰的树形结构图，然后在团队协作或者小组会议中用作一份简图，协助讨论或者汇报的有效进行。像这种简便美观、易学易用、且轻量级的应用，应该可以解放那些多年困囿于PPT而不得其精髓的用户。

## 思维导图生成工具

### Xmind

升级后变成了试用版，带水印，暂时弃坑。

### 知犀

连注册都不用的Web端应用，[知犀](https://www.zhixi.com/)->[免费创作](https://www.zhixi.com/space)，海量模板可以选择使用。目前完全免费，试用当中。 

## Markdown编辑器

### Sublime Text 3

`Markdown`预览功能需要安装插件，手动刷新，远不如`Typora`来得方便易用。以后，只用`Sublime Text 3`来写`Python`代码就好，写`Markdown`就算了吧。

### Typora

免费软件，一直在使用。

### Document Node

收费软件，后续值得稍加试用研究一下。

## 如何在Hexo博客文章中插入思维导图

### 【方法一】图片格式



![](https://gitee.com/Alowree/img/raw/master/%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E5%B7%A5%E4%BD%9C%E8%AE%A1%E5%88%92_%E5%89%AF%E6%9C%AC.png)

### 【方法二】SVG格式

- 将Markdown的层级结构复制粘贴至[https://markmap.js.org/repl/](https://markmap.js.org/repl/)的左边窗口
- 在右边窗口预览并下载，可以选择Download as SVG 或者 Download as interactive HTML
- 尝试在文章中插入SVG图片（Typora好像无法插入这种格式的图片），失败，放弃
- 尝试复制HTML文件内的代码至文章，导图可以显示，但是导图的尺寸似乎不正常，遂放弃

这个工作流程未能完全走通。

### 【方法三】使用`hexo-markmap`插件

- 安装插件

```bash
npm install hexo-markmap
```

- 熟练用户，可以在Typora编辑器里直接使用`markmap`标签，使用h1-h6标题进行层级结构编辑

```markdown
{% markmap 300px %}
# Soundfreaq
## 国外市场
### 地区经销商
#### 连锁商超
#### 数码店
#### 星级酒店
##### Four Seasons
##### Ritz-Calton
##### Trump Hotels
##### Renaissance
##### Loews
##### Hyatt
##### Novotel
##### St. Regis
##### Langham
##### Crown Plaza
##### Hilton
##### Marriott
##### The Standard
##### Thompson
##### One & Only
#### 线上渠道
##### 美亚
##### 英亚
## 国内市场
### 淘宝店（自营）
### 京东旗舰店（筹备）
### 国内经销商
#### 酒店连锁
##### Niccolo
##### Hilton
{% endmarkmap %}
```

- 新手用户，可以换用一种更为直观的方法，在[知犀](https://www.zhixi.com/)->[免费创作](https://www.zhixi.com/space)->[人力资源工作计划](https://www.zhixi.com/tpl/00da1f0afe8f1aad0e58dbf2ea5c5430)模板下，将已经编辑和预览完毕的导图文件以`.md`格式导出
- 复制`.md`文件内容，粘贴至标签`{% markmap %}`和`{% endmarkmap %}`之间即可。`hexo-markmap`插件渲染生成的导图，跟[知犀](https://www.zhixi.com/)->[免费创作](https://www.zhixi.com/space)->[人力资源工作计划](https://www.zhixi.com/tpl/00da1f0afe8f1aad0e58dbf2ea5c5430)模板所渲染生成的导图，样式略有差异，逻辑结构完全相同，同为SVG格式，并可以通过鼠标滑轮对这个内嵌式的导图进行缩放。这样，我们部署在Web端的思维导图实际视觉效果如下：

{% markmap %}
# Soundfreaq
## 国外市场
### 地区经销商
#### 连锁商超
#### 数码店
#### 星级酒店
##### Four Seasons
##### Ritz-Calton
##### Trump Hotels
##### Renaissance
##### Loews
##### Hyatt
##### Novotel
##### St. Regis
##### Langham
##### Crown Plaza
##### Hilton
##### Marriott
##### The Standard
##### Thompson
##### One & Only
#### 线上渠道
##### 美亚
##### 英亚
## 国内市场
### 淘宝店（自营）
### 京东旗舰店（筹备）
### 国内经销商
#### 酒店连锁
##### Niccolo
##### Hilton
{% endmarkmap %}

需要注意，在`markmap`官网上，在最低标题层级内是可以使用无序列表的，这些无序列表的内容也会很转化成导图结构中下一个层级的内容。但是，经过调试，在`Typora`里面编辑博客文章时，还是避免使用无序列表，而是应该使用次一级标题，否则整个导图将无法正常解析和显示。

###【方法四】使用`hexo-tag-plugins`插件
关于`hexo-tag-plugins`的详细使用方法，我们已经在文章里[Hexo Butterfly 的标签外挂（三）](http://alowree.gitee.io/posts/2118605294/)详细介绍过了。这个插件里总共包括16个标签，`mindmap`标签只是其中之一。接下来，我们只是简单地对照一下`mindmap`标签与`markmap`标签相比，在使用方法上的不同之处。

1. 每个层级不再使用标题，而是换用无序列表，层层之间进行缩进
2. 默认高度是300，注意后面不跟单位`px`

**示例代码**

```markdown
{% mindmap 600 %}
- Soundfreaq
	-  国外市场
		- 地区经销商
            - 连锁商超
            - 数码店
            - 星级酒店
                - Four Seasons
                - Ritz-Calton
                - Trump Hotels
                - Renaissance
                - Loews
                - Hyatt
                - Novotel
                - St. Regis
                - Langham
                - Crown Plaza
                - Hilton
                - Marriott
                - The Standard
                - Thompson
                - One & Only
			- 线上渠道
                - 美亚
                - 英亚
	- 国内市场
		- 淘宝店（自营）
		- 京东旗舰店（筹备）
		- 国内经销商
            - 酒店连锁
                - Niccolo
                - Hilton
{% endmindmap %}
```

**样式预览**
{% mindmap 600 %}
- Soundfreaq
	-  国外市场
		- 地区经销商
            - 连锁商超
            - 数码店
            - 星级酒店
                - Four Seasons
                - Ritz-Calton
                - Trump Hotels
                - Renaissance
                - Loews
                - Hyatt
                - Novotel
                - St. Regis
                - Langham
                - Crown Plaza
                - Hilton
                - Marriott
                - The Standard
                - Thompson
                - One & Only
			- 线上渠道
                - 美亚
                - 英亚
	- 国内市场
		- 淘宝店（自营）
		- 京东旗舰店（筹备）
		- 国内经销商
            - 酒店连锁
                - Niccolo
                - Hilton
		            {% endmindmap %}