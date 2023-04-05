import fs from 'fs'
import chalk from 'chalk'

const CSPELL_DICT_DIR = './.cspell/custom-words.txt'

const danger = chalk.white.bgRed
const success = chalk.white.bgGreen

fs.readFile(CSPELL_DICT_DIR, 'utf8', (err, dataStr) => {
  if (err) {
    console.log(danger(err))
  }
  const dataArr = dataStr.split('\r\n').filter((str) => str)
  const formattedArr = dataArr.sort((x, y) => x.localeCompare(y))
  const formattedStr = formattedArr.join('\r\n')
  fs.writeFile(CSPELL_DICT_DIR, formattedStr, (err) => {
    if (err) {
      console.log(danger(err))
      return
    }
    console.log(success('Successfully sorted dictionary'))
  })
})
