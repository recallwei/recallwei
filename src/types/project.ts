import type { TechList } from '@/constants'

export type Tech = (typeof TechList)[number]

export interface ProjectCard {
  name: string
  description: string
  href?: string
  techList?: Tech[]
  inDevelopment?: boolean
}

interface ProjectGroupItem {
  name: string
  projects: ProjectCard[]
}

export type ProjectsByGroup = Record<string, ProjectGroupItem>
