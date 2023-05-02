import { sync } from 'cross-spawn'
import dayjs from 'dayjs'
import { resolve } from 'path'

import type { TimeFormatter } from '@/types'

export const getLastUpdatedTime = (id: string) => {
  const file = resolve('src/content/post', id)
  const child = sync('git', ['log', '-1', '--pretty="%ci"', file])
  const output = child.stdout.toString()
  return new Date(output).toLocaleString()
}

export const formatDate = (date: string | Date, formatter: TimeFormatter): string => dayjs(date).format(formatter)

export const getDateByPostId = (id: string) => id.split('/').pop()!.substring(0, 10)
