---
title: "Java 设置"
---

# Java 设置

Minecraft 运行需要 Java 运行时环境（JRE 或 JDK）。VoxVer Launcher 提供了自动检测和手动配置两种方式来管理 Java 环境。本章将详细介绍 Java 的检测、配置和内存调优方法。

## 自动检测

VoxVer Launcher 会在首次启动时自动扫描系统中已安装的 Java 环境。

### 检测机制

- 扫描系统 `PATH` 环境变量中的 Java 路径
- 扫描常见的 Java 安装目录（如 `C:\Program Files\Java\`、`C:\Program Files\Eclipse Adoptium\`）
- 检测 `JAVA_HOME` 环境变量指向的 Java 路径

### 查看检测结果

1. 进入 **设置** 页面
2. 找到「Java 设置」区域
3. 如果检测到 Java，会显示检测到的 Java 版本和路径
4. 如果未检测到 Java，会显示「未检测到 Java 环境」的提示

::: tip 提示
如果你的系统中安装了多个版本的 Java，VoxVer Launcher 会列出所有检测到的版本，你可以从中选择要使用的版本。
:::

## 手动指定 Java 路径

如果自动检测未能找到你需要的 Java 版本，或者你需要使用特定版本的 Java，可以手动指定路径。

### 设置步骤

1. 进入 **设置** 页面
2. 找到「Java 路径」设置项
3. 点击 **「浏览」** 按钮
4. 在文件选择器中导航到 Java 安装目录的 `bin` 文件夹
5. 选择 `java.exe` 文件
6. 点击「保存」完成设置

### 路径示例

| Java 发行版 | 典型安装路径 |
|------------|-------------|
| Oracle JDK | `C:\Program Files\Java\jdk-21\bin\java.exe` |
| Eclipse Temurin | `C:\Program Files\Eclipse Adoptium\jdk-21\bin\java.exe` |
| Microsoft Build of OpenJDK | `C:\Program Files\Microsoft\jdk-21\bin\java.exe` |
| Amazon Corretto | `C:\Program Files\Amazon Corretto\jdk-21\bin\java.exe` |

::: warning 注意
- 路径必须指向 **`java.exe`** 可执行文件本身，而不是 Java 安装根目录。
- 路径中 **不应包含中文或特殊字符**，否则可能导致启动失败。
- 建议使用 **JDK 17 或更高版本**，以获得最佳兼容性。
:::

## Java 内存设置

合理的内存分配对游戏性能至关重要。VoxVer Launcher 允许你自定义 Java 的最大和最小内存分配。

### 内存参数说明

| 参数 | 说明 | 默认值 | 推荐范围 |
|------|------|--------|---------|
| 最大内存（Xmx） | Java 虚拟机可使用的最大堆内存 | 2048 MB | 2048 MB - 8192 MB |
| 最小内存（Xms） | Java 虚拟机启动时初始分配的堆内存 | 256 MB | 512 MB - 2048 MB |

### 内存设置建议

| 系统内存 | 推荐最大内存 | 推荐最小内存 | 说明 |
|---------|------------|------------|------|
| 8 GB | 4096 MB | 512 MB | 基础游玩，少量 Mod |
| 16 GB | 6144 MB | 1024 MB | 中等 Mod 数量 |
| 32 GB | 8192 MB | 2048 MB | 大型整合包，光影 |

::: tip 提示
- 建议将最大内存设置为 **系统总内存的 1/4 到 1/2**，为操作系统和其他程序预留足够的内存。
- 最小内存建议设置为最大内存的 **1/4 到 1/2**，避免频繁的垃圾回收导致卡顿。
- 安装了大量 Mod 或使用光影包时，建议适当增大内存分配。
:::

## 常见问题

### 启动时报 Java 错误？

请按以下步骤排查：

1. **确认 Java 路径正确** -- 进入「设置」页面，检查 Java 路径是否指向有效的 `java.exe`
2. **确认 Java 版本匹配** -- 不同游戏版本对 Java 有最低版本要求，详见下表
3. **确认 Java 是 64 位** -- Minecraft 需要 64 位 Java，32 位 Java 无法分配足够内存

### Java 版本要求

不同 Minecraft 版本对 Java 最低版本有不同的要求：

| 游戏版本 | 最低 Java 版本 | 推荐 Java 版本 |
|---------|--------------|--------------|
| 1.20.5+ | Java 21 | Java 21+ |
| 1.20.4 及以下 | Java 17 | Java 17+ |
| 1.18 - 1.19.4 | Java 17 | Java 17+ |
| 1.17 | Java 16 | Java 16+ |
| 1.16.5 及以下 | Java 8 | Java 8 或 Java 11 |

::: warning 注意
- 如果 Java 版本低于游戏要求的最低版本，游戏将无法启动。
- 建议始终使用游戏版本推荐的 Java 版本，以获得最佳兼容性和性能。
- 你可以在系统中安装多个 Java 版本，并在 VoxVer Launcher 中为不同实例指定不同的 Java 版本。
:::

### 如何下载 Java？

推荐以下 Java 发行版（均为免费）：

- [Eclipse Temurin（AdoptOpenJDK）](https://adoptium.net/) -- 社区维护，版本齐全
- [Microsoft Build of OpenJDK](https://www.microsoft.com/openjdk) -- 微软官方维护
- [Amazon Corretto](https://aws.amazon.com/corretto/) -- AWS 维护，长期支持
