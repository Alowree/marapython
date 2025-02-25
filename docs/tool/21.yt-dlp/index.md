## 安装和升级

使用 Windows 操作系统的用户：

```pwsh
winget install yt-dlp
winget upgrade yt-dlp
```

## 基本使用

### 下载视频

```pwsh
yt-dlp [视频链接]
```

### 下载音频

如果只想下载音频，可以使用-x参数：

```pwsh
yt-dlp -x [视频链接]
```

如果有音频文件，会直接下载；如果没有，则下载视频，然后通过 FFmpeg 转换成音频文件，最后自动删除视频文件。

### 下载字幕

先查看视频有哪些字幕：

```pwsh
yt-dlp --list-subs [视频链接]
```

下载特定语言的字幕（不下载视频）：

```pwsh
yt-dlp --write-subs --sub-langs [语言代码] --skip-download [视频链接]
```
