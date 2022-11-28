---
title: 如何在Hexo博客文章中添加思维导图
abbrlink: hexo-markmap
date: 2021-08-30 08:53:44
updated:
tags: [Hexo, Butterfly]
categories: [Hexo]
keywords:
description: Markmap is a combination of markdown and mindmap. It parses markdown content and extract its intrinsic hierarchical structure and renders an interactive mindmap, aka markmap.
top_img:
comments:
cover: https://image.marapython.com/pexels-frank-cone-2495173.jpg
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

[Markmap](https://markmap.js.org/) is a combination of markdown and mindmap. It parses markdown content and extract its intrinsic hierarchical structure and renders an interactive mindmap, aka markmap.



### 使用`hexo-markmap`插件

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

### 使用`hexo-tag-plugins`插件

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

不得不说，markmap这个样式真的是丑到爆，可以放弃治疗了。