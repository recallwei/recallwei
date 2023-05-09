import type { TechList } from '@/base'

export type Tech = (typeof TechList)[number]

export type ProjectCard = {
  name: string
  description: string
  href: string
  techList?: Tech[]
}

type ProjectGroupItem = { name: string; projects: ProjectCard[] }

export type ProjectsByGroup = Record<string, ProjectGroupItem>
