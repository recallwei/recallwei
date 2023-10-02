import { SITE_META } from '@/app.config'
import { navigateTo } from '@/utils'

export default function Motto(): React.JSX.Element {
  const { motto } = SITE_META

  const handleClick = () => navigateTo(motto.link, 'outer')

  return (
    <blockquote>
      <p>{motto.text}</p>
      <p
        className="cursor-pointer text-right transition-all hover:text-primary active:opacity-90"
        onClick={handleClick}
      >
        {motto.fromText}
      </p>
    </blockquote>
  )
}
