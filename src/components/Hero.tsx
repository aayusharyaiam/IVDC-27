import { conference } from '../data/conference'
import { assetPath } from '../utils/assets'
import { Icon } from './Icon'
import type { TabId } from '../types'

interface HeroProps {
  onSelect: (tab: TabId) => void
}

export function Hero({ onSelect }: HeroProps) {
  return (
    <section className="hero container-wide">
      <div className="hero-image"><img src={assetPath('bit-patna-campus.jpg')} alt="BIT Patna campus building" /></div>
      <div className="hero-overlay" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="hero-eyebrow"><span />{conference.eyebrow}</span>
          <h1>{conference.title}</h1>
          <p className="hero-theme">{conference.theme}</p>
          <div className="hero-actions"><a className="button button--gold" href={conference.paperLink} target="_blank" rel="noreferrer">Call for papers <Icon name="external" size={17} /></a><button className="button button--ghost" type="button" onClick={() => onSelect('registration')}>Registration <Icon name="arrow" size={17} /></button><a className="button button--ghost" href={assetPath(conference.brochureAsset)} target="_blank" rel="noreferrer">View brochure <Icon name="external" size={17} /></a></div>
        </div>
        <div className="hero-meta">
          <div className="hero-code"><span>IVDC</span><strong>–2027</strong></div>
          <div className="hero-meta-item"><Icon name="calendar" size={19} /><div><small>Event dates</small><strong>{conference.date}</strong></div></div>
          <div className="hero-meta-item"><Icon name="pin" size={19} /><div><small>Conference venue</small><strong>{conference.venue}</strong></div></div>
          <div className="hero-meta-item hero-meta-item--organizer"><small>Organised by</small><strong>{conference.organizer}</strong></div>
        </div>
      </div>
      <div className="hero-stamp"><span>AI</span><small>Value<br />Creation<br />&amp; Society</small></div>
    </section>
  )
}
