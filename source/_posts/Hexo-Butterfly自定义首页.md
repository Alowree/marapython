---
title: Hexo Butterfly自定义首页
abbrlink: custom-index
date: 2021-08-24 09:28:35
updated:
tags:
categories: [Hexo, Butterfly]
keywords: [Hexo, Butterfly, Matery, Slider, Carousel]
description: 本文的主要目的在于探索和记录，如何在基于Butterfly主题的Hexo博客首页上，实现一个类似于Matery主题首页顶部的旋转木马相册carousel以及我的梦想dream卡片。由于本菜的前端水平，于是就有了这篇文章，并且希望这种愚公的精神可以感动和招引来某位前端大神，助我移山。Inspired by Matery Theme. 
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/pexels-neosiam-4498792.jpg
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
自从接触Hexo以来，短恋过NexT主题之后，就一直非常喜欢Butterfly这个主题。它设计简洁优雅，落落大方，并且提供了N多定制化装修入口。在Gitee建站以后，一直在提醒自己克制，Keep it Simple，索性首页的图片都取消不用，只用一个淡蓝的纯色背景。但是看到Matery主题首页的Slider以后，还是被这个设计给惊艳到了，尤其是图片上的纯色蒙板效果。实在忍不住，不由自主地安装、把玩一番Matery之后，开始痴心妄想要把这个Slider功能嫁接到Butterfly主题上来。

本文的主要目的在于探索和记录，如何在基于Butterfly主题的Hexo博客首页上，实现一个类似于Matery主题首页顶部的旋转木马相册carousel以及我的梦想dream卡片。由于本菜的前端水平，于是就有了这篇文章，并且希望这种愚公的精神可以感动和招引来某位前端大神，助我移山。Inspired by Matery Theme. 

## 旋转相册

### 一次尝试

首先我们需要进入`themes\butterfly\layout`下的`index`文件，找到如下代码：

```pug
block content
```

然后在这段代码的下面添上一行代码：

```pug
include ./carousel.swig
```

FAIL

### 二次尝试

3rd attempt with carousel.js

download `carousel.js` from `https://github.com/wzpan/hexo-tag-bootstrap` and put it under path `blog/themes/butterfly/scripts/tag/`

Carousel (with 2 images, first with caption)

```markdown
{% carousel nav indicators %}
{% img d-block w-100 /stock/img1.jpg %}
# First Slide
This is a label for the slide :) 
{% img d-block w-100 /stock/img2.jpg %}
{% endcarousel %}
```

unknown block tag: carousel

fail to load hexo-tag-bootstrap

### 三次尝试

reverse engineering Matery theme

1. 首先分析`betterfly/layout/index.pug`

   ```pug
   extends includes/layout.pug
   
   block content
   
     include ./includes/mixins/post-ui.pug
   
     #recent-posts.recent-posts
       +postUI
       include includes/pagination.pug
   ```

2. 看到第一句代码后，再去`betterfly/includes/layout.pug`去看，`include ./head/index.pug`这句代码正是导入顶图作用

   ```pug
   doctype html
   html(lang=config.language data-theme=theme.display_mode class=htmlClassHideAside)
     head
       include ./head.pug
     body
       if theme.preloader
         !=partial('includes/loading/loading', {}, {cache: true})
   
       if theme.background
         #web_bg
       
       !=partial('includes/sidebar', {}, {cache: true})
   
       if page.type !== '404'
         #body-wrap(class=pageType)
           include ./header/index.pug
   ```

3. 那么去`themes/butterfly/layout/includes/header/index.pug`看一下

   ```pug
   if !theme.disable_top_img && page.top_img !== false
     if is_post()
       - var top_img = page.top_img || page.cover || page.randomcover
     else if is_page()
       - var top_img = page.top_img || theme.default_top_img
     else if is_tag()
       - var top_img = theme.tag_per_img && theme.tag_per_img[page.tag] 
       - top_img = top_img ? top_img : (theme.tag_img !== false ? theme.tag_img || theme.default_top_img : false)
     else if is_category()
       - var top_img = theme.category_per_img && theme.category_per_img[page.category]
       - top_img = top_img ? top_img : (theme.category_img !== false ? theme.category_img || theme.default_top_img : false)
     else if is_home()
       - var top_img = theme.index_img !== false ? theme.index_img || theme.default_top_img : false
     else if is_archive()
       - var top_img = theme.archive_img !== false ? theme.archive_img || theme.default_top_img : false
     else
       - var top_img = page.top_img || theme.default_top_img
   
     if top_img !== false
       - var imgSource = top_img && top_img.indexOf('/') !== -1 ? `background-image: url('${url_for(top_img)}')` : `background: ${top_img}`
       - var bg_img = top_img ? imgSource : ''
       - var site_title = is_archive() ? fragment_cache('findArchivesTitle', function(){return findArchivesTitle(theme.menu);}) : page.title || page.tag || page.category || config.title
       - var isHomeClass = is_home() ? 'full_page' : 'not-home-page'
       - is_post() ? isHomeClass = 'post-bg' : isHomeClass
     else
       - var isHomeClass = 'not-top-img'
   else
     - var top_img = false
     - var isHomeClass = 'not-top-img'
   
   header#page-header(class=isHomeClass style=bg_img)
     !=partial('includes/header/nav', {}, {cache: true})
     if top_img !== false
       if is_post()
         include ./post-info.pug
       else if is_home() 
         #site-info
           h1#site-title=site_title
           // img(src="/img/FINEQ-removebg-preview.png")
           if theme.subtitle.enable
             - var loadSubJs = true
             #site-subtitle
               span#subtitle
           if(theme.social)
             #site_social_icons
               !=fragment_cache('social', function(){return partial('includes/header/social')})
         #scroll-down
           i.fas.fa-angle-down.scroll-down-effects
       else
         #page-site-info
           h1#site-title=site_title
   ```

   这一大段代码才是设置顶图的作用，并且最下面一小块代码好像是在设置网站`subtitle`设定的打字效果。在`Matery`主题里面，

4. 放弃！

## 我的梦想

Do not touch `root/themes/butterfly/layout/index.pug`

Modify `root/themes/butterfly/layout/includes/layout.pug`

Before change:

```pug
    if page.type !== '404'
      #body-wrap(class=pageType)
        include ./header/index.pug
        main#content-inner.layout(class=hideAside)
          if body
            div!= body
          else
            block content
            if theme.aside.enable && page.aside !== false
              include widget/index.pug
        // h2 Hello World at bottom of pagination
        - var footerBg = theme.footer_bg
        if (footerBg)
          if (footerBg === true)
            - var footer_bg = bg_img
          else
            - var footer_bg = theme.footer_bg.indexOf('/') !== -1 ? `background-image: url('${url_for(footerBg)}')` : `background: ${footerBg}`
        else
          - var footer_bg = ''

```

After change:

```pug
    if page.type !== '404'
      #body-wrap(class=pageType)
        include ./header/index.pug

        #indexCard.index-card
          .card
            .card-content
              .dream
                .title.center-align
                  i.far.fa-lightbulb
                  | &nbsp;&nbsp;&#x6211;&#x7684;&#x68A6;&#x60F3;

        main#content-inner.layout(class=hideAside)
          if body
            div!= body
          else
            block content
            if theme.aside.enable && page.aside !== false
              include widget/index.pug
        // h2 Hello World at bottom of pagination
        - var footerBg = theme.footer_bg
        if (footerBg)
          if (footerBg === true)
            - var footer_bg = bg_img
          else
            - var footer_bg = theme.footer_bg.indexOf('/') !== -1 ? `background-image: url('${url_for(footerBg)}')` : `background: ${footerBg}`
        else
          - var footer_bg = ''

```



Create `custom.css` under path `root/themes/butterfly/source/css/custom.css`,  copy all css styles into this file, and save the file.

Inject `custom.css` via `_config.butterfly.yml`  under root directory

This is not right. Not only `index`, but all other `pages` are with this `dream` card.

This revision has been Abandoned.

