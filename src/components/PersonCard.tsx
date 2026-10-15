import type { Person, Speaker } from '../types'
import { Icon } from './Icon'

interface PersonCardProps {
  person: Person | Speaker
  compact?: boolean
}

export function PersonCard({ person, compact = false }: PersonCardProps) {
  const initial = person.name.replace(/^(Prof\.\s*\(Dr\.\)|Prof\.|Dr\.|Mr\.|Mrs\.)\s*/i, '').trim().charAt(0) || person.name.charAt(0)
  const displayRole = person.role || ('category' in person ? `${person.category} speaker` : 'Committee member')

  return (
    <article className={`person-card ${compact ? 'person-card--compact' : ''}`}>
      <div className="person-card-topline"><span className="person-initial">{initial}</span><span className="person-role">{displayRole}</span></div>
      <h3>{person.name}</h3>
      <p>{person.affiliation}</p>
      {person.email && <a href={`mailto:${person.email}`} className="person-contact"><Icon name="mail" size={15} />{person.email}</a>}
      {person.phone && <a href={`tel:${person.phone.replace(/[^+\d]/g, '')}`} className="person-contact"><Icon name="phone" size={15} />{person.phone}</a>}
      {person.profileUrl && <a className="text-link" href={person.profileUrl} target="_blank" rel="noreferrer">View profile <Icon name="external" size={14} /></a>}
    </article>
  )
}
