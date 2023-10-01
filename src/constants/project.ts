import type { ProjectsByGroup } from '@/types'

export const TechList = [
  'Astro',
  'CSS',
  'Docusaurus',
  'Express.js',
  'Gatsby',
  'HTML',
  'JavaScript',
  'Naive UI',
  'Nest.js',
  'Next.js',
  'Node.js',
  'Nuxt.js',
  'PostgreSQL',
  'Prisma',
  'React',
  'SCSS',
  'TailwindCSS',
  'TypeScript',
  'Vite',
  'Vue'
] as const

export const TechIconNameMap = new Map<(typeof TechList)[number], string>([
  ['Astro', 'logos:astro-icon'],
  ['CSS', 'logos:css-3'],
  ['Docusaurus', 'logos:docusaurus'],
  ['Express.js', 'skill-icons:expressjs-light'],
  ['Gatsby', 'logos:gatsby'],
  ['HTML', 'logos:html-5'],
  ['JavaScript', 'logos:javascript'],
  ['Naive UI', 'logos:naiveui'],
  ['Nest.js', 'logos:nestjs'],
  ['Next.js', 'logos:nextjs-icon'],
  ['Node.js', 'logos:nodejs-icon'],
  ['Nuxt.js', 'vscode-icons:file-type-nuxt'],
  ['PostgreSQL', 'logos:postgresql'],
  ['Prisma', 'logos:prisma'],
  ['React', 'logos:react'],
  ['SCSS', 'logos:sass'],
  ['TailwindCSS', 'devicon:tailwindcss'],
  ['TypeScript', 'logos:typescript-icon'],
  ['Vite', 'logos:vitejs'],
  ['Vue', 'logos:vue']
])

export const GroupedProjects: ProjectsByGroup = {
  webApps: {
    name: 'Web App',
    projects: [
      {
        name: 'Dolphin Admin',
        description:
          '🐬 Dolphin Admin is an open source, lightweight, out-of-the-box, elegant and exquisite, internationalized backend management template.',
        href: 'https://dolphin-admin.bit-ocean.studio/',
        techList: [
          'TypeScript',
          'Vue',
          'Naive UI',
          'TailwindCSS',
          'Vite',
          'Nest.js',
          'Prisma',
          'PostgreSQL'
        ]
      },
      {
        name: 'Blog',
        description:
          'My personal blog to record something what I want. Based on Astro.',
        href: 'https://brucesong.xyz/',
        techList: ['TypeScript', 'Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'Wiki',
        description:
          'Used to record various questions and knowledge points. Archived in the Show Case of Docusaurus.',
        href: 'https://wiki.brucesong.xyz/',
        techList: ['TypeScript', 'Docusaurus', 'React', 'SCSS']
      },
      {
        name: 'Taskward',
        description:
          'A Todo&Tasks web application. Based on React, TypeScript.',
        href: 'https://taskward.bit-ocean.studio/',
        techList: [
          'TypeScript',
          'React',
          'TailwindCSS',
          'Vite',
          'Express.js',
          'Prisma',
          'PostgreSQL'
        ]
      },
      {
        name: 'QRCode Generator',
        description:
          'Generate QRCodes more easily by specific templates. Based on Vue 3, TypeScript.',
        href: 'https://qrcode.brucesong.xyz/',
        techList: ['TypeScript', 'Vue', 'Naive UI', 'TailwindCSS', 'Vite']
      },
      {
        name: '里德笔记',
        description:
          'A demo of the enterprise website customized for LiDeBiJi. Based on React, Gatsby.',
        href: 'https://lidebiji-demo.brucesong.xyz/media',
        techList: ['JavaScript', 'Gatsby', 'React', 'TailwindCSS']
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
