import fs from 'fs'

const generatedPath = '.env.development.local'
const envPath = '.env.production'

fs.stat(generatedPath, (error) => {
  if (error) {
    fs.stat(envPath, (error) => {
      if (error) {
        console.log('🚀[Error]: .env.production file Not Found!')
      } else {
        fs.copyFile(envPath, generatedPath, (error) => {
          if (error) {
            console.log('🚀[Error]: Something went wrong!')
          } else {
            console.log('🚀[Success]: Generate successfully!')
          }
        })
      }
    })
  } else {
    console.log('🚀[Error]: Already have a .env file, cannot generate again!')
  }
})
