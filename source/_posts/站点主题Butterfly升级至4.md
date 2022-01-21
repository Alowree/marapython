---
title: 站点主题Butterfly升级至4
toc_number: true
categories: [Hexo, Butterfly]
abbrlink: butterfly-v4
date: 2022-01-18 12:08:10
updated:
tags:
keywords:
description:
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
/* Adjust font-size of each title */
article h2 {
    font-size: 1.8em;
    border-left: 6px solid #d56464;
    margin: 20px -20px 10px -45px;
    padding: 10px 20px 9px 37px;
}
article h3 {
    font-size: 1.4em;
}

article h4 {
    font-size: 1.2em;
}

/* adjust H2 location under mobile screen */
@media screen and (max-width: 768px) {
  article h2 {
    margin: 20px -20px 10px -20px;
    padding: 10px 20px 9px 15px;
    }
}
```



## 评论中的默认提示语

4.0.1版本对评论的设置进行了简化，原先`Valine`的`placeholder`选项在`_config.butterfly.yml`里面也被关闭了。原先设置的提示语现在变成了默认的一句`Just Go Go`，因找不到修改入口，放弃治疗。
