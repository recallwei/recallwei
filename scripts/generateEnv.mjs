import fs from 'fs'
import { customChalk } from './chalk.mjs'

const GENERATED_PATH = '.env.development.local'
const ENV_PATH = '.env'

fs.stat(GENERATED_PATH, (error) => {
  if (error) {
    fs.stat(ENV_PATH, (error) => {
      if (error) {
        console.log(customChalk.error + ' ' + customChalk.errorText('.env file Not Found!'))
      } else {
        fs.copyFile(ENV_PATH, GENERATED_PATH, (error) => {
          if (error) {
            console.log(customChalk.error + ' ' + customChalk.errorText('Something went wrong!'))
          } else {
            console.log(customChalk.success + ' ' + customChalk.successText('Generate successfully!'))
          }
        })
      }
    })
  } else {
    console.log(customChalk.error + ' ' + customChalk.errorText('Already have a .env file, cannot generate again!'))
  }
})
