---
title: "下载与安装"
---

# 下载与安装

本章介绍如何获取 MC Launcher Alpha 启动器并完成安装，同时也提供从源码构建的方法供开发者参考。

## 下载

MC Launcher Alpha 的正式发布版本托管在 GitHub Releases 上。

前往 [GitHub Releases](https://github.com/nnkmn/MC-Launcher-Alpha-/releases) 页面，找到最新版本，下载对应的安装包。

| 文件名 | 说明 | 适用平台 |
|--------|------|---------|
| `MC Launcher Alpha Setup x.x.x.exe` | NSIS 安装程序（推荐） | Windows |
| `MC Launcher Alpha x.x.x.zip` | 便携版压缩包（免安装） | Windows |

::: tip 推荐
普通用户建议下载 **NSIS 安装程序**，安装后会自动创建桌面快捷方式和开始菜单项，后续更新也更方便。
:::

## Windows 安装步骤

### 使用安装程序

1. 下载 `MC Launcher Alpha Setup x.x.x.exe` 安装包
2. 双击运行安装程序
3. 如果出现 Windows SmartScreen 提示，点击「更多信息」->「仍要运行」
4. 按照安装向导提示选择安装路径（默认路径为 `C:\Users\<用户名>\AppData\Local\Programs\MC Launcher Alpha`）
5. 选择是否创建桌面快捷方式
6. 点击「安装」，等待安装完成
7. 安装完成后，MC Launcher Alpha 会自动启动

### 使用便携版

1. 下载 `MC Launcher Alpha x.x.x.zip` 压缩包
2. 解压到任意目录（建议路径中不包含中文或特殊字符）
3. 双击 `MC Launcher Alpha.exe` 即可运行

::: warning 注意
便携版不会自动创建快捷方式，也不会写入注册表。更新时需要手动下载新版本并替换文件。
:::

## 从源码构建

如果你是开发者，或者希望体验最新的开发版本，可以从源码构建 MC Launcher Alpha。

### 环境准备

在开始之前，请确保你的系统已安装以下工具：

- **Node.js** 18.x 或更高版本
- **npm** 9.x 或更高版本（随 Node.js 一起安装）
- **Git** 最新版本

### 克隆与安装依赖

```bash
# 克隆仓库
git clone https://github.com/nnkmn/MC-Launcher-Alpha-.git
cd MC Launcher Alpha

# 安装项目依赖
npm install
```

### 开发模式运行

```bash
# 启动开发服务器（支持热重载）
npm run dev
```

开发模式下，启动器会以开发模式运行，支持前端热重载，方便调试和开发。

### 构建安装包

```bash
# 构建 Windows 安装包
npm run build:win
```

构建完成后，安装包产物会输出到项目根目录的 `build/` 文件夹中。

## 首次启动检查清单

完成安装后首次启动 MC Launcher Alpha，建议按以下顺序进行检查和配置，确保启动器能够正常工作：

| 步骤 | 操作 | 说明 |
|------|------|------|
| 1 | 检查 Java 路径 | 进入「设置」页面，确认 Java 路径是否已自动检测到。若未检测到，请手动指定，详见 [Java 设置](/guide/java) |
| 2 | 确认游戏目录 | 默认游戏目录为系统用户目录下的 `.minecraft`。如需更改，详见 [自定义游戏路径](/guide/custom-path) |
| 3 | 添加游戏账户 | 进入「账户」页面，添加微软正版账户或离线账户，详见 [账户管理](/guide/accounts) |
| 4 | 安装游戏版本 | 进入「版本」页面，刷新版本列表并安装所需版本，详见 [版本管理](/guide/versions) |
| 5 | 启动游戏 | 回到首页，选择已安装的版本，点击「启动游戏」 |

完成以上步骤后，你就可以开始游戏了。如遇到任何问题，请参阅 [常见问题](/guide/faq) 或 [崩溃监控](/guide/crash)。
