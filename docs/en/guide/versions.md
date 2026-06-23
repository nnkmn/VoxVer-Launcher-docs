---
title: "Version Management"
---

# Version Management

VoxVer Launcher supports full Minecraft version management, including releases, snapshots, old versions, and April Fools versions.

## Version List

Go to the **Versions** page and click "Refresh Version List". VoxVer Launcher will fetch the latest version list from the BMCLAPI mirror.

## Install Version

1. Find the desired version in the version list
2. Click "Install"
3. Wait for the download to complete (progress can be viewed in the floating window at the bottom right)
4. Once installed, the version status changes to "Installed"

## Version Isolation

VoxVer Launcher supports version isolation. Each version has its own independent `.minecraft` directory, so mods and configurations do not interfere with each other.

You can create independent instances for different versions on the **Instances** page.

## Install ModLoader

After selecting an installed vanilla version, click "Install ModLoader" and choose:

| ModLoader | Description |
|-----------|-------------|
| Fabric | Lightweight, compatible with a large number of mods |
| Forge | Well-established mod loader |
| NeoForge | The new successor to Forge |
| Quilt | A fork of Fabric, more modular |

Installation progress is pushed to the frontend in real time. Just wait for it to complete.

## Delete Version

Go to the **Versions** page, find the installed version, and click "Delete".

> Deleting a version does not remove instance data, but it will delete the version's jar and json files.
