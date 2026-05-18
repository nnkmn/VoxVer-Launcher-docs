---
title: "Instance System"
---

# Instance System

The instance system allows you to create completely independent Minecraft environments for different playstyles. Each instance has its own mods, configurations, and saves.

## Create Instance

1. Go to the **Instances** page
2. Click "New Instance"
3. Enter the instance name, select the game version, and choose a ModLoader
4. Click "Create"

After creation, you can manage the instance's mods and configurations in **Instance Details**.

## Import Instance

If you already have a `.minecraft` directory, you can import it as an instance:

1. Go to the **Instances** page
2. Click "Import"
3. Select the existing `.minecraft` directory
4. Wait for the import to complete

## Export Instance

You can package an instance to share with others:

1. Go to the **Instance Details** page
2. Click "Export"
3. Choose the export path
4. Wait for the packaging to complete

## Instance Isolation

Each instance has independent:

- Game version and ModLoader
- Mod files (`mods/` directory)
- Configuration files (`config/` directory)
- Saves (`saves/` directory)

They do not interfere with each other, so you can have multiple instances with different versions simultaneously.
