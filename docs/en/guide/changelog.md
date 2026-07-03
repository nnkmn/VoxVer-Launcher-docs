---
title: "Changelog"
---

# Changelog

This document records the feature changes, bug fixes and future plans for each version of VoxVer Launcher.

---

## v0.6.1 - 2026-07-02

> **Theme: Launch Stability & Download Reliability Major Fixes**

### 🔧 Game Launch Fixes

| Fix | Impact |
|-----|--------|
| **JVM Argument Dedup Fix** | Remove `Set` dedup in `buildJvmArguments` to prevent `--add-opens` args loss causing `ClassNotFoundException` |
| **Version Parsing Fix** | `extractBaseVersion` regex anchored at start, prevents incorrectly extracting version numbers from modpack names (e.g., "Hello, New Steam Journey! V1.4.2") |
| **Classpath Dedup** | `buildClasspath` adds `[...new Set(cp)]` dedup, fixes `Duplicate key` errors from duplicate library declarations in version JSON |
| **GC Parameter Compatibility** | Remove CMS GC (removed in Java 14+), unified to G1GC, fixes `Unrecognized VM option 'UseConcMarkSweepGC'` |
| **Missing File State Handling** | Frontend correctly handles `needsFileDownload` state, shows confirmation dialog before calling `confirmDownloadAndLaunch` |
| **Launch Status Switch Fix** | `spawnProcess` no longer blocks waiting for process exit, switches to "Running" state 1.5 seconds after process starts, fixes launcher stuck on "Launching" |
| **Independent Game Process** | `spawn` option changed to `detached: true`, game runs in independent process group, closing launcher won't terminate the game |

### 📦 File Integrity Verification

- **Library File Size Check** — `checkMissingFiles`, `downloadMissingFiles` add file size verification, detects 0-byte empty files and size mismatched files
- **Asset File Size Check** — `downloadAssets`, `checkMissingFiles` asset checks add file size verification
- **Clean Corrupted Files Before Download** — Delete 0-byte or size-mismatched files before re-downloading

### 🌐 Download System Fixes

- **BMCLAPI Redirect Support** — `downloadFile` adds HTTP 301/302/303/307/308 redirect following (max 5 times), fixes 0-byte files caused by BMCLAPI mirror redirects
- **Post-Download Verification** — Verify file size is not 0 after download, empty files treated as download failure
- **0-Byte File Skip Fix** — `downloadFile` no longer skips existing 0-byte files
- **Asset Download Source Optimization** — Asset primary source changed to official Minecraft asset server (`resources.download.minecraft.net`, no rate limit), BMCLAPI as fallback, fixes 3300+ asset files returning 403 due to BMCLAPI rate limiting (10 requests per 60 seconds)
- **Parallel Download Fallback Support** — `parallelDownload` adds `fallbackUrl` support, auto-tries fallback source on primary failure

### 🎨 UI/UX Optimization

- **Custom Download Confirmation Dialog** — Replaced native `confirm()` with `PxModal` component, includes warning icon, message text, cancel/download-and-launch buttons
- **Dialog Internationalization** — Added `launch.missingFilesTitle`, `launch.missingFilesMessage`, `launch.missingFilesHint` i18n entries

### ☕ Java Management

- **Default Java Version Recommendation** — Default to Java 21 when version number cannot be parsed (adapts to modern Forge/NeoForge modpacks)

---

## v0.6.2 - 2026-07-04

> **Theme: Design System Refactor & Splash Screen Optimization**

### 🎨 Design System Refactor

- **Design Token System** — Added `tokens.scss`, defining OLED dark base (`#0a0a0a` → `#0d0d0d` → `#141414` → `#1a1a1a` four-level gradient), Neubrutalism utility classes
- **Frosted Glass Effect** — Unified `backdrop-filter: blur(8px)` + `color-mix` semi-transparent effect across sidebar, main content area, and version info area
- **Frosted Layer Fix** — Moved `backdrop-filter` to `::before` pseudo-element, fixing text blur issue
- **HomePage Simplification** — Removed launch button and stats cards, Hero card now shows only Logo + guide text
- **Bento Grid Layout Optimization** — Fixed card height auto-expansion and empty column issues

### 🖥️ Splash Screen Optimization

- **Dynamic Version Loading** — Version number read from `package.json`, injected at build time via `transformIndexHtml`, displayed in real-time on splash screen
- **Progress Bar Animation** — 4-second uniform progress, fades out via `transitionend` event with 0.8s transition, eliminating screen flicker
- **Logo Replacement** — Splash screen now displays Alogo.png instead of text title

### 🎨 UI Details

- **Settings Page** — Hidden scrollbars (Chrome / Safari / Firefox / IE full coverage)
- **Sidebar** — Hidden scrollbars; removed bottom version info
- **About Page** — Adapted to frosted glass texture; Alogo replaced airLogo
- **Color Picker** — Fixed frosted layer blocking clicks (`pointer-events: none`)
- **Theme Color** — Removed Hero card blue gradient background, switched to solid background color

### 🔧 Build

- **Version Injection** — `electron.vite.config.ts` added `html-inject-version` plugin for dynamic version injection at build time

---

## v0.6.0 - 2026-06-28

> **Theme: UI Architecture Refactor & Theme System Enhancement**

### 🎨 UI Refactor

- **Settings Page Categorization** — Settings page split into multiple sub-pages by function category, improving navigation efficiency
- **Unified Controls** — Global UI controls use `.vox-*` class prefix (`.vox-btn`, `.vox-input`, `.vox-card`, etc.), unified style standards
- **Theme System Refactor** — Light/dark theme complete switching + background customization + theme color customization, providing a more refined visual experience

---

## v0.5.5 - 2026-06-25

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

## Planned Features (v0.7.0+)

The following features are being planned and developed, and will be gradually released in subsequent versions:

| Feature | Description | Expected Version |
|---------|-------------|------------------|
| macOS Support | Adapt for macOS platform | v0.7.0+ |
| Linux Support | Adapt for Linux platform | v0.7.0+ |

### ✅ Completed Features

| Feature | Completed Version |
|---------|-------------------|
| P2P Instance Sharing | v0.5.2 |
| Theme Customization (Color Palette) | v0.5.2 |
| Modpack Creation Tools | v0.5.2 |
| Global Keyboard Shortcuts | v0.5.3 |
| i18n Internationalization | v0.5.5 |
| Language Switching | v0.5.5 |
| Mod Auto-Update Detection | v0.5.5 |
| UI Architecture Refactor (Settings Categorization) | v0.6.0 |
| Theme System Refactor | v0.6.0 |
| Launch Stability Fixes | v0.6.1 |
| Download Reliability Enhancement | v0.6.1 |
| File Integrity Verification | v0.6.1 |
| Design Token System | v0.6.2 |
| Frosted Glass UI Effect | v0.6.2 |
| Splash Screen Optimization | v0.6.2 |
| HomePage Refactor | v0.6.2 |

::: info Note
The planned features above may be adjusted based on development progress and priorities. Actual release dates and feature details are subject to the actual version release.
:::

::: tip Contributing
If you wish to contribute code or suggest features for VoxVer Launcher, feel free to submit a Pull Request or Issue on [GitHub](https://github.com/nnkmn/VoxVer-Launcher).
:::