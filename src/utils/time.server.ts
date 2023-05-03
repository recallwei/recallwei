import { sync } from 'cross-spawn'
import { resolve } from 'path'

export const getLastUpdatedTime = (id: string) => {
  const file = resolve('src/content/post', id)
  const child = sync('git', ['log', '-1', '--pretty="%ci"', file])
  const output = child.stdout.toString()
  return new Date(output).toLocaleString()
}
