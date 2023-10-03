import type { ProjectsByGroup } from '@/types'

export const TechList = [
  'antd',
  'App Center',
  'Astro',
  'CSS',
  'Docusaurus',
  'Element Plus',
  'ESLint',
  'Express.js',
  'Gatsby',
  'HTML',
  'JavaScript',
  'Naive UI',
  'Nest.js',
  'Next.js',
  'Node.js',
  'Nuxt.js',
  'Pinia',
  'pnpm',
  'PostgreSQL',
  'Prisma',
  'React',
  'React Native',
  'React Navigation',
  'React Query',
  'React Router',
  'Redux',
  'ReactiveX',
  'SCSS',
  'Socket.IO',
  'Svelte',
  'TailwindCSS',
  'Tamagui',
  'TypeScript',
  'Vite',
  'VSCode',
  'Vue',
  'Vue Use'
] as const

export const TechIconNameMap = new Map<(typeof TechList)[number], string>([
  ['antd', 'logos:ant-design'],
  ['App Center', 'logos:appcenter-icon'],
  ['Astro', 'logos:astro-icon'],
  ['CSS', 'logos:css-3'],
  ['Docusaurus', 'logos:docusaurus'],
  ['Element Plus', 'logos:element'],
  ['ESLint', 'logos:eslint'],
  ['Express.js', 'skill-icons:expressjs-light'],
  ['Gatsby', 'logos:gatsby'],
  ['HTML', 'logos:html-5'],
  ['JavaScript', 'logos:javascript'],
  ['Naive UI', 'logos:naiveui'],
  ['Nest.js', 'logos:nestjs'],
  ['Next.js', 'logos:nextjs-icon'],
  ['Node.js', 'logos:nodejs-icon'],
  ['Nuxt.js', 'vscode-icons:file-type-nuxt'],
  ['Pinia', 'logos:pinia'],
  ['pnpm', 'devicon:pnpm'],
  ['PostgreSQL', 'logos:postgresql'],
  ['Prisma', 'logos:prisma'],
  ['React', 'logos:react'],
  ['React Native', 'logos:react'],
  ['React Navigation', 'devicon:reactnavigation'],
  ['React Query', 'logos:react-query-icon'],
  ['React Router', 'devicon:reactrouter'],
  ['Redux', 'logos:redux'],
  ['ReactiveX', 'logos:reactivex'],
  ['SCSS', 'logos:sass'],
  ['Socket.IO', 'devicon:socketio'],
  ['Svelte', 'logos:svelte-icon'],
  ['TailwindCSS', 'devicon:tailwindcss'],
  ['Tamagui', 'vscode-icons:file-type-tamagui'],
  ['TypeScript', 'devicon:typescript'],
  ['Vite', 'logos:vitejs'],
  ['VSCode', 'logos:visual-studio-code'],
  ['Vue', 'logos:vue'],
  ['Vue Use', 'logos:vueuse']
])

export const GroupedProjects: ProjectsByGroup = {
  webApps: {
    name: 'Web App',
    projects: [
      {
        name: 'Soya Solar App',
        description: 'iOS & Android App based on React Native.',
        techList: [
          'TypeScript',
          'React',
          'React Navigation',
          'Tamagui',
          'App Center'
        ],
        inDevelopment: true
      },
      {
        name: 'Soya Solar Enterprise Website',
        description: 'An enterprise website based on Next.js.',
        techList: ['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'SCSS'],
        inDevelopment: true
      },
      {
        name: 'What to eat?',
        description:
          'For people with difficulty making choices, what to eat is a big problem in life!',
        href: 'https://what-to-eat.brucesong.xyz/',
        techList: ['TypeScript', 'Svelte', 'TailwindCSS', 'Vite'],
        inDevelopment: true
      },
      {
        name: 'Dolphin Admin React',
        description: '🐬 Dolphin Admin React version.',
        // href: 'https://dolphin-admin.bit-ocean.studio/',
        techList: [
          'TypeScript',
          'React',
          'React Query',
          'antd',
          'TailwindCSS',
          'Vite',
          'Nest.js',
          'Prisma',
          'PostgreSQL',
          'Socket.IO'
        ],
        inDevelopment: true
      },
      {
        name: 'Dolphin Admin Vue',
        description:
          '🐬 Dolphin Admin Vue is an open source, lightweight, out-of-the-box, elegant and exquisite, internationalized backend management template.',
        href: 'https://dolphin-admin.bit-ocean.studio/',
        techList: [
          'TypeScript',
          'Vue',
          'Naive UI',
          'TailwindCSS',
          'SCSS',
          'Vite',
          'Pinia',
          'Vue Use',
          'Nest.js',
          'Prisma',
          'PostgreSQL',
          'Socket.IO'
        ]
      },
      {
        name: 'Dolphin Admin Docs',
        description: 'A tech documentation site for Dolphin Admin.',
        techList: ['Nuxt.js', 'TypeScript', 'TailwindCSS', 'SCSS', 'Pinia'],
        inDevelopment: true
      },
      {
        name: 'QRCode Generator',
        description: 'Generate QRCodes more easily by specific templates.',
        href: 'https://qrcode.brucesong.xyz/',
        techList: [
          'TypeScript',
          'Vue',
          'Naive UI',
          'TailwindCSS',
          'SCSS',
          'Vite',
          'Pinia',
          'Vue Use',
          'ReactiveX'
        ]
      },
      {
        name: 'Resume Generator',
        description: 'Use markdown to write your resume. ',
        // href: 'https://resume.brucesong.xyz/',
        techList: ['TypeScript', 'Vue', 'TailwindCSS', 'SCSS', 'Vite', 'Pinia'],
        inDevelopment: true
      },
      {
        name: 'LiDeBiJi Enterprise Website Demo',
        description:
          'A demo of the enterprise website customized for LiDeBiJi.',
        href: 'https://lidebiji-demo.brucesong.xyz/media',
        techList: ['JavaScript', 'Gatsby', 'React', 'TailwindCSS']
      },
      {
        name: 'Taskward',
        description: 'A Todo&Tasks web application.',
        href: 'https://taskward.bit-ocean.studio/',
        techList: [
          'TypeScript',
          'React',
          'Redux',
          'React Query',
          'TailwindCSS',
          'Vite',
          'Express.js',
          'Prisma',
          'PostgreSQL'
        ]
      },
      {
        name: 'Blog',
        description: 'My personal blog to record something what I want.',
        href: 'https://brucesong.xyz/',
        techList: ['TypeScript', 'Astro', 'React', 'TailwindCSS']
      },
      {
        name: 'Wiki',
        description:
          'Used to record various questions and knowledge points. Archived in the Show Case of Docusaurus.',
        href: 'https://wiki.brucesong.xyz/',
        techList: ['TypeScript', 'Docusaurus', 'React', 'SCSS']
      }
    ]
  },
  utils: {
    name: 'Utils',
    projects: [
      {
        name: 'Create Tornado',
        description:
          'A prompt CLI tool to generate a project with GitHub template.',
        href: 'https://tornado.bit-ocean.studio/',
        techList: ['TypeScript', 'Node.js', 'pnpm']
      },
      {
        name: 'ESLint Config',
        description: 'ESLint config for my projects.',
        href: 'https://github.com/recallwei/eslint-config',
        techList: ['JavaScript', 'ESLint', 'pnpm']
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
        techList: ['JavaScript', 'VSCode']
      }
    ]
  }
}
