---
title: "Java Settings"
---

# Java Settings

VoxVer Launcher supports auto-detecting system Java installations, as well as manually specifying a Java path.

## Auto-Detection

When VoxVer Launcher is launched for the first time, it automatically scans for installed Java versions on your system.

Detection results are displayed on the **Settings** page.

## Manual Java Path

If auto-detection fails, or if you need to use a specific Java version:

1. Go to the **Settings** page
2. Find the "Java Path" setting
3. Click "Browse" and select the path to `java.exe`
4. Save settings

> The path must point to the `java.exe` executable, for example:
> `C:\Program Files\Java\jdk-21\bin\java.exe`

## Java Memory Settings

In the **Launch Configuration**, you can set:

| Parameter | Description | Default |
|-----------|-------------|---------|
| Maximum Memory | Maximum memory available to the game | 2048 MB |
| Minimum Memory | Initial memory allocated to the game | 256 MB |

> It is recommended to set the maximum memory to 1/4 to 1/2 of your system memory.

## FAQ

**Java error on launch?** Confirm that the Java path is correct and the version meets the game's requirements (1.17+ requires Java 16+, 1.18+ requires Java 17+).
