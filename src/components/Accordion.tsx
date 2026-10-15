import { useState } from 'react'
import type { ReactNode } from 'react'
import { Icon } from './Icon'

interface AccordionProps {
  title: string
  number?: string
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, number, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`accordion ${open ? 'is-open' : ''}`}>
      <button className="accordion-trigger" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="accordion-label">
          {number && <span className="accordion-number">{number}</span>}
          <span>{title}</span>
        </span>
        <span className="accordion-icon"><Icon name="chevron" size={18} /></span>
      </button>
      <div className="accordion-content" aria-hidden={!open}>
        <div className="accordion-content-inner">{children}</div>
      </div>
    </div>
  )
}
