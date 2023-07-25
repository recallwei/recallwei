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
  'MongoDB',
  'Naive UI',
  'Network',
  'Next.js',
  'Node.js',
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
