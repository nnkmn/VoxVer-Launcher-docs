---
title: "Global Settings"
---

# Global Settings

VoxVer Launcher provides a variety of global configuration options covering General, Appearance, and Advanced settings to meet different user needs.

## General Settings

General settings cover core configurations for game running and downloading.

| Setting | Description | Default |
|---------|-------------|---------|
| Game Directory | Root directory for Minecraft game files | `~/.minecraft` |
| Download Threads | Maximum concurrent download threads | 32 |
| Download Source | Mirror source for downloading game files | BMCLAPI |
| Minimize After Launch | Auto-minimize the launcher after launching the game | Off |
| Close After Launch | Auto-close the launcher after launching the game | Off |

### Details

**Game Directory** - Specifies the storage location for Minecraft game files. All versions, mods, saves, etc. are stored here. Changes take effect after restarting VoxVer Launcher. See [Custom Game Path](/en/guide/custom-path).

**Download Threads** - Controls the maximum number of concurrent downloads. Higher values may increase download speed but can cause network congestion.

**Download Source** - Select a download mirror for game files and resources. Users in China are recommended to use the BMCLAPI mirror for faster downloads.

**Minimize After Launch / Close After Launch** - Choose whether to minimize or close the launcher automatically after starting the game.

## Appearance Settings

Appearance settings allow you to customize the VoxVer Launcher interface style.

| Setting | Description | Default |
|---------|-------------|---------|
| Theme | Interface color scheme | Dark Theme |
| Font Size | Interface text display size | Default |
| Pixel UI | Use pixel-style font and interface elements | Off |

### Details

**Theme** - Switch between dark and light themes. Dark theme is suitable for low-light environments, while light theme works best in bright environments.

**Font Size** - Adjust the text size throughout the interface. Choose "Large" or "Extra Large" for better readability on high-resolution displays.

**Pixel UI** - When enabled, the interface font switches to **Press Start 2P** pixel font, bringing the style closer to Minecraft's pixel art aesthetic.

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

## Advanced Settings

Advanced settings are designed for experienced users, providing JVM argument and logging configuration.

| Setting | Description | Default |
|---------|-------------|---------|
| Custom JVM Arguments | Additional Java Virtual Machine parameters appended to the launch command | Empty |
| GC Optimization | Enable preset garbage collection optimization parameters | Off |
| Log Level | Output detail level of launcher logs | INFO |

### Details

**Custom JVM Arguments** - Allows appending additional JVM parameters to the game launch command. Examples:
- `-XX:+UseG1GC` - Use G1 garbage collector
- `-XX:+UnlockExperimentalVMOptions` - Unlock experimental VM options
- `-XX:MaxGCPauseMillis=50` - Set GC maximum pause time

::: warning
- Only modify if you understand the meaning of JVM parameters.
- Incorrect JVM parameters may prevent the game from launching.
- If issues occur after modification, clear this field and restart VoxVer Launcher.
:::

**GC Optimization** - When enabled, VoxVer Launcher automatically adds optimized garbage collection parameters to reduce in-game lag (GC pauses).

**Log Level** - Controls the detail level of VoxVer Launcher's own logs:

| Level | Description | Use Case |
|-------|-------------|----------|
| DEBUG | Output all debug information | Development, troubleshooting |
| INFO | Output general information (default) | Daily use |
| WARN | Output only warnings and errors | Focus on abnormal situations |
| ERROR | Output only errors | Minimum log output |

## Reset Settings

To restore all settings to their default values:

1. Go to the **Settings** page
2. Scroll to the bottom
3. Click **"Restore Default Settings"**
4. Click "Confirm" in the dialog

::: warning Note
Resetting settings will restore all configuration items to their defaults, including game directory, Java path, appearance settings, etc. Account information and installed game versions will not be affected.
:::
