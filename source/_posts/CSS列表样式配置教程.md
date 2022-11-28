---
title: CSS列表样式配置教程
toc_number: true
large: true
abbrlink: css-list-style
date: 2022-09-29 20:00:50
updated:
tags:
categories: CSS
keywords:
description: The <code>&#58;&#58;marker</code> CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to <code>display&#58;list-item;</code>, such as the <code>&#60;li&#62;</code> and <code>&#60;summary&#62;</code> elements.
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

Butterfly主题中的无序列表样式是一个蓝色的圆圈，鼠标悬浮时则圆圈变成橙色。这个列表样式效果是通过`::before`伪元素制作的。在实际部署过程中，发现存在marker与文字的对齐问题，即marker的位置不容易控制。

有一个更简单的制作方法，使用`::marker`伪元素制作。

## `list-style`

The **`list-style`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the list style properties at once.

Initial value as each of the properties of the shorthand: 

- [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type): `disc`
- [`list-style-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position): `outside`
- [`list-style-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image): `none`

**Note:** This property is applied to list items, i.e., elements with `display: list-item;`. [By default](https://html.spec.whatwg.org/multipage/rendering.html#lists) this includes [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) elements. Because this property is inherited, it can be set on a parent element (normally [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) or [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)) to make the same list styling apply to all the items inside.

```CSS
.post-content ul li::marker {
    transition: color .2s;
    content: '⭘ ';
    color: var(--btn-bg);
    font-weight: bold;
}

.post-content ul li:hover::marker {
    color: var(--btn-hover-color);
}
```

CSS代码中添加的U+10A52对应的𐩒，经过调试可以正常显示。但是U+1F787对应的🞇，则无法正常显示。原因待考。

> *“An element with* `display: list-item` *generates a principal block box for the element’s content and, depending on the values of* `list-style-type` *and* `list-style-image`*, possibly also a marker box as a visual indication that the element is a list item.”*

The *principal block box* is the main box of the element and contains all of the children as a list item can contain other markup. The marker box is then placed in respect to this principal box. The specification goes on to detail the fact that any background color will be only behind this principal box, and not the marker. Also that the marker can be set to one of a range of pre-defined values:

- `disc`
- `circle`
- `square`
- `decimal`
- `decimal-leading-zero`
- `lower-roman`
- `upper-roman`
- `lower-greek`
- `lower-latin`
- `upper-latin`
- `armenian`
- `georgian`
- `lower-alpha`
- `upper-alpha`
- `none`
- `inherit`

