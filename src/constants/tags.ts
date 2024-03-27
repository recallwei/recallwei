export const TagList = [
  'Astro',
  'Axios',
  'CSS',
  'Design Patterns',
  'Docusaurus',
  'ESLint',
  'Express',
  'Front-end Engineering',
  'Gatsby',
  'Git',
  'HTML',
  'JavaScript',
  'MongoDB',
  'Monorepo',
  'Naive UI',
  'Nest.js',
  'Network',
  'Next.js',
  'Node.js',
  'npm',
  'Nuxt.js',
  'PC',
  'PostgreSQL',
  'Prisma',
  'React',
  'SCSS',
  'Server',
  'SVG',
  'TailwindCSS',
  'TypeScript',
  'uni-app',
  'Vite',
  'Vue',
  'Web API'
] as const

type Tag = (typeof TagList)[number]

const getTagHrefMapItem = (tag: Tag): [Tag, string] => {
  let tagStr = tag.toLowerCase()
  if (tagStr.includes(' ')) {
    tagStr = tagStr.split(' ').join('-')
  }
  if (tagStr.includes('.')) {
    tagStr = tagStr.split('.').join('-')
  }
  return [tag, tagStr]
}

export const TagHrefMap = new Map(TagList.map(getTagHrefMapItem))
