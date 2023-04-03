import { Inconsolata, Roboto_Mono } from 'next/font/google'

export const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  display: 'swap',
  subsets: ['latin'],
})

export const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap',
  subsets: ['latin']
})
