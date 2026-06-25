---
title: "Version Management"
---

# Version Management

VoxVer Launcher provides complete Minecraft version management functionality, supporting all official version types and integrating one-click installation of four major ModLoaders. This chapter will detail the version list usage, version installation and deletion, ModLoader installation, and the version isolation mechanism.

## Version List

VoxVer Launcher fetches the official Minecraft version list from the BMCLAPI mirror, covering all historical versions.

### Refresh Version List

1. Go to the **Versions** page
2. Click the **"Refresh Version List"** button
3. VoxVer Launcher will pull the latest version metadata from the remote server
4. After refreshing, the version list will be grouped by type

### Version Type Description

| Version Type | Description | Stability |
|-------------|-------------|-----------|
| Release | Fully tested stable versions | High, recommended for use |
| Snapshot | Development preview of the next release | Medium, may contain bugs |
| Old Version | Early historical versions such as Alpha / Beta | Low, for nostalgia only |
| April Fools | Joke versions released on April 1st each year | Low, for entertainment only |

## Install Version

### Installation Steps

1. Find the desired version in the version list
2. Click the **"Install"** button next to that version
3. VoxVer Launcher starts downloading the game core files, including:
   - Game main program JAR file
   - Game library files (libraries)
   - Asset files (assets)
   - Native library files (natives)
4. Download progress is displayed in real time in the global download popup at the bottom right
5. Once the download is complete, the version status updates to **"Installed"**

::: info Note
After installation, game files are saved in the `versions/<version name>/` folder under the game directory. The first installation typically requires downloading 200MB - 500MB of files, depending on the version.
:::

## Version Isolation

Version isolation is an important feature of VoxVer Launcher. It allows each game version to have its own independent runtime environment, preventing mods, configurations, and saves from interfering with each other across different versions.

### Isolation Mechanism Description

| Isolated Content | Description |
|-----------------|-------------|
| Game files | Each version has its own independent JAR and JSON files |
| Mod files | Each version has its own independent `mods/` directory |
| Configuration files | Each version has its own independent `config/` directory |
| Save data | Each version has its own independent `saves/` directory |
| Resource packs | Each version has its own independent `resourcepacks/` directory |

::: tip Tip
If you are using the [Instance System](/guide/instances), each instance has full version isolation enabled by default. You can also enable isolation for a specific version individually in version management.
:::

## Install ModLoader

ModLoaders are essential tools for loading and managing game mods. VoxVer Launcher supports one-click installation of four major ModLoaders.

### Installation Steps

1. Find the installed vanilla game on the **Versions** page
2. Click the **"Install ModLoader"** button next to that version
3. Select the ModLoader type from the popup dialog
4. Choose the corresponding version number (usually "Latest" and "Recommended" options are available)
5. Click confirm and wait for the installation to complete
6. Installation progress is pushed to the frontend in real time

### Supported ModLoaders

| ModLoader | Current Maintenance Status | Supported Game Versions | Features |
|-----------|--------------------------|------------------------|----------|
| Fabric | Actively maintained | 1.14+ | Lightweight, fast loading, broad mod compatibility, active community |
| Forge | Actively maintained | 1.7.10+ | Established loader, mature ecosystem, excellent support for large mods |
| NeoForge | Actively maintained | 1.20.1+ | The new successor to Forge, rebuilt for newer versions, better performance |
| Quilt | Actively maintained | 1.14+ | A fork of Fabric, more modular design, provides additional API extensions |

::: tip Selection Guide
- **New players**: Fabric is recommended for its simple installation and good mod compatibility.
- **Large modpack players**: Forge or NeoForge are recommended for better support of large mods.
- **Pursuing the latest version**: NeoForge is recommended for the fastest support of new versions.
- **Advanced users**: You can try Quilt for a more modular API design.
:::

::: warning Note
- Different versions of ModLoaders only support corresponding game version ranges. Please verify compatibility before installation.
- Only one ModLoader can be installed per game version. To switch, uninstall the current ModLoader first before reinstalling.
- After installing a ModLoader, the launcher will automatically create the corresponding configuration files and directory structure.
:::

## Delete Version

If you no longer need a particular game version, you can delete it to free up disk space.

### Deletion Steps

1. Go to the **Versions** page
2. Find the installed version you want to delete
3. Click the **"Delete"** button next to that version
4. Click "Confirm" in the confirmation dialog

### Deletion Considerations

| Item | Deleted? | Description |
|------|---------|-------------|
| Game core files (JAR/JSON) | Yes | Core files under the version directory will be removed |
| ModLoader for this version | Yes | Associated ModLoader files will also be cleaned up |
| Instance data | No | Data in the instance system is not affected |
| Save files | Depends | If version isolation is enabled, saves for this version will also be deleted |
| Shared resource files | No | Shared files in the assets and libraries directories will not be deleted |

::: warning Important Reminder
Before deleting a version, make sure there is no important save data under that version. It is recommended to back up your saves before proceeding with deletion.
:::
