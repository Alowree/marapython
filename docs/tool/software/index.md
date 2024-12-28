---
title: 软件工具
date: 2024-05-15 22:40:49
order: null
permalink: /pages/131a7c/
categories: 
  - tool
tags: 
  - tool
  - software
---

## 端口占用

```powershell
# 查看全部端口的占用情况
netstat -ano

# 查看某个端口被占用情况（例如：查看 8080 端口）
netstat -ano | findstr "8080"

# 查看某个状态的端口（例如：查看全部处于监听状态的端口）
netstat -ano | findstr LISTENING

# 查看使用指定端口的应用程序 xxxx指的是pid
tasklist | findstr xxxx
```

## 结束指定进程

```powershell
# 方式一：结束指定进程端口号
taskkill /pid XXXX -t -f

# 结束指定进程应用程序名
taskkill /f /t /im TIM.exe
```

## Windows 快捷键

| 快捷键          | 作用           |
| --------------- | -------------- |
| [[Win]] + [[E]] | 打开资源管理器 |
| [[Win]] + [[I]] | 打开设置       |
| [[Win]] + [[R]] | 打开运行窗口   |
| [[win]] + [[.]] | 表情符号       |

## CMD 常用命令

| 快捷键          | 作用                     |
| --------------- | ------------------------ |
| [[D:]]          | 切换到 D 盘下            |
| [[dir]]         | 查看当前路径下的全部内容 |
| [[cd]] + [[..]] | 回退到上一级目录         |
| [[cd]] + [[\\]] | 回退到盘符目录           |
| [[cls]]         | 清屏                     |
| [[exit]]        | 退出命令提示符窗口       |
| [[↑↓]]          | 查找敲过的命令           |
| [[Tab]]         | 自动补齐命令             |
