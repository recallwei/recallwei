const TechList = <const>[
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Vite',
  'Next.js',
  'Nuxt.js',
  'Docusaurus',
  'Gatsby',
  'Astro',
  'Naive UI',
  'TailwindCSS',
  'Node.js',
  'Prisma',
  'PostgreSQL'
]

export type Tech = (typeof TechList)[number]

export type ProjectCard = {
  name: string
  description: string
  href: string
  techList?: Tech[]
}

type ProjectGroupItem = { name: string; projects: ProjectCard[] }

export type ProjectsByGroup = Record<string, ProjectGroupItem>
