import localFont from 'next/font/local'

export const MicrosoftYaHei = localFont({
  variable: '--font-yahei-sans',
  src: [{ path: './MicrosoftYaHei/Microsoft-YaHei.ttf' }]
})

export const NotoSans = localFont({
  variable: '--font-noto-sans',
  src: [
    {
      path: './NotoSansSC/NotoSansSC-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './NotoSansSC/NotoSansSC-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './NotoSansSC/NotoSansSC-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './NotoSansSC/NotoSansSC-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './NotoSansSC/NotoSansSC-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './NotoSansSC/NotoSansSC-Thin.otf',
      weight: '100',
      style: 'normal'
    }
  ]
})

export const InputMono = localFont({
  variable: '--font-input-mono',
  src: [
    {
      path: './InputMono/InputMono-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic'
    },
    {
      path: './InputMono/InputMono-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './InputMono/InputMono-ThinItalic.ttf',
      weight: '100',
      style: 'italic'
    }
  ]
})
