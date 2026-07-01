---
title: "Global Settings"
---

# Global Settings

VoxVer Launcher provides a variety of global configuration options. Starting from v0.6.0, the settings page is split into multiple sub-pages by function category. The top level is divided into four main categories — "Game", "Personalize", "Network", and "Other" — each containing several sub-pages for quick navigation.

## Settings Page Structure

| Top Category | Sub-Pages | Description |
|--------------|-----------|-------------|
| **Game** | Home, Account, About, Copyright, Game Account & Profile, JVM & Memory, Game Directory, Advanced | Game running, account management, and launch core configuration |
| **Personalize** | Theme & Background, Main Interface, Language, Accessibility | Interface appearance, theme, language, and accessibility settings |
| **Network** | Download, Multiplayer, Authentication Service | Download sources, online services, and auth configuration |
| **Other** | Service & Feedback, Sponsor Us, Developer Options | Feedback channels, sponsorship, and developer tools |

::: tip Navigation
After entering the **Settings** page, the left sidebar lists all sub-pages under the current category. Click to switch. The top tab bar is used to switch between the four main categories.
:::

## Game Directory

**Path**: Settings → Game → Game Directory

Specifies the storage location for Minecraft game files. All versions, mods, saves, etc. are stored here. Changes take effect after restarting VoxVer Launcher. See [Custom Game Path](/en/guide/custom-path).

| Setting | Default | Description |
|---------|---------|-------------|
| Game Directory | `~/.minecraft` | Any valid path |

## Download Settings

**Path**: Settings → Network → Download

| Setting | Description | Default |
|---------|-------------|---------|
| Download Threads | Maximum concurrent download threads | 32 |
| Download Source | Mirror source for downloading game files | BMCLAPI |

### Download Threads

Controls the maximum number of concurrent downloads. Higher values may increase download speed but can cause network congestion. Recommended ranges by bandwidth:
- Below 100Mbps: 16-32 threads
- 100-500Mbps: 32-64 threads
- Above 500Mbps: 64-128 threads

### Download Source

Select a download mirror for game files and resources. Users in China are recommended to use the BMCLAPI mirror for faster downloads.

::: info v0.6.1 Download Source Optimization
Starting from v0.6.1, the primary download source for asset files is changed to the official Minecraft asset server (`resources.download.minecraft.net`, no rate limit), with BMCLAPI as fallback. This fixes the issue where 3300+ asset files all returned 403 due to BMCLAPI rate limiting (10 requests per 60 seconds). Game core files still use the download source you selected in settings.
:::

## JVM & Memory

**Path**: Settings → Game → JVM & Memory

Configure the Java runtime environment and memory allocation here. See [Java Settings](/en/guide/java) for details.

## Advanced Settings

**Path**: Settings → Game → Advanced

Advanced settings are designed for experienced users, providing JVM argument and logging configuration.

| Setting | Description | Default |
|---------|-------------|---------|
| Custom JVM Arguments | Additional Java Virtual Machine parameters appended to the launch command | Empty |
| Log Level | Output detail level of launcher logs | INFO |

### Custom JVM Arguments

Allows appending additional JVM parameters to the game launch command. Examples:
- `-XX:+UnlockExperimentalVMOptions` - Unlock experimental VM options
- `-XX:MaxGCPauseMillis=50` - Set GC maximum pause time

::: warning
- Only modify if you understand the meaning of JVM parameters.
- Incorrect JVM parameters may prevent the game from launching.
- If issues occur after modification, clear this field and restart VoxVer Launcher.
:::

### GC Garbage Collection (Automatic)

::: info v0.6.1 Change
Starting from v0.6.1, VoxVer Launcher **automatically** enables the G1GC garbage collector for all game versions, no manual configuration required:
- **1.18+ versions**: `-XX:+UseG1GC` + `MaxGCPauseMillis=50` + `DisableExplicitGC`
- **1.17 and below**: `-XX:+UseG1GC` + `MaxGCPauseMillis=100` + `DisableExplicitGC`

The previously optional CMS GC has been removed (Java 14+ no longer supports it), unified to G1GC for compatibility.
:::

### Log Level

Controls the detail level of VoxVer Launcher's own logs:

| Level | Description | Use Case |
|-------|-------------|----------|
| DEBUG | Output all debug information | Development, troubleshooting |
| INFO | Output general information (default) | Daily use |
| WARN | Output only warnings and errors | Focus on abnormal situations |
| ERROR | Output only errors | Minimum log output |

## Theme & Background

**Path**: Settings → Personalize → Theme & Background

Appearance settings allow you to customize the VoxVer Launcher interface style.

| Setting | Description | Default |
|---------|-------------|---------|
| Theme | Interface color scheme | Dark Theme |
| Background Image | Custom launcher background image | Default background |
| Background Blur | Background image blur level | 0px |
| Background Dim | Background image dim level | 0% |

### Theme Switching

Switch between dark and light themes. Dark theme is suitable for low-light environments, while light theme works best in bright environments. Starting from v0.6.0, the theme system has been refactored with complete light/dark coverage styles.

### Background Customization

Background customization is supported since v0.5.5. You can select a local image as the launcher background and adjust blur and dim levels for optimal readability.

## Main Interface

**Path**: Settings → Personalize → Main Interface

| Setting | Description | Default |
|---------|-------------|---------|
| Font Size | Interface text display size | Default |
| Pixel UI | Use pixel-style font and interface elements | Off |
| Animation Effects | Interface transition animations | On |
| Visual Effects | Particles and other visual effects | On |
| Sound Effects | Interface operation sounds | On |

### Font Size

Adjust the text size throughout the interface. Choose "Large" or "Extra Large" for better readability on high-resolution displays.

### Pixel UI

When enabled, the interface font switches to **Press Start 2P** pixel font, bringing the style closer to Minecraft's pixel art aesthetic.

## Language

**Path**: Settings → Personalize → Language

Switch the interface display language. Supports Simplified Chinese and English, with real-time updates after switching.

## Accessibility

**Path**: Settings → Personalize → Accessibility

| Setting | Description | Default |
|---------|-------------|---------|
| Screen Reader Mode | Enhance screen reader compatibility, optimize focus navigation | Off |
| Reduce Motion | Disable interface transition animations and particle effects | Off |
| High Contrast Mode | Increase interface element contrast for visually impaired users | Off |

## Reset Settings

To restore all settings to their default values:

1. Go to the **Settings** page
2. Scroll to the bottom
3. Click **"Restore Default Settings"**
4. Click "Confirm" in the dialog

::: warning Note
Resetting settings will restore all configuration items to their defaults, including game directory, Java path, appearance settings, etc. Account information and installed game versions will not be affected.
:::

## Theme Customization

VoxVer Launcher provides a **Color Palette Editor** that allows you to customize the launcher's color scheme and create a personalized interface.

### Opening the Theme Editor

1. Go to the **Settings** page
2. Click **"Theme Editor"** in the "Appearance" section
3. A color palette editor appears where you can adjust colors

### Customizable Colors

| Color | Effect | Adjustment Impact |
|-------|--------|-------------------|
| Primary Color | Brand color | Top navigation bar, buttons, links |
| Accent Color | Emphasis color | Selected states, active buttons |
| Background Color | Main background | Overall app background |
| Text Color | Main text | Headings, body text |
| Border Color | Dividers, card borders | UI separator elements |

### CSS Variable Dynamic Calculation

After selecting a theme color, VoxVer Launcher automatically calculates related secondary colors:

```
Select Primary → Calculate Shades → Auto-generate 5 Color Levels
                                      |
                                      v
              Auto-apply to: --vp-c-brand-1 ~ --vp-c-brand-5
```

::: tip
- Theme changes take effect immediately with real-time preview.
- You can save multiple theme presets and quickly switch between them.
- Theme files are stored locally and can be exported to share with other users.
:::

## Global Hotkeys

VoxVer Launcher supports customizable **global hotkeys** that work even when the launcher is not focused.

### Default Hotkeys

| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + Alt + L` | Show/Hide launcher window | Global effect |
| `Ctrl + Alt + G` | Launch game | Launch the currently selected game directly |
| `Ctrl + Alt + D` | Open download manager | Open download popup globally |

### Custom Hotkeys

1. Go to the **Settings** page
2. Find the "Hotkeys" section
3. Click the input box for the hotkey you want to modify
4. Press the new key combination (supports `Ctrl`, `Alt`, `Shift`, `Meta` + letter/function keys)
5. Click "Save" to apply

::: warning Note
- Avoid conflicts with system or other application hotkeys.
- Some games in fullscreen mode may not receive global hotkeys.
:::
