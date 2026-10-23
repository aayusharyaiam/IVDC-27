import { conference, socials } from '../data/conference'
import { assetPath } from '../utils/assets'
import type { TabId } from '../types'
import { Icon } from './Icon'

interface FooterProps { onSelect: (tab: TabId) => void }

export function Footer({ onSelect }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-main"><div className="footer-brand"><img src={assetPath('bit-mesra-logo.png')} alt="Birla Institute of Technology Mesra" /><span className="footer-mark">IVDC<span>–2027</span></span><p>Intelligent value creation for a digital civilization.</p></div><div className="footer-nav"><div><strong>Explore</strong><button type="button" onClick={() => onSelect('about')}>About</button><button type="button" onClick={() => onSelect('tracks')}>Tracks</button><button type="button" onClick={() => onSelect('papers')}>Call for Papers</button><button type="button" onClick={() => onSelect('registration')}>Registration</button><a href={assetPath(conference.brochureAsset)} target="_blank" rel="noreferrer">View brochure <Icon name="external" size={13} /></a></div><div><strong>Connect</strong>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <Icon name="external" size={13} /></a>)}<button type="button" onClick={() => onSelect('contact')}>Contact office</button></div></div></div>
      <div className="container developer-band"><span>Website designed &amp; developed by</span><div className="developer-list"><a href="https://work.aayusharya.tech/" target="_blank" rel="noreferrer">Aayush Arya <small>BTECH/15206/24</small></a><a href="https://ashutosh9470.github.io/MyPortfolio/" target="_blank" rel="noreferrer">Ashutosh Kumar <small>BTECH/15197/24</small></a><a href="https://www.ikrish.dev/" target="_blank" rel="noreferrer">Krish Agarwal <small>BTECH/15153/24</small></a></div></div>
      <div className="container footer-bottom"><span>© 2027 {conference.fullName} · BIT Mesra, Patna Campus</span><a href={conference.instituteLink} target="_blank" rel="noreferrer">BIT Mesra, Patna <Icon name="external" size={13} /></a></div>
    </footer>
  )
}
