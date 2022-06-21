---
title: Hexo 站点 Butterfly 主题升级至 4
toc_number: true
categories: Hexo
abbrlink: butterfly-v4
date: 2022-01-18 12:08:10
updated:
tags:
keywords:
description: 在熟练掌握Git之前，这是一种不断地升级、魔改butterfly主题的笨办法。
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

三个月过去了，Butterfly主题终于又迎来了一次重大升级。在备份了下面四份重要配置文件之后，抄起家伙准备开始升级。至于为什么选择保存这四个文件，这是因为博客所有个性化的设计，都是在这几个文件内进行配置的，如果升级时不小心搞砸了，还可以再倒回到升级之前的保存状态。

- `_config.yml`
- `_config.butterfly.yml`
- `themes\butterfly\source\css\custom.css`
- `themes\butterfly\source\css\_layout\footer.pug`

按照Butterfly主题官网[安装指引](https://butterfly.js.org/posts/21cfbf15/#%E5%AE%89%E8%A3%9D)，在博客目录`themes\butterfly`下，调出`bash`命令行，使用`git pull`命令，正常情况下就可以直接升级了。然而，试过几次后，无奈`bash`的输出一直提示`Already up to date`。发现使用`git pull`无法正常升级，选择将`butterfly`文件夹直接删除，再在Hexo博客根目录克隆安装最新版本。

```markdown
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

## 页脚导航菜单

版本3.8.4还支持直接在`_config.butterfly.yml`里面直接配置`ICP`选项，以此来设置网站的备案信息。

```yml
ICP:
  enable: true  # 是否启用ICP
  url: https://www.beian.miit.gov.cn/  # 点击后的链接地址
  text: 粤ICP备20043865号  # 备案号
  icon:    # 图标
```

新版本4.0.1中相关设置入口已经关闭，因为复制上面来自3.8.4版本`_config.butterfly.yml`的设置已经不再生效，网站底部原有的备案信息不再正常显示。

解决办法如下：

打开`themes\butterfly\source\css\_layout\footer.pug`，在与现有的三个`if`分句后面并列的位置，添加第四个`if`分句：

```pug
  if theme.ICP.enable
    .icp
      a(href='https://beian.miit.gov.cn/')= '粤ICP备20043865号'
```

网站的备案信息现在可以正常显示，问题得到解决。

2022-6-20最新解决办法，直接在`_config.butterfly.yml`里面添加HTML文本，并且在`themes\butterfly\source\css\custom.css`里面添加CSS样式：

```YML
footer:
  owner:
    enable: false
    since: 2020
  custom_text: <div id="marapython-footer"><div class="footer-group"><h3 class="footer-title">产品</h3><div class="footer-links"><a class="footer-item" href="/tags/蓝牙音箱/" data-pjax-state="">蓝牙音箱</a><a class="footer-item" href="/tags/Soundbar/" data-pjax-state="">Soundbar</a><a class="footer-item" href="/tags/Party-Speaker/" data-pjax-state="">Party Speaker</a></div></div><div class="footer-group"><h3 class="footer-title">设计</h3><div class="footer-links"><a class="footer-item" href="/tags/HTMLHTML/" data-pjax-state="">HTML</a><a class="footer-item" href="/tags/CSS/" data-pjax-state="">CSS</a><a class="footer-item" href="/tags/JavaScript/" data-pjax-state="">JavaScript</a><a class="footer-item" href="/tags/Python/" data-pjax-state="">Python</a><a class="footer-item" href="/tags/Figma/" data-pjax-state="">Figma教程</a></div></div><div class="footer-group"><h3 class="footer-title">开发</h3><div class="footer-links"><a class="footer-item" href="/tags/Hexo/" data-pjax-state="">Hexo魔改</a><a class="footer-item" href="/tags/Git/" data-pjax-state="">Git教程</a><a class="footer-item" href="/tags/Typora/" data-pjax-state="">Typora</a><a class="footer-item" href="/tags/Sublime-Text/" data-pjax-state="">Sublime Text</a><a class="footer-item" href="/tags/VS-Code/" data-pjax-state="">VS Code</a></div></div><div class="footer-group"><h3 class="footer-title">生活</h3><div class="footer-links"><a class="footer-item" href="/musiclist/" data-pjax-state="">音乐榜单</a><a class="footer-item" href="/movies/" data-pjax-state="">我的电影</a><a class="footer-item" href="/tags/读书笔记/" data-pjax-state="">读书笔记</a><a class="footer-item" href="/essay/" data-pjax-state="">即刻短文</a><a class="footer-item" href="/tags/混剪/" data-pjax-state="">视频剪辑</a></div></div><div class="footer-group"><h3 class="footer-title">分类</h3><div class="footer-links"><a class="footer-item" href="/categories/新零售/" data-pjax-state="">新零售</a><a class="footer-item" href="/categories/资源中心/" data-pjax-state="">资源中心</a><a class="footer-item" href="/tags/中英对照/" data-pjax-state="">中英对照</a><a class="footer-item" href="/categories/我的开发/" data-pjax-state="">我的开发</a><a class="footer-item" href="/categories/" data-pjax-state="">全部分类</a></div></div><div class="footer-group"><h3 class="footer-title">导航</h3><div class="footer-links"><a class="footer-item" href="/link/" data-pjax-state="">友情链接</a><a class="footer-item" href="/tlink/" data-pjax-state="">在线工具</a><a class="footer-item" target="_blank" rel="noopener external nofollow noreferrer" href="https://soundfreaq.jd.com/">奇响旗舰店</a><a class="footer-item" href="/link/#友链文章" data-pjax-state="">友链文章</a><a class="footer-item" href="/tasks/" data-pjax-state="">工作清单</a></div></div><div class="footer-group"><h3 class="footer-title">协议</h3><div class="footer-links"><a class="footer-item" href="/privacy/" data-pjax-state="">隐私协议</a><a class="footer-item" href="/cookies/" data-pjax-state="">Cookies</a><a class="footer-item" href="/cc/" data-pjax-state="">版权协议</a></div></div></div><a href="http://www.beian.miit.gov.cn/" style="color:#fff" target="_blank">粤ICP备20043865号</a>
```



## H2标题的格式设定

在`_config.butterfly.yml`里面，取消美化：

```yml
# Beautify (美化頁面顯示)
beautify:
  enable: false
  field: post # site/post
  title-prefix-icon: # '\f863' # '\f0c1'
  title-prefix-icon-color: # '#F47466'
```

再在`themes\butterfly\source\css\custom.css`里面，取消了各级标题之前旋转小风车的各项CSS配置，重新简化设置了标题的格式，尤其是H2在手机屏幕下的格式。

```css
/* add h2-h3 format after Beautify Effect being disabled */
.post-content h2 {
    margin: 1.8em auto 1.2em;
    font-size: 1.8em;
    border-bottom: 2px solid #00c4b6;
}
.post-content h3 {
    font-size: 1.4em;
    line-height: 1.43;
    margin: 1.6em auto 1.2em;
    padding-left: 9px;
    border-left: 5px solid #00c4b6;
}
```

## 评论中的默认提示语

4.0.1版本对评论的设置进行了简化，原先`Valine`的`placeholder`选项在`_config.butterfly.yml`里面也被关闭了。原先设置的提示语现在变成了默认的一句`Just Go Go`，因找不到修改入口，放弃治疗。

## 含有行内公式的段落

今天在博文[Parallelogram](https://www.marapython.com/posts/parallelogram/)里面发现，如果段落或者无序列表项的内部含有inline数学公式时，相应内容会被自动添加一个`has-jax`的类，而这个类下文本内容的行高设置得过于密集了。于是，找到原因，就把`MaraPython\themes\butterfly\source\css\_layout\third-party.styl`里面第92行给注释掉。

```STYL
// mathjax
mjx-container[display],
.has-jax
  overflow-x: auto
  overflow-y: hidden
  // line-height: normal !important
```

## 公式块内部的不换行

直接在公式块里面使用`\\`的话，在Typora里面可以使公式换行，但在Hexo + Butterfly里面却不能使公式换行，例如：

```markdown
$$
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
$$
```

Hexo + Butterfly渲染后的显示效果如下：
$$
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
$$

可以看到，本应该分四段显示的公式却连成了一行。这不是我们想要的结果。

我们尝试在公式内容的首尾分别添加`\begin{aligned}`和`\end{aligned}`，即可以解决在Hexo + Butterfly里面公式块内的不换行问题。

```markdown
$$
\begin{aligned}
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
\end{aligned}
$$
```



此时的显示效果如下：
$$
\begin{aligned}
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
\end{aligned}
$$

可以证明这时公式块的换行代码得到正常执行。

## 摘要卡片上的数学公式

$$
e^{j x}=\cos x + j \sin x
$$

在博客文章中，数学公式可以正常渲染。但是在 Hexo 自动生成首页的摘要卡片上，文章标题和文章摘要内的数学公式，都无法正常渲染，如下图所示：

[![img](https://image.marapython.com/image-20220606085455899.png)](https://image.marapython.com/image-20220606085455899.png)

本文主要记录，使用 Butterfly 主题的 Hexo 站点，为什么站点首页文章摘要中的数学公式没有正常渲染，以及应该如何解决。

首先，需要指出的是，摘要中的数学公式不渲染，似乎是主题作者刻意为之的设计。比如，以 `hexo-theme-fluid` 的作者回应部分用户的问询为例：[首页摘要中没有渲染 LaTeX 数学公式](https://github.com/fluid-dev/hexo-theme-fluid/issues/351)

> > 首页摘要是无法显示任何样式的，因为无法预测公式的高度会造成样式错乱
> > 请自己手动指定摘要，避免掉公式部分
>
> 很好理解，因为不是所有公式都只有一行，况且在生成页面的时候也不知道公式会显示出几行，所以不会进行渲染，其他的样式效果同理。如果遇到有更好的解决办法，也欢迎提供思路

无独有偶，[hexo-theme-butterfly](https://github.com/chachabai/hexo-theme-butterfly) 的作者也在其官方指引中特别提醒：

> 不要在標題裏使用 mathjax 語法，toc 目錄不一定能正確顯示 mathjax，可能顯示 mathjax 代碼

明白了主题作者的设计意图，下面我们再来有针对性地寻找问题的解决办法。

1、根据[官方教程](https://butterfly.js.org/posts/ceeb73f/#Math-數學)，安装插件

```
BASH
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

2、配置 Hexo 根目录的配置文件

```
BASH
kramed:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true
```

3、参考 chachabai 文章，更改配置文件 `themes/butterfly/layout/includes/third-party/math/index.pug` 中的代码。更改前的代码，仅限页面和博文渲染：

```
PLAINTEXT
if theme.mathjax && theme.mathjax.enable
  if theme.mathjax.per_page    
    if is_post() || is_page()
      include ./mathjax.pug
  else
    if page.mathjax
      include ./mathjax.pug

if theme.katex && theme.katex.enable
  if theme.katex.per_page
    if is_post() || is_page()
      include ./katex.pug
  else
    if page.katex
      include ./katex.pug

if theme.mermaid.enable
  include ./mermaid.pug
```

去掉仅限页面和博文渲染的条件限制，更改后的代码：

```
PLAINTEXT
if theme.mathjax && theme.mathjax.enable
  if theme.mathjax.per_page    
    include ./mathjax.pug
  else
    if page.mathjax
      include ./mathjax.pug

if theme.katex && theme.katex.enable
  if theme.katex.per_page
    include ./katex.pug
  else
    if page.katex
      include ./katex.pug

if theme.mermaid.enable
  include ./mermaid.pug
```

4、在主题配置文件`_config.butterfly.yml` 中，将 `mathjax` 和 `per_page` 同时设置为 `true`：

```
YML
# Math (數學)
# --------------------------------------
# About the per_page
# if you set it to true, it will load mathjax/katex script in each page (true 表示每一頁都加載js)
# if you set it to false, it will load mathjax/katex script according to your setting (add the 'mathjax: true' in page's front-matter)
# (false 需要時加載，須在使用的 Markdown Front-matter 加上 mathjax: true)

# MathJax
mathjax:
  enable: true
  per_page: true

# KaTeX
katex:
  enable: false
  per_page: false
  hide_scrollbar: true
```

经过以上配置以后，自动生成在博客首页的摘要卡片上，文章标题和文章摘要内的数学公式，均可正常渲染啦。

## 2022-6-18新问题

- 首页卡片数学公式行内不渲染
- 首页卡片Markdown语法（例如加粗字体）不渲染参考资料

解决办法：

在front-matter的description里面手动添加的文章摘要内容，直接在复制博文中的Markdown文本以后，在有语法格式的地方改用HTML标签。此时，如果首页卡片里如果使用了自动摘要，那么来自文章主体的块状公式内容将仍然无法渲染，因为主题作者的设计本意即是如此。

## 魔改后主题升级

在`MaraPython\themes\butterfly\`文件夹内，右键打开Git Bash Here，然后输入以下命令：

```BASH
git add .
git stash
git pull
git stash pop
```

## References

https://github.com/jerryc127/hexo-theme-butterfly/issues/305

https://chachabai.github.io/butterfly/

[https://butterfly.js.org/posts/ceeb73f/#Math - 數學](https://butterfly.js.org/posts/ceeb73f/#Math-數學)

https://www.wzhecnu.cn/2021/08/31/blog/math-tex/
