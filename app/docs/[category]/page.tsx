import type { Metadata } from 'next'
import fs from 'fs'
import { join } from 'path'

type Params = { category: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = params
  console.log(category)
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

export default function Category({ params }: { params: Params }): JSX.Element {
  getMarkdownJSON()
  return <main></main>
}
