---
title: "Changelog"
---

# Changelog

This document records the feature changes, bug fixes and future plans for each version of VoxVer Launcher.

---

## v0.5.5 - 2026-06-22

> **Theme: Internationalization Improvement & UI Optimization**

### ✨ New Features

- **i18n Internationalization** — Settings page sidebar, downloads page sidebar, more page sidebar, home account area, launch button and other core UI components now support multi-language switching
- **Language Switch** — Users can switch between Simplified Chinese and English in settings, with real-time interface updates

### 🔧 TypeScript Type Fixes

- **IPC Return Types** — Complete TypeScript type definitions for all IPC channels, eliminating type warnings
- **electronAPI Interface** — Standardize preload-exposed API interfaces for better type safety
- **ModLoader Parameter Types** — Fix type definitions for ModLoader installation parameters

### 🎨 UI/UX Optimization

- **Top Navigation Bar Icon Alignment** — Fix alignment issues between navigation bar icons and text
- **Main Content Area Rendering** — Optimize layout and rendering performance of the main content area

### 🔧 ModLoader Installation Improvement

- **Forge Installation** — Improve Forge ModLoader installation process
- **NeoForge Installation** — Add complete NeoForge ModLoader installation support
- **Quilt Installation** — Improve Quilt ModLoader installation process
- **Fabric Installation** — Fix issues during Fabric installation

### 📝 Documentation Updates

- **Launcher Name Change** — Project officially renamed from "MC Launcher Alpha (MCLA)" to "VoxVer Launcher", code repository renamed from `MC-Launcher-Alpha` to `VoxVer-Launcher`, docs repository renamed from `MC-Launcher-Alpha-docs` to `VoxVer-Launcher-docs`, all related documentation updated accordingly
- **Repository Link Updates** — Updated all GitHub links to point to the new `VoxVer-Launcher` and `VoxVer-Launcher-docs` repositories
- **Typo Fixes** — Fixed typos like "BMC Launcher AlphaPI" to "BMCLAPI"
- **Missing Feature Documentation** — Added chapters for P2P Instance Sharing, Mod Auto-Update, Theme Customization, Global Keyboard Shortcuts, Skin Management

---

## v0.5.4 - 2026-06-20

> **Theme: Architecture Optimization & Performance Improvement**

### ✨ New Features

- **Squirrel Installer** — Adopt Squirrel auto-update framework, supporting incremental updates and auto rollback
- **Parallel Download Optimization** — Multi-file simultaneous downloads for improved efficiency
- **JVM GC Dynamic Parameters** — Auto-configure optimal garbage collection parameters based on system memory
- **Vitest Testing Framework** — Introduce unit testing to ensure code quality
- **GitHub Actions CI/CD** — Automated build, test and release pipeline

### 🔧 Bug Fixes

- **Archiver ESM Issue** — Fix ESM import issues with archiver library
- **i18n Import Issue** — Fix import path issues in internationalization modules
- **CSP Policy Issue** — Optimize content security policy for correct resource loading

### ⚡ Performance Optimization

- **Startup Speed** — Optimize main process startup flow
- **Memory Usage** — Reduce unnecessary memory allocations

---

## v0.5.3 - 2026-06-09

> **Theme: Stability Update & Experience Optimization**

### ✨ New Features

- **Global Keyboard Shortcuts** — Support custom global shortcuts for quick game launch and window switching
- **Notification System Enhancement** — Optimize notification push logic, support more notification types
- **Theme System Optimization** — Improve dark/light theme switching

### 🔧 Bug Fixes

| Issue | Impact |
|-------|--------|
| **Instance List Refresh** | Fix instance list not updating after refresh |
| **Download Queue Sync** | Fix download queue status synchronization issues |
| **Theme Switch** | Fix styles not applying after theme switch |

### 🎨 UI/UX Optimization

- **Version List Double Cache** — Memory cache + disk cache for faster list loading
- **Skeleton Screen** — Show skeleton screens during data loading for better UX

---

## v0.5.2 - 2026-06-07

> **Theme: P2P Sharing & Theme Customization**

### ✨ New Features

- **P2P Instance Sharing** — WebRTC peer-to-peer technology, 6-digit share code for one-click instance sharing
- **Theme Customization** — Color palette editor with custom theme color schemes
- **CSS Variable Dynamic Calculation** — Auto-calculate related colors based on theme color

### 🔧 Bug Fixes

- **Version List Cache** — Reduce version list request frequency
- **Notification System** — Support more notification types and custom notifications

### ⚡ Performance Optimization

- **List Rendering** — Virtual list technology for better large data rendering performance

---

## v0.5.0 - 2026-06-05

> **Theme: Launch Core Fix & User Experience Optimization**

### ✨ New Features

- **Launcher Auto-Update** — electron-updater based auto-detection and installation
- **Download Management Page** — New sidebar entry for centralized download management
- **Multi-Mirror Download** — Auto-try BMCLAPI, MCBBS and official sources
- **Smart Java Version Matching** — Auto-recommend Java version based on game version
- **Console Chinese Support** — `npm run dev:zh` script for Chinese encoding

### 🔧 Bug Fixes

| Issue | Impact |
|-------|--------|
| **Classpath Passing** | `spawnProcess` missing `classpathStr`, causing empty `-cp` parameter |
| **Version File 404** | Single mirror source missing required files |
| **Version Manifest Timeout** | Missing timeout and retry mechanism |
| **Empty Version Instance** | Show download prompt instead of stale content |
| **JavaInfo Type** | Missing `isDefault` property |
| **Desktop Icon** | Incorrect shortcut icons |

### 🎨 UI/UX Optimization

- **Remove Notification Bell** — Simplify UI by removing PxNotification component
- **Download Management Entry** — Add sidebar option for download management
- **Version Download Prompt** — Prompt user to download version when launching empty instances

---

## v0.4.3 - 2026-06-04

> **Theme: Launch Core Fix & Download Enhancement**

### ✨ New Features

- **Multi-Mirror Download** — Auto-try BMCLAPI, MCBBS and official sources
- **Smart Java Version Matching** — Auto-recommend Java version based on game version
- **ModLoader Inheritance Version Parsing** — Correctly handle Forge/Fabric/NeoForge/Quilt inheritance

### 🔧 Bug Fixes

| Issue | Impact |
|-------|--------|
| **Classpath Passing** | `spawnProcess` missing `classpathStr` |
| **Forge Module System Parameters** | `${library_directory}` / `${classpath_separator}` not replaced |
| **Library Rules** | `checkLibRules` logic error filtering required libraries |
| **Version Manifest** | Missing timeout and retry mechanism |

---

## v0.4.2 - 2026-06-02

> **Theme: Code Standards & Stability Improvement**

### New Features

- **ESLint v9 Configuration** — Unified code style with Prettier formatting
- **Security Configuration Template** — `.env.example` for API Key configuration

### Bug Fixes

- Fixed log level misuse in IPC handler registration
- Fixed ModLoader installation status not displaying correctly
- Fixed global download popup not triggering in certain scenarios

---

## v0.3.0

### New Features

- Mod configuration editor UI (supports toml/json)
- Instance import/export
- ModLoader installation progress connected to frontend
- Global download progress popup
- Notification system frontend integration

### Bug Fixes

- Fixed ModLoader IPC missing issue
- Fixed download progress popup not displaying

---

## v0.2.0

### New Features

- CurseForge + Modrinth dual-source mod downloading
- Mod enable/disable/delete
- Crash monitoring and log analysis
- Skin management

### Bug Fixes

- Fixed Microsoft login token refresh failure
- Fixed launch argument assembly errors for certain versions

---

## v0.1.0

### First Release

- Microsoft account login (Device Code Flow)
- Offline mode
- Game version management (BMCLAPI)
- Fabric / Forge / NeoForge / Quilt installation
- Basic instance system
- Dark theme UI

---

## Planned Features (v0.6.0+)

- Mod auto-update detection ✅ (v0.5.x)
- Modpack creation tools
- Keyboard shortcuts system ✅ (v0.5.3)
- Custom background
- Custom themes (color palette) ✅ (v0.5.2)
- macOS / Linux support
- P2P Instance Sharing ✅ (v0.5.2)
- i18n Internationalization ✅ (v0.5.5)