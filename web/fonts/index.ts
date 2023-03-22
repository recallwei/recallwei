import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'

export const defaultSans = Noto_Sans({
  variable: '--font-default-sans',
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const defaultMono = Noto_Sans_Mono({
  variable: '--font-default-mono',
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
