---
title: Regular Expression Operations
toc_number: true
abbrlink: re
date: 2021-12-26 12:14:33
updated:
tags: [regular expressions, 正则表达式]
categories: Python
keywords:
description: This module provides regular expression matching operations similar to those found in Perl.
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

Python中常用的关于正则表达式的函数是`re.search()`，使用它必须首先导入正则表达式对应的包（package），也就是输入下面的代码。

```python
import re
```

通常的用法是提供两个参数：`re.search(pattern,string)`，其中`pattern`是字符串形式提供的正则表达式，`string`是需要匹配的字符串；如果能匹配，则返回一个`re.Match object`（详细介绍请参考第254页，暂时可以不必关心），这时提示符会显示类似`<re.Match object; span=(0, 1), match='4'>`之类的结果；如果不能匹配，结果是`None`（这是Python中的一个特殊值，类似其他某些语言中的`Null`），不会有任何显示。图1-3演示了运行Python语句的结果。

**图1-3 观察`re.search()`匹配的返回值**

```python
In [1]: import re

In [2]: re.search("[0123456789]","4")
Out[2]: <re.Match object; span=(0, 1), match='4'>

In [3]: re.search("[0123456789]","a")

In [4]: re.search("[01234]", "abc123")
Out[4]: <re.Match object; span=(3, 4), match='1'>
```

`span(0, 1)`或者`spand(3, 4)`表示已匹配文本在原字符串中的位置，它的表示方法跟**字符串切片**的表示方法`s[0:1]`或者`s[3:4]`有些类似。

{% note info simple %}

In the above examples, the return value is always the leftmost possible match. `re.search()` scans the search string from left to right, and as soon as it locates a match for `<regex>`, it stops scanning and returns the match.

{% endnote %}

### 数据提取

re.search(pattern, string).group(0)

re.findall(pattern, string)
