import { useEffect, useState } from 'react'
import { dates } from '../data/conference'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { upcomingDateIndex } from '../utils/conferenceDates'

export function ImportantDates() {
  const [nextIndex, setNextIndex] = useState(() => upcomingDateIndex())

  useEffect(() => {
    const timer = window.setInterval(() => setNextIndex(upcomingDateIndex()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="container page-content">
      <SectionHeading kicker="Mark your calendar" title="Important dates" intro="A simple timeline from your first abstract to the two-day conference at BIT Mesra, Patna." />
      <div className="date-timeline">
        {dates.map((item, index) => {
          const complete = nextIndex === dates.length || index < nextIndex
          const current = index === nextIndex
          return <article className={`date-card ${index === dates.length - 1 ? 'date-card--final' : ''} ${complete ? 'date-card--complete' : ''} ${current ? 'date-card--current' : ''}`} key={item.label}><div className="date-card-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="date-card-copy"><span>{item.label} · {complete ? 'Complete' : current ? 'Next up' : 'Upcoming'}</span><h2>{item.date}</h2><p>{item.detail}</p></div><Icon name="arrow" size={20} /></article>
        })}
      </div>
    </div>
  )
}
