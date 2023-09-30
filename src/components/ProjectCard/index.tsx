import { Icon } from '@iconify/react'

import { TechIconNameMap } from '@/base'
import type { ProjectCard as ProjectCardType } from '@/types'
import { navigateTo } from '@/utils'

interface Props {
  data: ProjectCardType
}

export default function ProjectCard(props: Props): React.JSX.Element {
  return (
    <div
      onClick={() => navigateTo(props.data.href, 'outer')}
      className="flex cursor-pointer items-center space-x-2 rounded-sm border border-solid border-gray-300 p-4 transition-all hover:bg-gray-200 active:opacity-75 dark:border-gray-600 dark:hover:bg-gray-600"
    >
      <div className="h-full space-y-2">
        <span className="text-lg">{props.data.name}</span>
        <div className="flex flex-wrap space-x-2">
          {props.data.techList?.map((techItem, techIndex) => {
            const iconName = TechIconNameMap.get(techItem)
            if (!iconName) {
              return null
            }
            return (
              <Icon
                key={techIndex + techItem}
                icon={iconName}
              />
            )
          })}
        </div>
        <div className="text-base text-muted">{props.data.description}</div>
      </div>
      <div className="flex w-0 items-center justify-center" />
    </div>
  )
}
