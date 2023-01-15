---
title: Hexo 站点 Butterfly 主题配置使用指南
toc_number: true
categories: Hexo
abbrlink: butterfly-config
date: 2022-01-18 12:08:10
updated:
tags:
keywords:
description: 在熟练掌握 Git 之前，这是一种不断地升级、魔改 butterfly 主题的笨办法。
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

三个月过去了，Butterfly 主题终于又迎来了一次重大升级。在备份了下面四份重要配置文件之后，抄起家伙准备开始升级。至于为什么选择保存这四个文件，这是因为博客所有个性化的设计，都是在这几个文件内进行配置的，如果升级时不小心搞砸了，还可以再倒回到升级之前的保存状态。

- `_config.yml`
- `_config.butterfly.yml`
- `themes\butterfly\source\css\custom.css`
- `themes\butterfly\layout\includes\footer.pug`

按照 Butterfly 主题官网 [安装指引](https://butterfly.js.org/posts/21cfbf15/#%E5%AE%89%E8%A3%9D)，在博客目录`themes\butterfly`下，调出`bash`命令行，使用`git pull`命令，正常情况下就可以直接升级了。然而，试过几次后，无奈`bash`的输出一直提示`Already up to date`。发现使用`git pull`无法正常升级，选择将`butterfly`文件夹直接删除，再在 Hexo 博客根目录克隆安装最新版本。

```markdown
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

## 引入 CSS 和 js 文件

在博客根目录`\themes\butterfly\source\css`下新建一个custom.css文件，在博客根目录`\themes\butterfly\source\js`下新建一个 custom.js 文件，分别填入自定义内容。

修改主题配置文件 `_config.butterfly.yml`，分别引入：

```YML
inject:
  head:
    - <link rel="stylesheet" href="//at.alicdn.com/t/font_2663193_81cv7cus1jo.css">
    - <link rel="stylesheet" href="/css/custom.css" media="all">
    - <link rel="stylesheet" href="/css/iconfont.css">
  bottom:
    - <script src="custom.js"></script>
```

此时的 js 文件内容暂时为空。

## 站点 logo 动态显示

在`D:\MaraPython\themes\butterfly\layout\includes\header\nav.pug`文件内，注释掉第3行，添加第4-14行：

```PUG
nav#nav
  span#blog_name
    // a#site-name(href=url_for('/')) #[=config.title]
    a#site-name(href=url_for('/'))
      label M
      span a
      span r
      span a
      label P
      span y
      span t
      span h
      span o
      span n
```

在`themes\butterfly\source\css\custom.css`文件内，添加：

```CSS
#blog_name #site-name {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #1565c0;
    font-size: 1.2em;
    display: inline-block;
    margin: 0;
    padding: 0;
    width: auto;
    transition: .5s;
    cursor: pointer;
    text-decoration: none
}

#blog_name #site-name label.lbl-d,#blog_name #site-name label:first-child {
    cursor: pointer;
    display: inline-block
}

#blog_name #site-name span {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20px);
    /*font-size: .75em*/
}

#blog_name #site-name:hover span {
    transition: .5s ease-out;
    position: relative;
    transform: translateX(0);
    visibility: visible;
    opacity: 1
}

#blog_name #site-name:hover span:first-child {
    transition-delay: .1s
}

#blog_name #site-name:hover span:nth-child(2) {
    transition-delay: .2s
}

#blog_name #site-name:hover span:nth-child(3) {
    transition-delay: .3s
}

#blog_name #site-name:hover span:nth-child(4) {
    transition-delay: .4s
}

#blog_name #site-name:hover span:nth-child(5) {
    transition-delay: .5s
}

#blog_name #site-name:hover span:nth-child(6) {
    transition-delay: .6s
}

#blog_name #site-name:hover span:nth-child(7) {
    transition-delay: .7s
}

#blog_name #site-name:hover span:nth-child(8) {
    transition-delay: .8s
}

#blog_name #site-name:hover span:nth-child(9) {
    transition-delay: .9s
}

#blog_name #site-name:hover span:nth-child(10) {
    transition-delay: 1s
}
```



## 配置 Twikoo 评论

1. 配置 MongoDB
2. 配置 Vercel
3. 配置`_config.butterfly.yml` 
4. 因为[twikoo-pi-two.vercel.app](https://twikoo-pi-two.vercel.app/)国内被墙，为在Vercel上部署的项目添加自定义域名，可以使用主站的子域名，例如`twikoo.marapython.com`，并在域名服务商添加一条域名解析记录

[Twikoo 文档](https://twikoo.js.org/)

Twikoo 评论管理

1、即时微信通知，未配置成功

2、IP 归属地显示

## 标签页

在标签页正文的头部位置，添加现时所有的标签内容。

1、`Marapython\themes\butterfly\layout\tag.pug`文件内，添加第2-4行的代码

```pug
    #tag
      #tag-page-tags
        .tag-cloud-list
          !=cloudTags({source: site.tags, minfontsize: 1.2, maxfontsize: 2.1, limit: 0, unit: 'em'})
      .article-sort-title= _p('page.tag') + ' - ' + page.tag
      +articleSort(page.posts)
      include includes/pagination.pug
```

2、`MaraPython\themes\butterfly\source\css\custom.css`文件内，添加

```css
#tag #tag-page-tags {
    display: flex;
    flex-flow: row wrap;
    margin: 0px -0.75rem 1rem;
}
```

待解问题：如何限定正文头部位置显示的标签数量为 Top 20?

## 头部导航菜单

主题再次升级至 4.5.1 版。这次参考 [关于 Butterfly 的导航栏的一些教程 | LYX の小破站 (yisous.xyz)](https://yisous.xyz/posts/895003b5/)，来调整一下导航菜单。

首先，在`_config.butterfly.yml`里面配置，顶部导航主菜单，取消图标，保留文字；二级菜单，维持原状，仍然保留图标。

第二，在`MaraPython\themes\butterfly\source\js\custom.css`添加自定义js，获取页面的标题：

```javascript
// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | MaraPython")[0];
```

第三，main.js也改一下：

```javascript
  window.scrollCollect = () => {
        return btf.throttle(function (e) {
          const currentTop = window.scrollY || document.documentElement.scrollTop
          const isDown = scrollDirection(currentTop)
          if (currentTop > 56) {
+           $header.classList.add('is-top-bar')
            if (isDown) {
              if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible')
              if (isChatBtnShow && isChatShow === true) {
                chatBtnHide()
                isChatShow = false
              }
            } else {
              if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible')
              if (isChatBtnHide && isChatShow === false) {
                chatBtnShow()
                isChatShow = true
              }
            }
            $header.classList.add('nav-fixed')
            if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
              $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
            }
          } else {
            if (currentTop === 0) {
-             $header.classList.remove('nav-fixed', 'nav-visible')
+             $header.classList.remove('is-top-bar')
            }
            $rightside.style.cssText = "opacity: ''; transform: ''"
          }

          if (document.body.scrollHeight <= innerHeight) {
            $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
          }
        }, 200)()
      }
```

第四，修改`themes/butterfly/layout/includes/header/index.pug`，其中`nav-visible`可以控制默认显示的是站点标题还是导航栏菜单。

```pug
  if top_img !== false
    - var imgSource = top_img && top_img.indexOf('/') !== -1 ? `background-image: url('${url_for(top_img)}')` : `background: ${top_img}`
    - var bg_img = top_img ? imgSource : ''
    - var site_title = page.title || page.tag || page.category || config.title
-   - var isHomeClass = is_home() ? 'full_page' : 'not-home-page'
+   - var isHomeClass = is_home() ? 'full_page nav-fixed nav-visible' : 'not-home-page'
    - is_post() ? isHomeClass = 'post-bg' : isHomeClass
  else
    - var isHomeClass = 'not-top-img'
```

第五，修改`themes/butterfly/layout/includes/header/nav.pug`，代码中的`btf.scrollToDest(0, 500)`方法，在点击标题之后，可以使视口回滚至页面顶部。

```pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]

  div.mask-name-container
    center(id="name-container")
      a(id="page-name" href="javascript:btf.scrollToDest(0, 500)") PAGE_NAME
    
  #menus
    !=partial('includes/header/menu_item', {}, {cache: true})
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw
```

最后，调整一下`MaraPython\themes\butterfly\source\css\custom.css`的格式代码，全部都是控制导航菜单的样式。

## 页脚导航菜单

版本 3.8.4 还支持直接在`_config.butterfly.yml`里面直接配置`ICP`选项，以此来设置网站的备案信息。

```yml
ICP:
  enable: true  # 是否启用 ICP
  url: https://www.beian.miit.gov.cn/  # 点击后的链接地址
  text: 粤 ICP 备 20043865 号  # 备案号
  icon:    # 图标
```

新版本 4.0.1 中相关设置入口已经关闭，因为复制上面来自 3.8.4 版本`_config.butterfly.yml`的设置已经不再生效，网站底部原有的备案信息不再正常显示。

解决办法如下：

打开`themes\butterfly\source\css\_layout\footer.pug`，在与现有的三个`if`分句后面并列的位置，添加第四个`if`分句：

```pug
  if theme.ICP.enable
    .icp
      a(href='https://beian.miit.gov.cn/')= '粤 ICP 备 20043865 号'
```

网站的备案信息现在可以正常显示，问题得到解决。

2022-6-20 最新解决办法，直接在`_config.butterfly.yml`里面添加 HTML 文本，并且在`themes\butterfly\source\css\custom.css`里面添加 CSS 样式：

```YML
footer:
  owner:
    enable: false
    since: 2020
  custom_text: <div id="marapython-footer"><div class="footer-group"><h3 class="footer-title">产品</h3><div class="footer-links"><a class="footer-item" href="/tags/蓝牙音箱/" data-pjax-state="">蓝牙音箱</a><a class="footer-item" href="/tags/Soundbar/" data-pjax-state="">Soundbar</a><a class="footer-item" href="/tags/Party-Speaker/" data-pjax-state="">Party Speaker</a></div></div><div class="footer-group"><h3 class="footer-title">设计</h3><div class="footer-links"><a class="footer-item" href="/tags/HTMLHTML/" data-pjax-state="">HTML</a><a class="footer-item" href="/tags/CSS/" data-pjax-state="">CSS</a><a class="footer-item" href="/tags/JavaScript/" data-pjax-state="">JavaScript</a><a class="footer-item" href="/tags/Python/" data-pjax-state="">Python</a><a class="footer-item" href="/tags/Figma/" data-pjax-state="">Figma 教程</a></div></div><div class="footer-group"><h3 class="footer-title">开发</h3><div class="footer-links"><a class="footer-item" href="/tags/Hexo/" data-pjax-state="">Hexo 魔改</a><a class="footer-item" href="/tags/Git/" data-pjax-state="">Git 教程</a><a class="footer-item" href="/tags/Typora/" data-pjax-state="">Typora</a><a class="footer-item" href="/tags/Sublime-Text/" data-pjax-state="">Sublime Text</a><a class="footer-item" href="/tags/VS-Code/" data-pjax-state="">VS Code</a></div></div><div class="footer-group"><h3 class="footer-title">生活</h3><div class="footer-links"><a class="footer-item" href="/musiclist/" data-pjax-state="">音乐榜单</a><a class="footer-item" href="/movies/" data-pjax-state="">我的电影</a><a class="footer-item" href="/tags/读书笔记/" data-pjax-state="">读书笔记</a><a class="footer-item" href="/essay/" data-pjax-state="">即刻短文</a><a class="footer-item" href="/tags/混剪/" data-pjax-state="">视频剪辑</a></div></div><div class="footer-group"><h3 class="footer-title">分类</h3><div class="footer-links"><a class="footer-item" href="/categories/新零售/" data-pjax-state="">新零售</a><a class="footer-item" href="/categories/资源中心/" data-pjax-state="">资源中心</a><a class="footer-item" href="/tags/中英对照/" data-pjax-state="">中英对照</a><a class="footer-item" href="/categories/我的开发/" data-pjax-state="">我的开发</a><a class="footer-item" href="/categories/" data-pjax-state="">全部分类</a></div></div><div class="footer-group"><h3 class="footer-title">导航</h3><div class="footer-links"><a class="footer-item" href="/link/" data-pjax-state="">友情链接</a><a class="footer-item" href="/tlink/" data-pjax-state="">在线工具</a><a class="footer-item" target="_blank" rel="noopener external nofollow noreferrer" href="https://soundfreaq.jd.com/">奇响旗舰店</a><a class="footer-item" href="/link/#友链文章" data-pjax-state="">友链文章</a><a class="footer-item" href="/tasks/" data-pjax-state="">工作清单</a></div></div><div class="footer-group"><h3 class="footer-title">协议</h3><div class="footer-links"><a class="footer-item" href="/privacy/" data-pjax-state="">隐私协议</a><a class="footer-item" href="/cookies/" data-pjax-state="">Cookies</a><a class="footer-item" href="/cc/" data-pjax-state="">版权协议</a></div></div></div><a href="http://www.beian.miit.gov.cn/" style="color:#fff" target="_blank">粤 ICP 备 20043865 号</a>
```

## H2 标题的格式设定

在`_config.butterfly.yml`里面，取消美化：

```yml
# Beautify （美化頁面顯示）
beautify:
  enable: false
  field: post # site/post
  title-prefix-icon: # '\f863' # '\f0c1'
  title-prefix-icon-color: # '#F47466'
```

再在`themes\butterfly\source\css\custom.css`里面，取消了各级标题之前旋转小风车的各项 CSS 配置，重新简化设置了标题的格式，尤其是 H2 在手机屏幕下的格式。

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

4.0.1 版本对评论的设置进行了简化，原先`Valine`的`placeholder`选项在`_config.butterfly.yml`里面也被关闭了。原先设置的提示语现在变成了默认的一句`Just Go Go`，因找不到修改入口，放弃治疗。

## 含有行内公式的段落

今天在博文 [Parallelogram](https://www.marapython.com/posts/parallelogram/) 里面发现，如果段落或者无序列表项的内部含有 inline 数学公式时，相应内容会被自动添加一个`has-jax`的类，而这个类下文本内容的行高设置得过于密集了。于是，找到原因，就把`MaraPython\themes\butterfly\source\css\_layout\third-party.styl`里面第 92 行给注释掉。

```STYL
// mathjax
mjx-container[display],
.has-jax
  overflow-x: auto
  overflow-y: hidden
  // line-height: normal !important
```

## 公式块内部的不换行

直接在公式块里面使用`\\`的话，在 Typora 里面可以使公式换行，但在 Hexo + Butterfly 里面却不能使公式换行，例如：

```markdown
$$
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
$$
```

Hexo + Butterfly 渲染后的显示效果如下：
$$
∠W+∠X=180° \\ 
∠X+∠Y=180° \\ 
∠Y+∠Z=180° \\ 
∠Z+∠W=180°
$$

可以看到，本应该分四段显示的公式却连成了一行。这不是我们想要的结果。

我们尝试在公式内容的首尾分别添加`\begin{aligned}`和`\end{aligned}`，即可以解决在 Hexo + Butterfly 里面公式块内的不换行问题。

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

## 摘要卡片中的数学公式

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

1、根据 [官方教程](https://butterfly.js.org/posts/ceeb73f/#Math-數學)，安装插件

```BASH
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

2、配置 Hexo 根目录的配置文件

```YML
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

```PUG
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

去掉仅限页面和博文渲染的条件限制，即：注释掉第 3 行，同时减少第 4 行的 1 个缩进。更改后的代码：

```PUG
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

```YML
YML
# Math （數學）
# --------------------------------------
# About the per_page
# if you set it to true, it will load mathjax/katex script in each page (true 表示每一頁都加載 js)
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

## 文章摘要

- 首页卡片 Markdown 语法（例如加粗字体）不渲染

解决办法：

在 front-matter 的 description 里面手动添加的文章摘要内容，直接在复制博文中的 Markdown 文本以后，在有语法格式的地方改用 HTML 标签。此时，如果首页卡片里如果使用了自动摘要，那么来自文章主体的块状公式内容将仍然无法渲染，因为主题作者的设计本意即是如此。

另外在 front-matter 的 description 里面手动添加摘要内容时，应该避免使用英文冒号，否则会渲染报错。使用HTML转义字符来代替英文冒号。

## 自定义指定首页文章卡片高度

首页默认的文章节选内容长度太短，只有 2-3 行，根本无法完整显示 front matter 里面 description 设置的内容。解决办法：

### 修改源文件

编辑 `themes/butterfly/layout/includes/mixins/post-ui.pug`，注释掉第 3 行，添加第 4 行，如下：

```PUG
mixin postUI(posts)
  each article , index in page.posts.data
    // .recent-post-item
    .recent-post-item(class= (article.large === true) ? 'post-card-large' : '')
```

只是在`.recent-post-item`后面加一个三元运算符的判断，当`large`参数为`true`时，添加一个`class：post-card-large`。

### 修改 CSS

在`themes\butterfly\source\css\custom.css`里面添加卡片高度，如下：

```PUG
#recent-posts > .post-card-large >.recent-post-info > .content{
  -webkit-line-clamp: 5!important;
}
```

### 修改博文模板

在`scaffolds\post.md`的 front matter 里面添加

```markdown
large: true
```

这样，每次生成新的博文时，都会自动拉高首页上卡片高度，显示 5 行的节选内容。

## 打字机效果

在`themes/butterfly/layout/includes/footer.pug`里添加：

```PUG
#footer-banner
      .footer-banner-links
        .footer-banner-left
          span#footer-banner-tips
          script(type='text/javascript', src='https://cdn.bootcss.com/typed.js/2.0.5/typed.js')
          script(type='text/javascript').
            
            var typed = new Typed("#footer-banner-tips", {
                        strings: ['The key to success? Do stuff','Be stronger than your excuses.','Wake up, kick ass, REPEAT','Be a warrior, not a worrier.','Dream It.  Wish It.  Do It.','Be brave, take risks.','Genius is 10% inspiration, 90% perspiration.','Be positive patient and persistent.'],
                        startDelay: 200,
                        backDelay: 2000,
                        typeSpeed: 100,
                        loop: true,
                        backSpeed: 20
                        })
            
        .footer-banner-right
          a.footer-banner-link(href='/rss/', data-pjax-state) 订阅
          a.footer-banner-link(href='/update/', data-pjax-state) 主题
          a.footer-banner-link(href='https://www.beian.miit.gov.cn/', target='_blank') 粤 ICP 备 20043865 号
```

如果第一句内容没有打字出来，而是先停顿一段时间，然后从第二句开始打字出来，那么就是盒子是块级标签，必须得转换成行内标签 。第 4 行代码，即是将原来的 div 元素更改成了 span 元素。

## 安装苹方字体

2022/11/03 update

This complete package has been downloaded from [多多软件站](http://www.ddooo.com/softdown/125598.htm) and then unzipped and copied to `C:/Windows/Fonts` for implementation.

When refered to in CSS files, please use the each file name under this folder. 

Tested in Typora theme and proved working. 

MaraPython site-wise also starts to show a completely different font style, but not sure which code section is pulling the strings, `-apple-system`, `BlinkMacSystemFont`, or `PingFang SC`. To be investigated. 

```CSS
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
```



## References

https://github.com/jerryc127/hexo-theme-butterfly/issues/305

https://chachabai.github.io/butterfly/

[https://butterfly.js.org/posts/ceeb73f/#Math - 數學](https://butterfly.js.org/posts/ceeb73f/#Math-數學)

https://www.wzhecnu.cn/2021/08/31/blog/math-tex/

https://blog.zhheo.com/p/77ebd8b5.html

[typed.js 打字机效果](http://cheng.lolku.cn/html/typed.html)
