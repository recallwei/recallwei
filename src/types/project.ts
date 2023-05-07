export const TechList = <const>[
  'Astro',
  'CSS',
  'Docusaurus',
  'Gatsby',
  'HTML',
  'JavaScript',
  'Naive UI',
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
