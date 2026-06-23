# VoxVer Launcher

**Minecraft Launcher Advanced** — 一个现代化的 Minecraft 启动器

[中文文档](https://nnkmn.github.io/VoxVer-Launcher-docs/) | [English Docs](https://nnkmn.github.io/VoxVer-Launcher-docs/en/)

## ✨ 特性

- 🔐 **微软正版登录** — Device Code Flow 认证，token 自动刷新，多账户切换
- 🚀 **游戏启动** — 完整启动流程，Java 参数拼装，启动进度实时推送
- 📦 **版本管理** — 多版本隔离、BMCLAPI 版本列表、一键安装/删除
- 🔧 **ModLoader 安装** — Fabric / Forge / NeoForge / Quilt 一键安装
- 🎮 **Mod 管理** — CurseForge + Modrinth 双源，搜索/下载/启用禁用/配置编辑
- 🗂️ **实例系统** — 创建/导入/导出游戏实例，独立管理 Mod 和配置
- 🔗 **P2P 实例分享** — WebRTC 直连技术，6 位分享码一键分享
- 🎨 **主题自定义** — 色盘编辑器，自定义主题配色方案
- ⌨️ **全局快捷键** — 自定义全局快捷键，快速启动游戏
- 💥 **崩溃监控** — 游戏崩溃自动捕获日志，JVM 错误分析

## 🛠️ 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 桌面框架 | Electron | 33+ |
| 前端框架 | Vue 3 + Composition API | 3.5+ |
| 语言 | TypeScript | 5.5+ |
| UI 样式 | SCSS + CSS Variables（像素风设计系统） | - |
| 状态管理 | Pinia | 2.2+ |
| 数据库 | better-sqlite3 | 11.0+ |

## 📋 支持平台

| 平台 | 状态 | 架构 |
|------|------|------|
| Windows 10+ | ✅ 已支持 | x64 |
| macOS | ⏳ 计划中 | x64 / arm64 |
| Linux | ⏳ 计划中 | x64 |

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📄 协议

本项目基于 [MIT 协议](https://github.com/nnkmn/VoxVer-Launcher/blob/main/LICENSE) 开源。

> Minecraft 是 Microsoft Corporation 的商标。本项目与 Mojang Studios 或 Microsoft 无关。

## 👤 作者

**nnkmn (EccenTri)** — [GitHub](https://github.com/nnkmn)