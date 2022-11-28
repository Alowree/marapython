---
title: Hexo Butterfly的标签外挂（三）
categories: Hexo
keywords:
  - Hexo
  - Butterfly
  - Tag Plugin
abbrlink: hexo-tag-plugins-3
date: 2021-09-16 08:50:44
updated:
tags:
description:
top_img:
comments:
cover: 
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

在关于标签外挂的一系列文章中，我们先是在（一）中简单地介绍了Hexo框架的原生标签外挂，接着在（二）中介绍了Butterfly主题的原生标签外挂。任何一个优秀项目的繁荣和发展，除了创建者的核心基础工作，当然也离不开热心社区贡献者们的添砖加瓦。在本文中，我们将继续标签外挂这一话题，介绍由Akilar大佬所开发的多种标签外挂。这些新增的标签，又给我们基于Hexo框架+Butterfly主题的站点提供了更为多样、更为炫酷的样式选择。

## 插件安装

1. 安装插件

   ```bash
   npm install hexo-tag-plugins --save
   ```

   考虑到hexo自带的markdown渲染插件`hexo-renderer-marked`与外挂标签语法的兼容性较差，建议您将其替换成[hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)

   ```
   npm uninstall hexo-renderer-marked --save
   npm install hexo-renderer-kramed --save
   ```

2. 主题配置文件`_config.butterfly.yml`中添加

   ```yaml
   # Tag Plugins settings (標籤外掛)
   # --------------------------------------
   # tag-plugins-plus
   # see https://akilar.top/posts/615e2dec/
   tag_plugins:
     enable: true # 开关
     priority: 5 #过滤器优先权
     issues: false #issues标签依赖注入开关
     CDN:
       anima: https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css #动画标签anima的依赖
       jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js #issues标签依赖
       issues: https://cdn.jsdelivr.net/npm/hexo-theme-volantis@latest/source/js/issues.min.js #issues标签依赖
       iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js #参看https://akilar.top/posts/d2ebecef/
   ```

**参数释义**

| 参数         | 备选值/类型 | 释义                                                     |
| :----------- | :---------- | :------------------------------------------------------- |
| enable       | true/false | 【必选】控制开关                                         |
| priority     | number      | 【可选】过滤器优先级，数值越小，执行越早，默认为10，选填 |
| issues       | true/false | 【可选】issues标签控制开关，默认为false                  |
| CDN.anima    | URL         | 【可选】动画标签anima的依赖                              |
| CDN.jquery   | URL         | 【可选】issues标签依赖                                   |
| CDN.issues   | URL         | 【可选】issues标签依赖                                   |
| CDN.iconfont | URL         | 【可选】iconfont标签symbol样式引入                       |
| CDN.carousel | URL         | 【可选】carousel旋转相册标签鼠标拖动依赖                 |

`hexo-tag-plugins`安装成功以后，可以在路径`\MaraPython\node_modules\`文件夹内找到。本文中将要介绍的各个`tag`的脚本文件保存在`\MaraPythong\node_modules\hexo-tag-plugins\lib\scripts\`文件夹下，样式文件保存在`\Blog\node_modules\hexo-tag-plugins\lib\style\`文件夹下，总计16个标签。

- btns
- carousel
- checkbox
- folding
- ghcard
- image
- inline-labels
- link
- media
- notation
- poem
- progress
- site-card
- span
- timeline
- tip

下面我们按照字母表的顺序，对16个标签外挂的使用方法一一介绍。

## btns按钮

{% tabs btns, 2 %}

<!-- tab 标签语法 -->
```markdown
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```
1. 圆角样式：rounded, circle

2. 增加文字样式：可以在容器内增加标题和描述文字

3. 布局方式：默认为自动宽度，适合视野内只有一两个的情况。

  wide: 宽一点的按钮
  fill: 填充布局，自动铺满至少一行，多了会换行
  center: 居中，按钮之间是固定间距
  around: 居中分散
  grid2: 等宽最多 2 列，屏幕变窄会适当减少列数
  grid3: 等宽最多 3 列，屏幕变窄会适当减少列数
  grid4: 等宽最多 4 列，屏幕变窄会适当减少列数
  grid5: 等宽最多 5 列，屏幕变窄会适当减少列数

<!-- endtab -->
<!-- tab 样式预览 -->

1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：

   {% btns circle grid5 %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% endbtns %}

2. 或者含有图标的按钮：

   {% btns rounded grid5 %}
   {% cell 下载源码, /, fa fa-download %}
   {% cell 查看文档, /, fa fa-book %}
   {% endbtns %}

3. 圆形图标 + 标题 + 描述 + 图片 + 网格 5 列 + 居中

   {% btns circle center grid5 %}
   <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
   <i class='fab fa-apple'></i>
   <b>心率管家</b>
   {% p red, 专业版 %}
   <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
   </a>
   <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
   <i class='fab fa-apple'></i>
   <b>心率管家</b>
   {% p green, 免费版 %}
   <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
   </a>
   {% endbtns %}

<!-- endtab -->
<!-- tab 示例代码 -->
```markdown
1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：

   {% btns circle grid5 %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% cell MaraPython, https://marapython.com, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
   {% endbtns %}

2. 或者含有图标的按钮：

   {% btns rounded grid5 %}
   {% cell 下载源码, /, fa fa-download %}
   {% cell 查看文档, /, fa fa-book %}
   {% endbtns %}

3. 圆形图标 + 标题 + 描述 + 图片 + 网格 5 列 + 居中

   {% btns circle center grid5 %}
   <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
   <i class='fab fa-apple'></i>
   <b>心率管家</b>
   {% p red, 专业版 %}
   <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
   </a>
   <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
   <i class='fab fa-apple'></i>
   <b>心率管家</b>
   {% p green, 免费版 %}
   <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
   </a>
   {% endbtns %}
```
<!-- endtab -->
{% endtabs %}

## carousel旋转相册

注意：`carousel`标签似乎不能嵌套使用在`tabs`标签内部，所以本小节没有使用`tabs`标签的分栏设计，全部内容直接平铺开来。

**标签语法**

```markdown
{% carousel [Id] , [name] %}
![](/img/1.jpg)
![](/img/2.jpg)
![](/img/3,jpg)
{% endcarousel %}
```

`Id`: 相册唯一ID，用于监测相册鼠标动作。禁止使用中文。同一页内不得出现相同ID的carousel相册。
`name`: 相册中间显示的内容，建议用英文单引号包裹。

**示例代码**

```markdown
{% carousel gundam,gaoda %}
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110444226.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110508327.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110525753.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110600751.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110621554.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110637459.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110654150.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110707916.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110719787.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110731118.png)
{% endcarousel %}
```

**样式预览**

- 鼠标滚轮上下滚动可以调整各相片之间的距离
- 鼠标上下拖动可以调整旋转相册的整体视角

{% carousel gundam,gaoda %}
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110444226.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110508327.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110525753.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110600751.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110621554.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110637459.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110654150.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110707916.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110719787.png)
![](https://cdn.jsdelivr.net/npm/akilar-candyassets/image/20200907110731118.png)
{% endcarousel %}

## checkbox复选列表


**标签语法**
```markdown
{% checkbox [style], [color], [unchecked], [text](支持简单md） %}
```
- style: plus, minus, times
- color: red, yellow, green, cyan, blue, gray
- status: unchecked, checked

**示例代码**

```markdown
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```
**样式预览**

{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}



## folding折叠框

Akilar说，`Butterfly`虽然也有内置折叠框`hideToggle`标签，但是`Volantis`的`folding`折叠框更好看一些。可是，我还没有想好有哪些使用场景可以应用`folding`标签。

**标签语法**

```markdown
{% folding [color] [status], 标题 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfolding %}
```
1. color：[default=gray], blue, cyan, green, yellow, red
2. status：[defalut=close], open

**示例代码**

```markdown
{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```

**样式预览**

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

## ghcard Github卡片



## image单张图片

{% tabs image, 2 %}
<!-- tab 标签语法 -->
```markdown
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```
1. 图片宽度高度：width=300px, height=32px
2. 图片描述：alt = 图片描述（butterfly 需要在主题配置文件中开启图片描述）
3. 占位背景色：bg=#f2f2f2

<!-- endtab -->

<!-- tab 样式预览 -->

1. 添加描述：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

2. 指定宽度：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px %}

3. 指定宽度并添加描述：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}

4. 设置占位背景色：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}

<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
1. 添加描述：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

2. 指定宽度：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px %}

3. 指定宽度并添加描述：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}

4. 设置占位背景色：
   {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
```
<!-- endtab -->
{% endtabs %}

## inline-labels行内文本样式

**标签语法**
```markdown
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
```

**示例代码**
```markdown
1. 带 {% u 下划线 %} 的文本 （等效方法，使用`<u>`标签： <u>这里是使用`<u>`标签包围的删除文本</u>）
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本 （等效方法，使用`<s>`标签： <s>这里是使用`<s>`标签包围的删除文本</s>）
5. 键盘样式的文本 {% kbd Command %} + {% kbd D %} （等效方法，使用`<kbd>`标签： <kbd>Ctrl</kbd>+<kbd>C</kbd>）
6. 密码样式的文本：{% psw 这里没有验证码 %}
```

**样式预览**
1. 带 {% u 下划线 %} 的文本 （等效方法，使用`<u>`标签： <u>这里是使用`<u>`标签包围的删除文本</u>）
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本 （等效方法，使用`<s>`标签： <s>这里是使用`<s>`标签包围的删除文本</s>）
5. 键盘样式的文本 {% kbd Command %} + {% kbd D %} （等效方法，使用`<kbd>`标签： <kbd>Ctrl</kbd>+<kbd>C</kbd>）
6. 密码样式的文本：{% psw 这里没有验证码 %}

## link链接卡片

Hexo具有有原生的`link`标签，官方文档仅提供了简单的使用语法，但是没有给出具体的代码示例和样式预览。

```markdown
{% link text url [external] [title] %}
```

我猜测，在安装了`hexo-tag-plugins`插件之后，插件内的`link`将覆盖Hexo原生的`link`标签，因为从语法结构上来看，两个标签的使用几乎是相同的。

{% tabs Link, 2 %}
<!-- tab 标签语法 -->

```markdown
{% link 标题, 链接, 图片链接（可选） %}
```
<!-- endtab -->

<!-- tab 样式预览 -->
{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, https://cdn.jsdelivr.net/gh/Akilarlxh/akilarlxh.github.io/img/siteicon/favicon.ico %}
<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, https://cdn.jsdelivr.net/gh/Akilarlxh/akilarlxh.github.io/img/siteicon/favicon.ico %}
```
<!-- endtab -->
{% endtabs %}



## media音频视频

### audio

{% tabs audio, 2 %}
<!-- tab 标签语法 -->

```markdown
{% audio 音频链接 %}
```
<!-- endtab -->

<!-- tab 样式预览 -->
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
<!-- endtab -->

<!-- tab 示例代码 -->

```markdown
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```
<!-- endtab -->

{% endtabs %}

### video

{% tabs video, 2 %}
<!-- tab 标签语法 -->

```markdown
{% video 视频链接 %}
```
对其方向：left, center, right
列数：逗号后面直接写列数，支持 1 ～ 4 列。
<!-- endtab -->

<!-- tab 样式预览 -->
1. 100%宽度

   
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   
2. 50%宽度

   
   {% videos, 2 %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% endvideos %}
   
3. 25%宽度

   
   {% videos, 4 %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% endvideos %}
   

<!-- endtab -->

<!-- tab 示例代码 -->

1. 100%宽度

   ```markdown
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   ```

2. 50%宽度

   ```markdown
   {% videos, 2 %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% endvideos %}
   ```

3. 25%宽度

   ```markdown
   {% videos, 4 %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
   {% endvideos %}
   ```

<!-- endtab -->
{% endtabs %}


## notation注释

{% tabs notation, 2 %}
<!-- tab 标签语法 -->
```markdown
{% nota [label] , [text] %}
```
1. label: 注释词汇
2. text: 悬停显示的注解内容

<!-- endtab -->

<!-- tab 样式预览 -->
{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}
<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}
```
<!-- endtab -->
{% endtabs %}

## poem诗词


{% tabs poem, 2 %}
<!-- tab 标签语法 -->
```markdwon
{% poem [title],[author] %}
诗词内容
{% endpoem %}
```
1. title：诗词标题
2. author：作者，可以不写

<!-- endtab -->


<!-- tab 样式预览 -->
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```
<!-- endtab -->

{% endtabs %}







## progress进度条

{% tabs progress, 2 %}
<!-- tab 标签语法 -->
```markdown
{% progress [width] [color] [text] %}
```
1. width: 0 到 100 的阿拉伯数字
2. color: 颜色，取值有 red,yellow,green,cyan,blue,gray
3. text: 进度条上的文字内容

<!-- endtab -->


<!-- tab 样式预览 -->
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```
<!-- endtab -->

{% endtabs %}




## site-card网站卡片
**标签语法**
```markdown
{% sitegroup %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% endsitegroup %}
```

**示例代码**
```markdown
{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}
```

**样式预览**
{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}

## span行内文本
**标签语法**
```markdown
{% span 样式参数(参数以空格划分), 文本内容 %}

字体: logo, code
颜色: red,yellow,green,cyan,blue,gray
大小: small, h4, h3, h2, h1, large, huge, ultra
对齐方向: left, center, right
```

**示例代码**
```markdown
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}
```

**样式预览**
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}

## timeline时间线

{% tabs timeline, 2 %}
<!-- tab Syntax -->
```markdown
{% timeline 时间线标题（可选） %}
{% timenode 时间节点（标题） %}
正文内容
{% endtimenode %}
{% timenode 时间节点（标题） %}
正文内容
{% endtimenode %}
{% endtimeline %}
```
<!-- endtab -->
<!-- tab Preview -->
{% timeline %}

{% timenode 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) %}

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

{% endtimenode %}

{% timenode 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) %}

不需要额外处理。

{% endtimenode %}

{% timenode 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) %}

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

{% endtimenode %}

{% endtimeline %}
<!-- endtab -->
<!-- tab Codes -->

```markdown
{% timeline %}

{% timenode 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) %}

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

{% endtimenode %}

{% timenode 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) %}

不需要额外处理。

{% endtimenode %}

{% timenode 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) %}

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

{% endtimenode %}

{% endtimeline %}
```
<!-- endtab -->
{% endtabs %}

注意，本示例中在`timeline`标签内部套用了Markdown语法，用一个链接`[Name](Link)`来作为时间节点的标题。这种嵌套使用是可以的，但是反之在Markdown语法内部套用标签语法则不行。Tag plugins should not be wrapped inside Markdown syntax, e.g. `[]({% post_path lorem-ipsum %})` is not supported.



## tip上标标签


{% tabs tip, 2 %}
<!-- tab 标签语法 -->
```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```
1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. 自定义图标：支持 fontawesome。

<!-- endtab -->

<!-- tab 样式预览 -->
{% tip %}默认情况{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
{% tip %}默认情况{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```
<!-- endtab -->

{% endtabs %}

下面是另外几个标签外挂，暂时不知道是通过哪个插件或者脚本生效。



## radio单选列表

`MaraPython\themes\butterfly\source\css\_third-party\normalize.min.css`

## anima动态标签

从本质上来说，`anima`动态标签 = `tip`静态标签 + 负责动作动画的CSS类

而这个负责动作动画的CSS类`https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css`，正是在本文开头部分的第2步，主题配置文件`_config.butterfly.yml`中添加

```yaml
# Tag Plugins settings (標籤外掛)
# --------------------------------------
# tag-plugins-plus
# see https://akilar.top/posts/615e2dec/
tag_plugins:
  enable: true # 开关
  priority: 5 #过滤器优先权
  issues: false #issues标签依赖注入开关
  CDN:
    anima: https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css #动画标签anima的依赖
    jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js #issues标签依赖
    issues: https://cdn.jsdelivr.net/npm/hexo-theme-volantis@latest/source/js/issues.min.js #issues标签依赖
    iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js #参看https://akilar.top/posts/d2ebecef/
```

更多详情请参看 [font-awesome-animation 文档](http://l-lin.github.io/font-awesome-animation/)

**示例代码**

```markdown
On DOM load（当页面加载时显示动画）
{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}
调整动画速度。
{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}
On hover（当鼠标悬停时显示动画）
{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}
On parent hover（当鼠标悬停在父级元素时显示动画）
{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}
```

**样式预览**

On DOM load（当页面加载时显示动画）
{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}
调整动画速度。
{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}
On hover（当鼠标悬停时显示动画）
{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}
On parent hover（当鼠标悬停在父级元素时显示动画）
{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}


## ghbdage Github徽标
{% tabs ghcard, 2 %}
<!-- tab 标签语法 -->
```markdown
{% bdage [right],[left],[logo]||[color],[link],[title]||[option] %}
```
left：徽标左边的信息，必选参数。
right: 徽标右边的信息，必选参数，
logo：徽标图标，图标名称详见 simpleicons，可选参数。
color：徽标右边的颜色，可选参数。
link：指向的链接，可选参数。
title：徽标的额外信息，可选参数。主要用于优化 SEO，但 object 标签不会像 a 标签一样在鼠标悬停显示 title 信息。
option：自定义参数，支持 shields.io 的全部 API 参数支持，具体参数可以参看上文中的拓展写法示例。形式为 name1=value2&name2=value2。
<!-- endtab -->

<!-- tab 样式预览 -->

1. 基本参数，定义徽标左右文字和图标

   {% bdage Theme,Butterfly %}
   {% bdage Frame,Hexo,hexo %}
   
2. 信息参数，定义徽标右侧内容背景色，指向链接
   
   {% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
   {% bdage Source,GitHub,GitHub||,https://github.com/ %}
   
3. 拓展参数，支持 shields 的 API 的全部参数内容
   
   {% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
   {% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
   
   

<!-- endtab -->

<!-- tab 示例代码 -->
```markdown
1. 基本参数，定义徽标左右文字和图标

   {% bdage Theme,Butterfly %}
   {% bdage Frame,Hexo,hexo %}
   
2. 信息参数，定义徽标右侧内容背景色，指向链接
   
   {% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
   // 如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
   {% bdage Source,GitHub,GitHub||,https://github.com/ %}
   
   

3. 拓展参数，支持 shields 的 API 的全部参数内容
   
   {% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
   // 如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
   {% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
   
```
<!-- endtab -->

{% endtabs %}

## mindmap思维导图

`\MaraPython\node_modules\hexo-tag-plugins\lib\mindmap.js`
`\MaraPython\node_modules\hexo-tag-plugins\lib\mindmap.css`

```markdown
{% mindmap %}
- [思维导图](https://www.keyiqingxin.cn/)
  - [前言](https://www.keyiqingxin.cn)
  - 使用方法
    - 一
    - 二
    - 三
  - 参考资料
  - 参数配置
  - 样式预览
  - 内容
{% endmindmap %}
```

{% mindmap %}
- [思维导图](https://www.keyiqingxin.cn/)
  - [前言](https://www.keyiqingxin.cn)
  - 使用方法
    - 一
    - 二
    - 三
  - 参考资料
  - 参数配置
  - 样式预览
  - 内容
  {% endmindmap %}

## issues

## icon阿里图标

路径暂时未知。`inline`格式。

标签语法
```markdown
{% icon [icon-xxxx],[font-size] %}
```

icon-xxxx：表示图标font-class,可以在自己的阿里矢量图标库项目的font-class引用方案内查询并复制。
font-size：表示图标大小，直接填写数字即可，单位为em。图标大小默认值为1em。

示例代码
```markdown
{% icon icon-rat_zi %}{% icon icon-rat,2 %}{% icon icon-ox_chou,3 %}{% icon icon-ox,4 %}{% icon icon-tiger_yin,5 %}{% icon icon-tiger,6 %}
{% icon icon-rabbit_mao,1 %}{% icon icon-rabbit,2 %}{% icon icon-dragon_chen,3 %}{% icon icon-dragon,4 %}{% icon icon-snake_si,5 %}{% icon icon-snake,6 %}
{% icon icon-horse_wu %}{% icon icon-horse,2 %}{% icon icon-goat_wei,3 %}{% icon icon-goat,4 %}{% icon icon-monkey_shen,5 %}{% icon icon-monkey,6 %}
{% icon icon-rooster_you %}{% icon icon-rooster,2 %}{% icon icon-dog_xu,3 %}{% icon icon-dog,4 %}{% icon icon-boar_hai,5 %}{% icon icon-boar,6 %}
```

样式预览
{% icon icon-rat_zi %}{% icon icon-rat,2 %}{% icon icon-ox_chou,3 %}{% icon icon-ox,4 %}{% icon icon-tiger_yin,5 %}{% icon icon-tiger,6 %}
{% icon icon-rabbit_mao,1 %}{% icon icon-rabbit,2 %}{% icon icon-dragon_chen,3 %}{% icon icon-dragon,4 %}{% icon icon-snake_si,5 %}{% icon icon-snake,6 %}
{% icon icon-horse_wu %}{% icon icon-horse,2 %}{% icon icon-goat_wei,3 %}{% icon icon-goat,4 %}{% icon icon-monkey_shen,5 %}{% icon icon-monkey,6 %}
{% icon icon-rooster_you %}{% icon icon-rooster,2 %}{% icon icon-dog_xu,3 %}{% icon icon-dog,4 %}{% icon icon-boar_hai,5 %}{% icon icon-boar,6 %}


## wow

## 参考资料

- Akilar: [Tag Plugins Plus](https://akilar.top/posts/615e2dec/)
- 可以清心：[基于butterfly的外挂标签引入](https://www.keyiqingxin.cn/56718f73/)
