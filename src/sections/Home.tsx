import { conference } from '../data/conference'
import { Icon } from '../components/Icon'
import type { TabId } from '../types'

interface HomeProps { onSelect: (tab: TabId) => void }

export function Home({ onSelect }: HomeProps) {
  return (
    <div className="home-content">
      <section className="container home-intro section-block">
        <div className="home-intro-copy">
          <span className="section-kicker">A forum for intelligent value creation</span>
          <h2>Where better ideas become <em>better futures.</em></h2>
          <p>{conference.organizer} is proud to convene researchers, policymakers, industry leaders and students for an interdisciplinary conversation on the forces reshaping business and society.</p>
          <button className="text-link text-link--button" type="button" onClick={() => onSelect('about')}>Discover the conference <Icon name="arrow" size={16} /></button>
        </div>
        <div className="home-intro-note">
          <span className="note-number">01</span>
          <p>A shared space for research exchange, policy dialogue and practical ideas that can shape business and society.</p>
        </div>
      </section>

      <section className="container section-block home-focus">
        <div className="section-heading section-heading--center"><span className="section-kicker">At a glance</span><h2>One conference. <em>Many perspectives.</em></h2><p>Come with a question, leave with a wider view of what intelligent value creation can mean.</p></div>
        <div className="focus-grid">
          <article className="focus-card focus-card--gold"><span className="focus-index">01</span><div className="focus-icon">◎</div><h3>Who can participate?</h3><p>Academicians, researchers, industry professionals, research scholars and students from diverse disciplines.</p><button type="button" onClick={() => onSelect('about')}>Explore the context <Icon name="arrow" size={15} /></button></article>
          <article className="focus-card focus-card--dark"><span className="focus-index">02</span><div className="focus-icon">✦</div><h3>Best paper awards</h3><p>A Best Paper Award will recognise exceptional contribution in each of the nine conference tracks.</p><button type="button" onClick={() => onSelect('papers')}>Read submission details <Icon name="arrow" size={15} /></button></article>
          <article className="focus-card focus-card--light"><span className="focus-index">03</span><div className="focus-icon">↗</div><h3>Call for papers</h3><p>Share original research on AI, finance, governance, transformation and the human side of digital society.</p><a className="focus-card-action" href={conference.paperLink} target="_blank" rel="noreferrer">Open submission form <Icon name="external" size={15} /></a></article>
        </div>
      </section>

      <section className="container section-block home-bottom-grid">
        <div className="quote-panel"><span className="section-kicker">The invitation</span><blockquote>“Intelligent systems are meaningful only when they create value for people, institutions and the planet.”</blockquote><div className="quote-rule" /></div>
        <div className="quick-panel"><span className="section-kicker">Plan your participation</span><h3>Keep the key dates close.</h3><div className="quick-date"><strong>22–23</strong><span><small>January</small>2027 · BIT Mesra, Patna</span></div><button className="button button--ink" type="button" onClick={() => onSelect('dates')}>See important dates <Icon name="arrow" size={16} /></button></div>
      </section>
    </div>
  )
}
