import { Icon } from '@iconify/react'

import { TechIconNameMap } from '@/constants'
import type { ProjectCard as ProjectCardType } from '@/types'
import { navigateTo } from '@/utils'

interface Props {
  data: ProjectCardType
}

export default function ProjectCard(props: Props): React.JSX.Element {
  const handleLink = () => {
    if (props.data.href) {
      navigateTo(props.data.href, 'outer')
    }
  }

  return (
    <div
      onClick={handleLink}
      className="flex cursor-pointer select-none items-center rounded-sm border border-solid border-gray-300 p-4 transition-all hover:bg-gray-200 active:opacity-75 dark:border-gray-600 dark:hover:bg-gray-600"
    >
      <div className="size-full space-y-2">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg">{props.data.name}</span>
          {props.data.inDevelopment && (
            <span className="-mr-4 rounded-l-sm bg-yellow-400 px-2 pt-0.5 text-center text-xs text-black opacity-75">
              In Development
            </span>
          )}
        </div>
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
