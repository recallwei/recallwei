type UrlType = 'Personal' | 'Bit Ocean' | 'Custom'

interface Config {
  subDomain?: string
  domain?: string
  path?: string
  type: UrlType
}

const PERSONAL_DOMAIN = 'brucesong.xyz'
const BIT_OCEAN_DOMAIN = 'bit-ocean.studio'

export const getUrl = ({
  subDomain = '',
  domain = '',
  path = '',
  type
}: Config) => {
  const urlPrefix = 'https://'
  switch (type) {
    case 'Bit Ocean':
      return `${urlPrefix}${subDomain}.${BIT_OCEAN_DOMAIN}/${path}`
    case 'Personal':
      return `${urlPrefix}${subDomain}.${PERSONAL_DOMAIN}/${path}`
    case 'Custom':
    default:
      return `${urlPrefix}${subDomain ? `${subDomain}.` : ''}${domain}/${path}`
  }
}
