import { useEffect, useState } from 'react'
import { conference, dates } from '../data/conference'
import { Icon } from './Icon'
import { upcomingDateIndex } from '../utils/conferenceDates'

interface TickerItem {
  label: string
  text: string
  href: string
  external?: boolean
}

export function AnnouncementTicker() {
  const [nextDateIndex, setNextDateIndex] = useState(() => upcomingDateIndex())
  const nextDate = dates[Math.min(nextDateIndex, dates.length - 1)]

  useEffect(() => {
    const timer = window.setInterval(() => setNextDateIndex(upcomingDateIndex()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const items: TickerItem[] = [
    { label: 'Call for Papers', text: 'Submit your research through the official paper submission form', href: conference.paperLink, external: true },
    { label: 'Next deadline', text: `${nextDate.label} · ${nextDate.date}`, href: '#dates' },
    { label: 'Conference', text: '22nd–23rd January 2027 · BIT Mesra, Patna Campus', href: '#dates' },
    { label: 'Best Paper Award', text: 'One award will be presented in each conference track', href: '#papers' },
  ]

  return (
    <section className="announcement-ticker" aria-label="Conference announcements">
      <div className="container ticker-inner">
        <span className="ticker-label"><span className="ticker-live-dot" />Live updates</span>
        <div className="ticker-window">
          <div className="ticker-track">
            {[...items, ...items].map((item, index) => {
              const duplicate = index >= items.length
              return <a key={`${item.label}-${index}`} className="ticker-item" href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} aria-hidden={duplicate} tabIndex={duplicate ? -1 : undefined}><strong>{item.label}</strong><span>{item.text}</span><Icon name={item.external ? 'external' : 'arrow'} size={14} /></a>
            })}
          </div>
        </div>
        <div className="ticker-controls" aria-hidden="true"><span /><span /><span /></div>
      </div>
    </section>
  )
}
