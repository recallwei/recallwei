import dayjs from 'dayjs'

import type { TimeFormatter } from '@/types'

export const formatDate = (
  date: string | Date,
  formatter: TimeFormatter
): string => dayjs(date).format(formatter)

export const getDateByPostId = (id: string) =>
  id.split('/').pop()!.substring(0, 10)
