import type { ProjectsByGroup } from '@/types'

export const GroupedProjects: ProjectsByGroup = {
  webApps: {
    name: 'Web App',
    projects: [
      {
        name: 'Blog',
        description:
          'My personal blog to record something what I want. Based on Astro.',
        href: 'https://bruceworld.top/',
        techList: ['TypeScript', 'Astro', 'TailwindCSS']
      },
      {
        name: 'Wiki',
        description:
          'Used to record various questions and knowledge points. Archived in the Show Case of Docusaurus.',
        href: 'https://wiki.bruceworld.top/',
        techList: ['TypeScript', 'React', 'Docusaurus']
      },
      {
        name: 'Taskward',
        description:
          'A Todo&Tasks web application. Based on React, TypeScript.',
        href: 'https://taskward.bruceworld.top/',
        techList: ['TypeScript', 'React', 'TailwindCSS']
      },
      {
        name: 'QRCode Generator',
        description:
          'Generate QRCodes more easily by specific templates. Based on Vue 3, TypeScript.',
        href: 'https://qrcode.bruceworld.top/',
        techList: ['TypeScript', 'Vue', 'TailwindCSS', 'Naive UI']
      },
      {
        name: '里德笔记',
        description:
          'A demo of the enterprise website customized for LiDeBiJi. Based on React, Gatsby.',
        href: 'https://lidebiji-demo.bruceworld.top/media',
        techList: ['JavaScript', 'React', 'Gatsby', 'TailwindCSS']
      }
    ]
  },
  vscodeExts: {
    name: 'VSCode Extensions',
    projects: [
      {
        name: 'Code Magician',
        description: 'JavaScript, React, Vue code snippets, out of box.',
        href: 'https://marketplace.visualstudio.com/items?itemName=BruceSong.code-magician',
        techList: ['JavaScript']
      }
    ]
  }
}
