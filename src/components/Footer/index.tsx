import React from 'react'
import { siteMetaData } from '@/constants'

export default function Footer(): JSX.Element {
  const { email, copyright } = siteMetaData

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <footer className="absolute bottom-0 left-0 right-0 h-fit select-none p-4 text-center">
      <div
        className="cursor-pointer text-sm text-gray-500"
        onClick={() => copyEmailAddress()}
      >
        {copyright}
      </div>
    </footer>
  )
}
