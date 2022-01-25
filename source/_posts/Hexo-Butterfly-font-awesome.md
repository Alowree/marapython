---
title: 如何在Hexo站点Butterfly主题使用Font Awesome图标
tags:
  - Font Awesome
  - icon
  - iconfont
categories: Hexo
top_img: 
cover: https://gitee.com/Alowree/img/raw/master/pexels-felix-mittermeier-957024.jpg
toc_number: true
swiper_index: 2
abbrlink: font-awesome
date: 2021-06-30 07:47:03
updated:
keywords:
description:
comments:
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
---

Butterfly has Font Awesome embedded, with version appeared to be 5.x, because new in Font Awesome 5 is the **fas prefix**, **far prefix**, or **fab prefix**, while Font Awesome 4 uses **fa**. 

## Referencing Icons

### Basic Use

Font Awesome is designed to be used with inline elements, and we recommend sticking with a consistent HTML element to reference them by in your project. We like the `<i>` tag for brevity and because most folks use `<em></em>` for emphasized/italicized semantic text these days. If that’s not your cup of tea, using a `<span>` is more semantically correct.

To reference an icon, you need to know two bits of information. **1) its name, prefixed with `fa-` (meaning “font awesome” naturally!) and 2) the style you want to use’s corresponding prefix, `fas`, `far`, or `fab`**

<i class="fas fa-camera"> fa-camera</i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
<i class="fas fa-camera"> fa-camera</i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-camera"> fa-camera</span> <!-- using a <span> element to reference the icon -->

```html
<i class="fas fa-camera"> fa-camera</i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
<i class="fas fa-camera"> fa-camera</i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-camera"> fa-camera</span> <!-- using a <span> element to reference the icon -->
```

{% note warning simple %}

When using either `<i>` tag or `<span>` tag, remember not to use it as a blank tag, or errors may occur during the markdown file rendering. Suspect a bug but not sure.

{% endnote %}

### `Solid` by `fas` prefix
Use examples are as follows:

<i class="fas fa-user"> fa-user</i>
<i class="fas fa-video"> fa-video</i>
<i class="fas fa-folder"> fa-folder</i>
<i class="fas fa-image"> fa-image</i>
<i class="fas fa-heart"> fa-heart</i>
<i class="fas fa-bars"> fa-bars</i>

```html
<i class="fas fa-user"> fa-user</i>
<i class="fas fa-video"> fa-video</i>
<i class="fas fa-folder"> fa-folder</i>
<i class="fas fa-image"> fa-image</i>
<i class="fas fa-heart"> fa-heart</i>
<i class="fas fa-bars"> fa-bars</i>
```
### `Regular` by `far` prefix

Use examples are as follows:

<i class="far fa-address-book"> fa-address-book</i>
<i class="far fa-clock"> fa-clock</i>
<i class="far fa-registered"> fa-registered</i>
<i class="far fa-gem"> fa-gem</i>
<i class="far fa-images"> fa-images</i>
<i class="far fa-paper-plane"> fa-paper-plane</i>

```html
<i class="far fa-address-book"> fa-address-book</i>
<i class="far fa-clock"> fa-clock</i>
<i class="far fa-registered"> fa-registered</i>
<i class="far fa-gem"> fa-gem</i>
<i class="far fa-images"> fa-images</i>
<i class="far fa-paper-plane"> fa-paper-plane</i>
```

### `Brands` by `fab` prefix

Use examples are as follows:

<i class="fab fa-android"> fa-android</i>
<i class="fab fa-apple"> fa-apple</i>	
<i class="fab fa-bluetooth"> fa-bluetooth</i>	
<i class="fab fa-bluetooth-b"> fa-bluetooth-b</i>
<i class="fab fa-alipay"> fa-alipay</i>	
<i class="fab fa-qq"> fa-qq</i>

```html
<i class="fab fa-android"> fa-android</i>
<i class="fab fa-apple"> fa-apple</i>	
<i class="fab fa-bluetooth"> fa-bluetooth</i>	
<i class="fab fa-bluetooth-b"> fa-bluetooth-b</i>
<i class="fab fa-alipay"> fa-alipay</i>	
<i class="fab fa-qq"> fa-qq</i>
```
### The Icon Cheatsheet

Here is an exhaustive list of all icons that are available from Font Awesome 5.x, and you better search in the first place before you could pick your desired ones. 

[Font Awesome Cheatsheet v5.x](https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/)

Alternatively, here is another cheatsheet from the official website, with three groups of free icons, `Solid`, `Regular`, and `Brands`.

[Icon Cheatsheet v5.15](https://fontawesome.com/v5/cheatsheet)

### Popular Icons

```html
<i class="fas fa-power-off"> fa-power-off</i>
<i class="fas fa-play"> fa-play</i> 	<i class="fas fa-play-circle">fa-play-circle</i>
<i class="fas fa-pause"> fa-pause</i> 	<i class="fas fa-pause-circle"> fa-pause-circle</i>
<i class="fas fa-stop"> fa-stop</i> 	<i class="fas fa-stop-circle"> fa-stop-circle</i>
<i class="fas fa-step-backward"> fa-step-backward</i> 	<i class="fas fa-step-forward"> fa-step-forward</i> 
<i class="fas fa-fast-backward"> fa-fast-backward</i> 	<i class="fas fa-fast-forward"> fa-fast-forward</i> 
<i class="fas fa-signal"> fa-signal</i>
<i class="fab fa-bluetooth"> fa-bluetooth</i> 	<i class="fab fa-bluetooth-b"> fa-bluetooth-b</i>
<i class="fas fa-bell"> fa-bell</i> 	<i class="fas fa-bell-slash"> fa-bell-slash</i> 
<i class="fas fa-headphones"> fa-headphones</i> 	<i class="fas fa-headphones-alt"> fa-headphones-alt</i> 	<i class="fas fa-headset"> fa-headset</i>
<i class="fas fa-microphone"> fa-microphone</i> 	<i class="fas fa-microphone-slash"> fa-microphone-slash</i>
<i class="fas fa-microphone-alt"> fa-microphone-alt</i> 	<i class="fas fa-microphone-alt-slash"> fa-microphone-alt-slash</i>	
<i class="fas fa-music"> fa-music</i>
<i class="fas fa-volume-down"> fa-volume-down</i> 	<i class="fas fa-volume-up"> fa-volume-up</i>
<i class="fas fa-volume-off"> fa-volume-off</i> 		<i class="fas fa-volume-mute"> fa-volume-mute</i>
```
<i class="fas fa-power-off"> fa-power-off</i>
<i class="fas fa-play"> fa-play</i> 	<i class="fas fa-play-circle">fa-play-circle</i>
<i class="fas fa-pause"> fa-pause</i> 	<i class="fas fa-pause-circle"> fa-pause-circle</i>
<i class="fas fa-stop"> fa-stop</i> 	<i class="fas fa-stop-circle"> fa-stop-circle</i>
<i class="fas fa-step-backward"> fa-step-backward</i> 	<i class="fas fa-step-forward"> fa-step-forward</i> 
<i class="fas fa-fast-backward"> fa-fast-backward</i> 	<i class="fas fa-fast-forward"> fa-fast-forward</i> 
<i class="fas fa-signal"> fa-signal</i>
<i class="fab fa-bluetooth"> fa-bluetooth</i> 	<i class="fab fa-bluetooth-b"> fa-bluetooth-b</i>
<i class="fas fa-bell"> fa-bell</i> 	<i class="fas fa-bell-slash"> fa-bell-slash</i> 
<i class="fas fa-headphones"> fa-headphones</i> 	<i class="fas fa-headphones-alt"> fa-headphones-alt</i> 	<i class="fas fa-headset"> fa-headset</i>
<i class="fas fa-microphone"> fa-microphone</i> 	<i class="fas fa-microphone-slash"> fa-microphone-slash</i>
<i class="fas fa-microphone-alt"> fa-microphone-alt</i> 	<i class="fas fa-microphone-alt-slash"> fa-microphone-alt-slash</i>	
<i class="fas fa-music"> fa-music</i>
<i class="fas fa-volume-down"> fa-volume-down</i> 	<i class="fas fa-volume-up"> fa-volume-up</i>
<i class="fas fa-volume-off"> fa-volume-off</i> 		<i class="fas fa-volume-mute"> fa-volume-mute</i>

## Styling

Now we have our picks ready and next we will see how to style these selected icons on your website project. From Font Awesome frontpage, or any page, simply click the [Docs](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/getting-started) in the primary navigation menu.

Now, let's follow through the steps and preview each style in Butterfly. 

### Coloring Icons

<span style="font-size: 3em; color: Tomato;"><i class="fas fa-camera"></i>This is some text</span>
<span style="font-size: 48px; color: Dodgerblue;"><i class="fas fa-camera"></i>This is some text.</span>
<span style="font-size: 3rem; color: Mediumslateblue;"><i class="fas fa-camera"></i>This is some text.</span>

```html
<span style="font-size: 3em; color: Tomato;"><i class="fas fa-camera"></i>This is some text</span>
<span style="font-size: 48px; color: Dodgerblue;"><i class="fas fa-camera"></i>This is some text.</span>
<span style="font-size: 3rem; color: Mediumslateblue;"><i class="fas fa-camera"></i>This is some text.</span>
```
{% note info simple %}

This useful trick is actually not coming from the official tutorial because it is not operating the Font Awesome icons themselves but rather on the HTML tags, in the specific case, the `<span>` tag. You will need a bit of background knowledge with regard to `CSS selector`. 

{% endnote %}

### Sizing Icons

<div>
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```html
<div>
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```

<div style="font-size: 0.5rem;">
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```html
<div style="font-size: 0.5rem;">
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```
<div style="font-size: 24px;">
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```html
<div style="font-size: 24px;">
    <i class="fas fa-camera fa-xs"></i>
    <i class="fas fa-camera fa-sm"></i>
    <i class="fas fa-camera fa-lg"></i>
    <i class="fas fa-camera fa-2x"></i>
    <i class="fas fa-camera fa-3x"></i>
    <i class="fas fa-camera fa-5x"></i>
    <i class="fas fa-camera fa-7x"></i>
    <i class="fas fa-camera fa-10x"></i>
</div>
```


### Icons in a List

<ul class="fa-ul">
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>List icons can</li>
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>be used to</li>
  <li><span class="fa-li"><i class="fas fa-spinner fa-pulse"></i></span>replace bullets</li>
  <li><span class="fa-li"><i class="far fa-square"></i></span>in lists</li>
</ul>
```html
<ul class="fa-ul">
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>List icons can</li>
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>be used to</li>
  <li><span class="fa-li"><i class="fas fa-spinner fa-pulse"></i></span>replace bullets</li>
  <li><span class="fa-li"><i class="far fa-square"></i></span>in lists</li>
</ul>
```


## An Alternative: iconfont

Font Awesome offers limited quantities of icons. What if I want to use certain icons in my project, but I can not find a proper one from Font Awesome? What are the next step options available? The best suitable answer could be `iconfont`.

### Injecting local css through `_config.butterfly.yml`, not working

Tried to follow this tutorial https://blog.csdn.net/qq_43740362/article/details/113796473, by creating `iconfont.css` in path `[Blogroot]\themes\butterfly\source\css\iconfont.css` and then injecting this css file in `_config.butterfly.yml`but did not work. 

### Injecting online css through `_config.butterfly.yml`, works fine

Tried to follow this tutorial https://butterfly.js.org/posts/4073eda/#%E7%94%9F%E6%88%90CSS%E9%8F%88%E6%8E%A5, it works.

### Importing online css through `custom.css`, works fine

Tried this https://akilar.top/posts/d2ebecef/ by creating `custom.css` in path `[Blogroot]\themes\butterfly\source\css\custom.css` and adding following codes

```CSS
@import "//at.alicdn.com/t/font_2663193_ggslwf83s.css"
```




Following next, you will learn to style these newly adopted icons as they might look quite differently from the ones that are already introduced via Font Awesome. This is to be continued. 

Copy the following codes from `iconfont.css` into `customs.css` and add `font-weight: bold;`

```CSS
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-time1:before {
  content: "\e7ce";
}

.icon-lock1:before {
  content: "\e61f";
}

.icon-usb-cord:before {
  content: "\e8b1";
}

.icon-lock2:before {
  content: "\e6c0";
}

.icon-sun1:before {
  content: "\e642";
}

.icon-usb-c:before {
  content: "\e8ba";
}

.icon-Wave:before {
  content: "\e613";
}

.icon-home:before {
  content: "\e61b";
}

.icon-radio:before {
  content: "\ea28";
}

.icon-bolt:before {
  content: "\e654";
}

.icon-bluetooth:before {
  content: "\e8d4";
}

.icon-time:before {
  content: "\e620";
}

.icon-usb-c-cord:before {
  content: "\e8b2";
}

.icon-USBPort:before {
  content: "\e6e4";
}

.icon-lock:before {
  content: "\e605";
}

.icon-sun:before {
  content: "\e6d2";
}
```

It appears no visual difference. Still, iconfont is thinner than Font Awesome icons. 

