export const TagList = <const>[
  'Astro',
  'Axios',
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
]

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
