import React from 'react'
import type { MDXComponents } from 'mdx/types'
import type { ReactOnlyChildrenProps } from '@/types'

const H1 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h1 className="mb-10 text-5xl font-extrabold text-primary">{children}</h1>
)

const H2 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h2 className="my-6 text-4xl font-bold text-primary">{children}</h2>
)

const H3 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h3 className="my-4 text-2xl font-bold text-primary">{children}</h3>
)

const H4 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h4 className="my-4 text-lg font-medium text-primary">{children}</h4>
)

const H5 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h5 className="text-base font-medium text-primary">{children}</h5>
)

const H6 = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <h6 className="text-base font-normal text-primary">{children}</h6>
)

const P = ({ children }: ReactOnlyChildrenProps): JSX.Element => <div className="text-base">{children}</div>

const Code = ({ children }: ReactOnlyChildrenProps): JSX.Element => <code className="font-mono">{children}</code>

const Pre = ({ children }: ReactOnlyChildrenProps): JSX.Element => (
  <pre className="my-4 rounded-md bg-base-300 p-4">{children}</pre>
)

const BlockQuote = ({ children }: ReactOnlyChildrenProps): JSX.Element => <blockquote>{children}</blockquote>

const Hr = (): JSX.Element => <hr />

export function useMDXComponents(components: MDXComponents) {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    code: Code,
    pre: Pre,
    blockquote: BlockQuote,
    hr: Hr,
    ...components
  }
}
