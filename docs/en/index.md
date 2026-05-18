---
layout: home
title: "MCLa - Minecraft Launcher Advanced"
hero:
  name: "MCLa"
  text: "Minecraft Launcher Advanced"
  tagline: "A modern Minecraft launcher built with Electron + Vue 3 + TypeScript"
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/nnkmn/MCLA

features:
  - icon: "\u26A1"
    title: Microsoft Authentication
    details: Device Code Flow authentication, automatic token refresh, seamless multi-account switching, offline mode support.
  - icon: "\uD83C\uDFAE"
    title: Game Launch
    details: Complete game launch pipeline with automatic Java argument assembly, real-time launch progress notifications, and custom launch configurations.
  - icon: "\uD83D\uDCE6"
    title: Version Management
    details: Isolated multi-version storage, integrated BMCLAPI version list, one-click install and delete, snapshot version support.
  - icon: "\uD83D\uDD27"
    title: ModLoader Installation
    details: One-click installation for Fabric / Forge / NeoForge / Quilt with automatic version matching.
  - icon: "\uD83D\uDCDA"
    title: Mod Management
    details: Dual-source search via CurseForge + Modrinth. Search, download, enable/disable, and edit mod configurations.
  - icon: "\uD83C\uDF10"
    title: Instance System
    details: Create, import, and export game instances. Each instance manages its own mods, configs, and versions independently.
---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Desktop Framework | Electron | 33+ |
| Frontend Framework | Vue 3 | 3.5+ |
| Language | TypeScript | 5.5+ |
| UI Styling | SCSS | - |
| State Management | Pinia | 2.2+ |
| Database | better-sqlite3 | 11.0+ |

## Supported Platforms

| Platform | Status |
|----------|--------|
| Windows 10+ | :white_check_mark: Supported |
| macOS | :hourglass: Planned |
| Linux | :hourglass: Planned |

## Acknowledgements

- [StarLight.Core](https://github.com/Ink-Marks-Studio/StarLight.Core) -- Modular architecture reference
- [BMCLAPI](https://bmclapi2.bangbang93.com) -- Minecraft version file mirror (China)
- [Fabric Meta API](https://meta.fabricmc.net) -- Fabric version metadata
- [CurseForge API](https://docs.curseforge.com) -- Mod resource platform
- [Modrinth API](https://docs.modrinth.com) -- Mod resource platform

## License

This project is open source under the [MIT License](https://github.com/nnkmn/MCLA/blob/main/LICENSE).

## Author

**nnkmn (EccenTri)** -- [GitHub](https://github.com/nnkmn)
