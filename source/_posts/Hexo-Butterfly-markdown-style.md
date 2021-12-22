---
title: Markdown Style Preview
tags:
  - Markdown
categories:
  - Markdown
keywords:
  - Markdown
description: [This post is used for testing markdown style, including headers, blockquotes, lists, and etc., along with some HTML tags.]
top_img: 
cover: https://gitee.com/Alowree/img/raw/master/pexels-chris-f-6664375.jpg
swiper_index: 1
abbrlink: markdown
date: 2021-07-09 10:09:14
updated:
comments:
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
---

This post is used for testing markdown style. 

-----

## Headers

要创建标题，请在单词或短语前面添加井号`#` 。`#`的数量代表了标题的级别。例如，添加三个`#`表示创建一个三级标题 (`<h3>`) (例如：### My Header)。

| Markdown语法 | HTML | 预览效果 |
| ------------ | ---- | -------- |
|`### Heading level 3`	|`<h3>Heading level 3</h3>`	|<h3>Heading level 3</h3>|
|`#### Heading level 4`	|`<h4>Heading level 4</h4>`	|<h4>Heading level 4</h4>|
|`##### Heading level 5`	|`<h5>Heading level 5</h5>`	|<h5>Heading level 5</h5>|
|`###### Heading level 6`	|`<h6>Heading level 6</h6>`	|<h6>Heading level 6</h6>|

## Paragraphs

要创建段落，请使用空白行将一行或多行文本进行分隔。

| Markdown语法 | HTML | 预览效果 |
| ------------ | ---- | -------- |
|`I really like using Markdown.`<br><br>`I think I'll use it to format all of my documents from now on.`|	`<p>I really like using Markdown.</p>`<br><br>`<p>I think I'll use it to format all of my documents from now on.</p>`|<p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p>|



## Emphasis

```markdown
Emphasis, aka italics, with *asterisks* or _underscores_. Equivalent to `<em>` `</em>`tag.

Strong emphasis, aka bold, with **asterisks** or __underscores__. Equivalent to `<strong>` `</strong>`tag.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~ Equivalent to `<del>` `</del>`tag.
```

Emphasis, aka italics, with *asterisks* or _underscores_. Equivalent to `<em>` `</em>`tag.

Strong emphasis, aka bold, with **asterisks** or __underscores__. Equivalent to `<strong>` `</strong>`tag.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. 前后各使用两个波浪号包围删除文本。 ~~Scratch this.~~ Equivalent to `<del>` `</del>`tag.

## Lists

Unordered list

- Humidifiers
- Lamps
- Speakers

Ordered list

1. Humidifiers
   1. Big sizes
   2. Medium sizes
   3. Small sizes
2. Lamps
   - Floor lamps
   - Table lamps
   - Ceiling lamps
3. Speakers
   - Alarm clocks
   - Bluetooth speakers
   - Soundbars

## Links

超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

对应的HTML代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

```markdown
欢迎来我的博客看看，这是传送门 [MaraPython](https://www.marapython.com/)
```

渲染效果如下：

欢迎来我的博客看看，这是传送门 [MaraPython](https://www.marapython.com)

链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```markdown
欢迎来我的博客看看，这是带title属性的传送门 [MaraPython](https://www.marapython.com/ "Marketing Analytics with Python and Marathon")
```
渲染效果如下：

欢迎来我的博客看看，这是带title属性的传送门 [MaraPython](https://www.marapython.com "Marketing Analytics with Python and Marathon")

## Images

插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`。

要添加图像，请使用感叹号`!`, 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。在Typora里面，快捷键<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>会快速插入图片语法代码。

对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`

```markdown
![一张来自Matery主题的图片](https://gitee.com/Alowree/img/raw/master/cover.jpg "Banner Image from Matery Theme")
```

渲染效果如下：

![一张来自Matery主题的图片](https://gitee.com/Alowree/img/raw/master/cover.jpg "Banner Image from Matery Theme")

给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。这其实是图片+链接的混合使用方法。

```markdown
[![Matery主题的Banner图片一](https://gitee.com/Alowree/img/raw/master/0.jpg)](http://blinkfox.com/)
```

渲染效果如下：

[![Matery主题的Banner图片一](https://gitee.com/Alowree/img/raw/master/0.jpg)](http://blinkfox.com/)

## Codes

### Inline Code

```markdown
An `inline code` has one pair of back-ticks around it.
```

An `inline code` has one pair of back-ticks around it.

### Code Block

要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。

	<html>
		<head>
		</head>
	</html>

经过<kbd>Fn</kbd>+<kbd>F12</kbd>查看发现，页面渲染生成了`<pre><code>代码内容</code></pre>`标签。

### Fenced Code Block

要创建不用缩进的代码块，请使用 [围栏式代码块（fenced code blocks）](https://markdown.com.cn/extended-syntax/fenced-code-blocks.html). A `fenced code block` has three pairs of back-ticks around it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```



## Tables

要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。

```markdown
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

渲染效果如下：

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

Tip: 使用连字符和管道创建表可能很麻烦。为了加快该过程，请尝试使用[Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)或者[TableConvert Online](https://tableconvert.com/)。使用图形界面构建表，然后将生成的Markdown格式的文本复制到文件中。

如果我们不对Markdown表格的宽度进行定义的话，表格是会（按照某种未知的规则）自动换行的，有的时候自动换行的产生的排版效果并不美观。这个时候就需要使用自定义宽度来解决了。我们可以通过插入一个空白div标签并自定义宽度的方式，来取得想要的排版效果。

**未定义宽度**

```markdown
| 类别   | 含义                                                           | 行为                                    |
|-------|--------------------------------------------------------------|---------------------------------------|
| 独奏环境  | 声音不是必不可少的，但它会使其他音频静音。例如，有配乐的游戏。                              | 响应静音开关。 不与其他声音混合。 在后台不播放。             |
| 周围    | 声音不是必不可少的，它不会使其他音频静音。例如，一个让人们在玩游戏时播放其他应用程序中的音乐来代替游戏原声的游戏。    | 响应静音开关。 与其他声音混合。 在后台不播放。              |
| 回放    | 声音是必不可少的，并且可能与其他音频混合。例如，教外语的有声读物或教育应用，人们在离开应用后可能想听。          | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台播放。    |
| 记录    | 声音被记录下来。例如，提供音频录制模式的笔记应用程序。如果此类应用允许人们播放已记录的笔记，则可能会将其类别切换为播放。 | 不响应静音开关。 不与其他声音混合。 可以在后台录制。           |
| 播放并录制 | 可能会同时录制和播放声音。例如，音频消息传递或视频通话应用程序。                             | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台录制和播放。 |
```

| 类别   | 含义                                                           | 行为                                    |
|-------|--------------------------------------------------------------|---------------------------------------|
| 独奏环境  | 声音不是必不可少的，但它会使其他音频静音。例如，有配乐的游戏。                              | 响应静音开关。 不与其他声音混合。 在后台不播放。             |
| 周围    | 声音不是必不可少的，它不会使其他音频静音。例如，一个让人们在玩游戏时播放其他应用程序中的音乐来代替游戏原声的游戏。    | 响应静音开关。 与其他声音混合。 在后台不播放。              |
| 回放    | 声音是必不可少的，并且可能与其他音频混合。例如，教外语的有声读物或教育应用，人们在离开应用后可能想听。          | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台播放。    |
| 记录    | 声音被记录下来。例如，提供音频录制模式的笔记应用程序。如果此类应用允许人们播放已记录的笔记，则可能会将其类别切换为播放。 | 不响应静音开关。 不与其他声音混合。 可以在后台录制。           |
| 播放并录制 | 可能会同时录制和播放声音。例如，音频消息传递或视频通话应用程序。                             | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台录制和播放。 |



**自定义宽度**

```markdown
| 类别<div style="width:100px"></div>  | 含义                                                           | 行为                                    |
|-------|--------------------------------------------------------------|---------------------------------------|
| 独奏环境  | 声音不是必不可少的，但它会使其他音频静音。例如，有配乐的游戏。                              | 响应静音开关。 不与其他声音混合。 在后台不播放。             |
| 周围    | 声音不是必不可少的，它不会使其他音频静音。例如，一个让人们在玩游戏时播放其他应用程序中的音乐来代替游戏原声的游戏。    | 响应静音开关。 与其他声音混合。 在后台不播放。              |
| 回放    | 声音是必不可少的，并且可能与其他音频混合。例如，教外语的有声读物或教育应用，人们在离开应用后可能想听。          | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台播放。    |
| 记录    | 声音被记录下来。例如，提供音频录制模式的笔记应用程序。如果此类应用允许人们播放已记录的笔记，则可能会将其类别切换为播放。 | 不响应静音开关。 不与其他声音混合。 可以在后台录制。           |
| 播放并录制 | 可能会同时录制和播放声音。例如，音频消息传递或视频通话应用程序。                             | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台录制和播放。 |
```


| 类别<div style="width:100px"></div> | 含义                                                           | 行为                                    |
|-------|--------------------------------------------------------------|---------------------------------------|
| 独奏环境  | 声音不是必不可少的，但它会使其他音频静音。例如，有配乐的游戏。                              | 响应静音开关。 不与其他声音混合。 在后台不播放。             |
| 周围    | 声音不是必不可少的，它不会使其他音频静音。例如，一个让人们在玩游戏时播放其他应用程序中的音乐来代替游戏原声的游戏。    | 响应静音开关。 与其他声音混合。 在后台不播放。              |
| 回放    | 声音是必不可少的，并且可能与其他音频混合。例如，教外语的有声读物或教育应用，人们在离开应用后可能想听。          | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台播放。    |
| 记录    | 声音被记录下来。例如，提供音频录制模式的笔记应用程序。如果此类应用允许人们播放已记录的笔记，则可能会将其类别切换为播放。 | 不响应静音开关。 不与其他声音混合。 可以在后台录制。           |
| 播放并录制 | 可能会同时录制和播放声音。例如，音频消息传递或视频通话应用程序。                             | 不响应静音开关。 可能会或可能不会与其他声音混合。 可以在后台录制和播放。 |

经过<kbd>Fn</kbd>+<kbd>F12</kbd>查看“类别”单元格，发现渲染生成了`<th>类别<div style="width:100px"></div></th>`这样的代码。相当于在瘦表头“类别”后面添加100px的空白。

## Blockquotes

要创建块引用，请在段落前添加一个 `>` 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

> Dorothy followed her through many of the beautiful rooms in her castle.


块引用可以包含多个段落。为段落之间的空白行添加一个 > 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>> 这里是嵌套引用的样式预览。 
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>
> > 这里是嵌套引用的样式预览。 

## Horizontal Rule

要创建分隔线，请在单独一行上使用三个或多个星号 (`***`)、破折号 (`---`) 或下划线 (`___`) ，并且不能包含其他内容。

三个星号

---

三个连字号

---

三个下划线

***

为了兼容性，请在分隔线的前后均添加空白行。

## Line Breaks

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。

| Markdown语法                                                 | HTML                                                         | 预览效果                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| `This is the first line.  ` <br> `And this is the second line.` | `<p>This is the first line.<br>`<br>`And this is the second line.</p>` | This is the first line.<br> And this is the second line. |

几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为`结尾空格（trailing whitespace)` 的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 `<br>` 标签。

为了兼容性，请在行尾添加“结尾空格”或 HTML 的 `<br>` 标签来实现换行。

## Other HTML Tags

There are a couple of other popular formats, widely used among bloggers, but not supported by standard Markdown syntax yet. Therefore we directly use these HTML tags in our Markdown editor while writing a post. 

```markdown
To reboot your computer, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>.

This section is <mark>important</mark>.

MaraPython<sup>TM</sup> is a well-known trade mark.

The chemical expression of water is H<sub>2</sub>O.
```

To reboot your computer, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>.

This section is <mark>important</mark>.

MaraPython<sup>TM</sup> is a well-known trade mark.

The chemical expression of water is H<sub>2</sub>O.
