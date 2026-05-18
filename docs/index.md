---
layout: home
title: "MCLa - Minecraft Launcher Advanced"
hero:
  name: "MCLa"
  text: "Minecraft Launcher Advanced"
  tagline: "一个现代化的 Minecraft 启动器，基于 Electron + Vue 3 + TypeScript 构建"
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/nnkmn/MCLA

features:
  - icon: "\u26A1"
    title: 微软正版登录
    details: 支持 Device Code Flow 认证流程，token 自动刷新，多账户无缝切换，离线模式可用。
  - icon: "\uD83C\uDFAE"
    title: 游戏启动
    details: 完整的游戏启动流程，自动拼装 Java 参数，启动进度实时推送，支持自定义启动配置。
  - icon: "\uD83D\uDCE6"
    title: 版本管理
    details: 多版本隔离存储，集成 BMCLAPI 版本列表，支持一键安装与删除，快照版本可选。
  - icon: "\uD83D\uDD27"
    title: ModLoader 安装
    details: 支持 Fabric / Forge / NeoForge / Quilt 四大主流 ModLoader，一键安装，自动匹配版本。
  - icon: "\uD83D\uDCDA"
    title: Mod 管理
    details: 集成 CurseForge + Modrinth 双源搜索，支持 Mod 搜索、下载、启用禁用及配置编辑。
  - icon: "\uD83C\uDF10"
    title: 实例系统
    details: 创建、导入、导出游戏实例，每个实例独立管理 Mod、配置和版本，互不干扰。
---

## 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 桌面框架 | Electron | 33+ |
| 前端框架 | Vue 3 | 3.5+ |
| 语言 | TypeScript | 5.5+ |
| UI 样式 | SCSS | - |
| 状态管理 | Pinia | 2.2+ |
| 数据库 | better-sqlite3 | 11.0+ |

## 支持平台

| 平台 | 状态 |
|------|------|
| Windows 10+ | :white_check_mark: 已支持 |
| macOS | :hourglass: 计划中 |
| Linux | :hourglass: 计划中 |

## 鸣谢

- [StarLight.Core](https://github.com/Ink-Marks-Studio/StarLight.Core) -- 模块化架构参考
- [BMCLAPI](https://bmclapi2.bangbang93.com) -- Minecraft 版本文件国内镜像
- [Fabric Meta API](https://meta.fabricmc.net) -- Fabric 版本元数据
- [CurseForge API](https://docs.curseforge.com) -- Mod 资源平台
- [Modrinth API](https://docs.modrinth.com) -- Mod 资源平台

## 协议

本项目基于 [MIT 协议](https://github.com/nnkmn/MCLA/blob/main/LICENSE) 开源。

## 作者

**nnkmn (EccenTri)** -- [GitHub](https://github.com/nnkmn)
