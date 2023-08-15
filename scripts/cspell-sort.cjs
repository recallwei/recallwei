const fs = require('fs')
const os = require('os')
const process = require('process')

const FILE_PATH = '.cspell/custom-words.txt'

const file = fs.readFileSync(FILE_PATH, 'utf8')

const words = file.replace(/\r/g, '').split('\n')

const sortedWords = [...new Set(words)]
  .filter((w) => w)
  .sort((a, b) => a.localeCompare(b))

const writeContent = sortedWords.join(os.EOL)

fs.writeFileSync('.cspell/custom-words.txt', writeContent)

process.stdout.write('Sort complete!')
