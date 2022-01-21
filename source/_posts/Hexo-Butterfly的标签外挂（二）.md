---
title: Hexo Butterfly的标签外挂（二）
abbrlink: butterfly-tag-plugins
date: 2021-09-16 07:34:13
updated:
tags: [Hexo, Butterfly, Tag Plugins]
categories: [Hexo, Butterfly]
keywords:
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/clement-falize-oOgPgMqTL8A-unsplash.jpg
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

上一篇文章介绍了Hexo的原生标签外挂，这一篇文章我们再来介绍一下Butterfly主题的原生标签外挂，总共有8个，相关标签的js文件全部保存在`Blog/themes/butterfly/scripts/tag/`目录下面。

- button
- gallery
- hide
- inlineImg
- label
- mermaid
- note
- tabs

下面我们按照字母表的顺序，对8个标签外挂的使用方法一一介绍。

## button按钮

**Syntax**

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 鏈接
[text]        : 按鈕文字
[icon]        : [可選] 圖標
[color]       : [可選] 按鈕背景顔色(默認style時）
                      按鈕字體和邊框顔色(outline時)
                      default/blue/pink/red/purple/orange/green
[style]       : [可選] 按鈕樣式 默認實心
                      outline/留空
[layout]      : [可選] 按鈕佈局 默認為line
                      block/留空
[position]    : [可選] 按鈕位置 前提是設置了layout為block 默認為左邊
                      center/right/留空
[size]        : [可選] 按鈕大小
                      larger/留空
```



### Inline

{% tabs Inline Button %}

<!-- tab Preview -->

This is my website, click the button {% btn 'https://alowree.gitee.io',MaraPython %}
This is my website, click the button {% btn 'https://alowree.gitee.io',MaraPython,,outline%}

<!-- endtab -->
<!-- tab Code -->

```markdown
This is my website, click the button {% btn 'https://alowree.gitee.io',MaraPython %}
This is my website, click the button {% btn 'https://alowree.gitee.io',MaraPython,,outline%}
```

<!-- endtab -->

{% endtabs %}

### Block

{% tabs Aligned Button %}

<!-- tab Preview -->

This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block right blue larger %}

<!-- endtab -->
<!-- tab Code -->

```markdown
This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,block right blue larger %}
```

<!-- endtab -->

{% endtabs %}

### 灵活混用

不换行配置多个`btn`按钮，默认`inline`，靠左对齐，溢出自动换行。

{% tabs Solid_Button %}

<!-- tab Preview -->

{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,blue larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,pink larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,red larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,purple larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,orange larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,green larger %}


<!-- endtab -->

<!-- tab Code -->

```markdown
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,blue larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,pink larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,red larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,purple larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,orange larger %}{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,green larger %}
```

<!-- endtab -->

{% endtabs %}

Jerry给出的倒数第2个示例，示例代码和显示效果似乎并不匹配。例子通过换行配置了多个`btn`按钮，每个按钮应该仍然是`inline`格式，靠左对齐。这里只是因为代码的**换行**配置，所以显示为类似`block`格式的竖排按钮。

{% tabs newline_block_button %}

<!-- tab Preview -->

{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,blue larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,pink larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,red larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,purple larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,orange larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,green larger %}

<!-- endtab -->

<!-- tab Code -->

```markdown
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,blue larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,pink larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,red larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,purple larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,orange larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,green larger %}
```



<!-- endtab -->

{% endtabs %}

结合使用`<div>`标签+`.btn-center`类，让多个`inline`按钮居中。

{% tabs Outline_Button %}

<!-- tab Preview -->

<div class="btn-center">
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline blue larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline pink larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline red larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline purple larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline orange larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline green larger %}
</div>


<!-- endtab -->

<!-- tab Code -->

```markdown
<div class="btn-center">
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline blue larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline pink larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline red larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline purple larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline orange larger %}
{% btn 'https://alowree.gitee.io',MaraPython,far fa-hand-point-right,outline green larger %}
</div>
```

<!-- endtab -->

{% endtabs %}

## gallery相册

这里有`galleryGroup`和`gallery`两个标签，一个用于分类汇总的相册主页，一个用于单类多张的相册子页，二者可配合使用。

### galleryGroup

1. 先使用 `hexo new page xxxx` 生成一个普通页面
2. 在页面的.md文档里面直接使用`<div>`标签套用`galleryGroup`标签进行编辑

{% tabs gallery_group_page, 2 %}
<!-- tab Syntax -->

```markdown
<div class="gallery-group-main">
{% galleryGroup title description path image %}
{% galleryGroup 'title' 'description' 'path' 'image' %}
</div>
```

For clarity purpose, use quotation marks in case any contents in `title`, `description`, `path`, or `image` are too long, although such quotation marks can be omitted.
<!-- endtab -->
<!-- tab Preview -->

<div class="gallery-group-main">
{% galleryGroup Chicago 这里的冬天很冷 /gallery/chicago https://i.loli.net/2021/07/01/lyzOQL5EPgRKxF8.jpg %}
{% galleryGroup 'SFO' '有人称之为旧金山' '/gallery/sfo' 'https://i.loli.net/2021/07/01/mAtZsVUPSXeMgNx.jpg' %}
{% galleryGroup 'Minneapolis' '关于Minneapolis的图片' '/gallery/minneapolis' https://i.loli.net/2021/07/02/hwIYUPEBTaQOrAy.jpg %}
{% galleryGroup 'San Diego' '关于San Diego的图片' '/gallery/sandiego' https://i.loli.net/2021/07/02/LwrkBdy2CIu9VEh.jpg %} 
</div>


<!-- endtab -->
<!-- tab Code -->

```markdown
<div class="gallery-group-main">
{% galleryGroup Chicago 这里的冬天很冷 /gallery/chicago https://i.loli.net/2021/07/01/lyzOQL5EPgRKxF8.jpg %}
{% galleryGroup 'SFO' '有人称之为旧金山' '/gallery/sfo' 'https://i.loli.net/2021/07/01/mAtZsVUPSXeMgNx.jpg' %}
{% galleryGroup 'Minneapolis' '关于Minneapolis的图片' '/gallery/minneapolis' https://i.loli.net/2021/07/02/hwIYUPEBTaQOrAy.jpg %}
{% galleryGroup 'San Diego' '关于San Diego的图片' '/gallery/sandiego' https://i.loli.net/2021/07/02/LwrkBdy2CIu9VEh.jpg %} 
</div>
```

<!-- endtab -->
{% endtabs %}


### gallery

1. 先使用 `hexo new page xxxx` 生成一个普通页面
2. 在页面的.md文档里面直接使用`gallery`标签进行编辑

{% tabs gallery_sub_page, 2 %}

<!-- tab Code -->

```markdown
{% gallery %}
Image links
{% endgallery %}
```

<!-- endtab -->
<!-- tab Preview -->
{% gallery %}
Image links (to be added after fixing Gitee image server)
{% endgallery %}
<!-- endtab -->

{% endtabs %}

If you want to use a `/gallery/chicago` link format to display your photo content, you could simply move the entire `chicago` folder into the `gallery` folder. 



## hide隐藏

如果你想把一些文字、内容隐藏起来，并提供按钮让用户点击显示，可以使用这个标签外挂。

注意：`hide`标签似乎不能嵌套使用在`tabs`标签内部，所以本小节没有使用`tabs`标签的分栏设计，全部内容直接平铺开来。


### Inline

inline 在文本里面添加按鈕隱藏內容，只限文字

( content不能包含英文逗號，可用`&sbquo;`)

**标签语法**

```markdown
{% hideInline content,display,bg,color %}

content: 文本内容

display: 按钮显示的文字（可选）

bg: 按鈕的背景顏色(可選)

color: 按鈕文字的顏色(可選)
```

**示例代码**

```markdown
问题1。设置了按钮颜色和文字颜色，想知道答案吗？ {% hideInline 我是答案1,我是按钮提示,#FF7242,#fff %}

问题2。按钮颜色和文字颜色均为默认，想知道答案吗? {% hideInline 我是答案2 %}
```

**样式预览**

问题1。设置了按钮颜色和文字颜色，想知道答案吗？ {% hideInline 我是答案1,我是按钮提示,#FF7242,#fff %}

问题2。按钮颜色和文字颜色均为默认，想知道答案吗? {% hideInline 我是答案2 %}

### Block
block獨立的block隱藏內容，可以隱藏很多內容，包括圖片，代碼塊等等

( display 不能包含英文逗號，可用`&sbquo;`)

**标签语法**

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}

content: 文本內容
display: 按鈕顯示的文字(可選)
bg: 按鈕的背景顏色(可選)
color: 按鈕文字的顏色(可選)
```
**示例代码**

```markdown
这里提出一个问题，想知道答案吗？
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}
```
**样式预览**

这里提出一个问题，想知道答案吗？
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}

### Toggle
如果你需要展示的內容太多，可以把它隱藏在收縮框裏，需要時再把它展開。

( display 不能包含英文逗號，可用`&sbquo;`)

**标签语法**

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```
**示例代码**

```markdown
{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```
**样式预览**

{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}



## inlineImg行内图片

主题内的图片默认都是以`block`格式显示，如果你想以`inline`格式显示，可以使用这个标签外挂。

```markdown
{% inlineImg [src] [height] %}

[src]      :    圖片鏈接
[height]   ：   圖片高度限制【可選】
```

好像不怎么实用，不贴示例了。



## label行内色块

For Butterfly 3.7.5 and above

{% tabs Label, 3 %}
<!-- tab Syntax -->

```markdown
{% label [text] [color=default] %}
```

<!-- endtab -->

<!-- tab Parameters -->

| Parameter | Usage                                                        |
| --------- | ------------------------------------------------------------ |
| text      | Any text content                                             |
| color     | 【Optional】Background color, if omitted, by default is gray. <br/>default / blue / pink / red / purple / orange / green |

<!-- endtab -->

<!-- tab Preview -->
We practice {% label "Being ethical, respectful, creative, and collaborative." %} Our culture is built on {% label "closely knitted relationships" blue %} with our customers, suppliers, business partners, employees and our local community since our inception in 2020. We treat all individuals and entities within our business network {% label "fairly, with respect, dignity and mutual trust." pink %} {% label "Being ethical" red %} to us means {% label "having integrity" purple %} with a {% label "social responsibility" orange %} mindset to better create {% label brilliant green %} and {% label lasting green %} solutions for everyone associated with our business.

<!-- endtab -->

<!-- tab Code -->

```markdown
We practice {% label "Being ethical, respectful, creative, and collaborative." %} Our culture is built on {% label "closely knitted relationships" blue %} with our customers, suppliers, business partners, employees and our local community since our inception in 2020. We treat all individuals and entities within our business network {% label "fairly, with respect, dignity and mutual trust." pink %} {% label "Being ethical" red %} to us means {% label "having integrity" purple %} with a {% label "social responsibility" orange %} mindset to better create {% label brilliant green %} and {% label lasting green %} solutions for everyone associated with our business.
```

<!-- endtab -->

{% endtabs %}



## mermaid图表

**[Mermaid](https://mermaid-js.github.io/mermaid/#/) lets you create diagrams and visualizations using text and code.**

It is a Javascript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. Diagram types include Flowchart, Sequence Diagram, Gantt Diagram, Class diagram, Git graph, Entity Relationship Diagram, User Journey Diagram, and Pie Chart.

先需要修改主题配置文件`_config.butterfly.yml`，启用设置为`true`

```yml
# mermaid
# see https://github.com/knsv/mermaid
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme: default
```

示例

```markdown
{% mermaid %}
pie
    title Sales Overview in 2021
    "North America" : 52.96
    "EMEA" : 40.05
    "South America" : 20.01
    "Asia" :  5
{% endmermaid %}
```

{% mermaid %}
pie
    title Sales Overview in 2021
    "North America" : 52.96
    "EMEA" : 40.05
    "South America" : 20.01
    "Asia" :  5
{% endmermaid %}

```markdown
{% mermaid %}
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2021-01-06,2021-01-08
    Active task               :active,  des2, 2021-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2021-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
{% endmermaid %}
```

{% mermaid %}
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2021-01-06,2021-01-08
    Active task               :active,  des2, 2021-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d
    
    section Critical tasks
    Completed task in the critical line :crit, done, 2021-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    
    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h
    
    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h

{% endmermaid %}

## note备注

这一部分介绍的备注样式，有个名称叫做`Bootstrap Callout`，在主题配置文件`_config.butterfly.yml`中已经有作如下默认设置：

```yml
# Note (Bootstrap Callout)
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: true
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

`note`标签外挂有两种方法，`icons`和`light_bg_offset`只对方法一生效。

### 方法一

方法一内置了七种颜色，五个图标，但常用的样式有三个：绿色对勾表示肯定/赞同/成功，蓝色叹号表示提示/信息/备注，红色横杠表示否定/禁止/失败。

**Syntax**

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too)
{% endnote %}

[class]:	Optional. Different setting with different border color plus built-in in icon.
		(default / primary / success / info / warning / danger) 
[no-icon]:	Optional. Does not show icon
[style]:	Optional. Style setting as in `_config.butterfly.yml` can be overwritten here.
		(simple / modern / flat / disabled)
```

**Preview**

{% tabs Note_Bootstrap_Callout  %}

<!-- tab simple -->

```markdown
{% note simple %}
With `class` missing, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note default simple %}
With `class` = default, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note primary simple %}
With `class` = primary, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note success simple %}
With `class` = success, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note info simple %}
With `class` = info, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note warning simple %}
With `class` = warning, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note danger simple %}
With `class` = danger, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}
```

{% note simple %}
With `class` missing, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note default simple %}
With `class` = default, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note primary simple %}
With `class` = primary, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note success simple %}
With `class` = success, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note info simple %}
With `class` = info, `no-icon` missing, `style` = simple, and this is how the text area would look like. 
{% endnote %}

{% note warning simple %}
With `class` = warning, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

{% note danger simple %}
With `class` = danger, `no-icon` missing, `style` = simple, and this is how the text area would look like.
{% endnote %}

<!-- endtab -->

<!-- tab modern -->

```markdown
{% note modern %}
With `class` missing, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note default modern %}
With `class` = default, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note primary modern %}
With `class` = primary, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note success modern %}
With `class` = success, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note info modern %}
With `class` = info, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note warning modern %}
With `class` = warning, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note danger modern %}
With `class` = danger, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}
```

{% note modern %}
With `class` missing, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note default modern %}
With `class` = default, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note primary modern %}
With `class` = primary, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note success modern %}
With `class` = success, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note info modern %}
With `class` = info, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note warning modern %}
With `class` = warning, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

{% note danger modern %}
With `class` = danger, `no-icon` missing, `style` = modern, this removes left_border_color while adds background_color.
{% endnote %}

<!-- endtab -->
<!-- tab flat -->

```markdown
{% note flat %}
With `class` missing, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note default flat %}
With `class` = default, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note primary flat %}
With `class` = primary, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note success flat %}
With `class` = success, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note info flat %}
With `class` = info, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note warning flat %}
With `class` = warning, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note danger flat %}
With `class` = danger, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}
```

{% note flat %}
With `class` missing, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note default flat %}
With `class` = default, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note primary flat %}
With `class` = primary, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note success flat %}
With `class` = success, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note info flat %}
With `class` = info, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note warning flat %}
With `class` = warning, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

{% note danger flat %}
With `class` = danger, `no-icon` missing, `style` = flat, this combines left_border_color and a lighter background_color.
{% endnote %}

<!-- endtab -->
<!-- tab disabled  -->

```markdown
{% note disabled %}
With `class` missing, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note default disabled %}
With `class` = default, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note primary disabled %}
With `class` = primary, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note success disabled %}
With `class` = success, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note info disabled %}
With `class` = info, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note warning disabled %}
With `class` = warning, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note danger disabled %}
With `class` = danger, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}
```

{% note disabled %}
With `class` missing, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note default disabled %}
With `class` = default, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note primary disabled %}
With `class` = primary, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note success disabled %}
With `class` = success, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note info disabled %}
With `class` = info, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note warning disabled %}
With `class` = warning, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

{% note danger disabled %}
With `class` = danger, `no-icon` missing, `style` = disabled, this just leaves the icon plus plain text.
{% endnote %}

<!-- endtab -->
<!-- tab no-icon  -->

```markdown
{% note no-icon %}
With `class` not provided, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note default no-icon %}
With `class` = default, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note primary no-icon %}
With `class` = primary, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note success no-icon %}
With `class` = success, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note info no-icon %}
With `class` = info, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note warning no-icon %}
With `class` = warning `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note danger no-icon %}
With `class` = danger, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}
```

{% note no-icon %}
With `class` not provided, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note default no-icon %}
With `class` = default, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note primary no-icon %}
With `class` = primary, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note success no-icon %}
With `class` = success, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note info no-icon %}
With `class` = info, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note warning no-icon %}
With `class` = warning `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

{% note danger no-icon %}
With `class` = danger, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.
{% endnote %}

<!-- endtab -->
<!-- tab inline tags  -->

```markdown
{% note no-icon %}
With `class` not provided, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color. This is an `inline code` as surrounded by one pair of backticks, standard markdown usage.
{% endnote %}

{% note default no-icon %}
With `class` = default, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.  html tag <kbd>Ctrl + C</kbd>
{% endnote %}

{% note primary no-icon %}
With `class` = primary, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.  

> This is a blockquote

{% endnote %}
```

{% note no-icon %}
With `class` not provided, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color. This is an `inline code` as surrounded by one pair of backticks, standard markdown usage.
{% endnote %}

{% note default no-icon %}
With `class` = default, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.  html tag <kbd>Ctrl + C</kbd>
{% endnote %}

{% note primary no-icon %}
With `class` = primary, `no-icon` given, `style` not provided, this is roughly about to take the icon off the `flat` style. left_border_color plus a lighter background_color.  

> This is a blockquote

{% endnote %}

<!-- endtab -->

{% endtabs %}

### 方法二

方法二在图标使用上有了扩展，有了font awesome icons加持，图标数量直接冲上了1000+。

**Syntax**

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too)
{% endnote %}

[color]:	Optional. 
		(default / blue / pink / red / purple / orange / green)
[icon]: 	Optional. Either font awesome icons or `no-icon`
[style]: 	Optional. Configuration here overrides setting in `_config_butterfly.yml`
		(simple/modern/flat/disabled)

```

**Preview**

{% tabs Note_Font_Awesome_Icons %}

<!-- tab simple -->

```markdown
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->

<!-- tab modern -->

```markdown
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->

<!-- tab flat -->

```markdown
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
<!-- endtab -->


<!-- tab disabled -->

```markdown
{% note 'fab fa-cc-visa' disabled  %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' disabled  %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled  %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled  %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled  %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' disabled  %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled  %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' disabled  %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled  %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled  %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled  %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' disabled  %}
前端最討厭的瀏覽器
{% endnote %}
<!-- endtab -->

<!-- tab no-icon -->

```markdown
{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
<!-- endtab -->


{% endtabs %}

## tabs分栏

**Syntax**

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}

Unique name   : Unique name of tabs block tag without comma.
                Will be used in #id's as prefix for each tab with their index numbers.
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                Only for current url of post/page must be unique!
[index]       : Index number of active tab.
                If not specified, first tab (1) will be selected.
                If index is -1, no tab will be selected. It's will be something like spoiler.
                Optional parameter.
[Tab caption] : Caption of current tab.
                If not caption specified, unique name with tab index suffix will be used as caption of tab.
                If not caption specified, but specified icon, caption will empty.
                Optional parameter.
[@icon]       : FontAwesome icon name (full-name, look like 'fas fa-font')
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
                Optional parameter.
```
Jerry给出了四个代码示例，前面三个主要讲解在参数缺省状态下的实际效果，而我们只需要掌握第四种即可。

- 在`tabs`标签头设置当前分栏的名称，同时设置默认展示栏位
- 在每个`tab`子标签内设置每个栏位的名称
  - 栏位名称可以只有图标，没有名称
  - 栏位名称可以是图标+名称

**Codes**

```markdown
{% tabs test4, 2 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fas fa-bell -->
**tab只有图标 沒有Tab名字**

因为tabs标签头设置了默认展示栏位2，所以优先展示这一栏，即第2栏
<!-- endtab -->

<!-- tab 雪花@fas fa-snowflake -->
**tab名字+icon**
<!-- endtab -->
{% endtabs %}
```

**Preview**

{% tabs test4, 2 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fas fa-bell -->
**tab只有图标 沒有Tab名字**

因为tabs标签头设置了默认展示栏位2，所以优先展示这一栏，即第2栏
<!-- endtab -->

<!-- tab 雪花@fas fa-snowflake -->
**tab名字+icon**
<!-- endtab -->
{% endtabs %}


## 参考资料

- Butterfly官网：[Butterfly 安裝文檔(三) 主題配置-1：標籤外掛（Tag Plugins）](https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89)
