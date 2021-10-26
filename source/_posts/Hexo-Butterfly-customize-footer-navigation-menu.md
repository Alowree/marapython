---
title: 如何在Hexo博客网站底部增加页脚导航菜单
categories:
  - Hexo
keywords:
  - Hexo
  - Butterfly
  - 页脚
  - 导航菜单
abbrlink: 2809951222
date: 2021-09-07 07:46:07
updated:
tags:
  - Hexo
  - Butterfly
  - 页脚
  - 导航菜单
  - footer
description:
top_img:
comments:
cover: https://gitee.com/Alowree/img/raw/master/david-clode-17qtdqSjE-4-unsplash.jpg
toc:
toc_number:
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

本博客乃基于[Hexo](https://hexo.io/zh-cn/index.html)框架，使用[Butterfly](https://butterfly.js.org/)主题搭建而成。所以本文从分类上来讲，当然也属于Hexo魔改系列。Butterfly主题的底部配置非常简洁，默认的原始配置仅有博主版权和框架主题信息。我们想在网站底部添加更为丰富、更易使用的导航菜单，方便访客寻找和定位自己感兴趣的内容。

1. 入口，在`_config.butterfly.yml`主题配置文件内，通过<kbd>Ctrl+F</kbd>查找"custom_text"

   ```yml
   # Footer Settings
   # --------------------------------------
   footer:
     owner:
       enable: true
       since: 2020
     custom_text: 
     copyright: true # Copyright of theme and framework
   ```

2. 找到心仪的页脚导航菜单，F12，复制相应的HTML代码到`custom_text`后面，注意冒号后面先跟一个空格再粘贴

   ```yml
   # Footer Settings
   # --------------------------------------
   footer:
     owner:
       enable: true
       since: 2020
     custom_text: <div id="heo-footer"><div class="footer-group"><h3 class="footer-title">产品</h3><div class="footer-links"><a class="footer-item" href="/tags/蓝牙音箱/" data-pjax-state="">蓝牙音箱</a><a class="footer-item" href="/tags/Soundbar/" data-pjax-state="">Soundbar</a><a class="footer-item" href="/tags/Party-Speaker/" data-pjax-state="">Party Speaker</a></div></div><div class="footer-group"><h3 class="footer-title">设计</h3><div class="footer-links"><a class="footer-item" href="/tags/HTMLHTML/" data-pjax-state="">HTML</a><a class="footer-item" href="/tags/CSS/" data-pjax-state="">CSS</a><a class="footer-item" href="/tags/JavaScript/" data-pjax-state="">JavaScript</a><a class="footer-item" href="/tags/Photoshop/" data-pjax-state="">Photoshop</a><a class="footer-item" href="/tags/Figma/" data-pjax-state="">Figma教程</a></div></div><div class="footer-group"><h3 class="footer-title">开发</h3><div class="footer-links"><a class="footer-item" href="/tags/Hexo/" data-pjax-state="">Hexo魔改</a><a class="footer-item" href="/tags/Git/" data-pjax-state="">Git教程</a><a class="footer-item" href="/tags/Typora/" data-pjax-state="">Typora</a><a class="footer-item" href="/tags/Sublime-Text/" data-pjax-state="">Sublime Text</a><a class="footer-item" href="/tags/Python/" data-pjax-state="">Python</a></div></div><div class="footer-group"><h3 class="footer-title">生活</h3><div class="footer-links"><a class="footer-item" href="/musiclist/" data-pjax-state="">音乐榜单</a><a class="footer-item" href="/movies/" data-pjax-state="">我的电影</a><a class="footer-item" href="/tags/读书笔记/" data-pjax-state="">读书笔记</a><a class="footer-item" href="/essay/" data-pjax-state="">即刻短文</a><a class="footer-item" href="/tags/混剪/" data-pjax-state="">视频剪辑</a></div></div><div class="footer-group"><h3 class="footer-title">分类</h3><div class="footer-links"><a class="footer-item" href="/categories/新零售/" data-pjax-state="">新零售</a><a class="footer-item" href="/categories/资源中心/" data-pjax-state="">资源中心</a><a class="footer-item" href="/categories/翻译内容/" data-pjax-state="">翻译内容</a><a class="footer-item" href="/categories/我的开发/" data-pjax-state="">我的开发</a><a class="footer-item" href="/categories/" data-pjax-state="">全部分类</a></div></div><div class="footer-group"><h3 class="footer-title">导航</h3><div class="footer-links"><a class="footer-item" href="/link/" data-pjax-state="">友情链接</a><a class="footer-item" href="/tlink/" data-pjax-state="">在线工具</a><a class="footer-item" target="_blank" rel="noopener external nofollow noreferrer" href="https://pan.zhheo.com/">海鸥云盘</a><a class="footer-item" href="/link/#友链文章" data-pjax-state="">友链文章</a><a class="footer-item" href="/rss/" data-pjax-state="">RSS订阅</a></div></div><div class="footer-group"><h3 class="footer-title">协议</h3><div class="footer-links"><a class="footer-item" href="/privacy/" data-pjax-state="">隐私协议</a><a class="footer-item" href="/cookies/" data-pjax-state="">Cookies</a><a class="footer-item" href="/cc/" data-pjax-state="">版权协议</a></div></div></div>
     copyright: true # Copyright of theme and framework
   ```

3. 再把相应各个级别的CSS样式代码一一复制粘贴至`themes/butterfly/sources/css/custom.css`

   ```CSS
   #heo-footer {
       display: flex;
       flex-direction: row;
       width: 100%;
       max-width: 1200px;
       margin: 1rem auto;
       justify-content: space-between;
       flex-wrap: wrap;
       margin-bottom: 3rem;
       padding: 0 1rem;
   }
   
   #heo-footer .footer-group {
       min-width: 120px;
   }
   
   #heo-footer .footer-title {
       color: var(--heo-secondtext);
       font-size: .8rem;
       text-align: left;
   }
   
   #heo-footer .footer-links {
       display: flex;
       flex-direction: column;
   }
   
   #heo-footer .footer-item {
       font-size: .8rem;
       color: var(--heo-fontcolor);
       margin-right: auto;
   }
   ```

4. 在主题配置文件`_config.butterfly.yml`中，将`custom.css`注入

   ```yml
   # Inject
   # Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
   # 插入代码到头部 </head> 之前 和 底部 </body> 之前
   inject:
     head:
       - <link rel="stylesheet" href="/css/custom.css">
   ```

5. 页脚导航菜单中相关菜单内容的`text-align`属性，可以根据需要在`custom.css`文件中自行配置`left`，`center`，或者`right`

6. 再把页脚导航菜单`custom_text`的内容调整至`owner`和`copyright`的上面，入口在`themes/butterfly/layout/includes/footer.pug`，我们把原始代码中的第三个`if`条件分句挪至第一的位置即可，代码更改以后如下所示。

   ```pug
   #footer-wrap
     if theme.footer.custom_text
       .footer_custom_text!=`${theme.footer.custom_text}`
     if theme.footer.owner.enable
       - var now = new Date()
       - var nowYear = now.getFullYear()
       if theme.footer.owner.since && theme.footer.owner.since != nowYear
         .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} By ${config.author}`
       else
         .copyright!= `&copy;${nowYear} By ${config.author}`
     if theme.footer.copyright
       .framework-info
         span= _p('footer.framework') + ' '
         a(href='https://hexo.io')= 'Hexo'
         span.footer-separator |
         span= _p('footer.theme') + ' '
         a(href='https://github.com/jerryc127/hexo-theme-butterfly')= 'Butterfly'
   ```

通过以上几步对`custom_text`的操作，PC端的网站底部此时应该已经出现了一个跟标的网站一模一样的导航菜单。更进一步的工作，导航菜单上具体的内容和链接，可以根据需要自行调整，就不多说。本站示例所用的页脚导航菜单之样式和内容，均来自于前端大佬[张洪HEO](https://blog.zhheo.com/)，在此谢过。

在`custom_text`即导航菜单下面，紧跟`owner`和`copyright`两项页脚信息，并且每项独占一行，布局上并不美观。鉴于尚不太熟悉`pug`文件的修改，只好在`themes/butterfly/layout/includes/footer.pug`文件中，使用`//-`将最后一个`if`条件分句注释掉，不启用。后来发现，在主题配置文件`_config.butterfly.yml`里面，将`copyright`直接设置成`false`是一种更便捷的方法。

**待解问题**

手机浏览器下，页脚导航菜单的样式跟PC端的样式还有些差异：

- 在`heo-footer`层级下，`footer-group`没有按`行`自适应布局，而是按`列`布局，难看
  - `footer-titile`在PC端是白色字体，而在手机端变成黑色字体，难看
  - `footer-links`下面的每个`footer-item`，在PC端都换行，而在手机端都没有换行，挤在一起

通过<kbd>Fn+F12</kbd>仔细分析`heo-footer`这个层级的CSS代码，发现粘贴在`custom.css`中的这部分代码，在实际生成页面CSS代码时，其顶部被自动添加了媒体解析自适应`@media only screen and (min-width: 993px)`，如下：

```CSS
@media only screen and (min-width: 993px)
#heo-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    padding: 0 1rem;
}
```

为解决这个问题，现在我们回到第4步，在主题配置文件`_config.butterfly.yml`中，在`custom.css`注入的设置位置，添加`media`设置项

```yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" href="/css/custom.css" media="all">
```

`hexo cl`，`hexo g`，`hexo s`三连，本地预览，可以发现在手机小屏幕状态下，页脚导航菜单的布局方式也同样按`custom.css`之设置生效了。经过`hexo d`部署以后，浏览发现仍然不生效的，记得在PC端浏览器和手机端浏览器清除一下历史记录，清除一下缓存，处理完以后应该是可以正常生效的。

