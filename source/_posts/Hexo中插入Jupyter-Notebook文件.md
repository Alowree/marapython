---
title: Hexo中插入Jupyter Notebook文件
toc_number: true
abbrlink: hexo-jupyter-notebook
date: 2021-12-29 15:28:53
updated:
tags:
categories: Hexo
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

这篇文章主要想研究一下，在Hexo博客框架下，博文是否可以使用Jupyter Notebook生成的`ipynb`文件。通常，Hexo博客只能使用和渲染标准的`md`文件，但是`ipynb`文件很适合使用Python代码来绘制某些函数的图形，在文件中不但可以显示Python代码，还可以很方便地显示代码的输出结果，也就是随之打印出来的函数图形。所以，Hexo + Jupyter Notebook这个题目值得研究一下。



## 转为HMTL

1. 把`.ipynb`下载为`.html`，比如我下载的示例文件名称为`binomial.html`

2. 把`.html`上传至Gitee仓库，开启Gitee Pages服务，即使之前已经开启，也要记得再手动点击“更新”按钮。比如我之前已经开启了Gitee Pages服务，根目录是`https://alowree.gitee.io`，在根目录下新建`ipynb`文件夹，再把`binomail.html`上传至`ipynb`文件夹。这时候，需要点击“服务$\rightarrow$Gitee Pages$\rightarrow$更新”，更新成功以后，就可以在浏览器里通过`https://alowree.gitee.io/ipynb/binomial.html`直接访问这个新上传生成的页面。

3. 在`Hexo/_post/.md`文件中使用`iframe`标签，直接引用已经存在于Gitee的页面`https://alowree.gitee.io/ipynb/binomial.html`即可。

   ```markdown
   <iframe src="https://alowree.gitee.io/ipynb/binomial.html" width="100%" height="600"></iframe>
   ```

   显示效果如下：

<iframe src="https://alowree.gitee.io/ipynb/binomial.html" width="100%" height="600"></iframe>

**待解问题：**

1. 消除滚动条
2. 添加Jupyter文件的CSS样式

## 使用插件

安装插件

```BASH
npm install hexo-jupyter-notebook --save
```

安装依赖

```BASH
npm install pandoc
pip install nbconvert
```





