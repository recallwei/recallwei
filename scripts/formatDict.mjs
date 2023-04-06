import fs from 'fs'
import { customChalk } from './chalk.mjs'

const CSPELL_DICT_DIR = './.cspell/custom-words.txt'

fs.readFile(CSPELL_DICT_DIR, 'utf8', (err, dataStr) => {
  if (err) {
    console.log(customChalk.error + ' ' + customChalk.errorText(err))
  } else {
    const dataArr = dataStr.split('\r\n').filter((str) => str)
    const formattedArr = dataArr.sort((x, y) => x.localeCompare(y))
    const formattedStr = formattedArr.join('\r\n')
    fs.writeFile(CSPELL_DICT_DIR, formattedStr, (err) => {
      if (err) {
        console.log(customChalk.error + ' ' + customChalk.errorText(err))
      } else {
        console.log(customChalk.success + ' ' + customChalk.successText('Successfully sorted dictionary'))
      }
    })
  }
})
