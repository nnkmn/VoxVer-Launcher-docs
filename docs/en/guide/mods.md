---
title: "Mod Management"
---

# Mod Management

VoxVer Launcher features a powerful Mod management system that integrates **CurseForge** and **Modrinth** — two major mod repositories. It supports search, download, enable/disable, configuration editing, update detection, and more all in one place. This chapter covers every aspect of mod management.

## Search & Download

VoxVer Launcher supports searching and downloading mods from both CurseForge and Modrinth, covering the vast majority of mainstream mods.

### Search Steps

1. Go to the **Downloads** page
2. Enter the mod name or keywords in the search box
3. Filter by category tags (e.g., "Utility", "Performance", "Decoration", "Adventure", etc.)
4. Sort by popularity, download count, update time, etc.
5. Click on a mod to view its detail page

### Download Steps

1. On the mod detail page, verify the supported game version and ModLoader type
2. Click the **Download** button
3. Select the target instance to install into (if multiple instances exist)
4. Wait for the download to complete

::: tip
Download progress can be viewed in the global download popup at the bottom right, with support for pausing and canceling operations.
:::

## Local Mod Management

Go to the **Instance Details** page to view and manage all mods installed in that instance.

### Management Features

| Action | Description | Details |
|--------|-------------|---------|
| Enable / Disable | Toggle the mod's loading state | Click the switch next to the mod to toggle — no need to delete the file. Disabled mods will not be loaded by the game, but the file remains in the `mods/` directory (the filename will have a `.disabled` suffix appended) |
| Config Editing | Edit the mod's configuration file | Supports `.toml` and `.json` format config files. Click the "Edit" button to open the built-in editor — save after making changes and the new configuration will take effect immediately |
| Delete | Remove the mod from the instance | Clicking "Delete" will permanently remove the mod file from the `mods/` directory. A confirmation dialog will appear before deletion |
| Update Detection | Check if the mod has a newer version | Based on Modrinth SHA1 hash comparison, automatically detects available updates for installed mods. An update indicator will be shown when updates are available |

## ModLoader Support

VoxVer Launcher supports the following ModLoaders. Different ModLoaders correspond to different mod ecosystems:

| ModLoader | Mod Ecosystem | Source Repositories | Notes |
|-----------|-------------|-------------------|-------|
| Fabric | Fabric-specific mods | CurseForge / Modrinth | Lightweight, large mod selection, fast loading |
| Forge | Forge-specific mods | CurseForge / Modrinth | Well-established ecosystem, rich in large mods |
| NeoForge | NeoForge-specific mods | CurseForge / Modrinth | Next-generation ecosystem, compatible with Forge mods |
| Quilt | Quilt / Fabric mods | Modrinth | Compatible with most Fabric mods |

::: warning
- Before downloading a mod, make sure its supported game version and ModLoader match your instance configuration.
- Mods from different ModLoaders **cannot be mixed**. For example, Fabric mods cannot be loaded in a Forge environment.
- Some large mods may have dependencies (required prerequisite mods). Ensure all dependencies are installed.
:::

## FAQ

### Mod not working after installation?

Follow these steps to troubleshoot:

1. **Make sure the ModLoader is correctly installed** — Go to the versions page and check whether the corresponding ModLoader is installed for the target version
2. **Confirm version compatibility** — Check if the mod's supported game version matches your installed version
3. **Verify ModLoader type compatibility** — Fabric mods can only be loaded in a Fabric environment, Forge mods only in a Forge environment
4. **Check if the mod is disabled** — In the instance details, confirm the mod's enable switch is turned on
5. **Check for dependencies** — Some mods require prerequisite mods to function properly; check the mod's description page

### Mod download failed?

Possible causes and solutions:

| Cause | Solution |
|-------|---------|
| Network connection issue | Check your network connection, or try switching the download source |
| Download source unavailable | Go to **Settings** to switch to another download source |
| Insufficient disk space | Free up disk space and retry |
| Target instance does not exist | Make sure the target instance has not been deleted |

### How to view mod details and changelogs?

On the **Downloads** page, click on a mod name to enter its detail page, where you can see the full description, screenshots, supported versions, changelogs, dependencies, and more.

### Where are the mod configuration files?

Mod configuration files are typically located in the `config/` folder within the instance directory. You can also edit them directly through VoxVer Launcher's built-in configuration editor without having to locate the files manually.

## Mod Auto-Update

VoxVer Launcher features a built-in **Mod Auto-Update Detection** system that uses **Modrinth SHA1 hashes** to batch-compare installed mods against upstream versions, automatically finding mods with available updates.

### Detection Principle

```
Scan local mod files
    |
    v
Calculate SHA1 hash
    |
    v
Batch query via Modrinth API
    |
    v
Hash matched → New version found
    |
    v
Mark "Update Available" in mod list
```

### Usage Steps

1. Go to the **Instance Details** page
2. Click the **"Check for Updates"** button
3. The launcher will automatically scan all local mod files and calculate their SHA1 hashes
4. Compare against versions on Modrinth
5. Mods with available updates will show an update indicator in the list
6. Select the mods to update and click **"Update All"**
7. The launcher will stream-download the new versions and replace the old files

### Update Strategy

| Strategy | Description |
|----------|-------------|
| Major versions only | Only prompt for updates when the major version number changes (e.g., 1.0.0 → 2.0.0) |
| All updates | Include patch version updates (recommended) |
| Manual selection | Let the user decide whether to update each mod individually |

::: tip
- The auto-update feature only works for mods downloaded from Modrinth.
- Some mods may have version compatibility requirements; please check that the new version matches your game version before updating.
- The game must be closed during the update process. Restart the game after the update is complete for changes to take effect.
:::
