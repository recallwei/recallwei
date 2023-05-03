import { SITE_META } from '@/configs'
import { navigateTo } from '@/utils'

export default function Motto(): JSX.Element {
  const { motto } = SITE_META

  const handleClick = () => navigateTo(motto.link, 'outer')

  return (
    <blockquote>
      <p>{motto.text}</p>
      <p
        className="hover:text-primary cursor-pointer text-right transition-all active:opacity-90"
        onClick={() => handleClick()}
      >
        {motto.fromText}
      </p>
    </blockquote>
  )
}
