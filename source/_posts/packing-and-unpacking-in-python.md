---
title: Packing and Unpacking in Python
toc_number: true
large: true
categories: Python
keywords:
  - iterable unpacking
description: >-
  <em>Unpacking</em> in Python refers to an operation that consists of assigning
  an iterable of values to a tuple (or list) of variables in a single assignment
  statement. As a complement, the term <em>packing</em> can be used when we
  collect several values in a single variable using the iterable unpacking
  operator, <code>*</code>.
abbrlink: 2273055152
date: 2022-08-19 08:08:52
updated:
tags:
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



解包处理时，赋值运算符`=`左边，整个容器的本质是元组。逗号隔开的是元组中一个个的元素。以下四条解包语句本质相同，只不过第2、3语句省略了元组容器的小括号。

```python
In [6]: (a, b, c) = 1, 2, 3

In [7]: a, b, c = (1, 2, 3)

In [8]: a, b, c = 1, 2, 3

In [9]: (a, b, c) = (1, 2, 3)
```

## 元组解包

## 可迭代变量解包

### 字符串解包

### 列表解包

### 生成器解包

### 字典解包

#### key 解包

#### value 解包

#### item 解包

1、赋值运算符`=`左边，容器的本质是元组

2、赋值运算符`=`左边变量的数量，与右边被解包容器内元素的数量，必须相同，否则会报错

## 使用`*`解包元组、列表、字符串

除了上面的普通解包外，Python还支持更灵活的动态解包语法。使用星号表达式`*args`作为变量名，它便会贪婪地捕获多个值对象，并将捕获到的内容作为列表赋值给`args`。

```
>>> data = ['Alowree', 'jogging', 'reading', 'coding', 2022]
>>> author, hobbies, year = data
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 3)
>>> author, *hobbies, year = data
>>> author
'Alowree'
>>> hobbies
['jogging', 'reading', 'coding']
>>> year
2022
>>>
```



>SyntaxError: starred assignment target must be in a list or tuple

If we try to use the `*` operator to pack several values into a single variable, then we need to use the singleton `tuple` syntax. For example, to make the above example works, we just need to add a comma after the variable `num`, like in `*num, = range(10)`.

```
>>> *num = range(10)
  File "<stdin>", line 1
SyntaxError: starred assignment target must be in a list or tuple
>>> *num, = range(10)
>>> num
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>>
```

记住，通过`*`运算符解包时，赋值运算符左侧的容器永远是一个元组，即便有时元组的标志性小括号被省略了。使用逗号隔开的是元组中一个个的元素，即便有时只有一个元素。

## 使用`**`解包字典

https://stackabuse.com/unpacking-in-python-beyond-parallel-assignment/
