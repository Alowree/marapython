---
title: Hexo站点推送至三大搜索引擎
tags:
  - Hexo
  - SEO
categories: Hexo
abbrlink: hexo-seo
date: 2021-09-09 18:30:05
updated:
keywords:
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

花费大量时间和心血辛辛苦苦建立起来的博客网站，当然希望站点的文章能够被搜索引擎及时收录，从而出现在访客的搜索结果中，为人所用。本文我们详细介绍如何主动推送站点去到三大搜索引擎：[必应](https://www.bing.com/webmasters/)，[谷歌](https://developers.google.com/search)，和[百度](https://ziyuan.baidu.com/site/index#/)。

## 必应验证

1. 到必应[Microsoft Bing Webmaster Tools](https://www.bing.com/webmasters/)添加自己的网站，选择`手动添加网站`

   ![](https://image.marapython.com/AddYourSite.png)

2. 添加并验证网站，选择一种验证方法，选第一种`XML文件`

   - XML文件

   - HTML Meta标记

   - 将 CNAME 记录添加到 DNS 中

   ![XML文件](https://image.marapython.com/XML.png)

3. 下载`BingSiteAuth.xml`文件并把它添加到网站根目录下

   这里我们只需要直接把`BingSiteAuth.xml`放在`source`文件中就可以，然后`hexo d`部署网站。注意，如果是像我一样布置在`Gitee`上的，记得先去`https://gitee.com/用户名/用户名/pages`手动点击更新站点，之后再回到必应[Microsoft Bing Webmaster Tools](https://www.bing.com/webmasters/)点击`验证`按钮。
   
4. 验证成功

相对于谷歌和百度的HMTL文件验证，必应的XML文件验证，最为简便，它少了一步让`Hexo`跳过渲染HTML文件的设置步骤。

## 谷歌验证：HTML文件

1. 到谷歌[Google Search Console](https://search.google.com/search-console)通过`添加资源`添加自己的网站

   ![添加资源](https://image.marapython.com/GoogleAddResource.png)

2. 选择资源类型，使用右边的`网址前级`这个选项，填入自己的网址然后点击`继续`

   ![网址前缀](https://image.marapython.com/GoogleSitePrefix.png)

3. 验证所有权，推荐的验证方法，HTML文件

   按照指引，首先**下载**HMTL文件，然后把下载的`googlefba9766889e0cb6e.html`放在`source`文件中。

   ![验证所有权](https://image.marapython.com/GoogleHTMLFile.png)

4. 在`Hexo`站点配置文件`_config.yml`中配置`skip_render`信息
   ```yml
   skip_render:
     - googlefba9766889e0cb6e.html
   ```
   

   可以用这种方法让`Hexo`跳过对指定文件的渲染，将`source/googlefba9766889e0cb6e.html` 不做改动地输出到 `public` 目录。

5. 通过`hexo d`部署网站

   这一步相当于将下载的`googlefba9766889e0cb6e.html`**上传**至[MaraPython](https://marapython.com/)，以此来证明你对网站拥有的所有权或操作权。注意，如果是像我一样布置在`Gitee`上的，记得先去`https://gitee.com/用户名/用户名/pages`手动点击更新站点，之后再回到谷歌[Google Search Console](https://search.google.com/search-console)点击`验证`按钮。

6. 验证成功

如果漏掉上面第4步，未在配置文件`_config.yml`中配置`skip_render`信息，将出现所有权验证失败的提示信息：

![所有权验证失败](https://image.marapython.com/GoogleSiteVerificationFailure.png)

原因就在于，`Hexo`对`source`文件夹中的HTML文件进行了渲染，导致渲染生成的文件内容跟下载的原始HTML文件内容有所不同，所以无法通过验证。

## 谷歌验证：HTML标记

1. 同HTML文件法

2. 同HTML文件法

3. 验证所有权，选择`其他验证方法`，HTML标记。

   ![](https://image.marapython.com/GoogleSiteVerificationHTML.png)

4. 我们按提示将元标记复制出来，只提取`content`后面的文本内容，粘贴至主题配置文件`_config.butterfly.yml`中的`site_verification`对应位置。

   ```yml
   # Verification (站長驗證)
   # --------------------------------------
   
   site_verification:
     - name: google_site_verification
       content: vw_FTs4kG6b(此处截断省略部分代码)
     # - name: baidu_site_verification
     #   content: xxxxxxx
   ```

5. `Hexo cl`，`Hexo g`，`Hexo s`之后，本地预览，F12查看HTML代码，可以看到相应的元标记已对被添加到网页当中，位于`<head>`和`</head>`之间。

6. 最后`hexo d`部署网站。Again，如果是像我一样布置在`Gitee`上的，记得再去`https://gitee.com/用户名/用户名/pages`手动点击更新站点，之后再回到谷歌[Google Search Console](https://search.google.com/search-console)点击`验证`按钮。

7. 正常情况下，到这一步已经验证成功了。但是我试了几次，都仍然验证失败，出现下图提示信息。

   ![image-20210910105957627](https://image.marapython.com/image-20210910105957627.png)

8. 这说明，网站头部添加的元标记和谷歌给出的原始元标记存在差异。通过把两个位置的元标记分别复制粘贴在同一个记事本里比照，结果发现

   ```yml
   # 通过配置文件在网站头部自动生成的元标记
   <meta name="google_site_verification" content="vw_FTs4kG6b(此处截断省略部分代码)">
   # 谷歌给出的元标记，多了个斜杠
   <meta name="google-site-verification" content="vw_FTs4kG6b(此处截断省略部分代码)" />
   ```

9. HMTL标签分为**一般标签**和**自闭合标签**，而meta标签正是自闭合标签中的一个，自闭合标签后面的那道`/`，有或者没有，其实应该是等效的。这道`/`的有无真的是谷歌HTML标记验证失败的原因吗？

## 百度验证

百度的[资源搜索平台](https://ziyuan.baidu.com/site/index#/)，需要先登录，我是使用微信扫一扫登录自己的帐号。登录以后，显示“站点管理”页面，点击“添加网站”：

1. 第一步：输入网站

2. 第二步：站点属性

3. 第三步：验证网站

   {% checkbox checked, 文件验证 %}

   {% checkbox HTML标签验证 %}

   {% checkbox CNAME验证 %}

4. 我们选择`文件验证`，这种方法跟上面介绍的`谷歌验证之一：HTML文件`步骤大致是相同的。先下载HMTL文件，同样的，先把下载的`  baidu_verify_code-a5Xk3ddsv2.html`放在`source`文件中，然后在`Hexo`站点配置文件`_config.yml`中配置`skip_render`信息，可以用这种方法来跳过对指定文章文件的渲染，将`source/baidu_verify_code-a5Xk3ddsv2.html` 不做改动地输出到 `public` 目录

   ```yml
   skip_render:
     - googlefba9766889e0cb6e.html
     - baidu_verify_code-a5Xk3ddsv2.html
   ```

5. `hexo d`部署网站。注意，如果是像我一样布置在`Gitee`上的，记得先去`https://gitee.com/用户名/用户名/pages`手动点击更新站点，之后再回到百度[站点管理](https://ziyuan.baidu.com/site/index#/)点击`验证`按钮。

## 待解问题

1. 有外网条件下，`谷歌验证之一：HTML文件`验证失败的话，可以重新多走几次。感觉跟网络联接质量关系很大，我是试过两三次才验证成功的。
2. 经过上述设置以后，每个搜索引擎爬取收录站点的频次如何？
3. 如何查看每个搜索引擎对本站的收录效果？


## 参考资料

1. [添加网站验证，让搜索引擎收录你的网站](https://blog.csdn.net/qq_31555445/article/details/105616466)

2. [Hexo 每天自动提交网站url到搜索引擎](https://blog.imlete.cn/article/hexo-seo-autopush.html)

