---
title: "Download & Install"
---

# Download & Install

## Download

Go to [GitHub Releases](https://github.com/nnkmn/MCLA/releases) to download the latest version of MCLa.

Windows users should download `MCLa Setup x.x.x.exe` (NSIS installer).

## Installation

Run the downloaded `MCLa Setup x.x.x.exe` and follow the installation wizard to complete the setup.

MCLa will launch automatically after installation.

## Build from Source

```bash
git clone https://github.com/nnkmn/MCLA.git
cd MCLA
npm install
npm run dev
```

Build the installer package:

```bash
# Windows
npm run build:win
```

The build output is located in the `build/` directory.

## First Launch Checklist

After launching MCLa for the first time:

1. Go to the **Settings** page
2. Verify that the Java path is correct (auto-detection is supported)
3. Confirm the game directory (default is `.minecraft`, can be customized)
4. Go to the **Accounts** page and add an account
5. Go to the **Versions** page and install the desired version
6. Click **Launch**
