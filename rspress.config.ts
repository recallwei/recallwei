import path from 'node:path'

import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'Web Dev Record',
  description: 'My personal web dev learning record.',
  icon: '/bit-ocean.png',
  logo: '/bit-ocean.png',
  route: {
    cleanUrls: true
  },
  themeConfig: {
    footer: {
      message: 'Made with ❤️ by Bruce Song'
    },
    outlineTitle: 'Outline',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    prevPageText: '上一页',
    nextPageText: '下一页',
    hideNavbar: 'auto',
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/recallwei'
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/NfPAGuz7Em'
      },
      {
        icon: 'juejin',
        mode: 'link',
        content: 'https://juejin.cn/user/4117044626470823'
      },
      {
        icon: 'weixin',
        mode: 'text',
        content: '微信号: Recall4056'
      },
      {
        icon: 'qq',
        mode: 'text',
        content: 'QQ: 2379312637'
      }
    ]
  },
  markdown: {
    checkDeadLinks: true,
    showLineNumbers: true
  }
})
