---
title: "Account Management"
---

# Account Management

VoxVer Launcher supports multiple login methods to suit different gameplay needs.

## Supported Login Methods

| Method | Description | Use Case |
|--------|-------------|----------|
| Microsoft Login | Device Code Flow, no password entry required in the launcher | Licensed users |
| Offline Mode | Enter any username | Single-player / testing |

## Microsoft Login

1. Go to the **Accounts** page
2. Click "Microsoft Login"
3. The launcher displays a device code (e.g., `ABCDEF`)
4. A browser opens to `microsoft.com/devicelogin`
5. Enter the device code to complete authorization
6. The launcher automatically obtains and saves the token

> Tokens are encrypted and stored using Electron safeStorage. They are automatically refreshed afterward, so you do not need to log in again.

## Offline Mode

1. Go to the **Accounts** page
2. Click "Offline Login"
3. Enter any username
4. Click Confirm

## Multi-Account Switching

After adding multiple accounts, go to the **Launch** page, select the account you want to use, and click "Set as Active".

## Remove Account

Go to the **Accounts** page, find the corresponding account, and click "Remove".

> Removing an account does not delete game data. It only clears the saved token and profile information.
