---
title: Sublime Text 4
date: 2024-07-08 09:11:20
order: null
permalink: /pages/e6660c/
categories: 
  - tool
tags: 
  - tool
  - software
---

## 用户设置

用户设置文件的打开路径：

1. 在 Sublime Text 4 里面，菜单 `Preferences >> Settings`，或者
2. 在 Windows 进而，打开文件 `C:\Users\Alowr\AppData\Roaming\Sublime Text\Packages\User\Preferences.sublime-settings`

在用户（右边）那个框里增加：

```json {10-11}
{
  "color_scheme": "Monokai.sublime-color-scheme",
  "ignored_packages": ["Vintage"],
  "save_on_focus_lost": true,
  "font_face": "Ubuntu Mono derivative Powerline",
  "font_size": 12,
  "line_padding_top": 1,
  "line_padding_bottom": 1,
  "tab_size": 2,
  "theme": "Default.sublime-theme",
  "dark_theme": "Default Dark.sublime-theme",
  "light_theme": "Default.sublime-theme",
  "index_files": true,
  "dark_color_scheme": "Celeste.sublime-color-scheme",
  "light_color_scheme": "Breakers.sublime-color-scheme",
  "caret_style": "smooth"
}
```

## 主题设置

`Preferences >> Customize Theme`

Sublime Text 4 安装之后使用英文版本，没有汉化。使用的默认主题，英文字体是 Consolas，中文字体未知，不是特别美观（比如句号明显窄于逗号）。

- 更换英文字体为 'Ubuntu Mono derivative Powerline'
- 自定义中文字体，发现中英文无法独立设置
- 设置中文字符宽度等于 2 倍的英文字符

## 插件

| 插件              | 作用     |
| ----------------- | -------- |
| `MarkdownEditing` | 文档编辑 |

## 参考资料

- [优美的 Sublime Text](https://clarkhedi.github.io/2021/06/07/you-mei-de-sublime-text/)
