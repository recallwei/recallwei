import type { Metadata } from 'next'
import fs from 'fs'
import { join } from 'path'

type Props = {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params
  return {
    title: category
  }
}

async function getMarkdownJSON() {
  const postsDirectory = join(process.cwd(), 'docs')
  // console.log(fs.readdirSync(postsDirectory))
  const fullPath = join(postsDirectory, 'javascript/index.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // console.log(fileContents)
}

export default function Category({ params }: Props): JSX.Element {
  getMarkdownJSON()
  return <main></main>
}
