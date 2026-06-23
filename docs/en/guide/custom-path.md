---
title: "Custom Game Path"
---

# Custom Game Path

VoxVer Launcher supports customizing the `.minecraft` directory path, which is useful for multi-launcher coexistence or disk space management.

## Setup Custom Path

1. Go to the **Settings** page
2. Find the "Game Directory" setting
3. Click "Browse" and select the target folder
4. Save settings
5. **Restart VoxVer Launcher** for changes to take effect

> The custom path can be an absolute path (e.g., `D:\Games\.minecraft`) or a relative path.

## Version Isolation

When version isolation is enabled, each version creates independent `saves/`, `mods/`, and other directories under `.minecraft/versions/<version-name>/`.

Instances created on the **Instances** page have version isolation enabled by default.

## Multi-Launcher Coexistence

If you are using other launchers at the same time (such as HMCL, PCL2), it is recommended to:

- Set an independent game directory for VoxVer Launcher
- Or enable version isolation in each launcher
- Avoid interference between mods and configuration files

## Migrate Existing Game Data

Import an existing `.minecraft` directory as an VoxVer Launcher instance:

1. Go to the **Instances** page
2. Click "Import"
3. Select the existing `.minecraft` directory
4. Wait for the import to complete
