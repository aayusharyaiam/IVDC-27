interface SectionHeadingProps {
  kicker: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <span className="section-kicker">{kicker}</span>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </header>
  )
}
