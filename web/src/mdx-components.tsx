import React from 'react'
import type { MDXComponents } from 'mdx/types'

const H1 = ({ children }: { children: React.ReactNode }): JSX.Element => <div>{children}</div>

const H2 = ({ children }: { children: React.ReactNode }): JSX.Element => <h2 className="text-red">{children}</h2>

const Code = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="mockup-code">
    <pre>{children}</pre>
  </div>
)

const Pre = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <pre data-prefix="3">
    <code>{children}</code>
  </pre>
)

export function useMDXComponents(components: MDXComponents) {
  return {
    h1: H1,
    h2: H2,
    code: Code,
    pre: Pre,
    ...components
  }
}
