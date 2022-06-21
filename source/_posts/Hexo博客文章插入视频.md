---
title: Hexo博客文章插入视频
toc_number: true
categories: Hexo
description: The <code>video</code> HTML element embeds a media player which supports video playback into the document.
abbrlink: html-video
date: 2022-06-12 10:03:38
updated:
tags:	[Hexo, HTML5, video]
keywords:
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

在 HTML5 中，我们可以使用 video 元素来开发视频。

## 语法

```
PLAINTEXT
<video>
  Your browser does not support video element, please upgrade your browser.
</video>
```

可以在` <video>` 和` </video>` 标签之间放置文本内容，这样不支持 `<video>` 元素的浏览器就可以显示出该标签的信息。

## 可选属性

| 属性     | 值                 | 描述                                                         |
| :------- | :----------------- | :----------------------------------------------------------- |
| autoplay | autoplay           | 如果出现该属性，则视频在就绪后马上播放。                     |
| controls | controls           | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| height   | pixels             | 设置视频播放器的高度。                                       |
| loop     | loop               | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| muted    | muted              | 如果出现该属性，视频的音频输出为静音。                       |
| poster   | URL                | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| preload  | auto metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 “autoplay”，则忽略该属性。 |
| src      | URL                | 要播放的视频的 URL。                                         |
| width    | pixels             | 设置视频播放器的宽度。                                       |

## 实例演示

在需要插入视频的文章位置，插入以下代码：

```HTML
<video width="100%" height="100%"  src="../../video/demo.mp4"  autoplay controls loop></video>
```

其中，src 里面填写视频文件的地址。有两种方法：可以将视频提前上传并存储在七牛云空间，这样直接在 src 里面填写视频文件的链接地址即可；也可以在博客根目录的 source 文件夹内，创建一个跟 post 文件夹平行的新文件夹 video，然后将视频文件放置于 video 文件夹内即可。

示例视频是使用手机竖屏拍摄，宽度为 1080 像素，高度为 1920 像素，文件大小为 54.1M。具体部署采用第二种处理方法，这样处理完，经 `hexo d` 部署之后，视频文件也将上传至 Github 仓库。但是 Github 似乎并不推荐如此上传超过 50M 的大尺寸文件。

实际显示效果：

<video width="100%" height="100%"  src="../../video/demo.mp4"  autoplay controls loop></video>

经过 <kbd>Fn + F12</kbd>查看，可以发现，此时的 video 标签嵌套于 p 标签内容内部，所以视频的宽度是 p 元素的 100%，也就是整个文章内容区的宽度。

如果视频是横屏拍摄，设置 `width=100%` 的布局或许是合适的安排；如果视频是竖屏拍摄，设置 `height=100%` 的布局则不太合适，我们选择在 style 属性里面设置 `max-height: 60vh` 尝试一下.

```HTML
<video style="max-height: 60vh; display: block; margin-left: auto; margin-right: auto;" src="../../video/demo.mp4"  autoplay controls loop></video>
```

显示效果如下：

<video style="max-height: 60vh; display: block; margin-left: auto; margin-right: auto;" src="../../video/demo.mp4"  autoplay controls loop></video>

由于 video 标签内添加了 `autoplay` 属性，此时视频会在网页开启之后自动播放。有两个选择，一是在 `autoplay` 之后继续添加 `muted` 属性，一是直接删除 `autoplay` 属性。

## 其他问题

1、是否需要在 video 标签的外层添加使用 raw 标签？

```HTML
{% raw %}
<video style="max-height: 60vh; display: block; margin-left: auto; margin-right: auto;" src="../../video/demo.mp4"  autoplay controls loop></video>
{% endraw%}
```

- 如果不使用 raw 标签，则渲染为 p 元素内嵌套 video 元素

- 如果使用 raw 标签，则直接渲染为 video 元素

从博客最终的显示效果来看，是否使用 raw 标签，对实际的显示效果影响不大。为保持 Typora 和 Hexo 内文章格式的一致性，建议文章内不必使用 raw 标签。

2、如何给视频添加标题？是否可以使用 caption 标签添加视频标题？

公众号里面可以使用粗体、居中，直接写一个标题位于视频的正上方，效果即可。Typora 里可以考虑使用 inline CSS 效仿使用这个格式。

3、给每个视频头部添加静图封面，时长 2 秒左右，使用文字标明视频的主旨或简介是值得推荐的做法。这样，当视频没有使用 `autoplay` 属性时，用户可以通过封面文字一目了然该视频文件的大致主旨内容，从而决定是否点击观看视频。

4、在 style 属性里面使用 `width: 40%` 可以控制视频的宽度，并且使用 `margin-left: auto` 和 `margin-right: auto` 控制视频水平居中。

```HTML
<video style="width: 40%; display: block; margin-left: auto; margin-right: auto;" src="../../video/demo.mp4" controls loop></video>
```

显示效果如下：

<video style="width: 40%; display: block; margin-left: auto; margin-right: auto;" src="../../video/demo.mp4" controls loop></video>

5、video 元素内直接使用 `width="50%"`，也仍然可以控制视频的宽度。看来官方教程也有出错的时候。

> `width` 和 `height` 属性分别设定视频显示区域的宽度和高度，单位是 CSS 像素（仅限绝对值；不支持百分比）。

```HTML
<video width="50%"  src="../../video/demo.mp4"  autoplay muted controls loop></video>
```

显示效果如下：

<video width="50%"  src="../../video/demo.mp4"  autoplay muted controls loop></video>

6、如何使用 flex box 样式控制视频水平居中？

直接在 style 属性内写 CSS 样式，`style="height:60vh;display: flex; align-items: center; justify-content: center;"` 来作居中处理。

```HTML
<video style="height:60vh;display: flex; align-items: center; justify-content: center;" src="../../video/demo.mp4" controls loop></video>
```

不知出于什么原因，使用 flex box 样式的视频并没有居中，实际显示效果如下：

<video style="height:60vh;display: flex; align-items: center; justify-content: center;" src="../../video/demo.mp4" controls loop></video>

待后面慢慢深入使用和研究。

## 参考资料

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video

https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_autoplay
