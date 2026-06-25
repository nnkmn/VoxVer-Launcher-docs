---
title: "Custom Game Path"
---

# Custom Game Path

VoxVer Launcher supports customizing the `.minecraft` game directory path. This chapter covers how to set a custom path, enable version isolation, achieve multi-launcher coexistence, and migrate existing game data.

## Setup Custom Path

By default, VoxVer Launcher stores game files in the `.minecraft` folder under the system user directory. You can change this to any location, such as a separate drive or partition.

### Steps

1. Go to the **Settings** page
2. Find the "Game Directory" setting
3. Click the **"Browse"** button
4. In the folder picker, select the target directory (you can choose an existing directory or create a new one)
5. Click "Save"
6. **Restart VoxVer Launcher** for the changes to take effect

### Path Format

| Path Type | Example | Description |
|-----------|---------|-------------|
| Absolute path | `D:\Games\.minecraft` | Recommended; clearly points to the target location |
| Relative path | `./minecraft` | Relative to the VoxVer Launcher installation directory |

::: warning Note
- The path **should not contain Chinese characters, spaces, or special characters**, as this may cause game file download or launch failures.
- It is recommended to place the game directory on an **SSD** for faster loading speeds.
- After changing the game directory, existing game files will not be automatically migrated; you will need to manually copy them or use the instance import feature to migrate.
:::

## Version Isolation

Version isolation is an important mechanism for managing multiple game versions. When version isolation is enabled, each game version creates its own independent subdirectory structure within the game directory.

### Isolated Directory Structure

```
.minecraft/
  ├── versions/
  │   ├── 1.20.4/
  │   │   ├── mods/          # Mods specific to this version
  │   │   ├── config/        # Configurations specific to this version
  │   │   ├── saves/         # Saves specific to this version
  │   │   └── resourcepacks/ # Resource packs specific to this version
  │   └── 1.19.2/
  │       ├── mods/
  │       ├── config/
  │       ├── saves/
  │       └── resourcepacks/
  ├── assets/                # Shared resource files
  └── libraries/             # Shared library files
```

### How to Enable

- Instances created using the **Instance System** have version isolation enabled by default
- On the **Versions** page, you can also enable isolation for a specific version individually

## Multi-Launcher Coexistence

If you are using multiple Minecraft launchers simultaneously (such as HMCL, PCL2), proper path planning can avoid file conflicts.

### Coexistence Strategies

| Strategy | Description | Recommendation |
|----------|-------------|----------------|
| Separate game directories | Set a different game directory for each launcher | Highly recommended |
| Version isolation | All launchers share one game directory, each with version isolation enabled | Recommended |
| Shared directory | Multiple launchers share the same game directory without isolation | Not recommended |

### Coexistence Tips for HMCL / PCL2

1. **Set an independent game directory for VoxVer Launcher** (e.g., `D:\Games\VoxVer Launcher\.minecraft`)
2. Keep other launchers using their own game directories
3. If you must share a directory, ensure all launchers have version isolation enabled
4. Avoid running multiple launchers simultaneously to prevent file locking conflicts

::: warning Note
- Different launchers may implement version isolation differently; mixing them may cause unexpected behavior.
- It is recommended not to manage the same game version across multiple launchers simultaneously.
:::

## Migrate Existing Game Data

If you have previously downloaded game files and saves using another launcher (such as the official launcher, HMCL, PCL2), you can migrate them to VoxVer Launcher using the following methods.

### Method 1: Directly Specify the Game Directory

1. Locate the original launcher's game directory (usually `~/.minecraft`)
2. In VoxVer Launcher's **Settings**, point the game directory to that path
3. Restart VoxVer Launcher
4. VoxVer Launcher will automatically recognize existing game versions and saves

### Method 2: Import via Instance

1. Go to the **Instances** page
2. Click the **"Import"** button
3. Select the existing `.minecraft` directory
4. VoxVer Launcher will automatically scan and create the corresponding instance
5. After the import is complete, your original game files remain unchanged

### Migration Notes

| Item | Description |
|------|-------------|
| Game versions | VoxVer Launcher will automatically recognize installed game versions |
| Mod files | If version isolation is enabled, mods will be migrated along with the version |
| Save files | Saves remain in their original location; VoxVer Launcher can read them directly |
| Launcher configuration | Other launchers' configurations will not be migrated; you will need to reconfigure them in VoxVer Launcher |
| ModLoader | Installed ModLoaders will be automatically recognized |

::: tip
Before migrating, it is recommended to **back up** your original `.minecraft` directory, just in case. Simply copy the entire directory to a safe location.
:::
