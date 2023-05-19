export const TagList = [
  'Astro',
  'CSS',
  'Docusaurus',
  'Express',
  'Front-end Engineering',
  'Gatsby',
  'Git',
  'HTML',
  'JavaScript',
  'Naive UI',
  'Next.js',
  'Node.js',
  'Nuxt.js',
  'PC',
  'PostgreSQL',
  'Prisma',
  'React',
  'SCSS',
  'SVG',
  'TailwindCSS',
  'TypeScript',
  'Vite',
  'Vue',
  'Web Tech'
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
