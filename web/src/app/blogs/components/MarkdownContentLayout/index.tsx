export default function MarkdownContentLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="markdown-body box-border max-w-full p-4 md:min-w-[200px] md:max-w-4xl md:py-8">{children}</div>
}
