import type { LinkItem } from '@/types'
import { navigateTo } from '@/utils'

import GitHubIcon from '../SVG/GitHub'
import HomeIcon from '../SVG/Home'

interface Props {
  data: LinkItem
}
export default function LinkCard(props: Props) {
  const handleLink = (href?: string) => {
    if (href) {
      navigateTo(href, 'outer')
    }
  }

  if (!props.data.avatarUrl || !props.data.name || !props.data.description) {
    return null
  }

  return (
    <div
      onClick={() => handleLink(props.data.siteUrl)}
      className="flex cursor-pointer select-none space-x-4 rounded-sm border border-solid border-gray-300 p-4 transition-all hover:bg-gray-200 active:opacity-75 dark:border-gray-600 dark:hover:bg-gray-600"
    >
      <div className="flex w-40 shrink-0 flex-col items-center space-y-2">
        <img
          src={props.data.avatarUrl}
          className="w-24 rounded-full"
        />
        <span className="text-sm">{props.data.name}</span>
      </div>
      <div className="flex w-full flex-col justify-between">
        <p>{props.data.description}</p>
        <span className="flex w-fit space-x-0.5 self-end">
          <div
            className="flex items-center justify-center rounded-full p-1 opacity-100 transition-all hover:bg-gray-300 active:opacity-90"
            onClick={() => handleLink(props.data.siteUrl)}
          >
            <HomeIcon
              width={20}
              height={20}
              color="#555555"
            />
          </div>
          <div
            className="flex items-center justify-center rounded-full p-1 opacity-100 transition-all hover:bg-gray-300 active:opacity-90"
            onClick={() => handleLink(props.data.githubUrl)}
          >
            <GitHubIcon
              width={20}
              height={20}
              color="#555555"
            />
          </div>
        </span>
      </div>
    </div>
  )
}
