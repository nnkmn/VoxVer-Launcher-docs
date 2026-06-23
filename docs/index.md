---
layout: home
title: "VoxVer Launcher - Minecraft Launcher"
hero:
  name: "VoxVer Launcher"
  text: "新一代 Minecraft 启动器"
  tagline: "一个现代化的 Minecraft 启动器，基于 Electron + Vue 3 + TypeScript 构建，支持简体中文和英文"
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/nnkmn/VoxVer-Launcher

features:
  - icon: "⚡"
    title: 微软正版登录
    details: 支持 Device Code Flow 认证流程，token 自动刷新，多账户无缝切换，离线模式可用。
    link: /guide/accounts
  - icon: "🎮"
    title: 游戏启动
    details: 完整的游戏启动流程，自动拼装 Java 参数，启动进度实时推送，支持自定义启动配置。
    link: /guide/quick-start
  - icon: "📦"
    title: 版本管理
    details: 多版本隔离存储，集成 BMCLAPI 版本列表，支持一键安装与删除，快照版本可选。
    link: /guide/versions
  - icon: "🔧"
    title: ModLoader 安装
    details: 支持 Fabric / Forge / NeoForge / Quilt 四大主流 ModLoader，一键安装，自动匹配版本。
    link: /guide/versions
  - icon: "📚"
    title: Mod 管理
    details: 集成 CurseForge + Modrinth 双源搜索，支持 Mod 搜索、下载、启用禁用及配置编辑。
    link: /guide/mods
  - icon: "🌐"
    title: 实例系统
    details: 创建、导入、导出游戏实例，每个实例独立管理 Mod、配置和版本，互不干扰。
    link: /guide/instances
  - icon: "🔗"
    title: P2P 实例分享
    details: 基于 WebRTC 直连技术，通过 6 位分享码实现实例一键分享，无需上传服务器。
    link: /guide/instances
  - icon: "🎨"
    title: 主题自定义
    details: 色盘编辑器，支持自定义主题配色方案，打造个性化的启动器界面。
    link: /guide/settings
  - icon: "⌨️"
    title: 全局快捷键
    details: 支持自定义全局快捷键，快速启动游戏、切换窗口，提升操作效率。
    link: /guide/settings
---

<div class="home-content">

## 🛠️ 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 桌面框架 | Electron | 33.4 |
| 前端框架 | Vue 3 | 3.5 |
| 构建工具 | electron-vite | 2.3 |
| 语言 | TypeScript | 5.5 |
| UI 样式 | SCSS + CSS Variables | 像素风设计系统 |
| 状态管理 | Pinia | 2.2 |
| 路由 | Vue Router | 4.4 |
| 数据库 | better-sqlite3 | 11.0 |
| 日志 | electron-log | 5.0 |

## 📋 支持平台

| 平台 | 状态 | 架构 |
|------|------|------|
| Windows 10+ | ✅ 已支持 | x64 |
| macOS | ⏳ 计划中 | x64 / arm64 |
| Linux | ⏳ 计划中 | x64 |

## 🙏 鸣谢

- [StarLight.Core](https://github.com/Ink-Marks/StarLight.Core) -- 模块化架构参考
- [PCL2](https://github.com/Hex-Dragon/PCL2) -- UI 排版参考
- [BMCLAPI](https://bmclapi2.bangbang93.com) -- Minecraft 版本文件国内镜像
- [Fabric Meta API](https://meta.fabricmc.net) -- Fabric 版本元数据
- [CurseForge API](https://docs.curseforge.com) -- Mod 资源平台
- [Modrinth API](https://docs.modrinth.com) -- Mod 资源平台

## 📄 协议

本项目基于 [MIT 协议](https://github.com/nnkmn/VoxVer-Launcher/blob/main/LICENSE) 开源。

> Minecraft is a trademark of Microsoft Corporation. This project is not affiliated with Mojang Studios or Microsoft.

## 👤 作者

**nnkmn (EccenTri)** -- [GitHub](https://github.com/nnkmn)

</div>

<style>
.home-content {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 24px 48px;
}
.home-content h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 40px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-border);
}
</style>
