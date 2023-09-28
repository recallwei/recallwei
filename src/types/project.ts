import type { TechList } from '@/base'

export type Tech = (typeof TechList)[number]

export interface ProjectCard {
  name: string
  description: string
  href: string
  techList?: Tech[]
}

interface ProjectGroupItem {
  name: string
  projects: ProjectCard[]
}

export type ProjectsByGroup = Record<string, ProjectGroupItem>
