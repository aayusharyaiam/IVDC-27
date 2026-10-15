import { conference, socials } from '../data/conference'
import { assetPath } from '../utils/assets'
import type { TabId } from '../types'
import { Icon } from './Icon'

interface FooterProps { onSelect: (tab: TabId) => void }

export function Footer({ onSelect }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-main"><div className="footer-brand"><img src={assetPath('bit-mesra-logo.png')} alt="Birla Institute of Technology Mesra" /><span className="footer-mark">IVDC<span>–27</span></span><p>Intelligent value creation for a digital civilization.</p></div><div className="footer-nav"><div><strong>Explore</strong><button type="button" onClick={() => onSelect('about')}>About</button><button type="button" onClick={() => onSelect('tracks')}>Tracks</button><button type="button" onClick={() => onSelect('papers')}>Call for Papers</button><button type="button" onClick={() => onSelect('registration')}>Registration</button></div><div><strong>Connect</strong>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <Icon name="external" size={13} /></a>)}<button type="button" onClick={() => onSelect('contact')}>Contact office</button></div></div></div>
      <div className="container developer-band"><span>Website designed &amp; developed by</span><div className="developer-list"><span>Aayush Arya <small>BTECH/15206/24</small></span><span>Ashutosh Kumar <small>BTECH/15197/24</small></span><span>Krish Agarwal <small>BTECH/15XXX/24</small></span></div></div>
      <div className="container footer-bottom"><span>© 2027 {conference.fullName} · BIT Mesra, Patna Campus</span><a href={conference.instituteLink} target="_blank" rel="noreferrer">BIT Mesra, Patna <Icon name="external" size={13} /></a></div>
    </footer>
  )
}
