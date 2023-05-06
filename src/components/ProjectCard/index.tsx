import type { ProjectCard as ProjectCardType } from '@/types'
import { navigateTo } from '@/utils'

type Props = {
  data: ProjectCardType
}

export default function ProjectCard(props: Props): JSX.Element {
  return (
    <div
      onClick={() => navigateTo(props.data.href, 'outer')}
      className="flex cursor-pointer items-center space-x-2 rounded-sm border border-solid border-gray-300 p-4 transition-all hover:bg-gray-200 active:opacity-75 dark:border-gray-600 dark:hover:bg-gray-600"
    >
      <div className="h-full space-y-1">
        <span className="text-lg">{props.data.name}</span>
        <div className="text-muted text-base">{props.data.description}</div>
      </div>
      <div className="flex w-0 items-center justify-center"></div>
    </div>
  )
}
