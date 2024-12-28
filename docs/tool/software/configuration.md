---
title: 软件配置
date: 2024-05-15 23:38:25
order: null
permalink: /pages/f4aa1f/
categories: 
  - tool
tags: 
  - tool
  - software
---

## 配置 Windows Terminal 的步骤

::: tip
前提：在微软商店下载两个软件：`Windows Terminal`、`PowerShell`、`oh-my-posh`
:::

- 查看配置文件位置

```powershell
$PROFILE
```

- 打开配置文件

```powershell
code $PROFILE
```

- 在生成的文件中写入以下配置并保存

```powershell
oh-my-posh init pwsh --config 'C:/Users/zhang/AppData/Local/Programs/oh-my-posh/themes/material.omp.json' | Invoke-Expression
```

- 如果出现错误，请在 powershell 管理员权限下运行以下命令

```powershell
set-ExecutionPolicy RemoteSigned
```

## nvm 安装

nvm Windows 下载地址：https://github.com/coreybutler/nvm-windows

安装步骤：

- 下载 nvm-setup，然后点击 nvm-setup.exe 软件进行安装即可
- 第一个配置的是 nvm 安装路径
- 第二个配置的是 node 安装路径，其实它就是一个快捷方式，指向 nvm 中安装的真实 node 版本
- 最后修改 settings 文件，追加以下代码

```txt
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

### 通过 nvm 安装 nodejs

```shell
# 注意 Windows 环境中需要手动切换 node 版本，且该命令必须以管理员身份运行 powershell 才能生效
nvm list available

nvm install 14.19.0

# 选择要使用的 node 版本（node 偶数版本为稳定版）
nvm use 14.19.0

# 查看 node 版本
nvm ls

# 测试是否正常
npm install nrm -g
nrm ls
nrm use taobao
nrm test

# 查看nodejs版本
node -v

# 升级npm版本
npm install -g npm
```

### 配置全局 npm

- 在 nodejs 安装路径下新建两个文件夹：`node_global` 和 `node_cache`
- 并将路径加入到系统 path 中 `D:/software/nodejs/node_global`

```shell
npm config set prefix "D:/software/nodejs/node_global"
npm config set cache "D:/software/nodejs/node_cache"
```

### pnpm 相关设置

```powershell
# pnpm版本
pnpm --version

# pnpm全局仓库路径(类似 .git 仓库)
pnpm config set store-dir "D:/software/pnpm/.pnpm-store"

# pnpm全局bin路径
pnpm config set global-bin-dir "D:/software/nodejs/node_global"

# pnpm全局安装路径
pnpm config set global-dir "D:/software/pnpm/pnpm-global"

# pnpm全局缓存路径
pnpm config set cache-dir "D:/software/pnpm/cache"

# pnpm创建pnpm-state.json文件的目录
pnpm config set state-dir "D:/software/pnpm"
```

## sublime text 破解

- 使用浏览器打开 [hexed.it](https://hexed.it/)
- 点击“打开文件”，选择 sublime text 安装目录中的 "sublime_text.exe"
- 在搜索框中输入 `807805000f94c1`，找到后，替换为 `c64005014885c9`
- 点击“另存为”，保存文件到本地，文件名设定为 sublime_text.exe

package Control 需要下载的插件：

- ChineseLocalizations
- Pretty JSON

::: code-group

```json [sublime-settings]
{
  "ignored_packages": ["Vintage"],
  "font_face": "JetBrains Mono",
  "font_size": 18,
  "tab_size": 2
}
```

```json [sublime-keymap]
[{ "keys": ["ctrl+shift+j"], "command": "pretty_json" }]
```

```json [Pretty JSON.sublime-settings]
{
  "indent": 2
}
```

:::

## Git 安装配置

- 安装 Git：https://git-scm.com/
- GIt 基础配置（以下操作均在 git bash 窗口下进行）

```sh
git config --global user.name "zhanghy"
git config --global user.email "zhanghy0720@gmail.com"
```

- 生成 ssh 公钥私钥

```sh
ssh-keygen -t rsa -C "zhanghy0720@gmail.com"
```

- 将公钥添加到 Github
- 测试 ssh 连接：验证公匙，初次设置需要输入 yes。如果输出以下内容，即可说明测试连接成功
  - Hi username! You've successfully authenticated, but Github does not provide shell access.

```sh
ssh -T git@github.com
```

- 修改默认分支名

```sh
git config --global init.defaultBranch main

# 获取git config列表
git config --list
```

- 设置 git 走 clash 代理

```sh
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```

- 常见问题：`OpenSSL SSL_read: Connection was reset`

```sh
git config --global http.sslVerify "false"
```

## SQL Server 2019 安装

1. 检查.NET 环境

- 打开控制面板下面的程序，选择 _启用或关闭 Windows 功能_
- 选择开启 _.NET_ 相关的服务
  - _.NET Framework 3.5(包括.NET 2.0 和 3.0)_
  - _.NET Framework 4.8 Advanced Services_
    - 如果在安装过程中弹出提示框 _Windows 需要使用 Windows 更新中的文件才能完成某些功能的安装_ 请选择第一项 _让 Windows 更新为你下载文件_

**注意：在开启服务之后，要重启电脑**

2. 配置 JDK

- SQL Server2019 需要使用 JDK 路径，所以可以提前准备好 JDK
- 当然也可以不安装，SQL Server2019 自带 JDK11。**不过，推荐使用自己安装的 JDK8**

3. 安装 SQL2019-SSEI-Dev.exe

> develop 版本包含企业版功能，但是不能用于商用（该版本免费）

- 右键以管理员运行 SQL2019-SSEI-Dev.exe ，选择自定义安装，媒体位置你可以根据需要更改
- 点击安装 -> 全新 SQL Server 独立安装…
- 选择 Developer，下一步（由于步骤很多，我没有提到的步骤可以直接下一步）
- 接受条款，下一步
- 在此界面先点击下方的全选，然后将不必要的组件去掉
  - 去掉“实例功能”中的“机器学习服务和语言扩展”
  - 去掉“共享功能”中的“机器学习服务器（独立）”
  - 更改实例根目录：D:\software\Microsoft SQL Server\Instance
  - 更改共享共嫩目录：D:\software\Microsoft SQL Server\Share
  - 更改共享功能目录(x86)：D:\software\Microsoft SQL Server\Share(X)
- 这里如果你在开始配置了或者本来就有 jdk，请选择自己的 jdk 目录，没有请默认不改，然后下一步
- 选择混合模式，点击添加当前用户，在账户中输入密码，然后下一步
  - 密码：123456
- 添加当前用户，下一步
- 添加当前用户，下一步
- 控制器随便起个名，下一步：HY
- 安装、等待安装、安装完成后小窗点击确定，然后点击关闭（安装完成）

4. 安装 SSMS-Setup-CHS.exe

- 右键管理员运行此文件
- 可以自定义位置也可默认，然后安装
  - 安装路径：D:\software\Microsoft SQL Server Management Studio 18
- 等待安装完成 ，会提示重启，重启就好，Sql Server 2019 安装完成！
- 运行软件：Microsoft SQL Server Management Studio18

## Windows 配置 wsl2 和 Ubuntu

https://learn.microsoft.com/zh-cn/windows/wsl/install

在管理员模式下打开 PowerShell 或 Windows 命令提示符，方法是右键单击并选择“以管理员身份运行”，输入 wsl --install 命令，然后重启计算机。

```sh
wsl --install
```

检查 wsl 版本：`wsl -l -v`
