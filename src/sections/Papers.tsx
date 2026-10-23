import { conference, dates } from '../data/conference'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function Papers() {
  return (
    <div className="container page-content">
      <SectionHeading kicker="For authors and researchers" title="Call for papers" intro="Bring original research, grounded questions and new perspectives to the IVDC-2027 conversation." />
      <div className="paper-lead"><div><span className="section-kicker">Submission guidelines</span><h2>Make your argument clear, original and useful.</h2></div><a className="button button--gold" href={conference.paperLink} target="_blank" rel="noreferrer">Paper submission link <Icon name="external" size={16} /></a></div>
      <div className="paper-grid">
        <article className="content-card"><span className="card-number">01</span><h3>Submission format</h3><ul className="check-list"><li>Abstract of 250–300 words</li><li>Full paper of up to 5,000–6,000 words</li><li>Times New Roman and APA style</li><li>Similarity and AI-generated content below 10%</li></ul></article>
        <article className="content-card content-card--tinted"><span className="card-number">02</span><h3>Who should submit?</h3><p>Academicians, researchers, industry professionals, research scholars and students from diverse disciplines are invited to contribute original work.</p><div className="mini-callout"><strong>05 Dec 2026</strong><span>Full paper submission deadline</span></div></article>
      </div>
       <section className="publication-panel"><div className="publication-heading"><span className="section-kicker">Publication opportunities</span><h2>Selected work may travel further.</h2><p>All accepted extended abstracts will be published in the conference proceedings book with an ISBN. Selected high-quality papers will also be considered for publication subject to peer review and editorial acceptance.</p></div><ul className="publication-list"><li><span>01</span><div><strong>Global Business and Organizational Excellence</strong><small>Wiley</small></div></li><li><span>02</span><div><strong>Activities, Adaptation &amp; Aging</strong><small>Routledge</small></div></li><li><span>03</span><div><strong>International Journal of Quality and Innovation</strong><small>Inderscience</small></div></li><li><span>04</span><div><strong>ISBN-registered conference proceedings</strong><small>All accepted extended abstracts</small></div></li></ul></section>
      <div className="deadline-strip"><Icon name="calendar" size={20} /><span>Important deadlines</span>{dates.slice(0, 4).map((item) => <strong key={item.label}>{item.date}</strong>)}</div>
    </div>
  )
}
