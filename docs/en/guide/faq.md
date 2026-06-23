---
title: "FAQ"
---

# FAQ

## Launch Issues

### "Java not found" error on launch?

Go to the **Settings** page and confirm that the Java path is correct. You can click "Auto-Detect" to rescan.

### Game crashes immediately after launch?

Check **Crash Monitor** for error logs. Common causes:
- Insufficient Java memory -> Increase maximum memory
- Mod conflict -> Disable recently added mods
- Java version too old -> 1.17+ requires Java 16+, 1.18+ requires Java 17+

## Account Issues

### Microsoft login stuck?

1. Confirm the device code was entered correctly
2. Confirm the browser is logged into the correct Microsoft account
3. Wait 1-2 minutes; token retrieval may sometimes be delayed

### Can I play on servers with offline mode?

No. Offline mode is only suitable for single-player gameplay or LAN multiplayer.

## Mod Issues

### Mods not working?

1. Confirm the corresponding ModLoader is installed
2. Confirm the game version matches the mod's supported version
3. Confirm the mod files are in the correct instance's `mods/` directory

### CurseForge / Modrinth download failed?

Go to **Settings** to switch the download source, or check your network connection.

## Other

### Where are game saves located?

By default, in `.minecraft/saves/`. If version isolation or a custom path is enabled, they are in the corresponding instance directory.

### How to completely uninstall VoxVer Launcher?

1. Uninstall VoxVer Launcher from the Control Panel
2. Delete the game directory (default `.minecraft`)
3. Delete the configuration directory (optional)

> It is recommended to export important instances before uninstalling.
