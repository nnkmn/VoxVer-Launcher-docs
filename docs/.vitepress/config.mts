import { defineConfig } from 'vitepress'

const github = 'https://github.com/MeowY-Studios/VoxVer-Launcher'
const githubDocs = 'https://github.com/MeowY-Studios/VoxVer-Launcher-docs'

const zhNav = [
  { text: '主页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '下载', link: '/guide/download' },
  { text: 'GitHub', link: github },
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Guide', link: '/en/guide/' },
  { text: 'Download', link: '/en/guide/download' },
  { text: 'GitHub', link: github },
]

const zhGuideSidebar = [
  { text: '简介', link: '/guide/' },
  { text: '下载与安装', link: '/guide/download' },
  { text: '快速启动', link: '/guide/quick-start' },
  { text: '账户管理', link: '/guide/accounts' },
  { text: '版本管理', link: '/guide/versions' },
  { text: 'Mod 管理', link: '/guide/mods' },
  { text: '实例系统', link: '/guide/instances' },
  { text: 'Java 设置', link: '/guide/java' },
  { text: '全局设置', link: '/guide/settings' },
  { text: '自定义路径', link: '/guide/custom-path' },
  { text: '崩溃监控', link: '/guide/crash' },
  { text: '常见问题', link: '/guide/faq' },
  { text: '更新日志', link: '/guide/changelog' },
]

const enGuideSidebar = [
  { text: 'Introduction', link: '/en/guide/' },
  { text: 'Download & Install', link: '/en/guide/download' },
  { text: 'Quick Start', link: '/en/guide/quick-start' },
  { text: 'Account Management', link: '/en/guide/accounts' },
  { text: 'Version Management', link: '/en/guide/versions' },
  { text: 'Mod Management', link: '/en/guide/mods' },
  { text: 'Instance System', link: '/en/guide/instances' },
  { text: 'Java Settings', link: '/en/guide/java' },
  { text: 'Global Settings', link: '/en/guide/settings' },
  { text: 'Custom Paths', link: '/en/guide/custom-path' },
  { text: 'Crash Monitor', link: '/en/guide/crash' },
  { text: 'FAQ', link: '/en/guide/faq' },
  { text: 'Changelog', link: '/en/guide/changelog' },
]

export default defineConfig({
  base: '/',
  title: 'VoxVer Launcher',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['link', { rel: 'icon', href: '/logo-256.ico' }],
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['meta', { property: 'og:site_name', content: 'VoxVer Launcher' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'VoxVer Launcher' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '一个现代化的 Minecraft 启动器，支持微软正版登录、实例隔离、Mod 管理与多语言文档。',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  description: 'VoxVer Launcher - 一个现代化的 Minecraft 启动器，基于 Electron + Vue 3 + TypeScript',
  titleTemplate: ':title - VoxVer',
  lastUpdated: true,
  appearance: true,

  locales: {
    'zh': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        outline: {
          label: '页面导航',
        },
        nav: zhNav,
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        editLink: {
          text: '在 GitHub 上编辑此页',
          pattern: `${githubDocs}/edit/main/docs/:path`,
        },
        footer: {
          message: 'VoxVer Launcher 基于 MIT 协议开源',
          copyright: 'Copyright © 2024-2026 nnkmn (EccenTri)',
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
        sidebar: {
          '/': [{ text: '快速导航', items: zhGuideSidebar.slice(0, 10) }],
          '/guide/': [{ text: '快速导航', items: zhGuideSidebar }],
        },
      },
    },
    'en': {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        outline: {
          label: 'On This Page',
        },
        nav: enNav,
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        editLink: {
          text: 'Edit this page on GitHub',
          pattern: `${githubDocs}/edit/main/docs/:path`,
        },
        footer: {
          message: 'VoxVer Launcher is open source under the MIT License',
          copyright: 'Copyright © 2024-2026 nnkmn (EccenTri)',
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                },
              },
            },
          },
        },
        sidebar: {
          '/en/': [{ text: 'Quick Navigation', items: enGuideSidebar.slice(0, 10) }],
          '/en/guide/': [{ text: 'Quick Navigation', items: enGuideSidebar }],
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo-256.ico',
    siteTitle: 'VoxVer Launcher',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MeowY-Studios/VoxVer-Launcher' },
    ],
  },
})
