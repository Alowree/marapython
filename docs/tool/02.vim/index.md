---
title: Vim
date: 2024-07-08 09:11:20
order: null
permalink: /pages/47685c/
categories: 
  - tool
tags: 
  - tool
  - Vim
---

## Vim 是什么

Vim - the ubiquitous text editor

Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.

Vim is rock stable and is continuously being developed to become even better. Among its features are:

- persistent, multi-level undo tree
- extensive plugin system
- support for hundreds of programming languages and file formats
- powerful search and replace
- integrates with many tools

## Vim 能做什么

- 可以使用 Vim 来写 Markdown 吗？
  - vim-markdown 插件
- 可以使用 Vim 来管理文件夹项目吗？
  - 内置的 Netrw 文件管理器
  - 启用了 `wildmenu` 的 `:e` 命令
  - NEEDTree
  - Vinegar
  - CtrlP 插件

Yes, it can. 这可能是当你问起任何关于“Vim 能做...吗？”的答案。

## 安装 Vim

下载和安装 Vim 至 `C:\Program Files\Vim` 位置，选择 English 为安装语言。

但不知何故（可能因为操作系统是中文），安装成功之后，进入 Vim 界面仍然存在中文提示。例如，当进入 Insert mode 时，底部命令行的状态提示显示为 `--插入--`。

若要将 Vim 界面语言设置为英文，需要在配置文件内 `$VIM\vimrc` 添加如下配置：

```vim
" set the menu and the message to English
set langmenu=en_US
let $LANG='en_US'
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim
```

## 添加 Vim 到环境变量

把 Vim 添加到环境变量，是为了在 PowerShell 命令行终端直接运行 `vim <path\filename>` 就可以直接打开或创建一个文件。我的 Vim 直接安装在以下路径：

```ps
C:\Program Files\Vim\vim91
```

## Vim 配置文件

查看 Vim 版本和 vimrc 配置文件的方法：

```vim
:version
```

查看 Vim 安装路径和配置路径的方法：

```vim
:echo $VIM           " C:\Program Files\Vim
:echo $HOME          " C:\Users\Alowr
:echo $VIMRUNTIME    " C:\Program Files\Vim\vim91
```

以上三个目录分别简称为：Vim 目录、用户目录、Vim 运行时目录。

Vim 的配置文件安装在 Vim 目录下。例如，我的 Vim 配置文件在 Vim 安装完成之后，自动生成的默认位置在 `C:\Program Files\Vim\_vimrc`。每次修改、更新过配置之后，保存配置文件之后也并不会让修改立即生效。要么关闭重启 Vim，要么在 Vim 内直接运行命令 `:source $VIM\_vimrc` 重载配置文件：

```vim
:source $VIM\_vimrc
```

这样，`_vimrc` 内修改更新过的配置内容就会重载和生效了。

## 创建文件

在 PowerShell 就可以直接运行 `vim <filename.md>` 用于创建一个新的 Markdown 文件了。

In PowerShell, type `vim foo.txt bar.txt zar.txt` will open 3 files, 1 existing file and 2 newly created files.

- `:n` will toggle to the 2nd file.
- `:args` will show the currect active file.

如果当前状态已经在 Vim 里面：

- `:e <path\filename>` creates a new file with a name
- `:enew` will create an empty buffer - a new file without a name
- `:Ex <directory>` lets you browse for the file from the given directory
- `:Ex` on its own will open the pwd

## 多文件操作

- `:e <path\filename>` 打开或创建一个文件
- `:ls` `:buffers` `:files` 这三个命令等效，都可查看现有的缓冲区列表
- `:bn` 切换下一个已经打开的文件
- `:bp` 切换上一个已经打开的文件
- `:b 1` `b1` 切换到缓冲区编号为 1 的文件
- `:bd` 将一个缓冲区从打开的缓冲区列表中删除

## 保存文件

- `:w foo.txt` 把一个新创建的文件保存为 foo.txt
- `:w` 把已经存在的文件更改之后保存
- `:wq` 保存退出

How can I see the full path of the current file?

`1<C—g>` will output the full path onto the last line.

How can I edit multiple files in Vim?

`:e <path/filename>` will put a new file to the buffer.

## 退出文件

- `:wq` or `ZZ`，保存退出当前 buffer
- `:q!`，不保存退出
- `:qa` 退出 Vim

## 配置入门

在 Windows 下，Vim 的配置文件 `C:\Program Files\Vim\_vimrc`。如果您在 Windows 上无法修改 `_vimrc` 文件，您可以尝试以下解决方案：

以管理员身份运行记事本或其他文本编辑器：右键单击 `_vimrc` 文件，选择“属性”，然后单击“安全”。接着，单击“组或用户名”中的“Users”，再点击“编辑”。在“Users”权限中，选中“完全控制”，然后点击“确定”。

### Remap Caps Lock to Esc

Win+R -> regedit -> HKEY_LOCAL_MACHINE -> SYSTEM -> CurrentControlSet -> Control -> Keyboard Layout -> 右键 “Keyboard Layout” -> “新建” -> “二进制值” -> 重命名 “新值 #1” 为 “Scancode Map” -> 右键 “Scancode Map” -> “修改” -> 输入值如下：

00,00,00,00,
00,00,00,00,
03,00,00,00,
3a,00,01,00,
01,00,3a,00,
00,00,00,00

https://www.cnblogs.com/komean/p/12700100.html

### Speed up your key repeat

https://www.thewindowsclub.com/keyboard-repeat-rate-and-repeat-delay-in-windows-10

## Learning Paths

1. Practical Vim (Second Edition), Drew Neil, 2015

   - The Vim Way
   - Normal Mode

2. Modern Vim, Drew Neil, 2018

## 参考资料

- [第九章、Vim 程式編輯器](https://linux.vbird.org/linux_basic/centos7/0310vi.php)
- [Writing Markdown in Vim](https://codeinthehole.com/tips/writing-markdown-in-vim/)
- [Vim 配置入门](https://ruanyifeng.com/blog/2018/09/vimrc.html)
