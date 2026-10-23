import { useState } from 'react'
import { internationalSpeakers, nationalSpeakers } from '../data/people'
import { Icon } from '../components/Icon'
import { PersonCard } from '../components/PersonCard'
import { SectionHeading } from '../components/SectionHeading'

export function Speakers() {
  const [nationalOpen, setNationalOpen] = useState(false)
  return (
    <div className="container page-content">
      <SectionHeading kicker="Guests and prominent speakers" title="Speakers" intro="International perspectives first, followed by a national dialogue across management, economics, technology and policy." />
       <section className="speaker-section"><div className="speaker-section-head"><span className="section-kicker">International speakers</span><span className="section-count">04 voices</span></div><div className="speaker-grid">{internationalSpeakers.map((speaker) => <PersonCard key={speaker.name} person={speaker} />)}</div></section>
      <section className={`national-speaker-panel ${nationalOpen ? 'is-open' : ''}`}><button className="national-speaker-trigger" type="button" aria-expanded={nationalOpen} onClick={() => setNationalOpen(!nationalOpen)}><span><span className="section-kicker">National speakers</span><strong>Perspectives from across India</strong></span><span className="national-toggle"><span>{nationalOpen ? 'Close' : 'Open'} list</span><Icon name="chevron" size={18} /></span></button><div className="national-speaker-content"><div className="speaker-grid">{nationalSpeakers.map((speaker) => <PersonCard key={speaker.name} person={speaker} />)}</div></div></section>
    </div>
  )
}
