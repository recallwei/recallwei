import { SITE_META } from '@/app.config'

export default function Footer(): React.JSX.Element {
  const { email, copyright } = SITE_META

  return (
    <footer className="absolute inset-x-0 bottom-0 h-fit select-none p-4 text-center">
      <a
        className="cursor-pointer text-gray-500 dark:text-white"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer prefetch"
      >
        {copyright}
      </a>
    </footer>
  )
}
