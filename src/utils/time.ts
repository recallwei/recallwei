import dayjs from 'dayjs'
import { sync } from 'cross-spawn'
import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const FILE_DEV_DIR = '../content/post'
const FILE_PROD_DIR = '../../../src/content/post'

export const getLastUpdatedTime = (id: string) => {
  const fileDev = resolve(__dirname, FILE_DEV_DIR, id)
  const fileProd = resolve(__dirname, FILE_PROD_DIR, id)
  const file = existsSync(fileDev) ? fileDev : fileProd
  const child = sync('git', ['log', '-1', '--pretty="%ci"', file])
  const output = child.stdout.toString()
  return new Date(output).toLocaleString()
}

export const formatDate = (date: string | Date, type: 0 | 1 | 2 = 0) => {
  switch (type) {
    case 0:
      return dayjs(date).format('MMM D, YYYY')
    case 1:
      return dayjs(date).format('MMM D')
    case 2:
      return dayjs(date).format('YYYY/MM')
  }
}
