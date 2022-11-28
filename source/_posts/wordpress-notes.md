---
title: Wordpress Notes
toc_number: true
large: true
categories: Wordpress
abbrlink: wordpress
date: 2022-07-14 08:40:56
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

使用Wordpress建站，适用的外贸企业范围有制造商、品牌商、跨境电商，可作快速地搭建一个简单的企业官网，也可利用内置Woocommerce插件，在官网基础上搭建B2C商城，接入用户系统、支付系统，直接面向国外的C端客户（需要解决跨境物流）。

竞品1：Shopify

竞品2：腾讯云的电商建站服务

## 本地站点

## 本地安装XAMPP

## 本地安装WordPress



## SiteGround

### 域名解析

仅需在腾讯云添加一条 A 记录，指向 IP 地址  35.213.172.230

### SSL 证书部署

SiteGround 的证书添加一直报错，超过尝试上限。

转用腾讯云的免费证书。

![image-20221107153957264](https://image.marapython.com/image-20221107153957264.png)

下载fineq.cc_nginx，包含4个文件

在SiteGround/Security/SSL Manager，按照提示import使用其中3个

在SiteGround/Security/HTTPS Enforce，开启使用即可

fineq.cc is now back online!

## 使用Esotera主题



![Custom Layout](https://image.marapython.com/widget-areas-layout-plus.png)

## LogoFont

问题在于如何将字体文件部署至线上。

1、Site > File Manager 上传字体文件至站点`fineq.cc/public_html/wp-content/themes/esotera/resources/fonts`

2、修改`fineq.cc/public_html/wp-content/themes/esotera/style.css`，在文件底部添加字体引入代码，保存

```CSS
@font-face {
  font-family: logofont;
  src: url('./resources/fonts/Mokoto_Glitch.woff');
}
#site-title span a {
  font-family: logofont;
  font-weight: normal;
}
```

如果下载到的字体是`ttf`格式的，使用在线格式转换工具把`ttf`转成`woff`格式后，再上传至站点。

已知问题：华为浏览器手机端，logo在方框内的位置，视觉效果偏右偏上。干脆去掉方框。

## Main Menu

How to implement icons for Shopping Cart and My Account?

## Landing Page

Landing Page is constructed as the frontpage of the website and consists of the following sections.

![img](https://image.marapython.com/landing-page-tutorial-2-layout.png)

### Serious Slider

Some terminology clarifications:

- **slide** – is the content bit (made up of an image, a title, some text and perhaps a custom link) that’s actually visible on the site (for a longer or shorter time, depending on configured durations);
- **slider** – is a collection of slides (consider it a *category* of sorts); the slider is the entity that you are selecting/insert to display in your site’s content; it is not visible as such, but its associated slides are displayed;

The slides are listed under ***All Slides***, while the sliders are found under ***Manage Sliders***.
You can have multiple slides and multiple sliders, with one slide only being associated (part of) a single slider at a time.

Sample Slider contains 3 slides, with the size of each image being 2000 by 900.

首页顶部正常使用确定没问题。

Footer位置如果使用缩小版幻灯片，待后续研究。

### Featured Icon Block - Company Profile

Decades of Experience in Consumer Audio

- Who we are

- What we do

- Why we Different

## Who We Are?

A highly efficient and competitive service oriented OEM/ODM manufacturer

- established in Shenzhen in 2020,
- with core team having decades of experience in
  - designing, manufacturing, and sales of consumer electronics, and
  - working with tier-1 brand OEMs

## What We Do?

- Provide Product Design and Development Services for Audio and Wireless Products
  - Industrial Design and CMF Plan
  - Mechanical Engineering – 3D Modeling and CAD Drawings
  - Electronic Engineering – Hardware Design and PCB Layout
  - Firmware Programming
  - Working Prototypes
  - Packaging Design
- Offer Showcase Products under brand FINEQ
  - Consumer Audio
  - Electronic Appliances
  - Speech Recognition and Voice Control
  - IoT and Smart Devices

## Why Are We Different?

We particularly specialize in and focus on audio type of consumer electronics. Our value propositions are

- Best-In-Class Product Quality
- On-Time Delivery
- Manufacturing Excellence – established systems and processes with continuous improvement program
- Engineering Support – Knowledge and Experience
- Optimized Project Management Process
- Full Range of Innovative Product Line-up
- Flexible Operations to Meet Customer Requirements

要修改做为首页的landing page，入口在Appearance > Customize > Landing Page

### Featured Boxes

4 Posts under category `Thoughts`.

### Text Areas

4 individual pages

- Wake Up and Be Awesome
- Amount of Information
- Passion for Great Sound
- Latest Work

When choosing the page featured image, make sure appropriate color of the image should provide sufficient contrast with the grey text. White or Bright is preferred color tune. 

- Page properties that will be used:
  - page title as text title
  - page content as text content
  - page featured image as text area background image

## Footer

1. How to remove "Powered by Esotera & WordPress" in Footer area?

   From within `wp-content\themes\esotera\includes\core.php`, comment out the first section of `Footer Hook` code block. 

   Siteground > Site > File Manager

   fineq.cc > public_html > wp-content > themes > esotera > includes > core.php

   把第一个函数注释掉，这样，网站底部将只剩下版权信息。

   ```php
   /**
    * Footer Hook
    */
   add_action( 'cryout_master_footer_hook', 'esotera_master_footer' );
   function esotera_master_footer() {
   	$the_theme = wp_get_theme();
   	do_action( 'cryout_footer_hook' );
   	echo '<div style="display:block;float:right;clear: right;">' . __( "Powered by", "esotera" ) .
   		'<a target="_blank" href="' . esc_html( $the_theme->get( 'ThemeURI' ) ) . '" title="';
   	echo 'Esotera WordPress Theme by ' . 'Cryout Creations"> ' . 'Esotera' .'</a> &amp; <a target="_blank" href="' . "http://wordpress.org/";
   	echo '" title="' . esc_attr__( "Semantic Personal Publishing Platform", "esotera") . '"> ' . sprintf( " %s", "WordPress" ) . '</a>.</div>';
   }
   
   add_action( 'cryout_master_footer_hook', 'esotera_copyright' );
   function esotera_copyright() {
       echo '<div id="site-copyright">' . do_shortcode( cryout_get_option( 'theme_copyright' ) ). '</div>';
   }
   ```

2. How to add / remove "Copyright FINEQ 2022" from Footer area?

   From `Customize\General\Structure\Custom Footer Text`, add or delete relevant text. 

## Favicon

`Customize -> Site Identity -> Select site icon`

## 底部导航

Customizing > Widgets > Footer >  `+`

Footer

Add block > Browse all > Navigation Menu 

添加3个独立的小菜单 `FINEQ`, `STORE`, `SUPPORT`

Publish

## Contact页面

页面的前半部分是文字说明，页面的底部添加一个Contact Form，方便网站用户直接通过邮件联系FINEQ的SUPPORT团队。

`+` Blocks > GROW > Contact Form

通过Contact Form留言后，信息需要通过网站后台才能查看。

如何设置，后台收到留言，自动推送相关至客服的邮箱地址。

## 用户登入

WPForms有提供User Registration，但是属于收费版，弃用。

1、尝试使用另外一个插件，名字就叫`User Registration`

WordPress comes with built-in functionality to manage user registrations. It is turned off by default, but you can easily turn it on.

### How to show login form?

You can add this shortcode `[user_registration_my_account]` in the pages where you want to show your login form when the user is not logged in. If the user is logged in, the user profile will be shown.

2、尝试使用另外一个插件，`Ultimate Member`

> The **"Membership - Anyone can register"** option on the general settings [page](https://fineq.cc/wp-admin/options-general.php#users_can_register) is enabled. This means users can register via the standard WordPress wp-login.php page. If you do not want users to be able to register via this page and only register via the Ultimate Member registration form, you should deactivate this option. You can dismiss this notice if you wish to keep the wp-login.php registration page open.

> Ultimate Member needs to create several pages (User Profiles, Account, Registration, Login, Password Reset, Logout, Member Directory) to function correctly.

Esotera主题自带的Login页面 fineq.cc/my-account/

fineq.cc/register

fineq.cc/login

fineq.cc/account

fineq.cc/members

https://fineq.cc/password-reset/

https://fineq.cc/user/alowreehotmail-com/

fineq.cc/logout 预览返回首页，点击触发了什么动作？

## Product

Dashboard / Products

上传的图片尺寸应该统一为 800 by 800，或者1000 by 1000，每款产品5张图片，1张主图，4图gallery

### Categories

https://fineq.cc/product-category/bluetooth-speakers/

https://fineq.cc/product-category/soundbars/

https://fineq.cc/product-category/party-speakers/

https://fineq.cc/product-category/earbuds/

### Add New

### Product

[Waterproof Soundbar PB-27 – FINEQ](https://fineq.cc/product/waterproof-soundbar-pb-27/)

## Product Tab

Woocommerce Product 自带两个Tab：Description和Reviews

安装 Woocommerce Product Tabs插件，创建 Tech Specs 自定义分栏，Priority 设置为25，使自定义分栏位于中间。

EcoXgear website does not offer customer reviews, so let's close it on our site as well. [6 Ways to Disable Reviews in WooCommerce - CusRev Blog](https://blog.cusrev.com/6-ways-to-disable-reviews-in-woocommerce/#:~:text=To do so%2C first head to your WordPress,Reviews and untick the box next to it.)

[WooCommerce How to remove "description" text in product description? – CodeGearThemes](https://www.codegearthemes.com/blogs/woocommerce/woocommerce-how-to-remove-description-text-in-product-description#:~:text=STEPS TO REMOVE DESCRIPTION HEADING 1 Open Wordpress,product page%2C now the description heading is gone.)

```PHP
// Remove the product description Title
add_filter( 'woocommerce_product_description_heading', '__return_null' );
```



## 支付方法

## 多国语言

## 线上站点

站点图片断链

帐号、登陆页面未有生成

## 参考资料

[How to Remove "Powered by WordPress"](https://kinsta.com/knowledgebase/remove-powered-by-wordpress/)

[How to use the Landing Page feature in our themes](https://www.cryoutcreations.eu/wordpress-tutorials/how-to-use-landing-page-feature)

[Esotera Theme Documentation](https://www.cryoutcreations.eu/docs/themes/?theme=esotera)

[Esotera Demo](https://demos.cryoutcreations.eu/wp/esotera/)

[Serious Slider Plugin Demo](https://demos.cryoutcreations.eu/wordpress/serious-slider/)
