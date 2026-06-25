---
title: "Java Settings"
---

# Java Settings

Minecraft requires a Java Runtime Environment (JRE or JDK) to run. VoxVer Launcher provides both automatic detection and manual configuration methods for managing the Java environment. This chapter details Java detection, configuration, and memory tuning.

## Auto-Detection

VoxVer Launcher scans for installed Java environments on your system automatically upon first launch.

### Detection Mechanism

- Scans the system `PATH` environment variable for Java paths
- Scans common Java installation directories (e.g., `C:\Program Files\Java\`, `C:\Program Files\Eclipse Adoptium\`)
- Detects the Java path specified by the `JAVA_HOME` environment variable

### Viewing Detection Results

1. Navigate to the **Settings** page
2. Find the "Java Settings" section
3. If Java is detected, the detected Java version and path will be displayed
4. If no Java is detected, a "No Java environment detected" prompt will be shown

::: tip
If you have multiple Java versions installed on your system, VoxVer Launcher will list all detected versions, and you can select the one you want to use.
:::

## Manual Java Path

If auto-detection fails to find the Java version you need, or if you need to use a specific Java version, you can manually specify the path.

### Setting Steps

1. Navigate to the **Settings** page
2. Find the "Java Path" setting
3. Click the **"Browse"** button
4. Navigate to the `bin` folder of your Java installation directory in the file picker
5. Select the `java.exe` file
6. Click "Save" to complete the setup

### Path Examples

| Java Distribution | Typical Installation Path |
|-----------------|--------------------------|
| Oracle JDK | `C:\Program Files\Java\jdk-21\bin\java.exe` |
| Eclipse Temurin | `C:\Program Files\Eclipse Adoptium\jdk-21\bin\java.exe` |
| Microsoft Build of OpenJDK | `C:\Program Files\Microsoft\jdk-21\bin\java.exe` |
| Amazon Corretto | `C:\Program Files\Amazon Corretto\jdk-21\bin\java.exe` |

::: warning
- The path must point to the **`java.exe`** executable itself, not the Java installation root directory.
- The path **should not contain Chinese characters or special characters**, as this may cause launch failures.
- It is recommended to use **JDK 17 or later** for best compatibility.
:::

## Java Memory Settings

Proper memory allocation is crucial for game performance. VoxVer Launcher allows you to customize the maximum and minimum memory allocation for Java.

### Memory Parameter Descriptions

| Parameter | Description | Default | Recommended Range |
|-----------|-------------|---------|------------------|
| Maximum Memory (Xmx) | Maximum heap memory available to the Java virtual machine | 2048 MB | 2048 MB - 8192 MB |
| Minimum Memory (Xms) | Initial heap memory allocated when the Java virtual machine starts | 256 MB | 512 MB - 2048 MB |

### Memory Settings Recommendations

| System RAM | Recommended Max Memory | Recommended Min Memory | Notes |
|-----------|----------------------|----------------------|-------|
| 8 GB | 4096 MB | 512 MB | Basic gameplay, light Mods |
| 16 GB | 6144 MB | 1024 MB | Moderate number of Mods |
| 32 GB | 8192 MB | 2048 MB | Large modpacks, shaders |

::: tip
- It is recommended to set the maximum memory to **1/4 to 1/2 of your total system memory**, leaving enough memory for the operating system and other programs.
- The minimum memory is recommended to be set to **1/4 to 1/2 of the maximum memory** to avoid lag caused by frequent garbage collection.
- When installing a large number of Mods or using shader packs, it is advisable to increase the memory allocation accordingly.
:::

## FAQ

### Java error on launch?

Follow these steps to troubleshoot:

1. **Verify the Java path is correct** -- Go to the "Settings" page and check that the Java path points to a valid `java.exe`
2. **Verify the Java version matches** -- Different game versions have different minimum Java version requirements (see table below)
3. **Verify Java is 64-bit** -- Minecraft requires 64-bit Java; 32-bit Java cannot allocate sufficient memory

### Java Version Requirements

Different Minecraft versions have different minimum Java version requirements:

| Game Version | Minimum Java Version | Recommended Java Version |
|-------------|--------------------|------------------------|
| 1.20.5+ | Java 21 | Java 21+ |
| 1.20.4 and below | Java 17 | Java 17+ |
| 1.18 - 1.19.4 | Java 17 | Java 17+ |
| 1.17 | Java 16 | Java 16+ |
| 1.16.5 and below | Java 8 | Java 8 or Java 11 |

::: warning
- If the Java version is lower than the game's minimum requirement, the game will not launch.
- It is recommended to always use the Java version recommended for your game version for best compatibility and performance.
- You can install multiple Java versions on your system and specify different Java versions for different instances in VoxVer Launcher.
:::

### How to Download Java?

The following Java distributions are recommended (all free):

- [Eclipse Temurin (AdoptOpenJDK)](https://adoptium.net/) -- Community-maintained, full version coverage
- [Microsoft Build of OpenJDK](https://www.microsoft.com/openjdk) -- Officially maintained by Microsoft
- [Amazon Corretto](https://aws.amazon.com/corretto/) -- Maintained by AWS, long-term support
