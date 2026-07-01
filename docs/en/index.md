---
layout: home
title: "VoxVer Launcher - Minecraft Launcher"
hero:
  name: "VoxVer Launcher"
  text: "A Next-Gen Minecraft Launcher"
  tagline: "A modern Minecraft launcher built with Electron + Vue 3 + TypeScript, supporting Chinese and English"
  image:
    src: /airLogo.png
    alt: VoxVer Launcher
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/nnkmn/VoxVer-Launcher

features:
  - icon: "⚡"
    title: Microsoft Authentication
    details: Device Code Flow authentication, automatic token refresh, seamless multi-account switching, offline mode support.
    link: /en/guide/accounts
  - icon: "🎮"
    title: Game Launch
    details: Complete game launch pipeline with automatic Java argument assembly, real-time launch progress notifications, and custom launch configurations.
    link: /en/guide/quick-start
  - icon: "📦"
    title: Version Management
    details: Isolated multi-version storage, integrated BMCLAPI version list, one-click install and delete, snapshot version support.
    link: /en/guide/versions
  - icon: "🔧"
    title: ModLoader Installation
    details: One-click installation for Fabric / Forge / NeoForge / Quilt with automatic version matching.
    link: /en/guide/versions
  - icon: "📚"
    title: Mod Management
    details: Dual-source search via CurseForge + Modrinth. Search, download, enable/disable, and edit mod configurations.
    link: /en/guide/mods
  - icon: "🌐"
    title: Instance System
    details: Create, import, and export game instances. Each instance manages its own mods, configs, and versions independently.
    link: /en/guide/instances
  - icon: "🔗"
    title: P2P Instance Sharing
    details: Share instances instantly via WebRTC direct connection with a 6-digit code. No server upload required.
    link: /en/guide/instances
  - icon: "🎨"
    title: Theme Customization
    details: Color palette editor for creating your personalized launcher interface.
    link: /en/guide/settings
  - icon: "⌨️"
    title: Global Hotkeys
    details: Customizable global hotkeys for quick game launch and window toggle.
    link: /en/guide/settings
---

<div class="home-content">

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Desktop Framework | Electron | 33.4 |
| Frontend Framework | Vue 3 | 3.5 |
| Build Tool | electron-vite | 2.3 |
| Language | TypeScript | 5.5 |
| UI Styling | SCSS + CSS Variables | Pixel Art Design System |
| State Management | Pinia | 2.2 |
| Router | Vue Router | 4.4 |
| Database | better-sqlite3 | 11.0 |
| Logging | electron-log | 5.0 |

## 📋 Supported Platforms

| Platform | Status | Architecture |
|----------|--------|-------------|
| Windows 10+ | ✅ Supported | x64 |
| macOS | ⏳ Planned | x64 / arm64 |
| Linux | ⏳ Planned | x64 |

## 🙏 Acknowledgements

- [StarLight.Core](https://github.com/Ink-Marks/StarLight.Core) -- Modular architecture reference
- [PCL2](https://github.com/Hex-Dragon/PCL2) -- UI layout reference
- [BMCLAPI](https://bmclapi2.bangbang93.com) -- Minecraft version file mirror (China)
- [Fabric Meta API](https://meta.fabricmc.net) -- Fabric version metadata
- [CurseForge API](https://docs.curseforge.com) -- Mod resource platform
- [Modrinth API](https://docs.modrinth.com) -- Mod resource platform

## 📄 License

This project is open source under the [MIT License](https://github.com/nnkmn/VoxVer-Launcher/blob/main/LICENSE).

> Minecraft is a trademark of Microsoft Corporation. This project is not affiliated with Mojang Studios or Microsoft.

## 👤 Author

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
