---
title: "Crash Monitor"
---

# Crash Monitor

VoxVer Launcher has a built-in crash monitoring system that automatically captures logs and analyzes them when the game exits unexpectedly.

## View Crash Reports

1. Go to **Settings** or the **Home** page
2. Click "Crash Records"
3. View the list of historical crash logs
4. Click on a record to view the detailed analysis report

## Crash Analysis Report

Each crash report includes:

| Field | Description |
|-------|-------------|
| Timestamp | Time the crash occurred |
| Game Version | Minecraft version at the time of the crash |
| ModLoader | Forge / Fabric / etc. |
| Error Type | JVM error / Game crash / etc. |
| Log Snippet | Key error log excerpt |
| Analysis Suggestions | Possible solutions |

## Common Crash Causes

| Cause | Solution |
|-------|----------|
| Insufficient Java memory | Increase the maximum memory setting |
| Mod conflict | Disable recently added mods one by one |
| Java version mismatch | 1.17+ requires Java 16+, 1.18+ requires Java 17+ |
| Forge/Fabric version mismatch | Reinstall the corresponding ModLoader version |

## Submit a Bug Report

If you cannot resolve the issue on your own:

1. Export the crash report from VoxVer Launcher
2. Go to [GitHub Issues](https://github.com/nnkmn/VoxVer-Launcher/issues) to submit the issue
3. Attach the crash report and log files
