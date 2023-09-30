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

type Tech = (typeof TechList)[number]

export const TechIconNameMap = new Map<Tech, string>([
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
