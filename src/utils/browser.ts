export const copyText = async (text: string) => navigator.clipboard.writeText(text)

export const test = () => {
  console.log(1)
}

export const navigateTo = (href: string, type: 'inner' | 'outer' = 'inner') => {
  if (!href) {
    return
  }
  if (type === 'inner') {
    window.location.href = href
  } else if (type === 'outer') {
    const w: Window | null = window.open('about:blank')
    if (w) {
      w.opener = null
      w.location.href = href
    }
  }
}
