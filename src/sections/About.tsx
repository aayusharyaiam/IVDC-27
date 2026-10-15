import { conference } from '../data/conference'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <div className="container page-content">
      <SectionHeading kicker="The conference" title="About IVDC-27" intro="A cross-disciplinary platform for research, policy dialogue and responsible innovation." />
      <div className="about-layout">
        <article className="prose-card prose-card--accent">
          <span className="quote-mark">“</span>
          <p>The Department of Management Studies, BIT Mesra, Patna Campus, is proud to organise an International Conference that brings together global academicians, industry leaders, policymakers and researchers to deliberate on the transformative role of Artificial Intelligence, Sustainable Finance, Governance Systems and Digital Transformation in shaping the future of business and society.</p>
        </article>
        <div className="about-side-note"><span className="section-kicker">Conference theme</span><h2>{conference.title}</h2><p>{conference.theme}</p></div>
      </div>
      <div className="prose-columns">
        <p>In an era of rapid digital evolution, organisations are transitioning from traditional value creation models to intelligent, data-driven and sustainable ecosystems. IVDC-2027 aims to foster interdisciplinary dialogue and collaborative research addressing challenges in financial inclusion, ESG integration, governance frameworks and human-centric AI systems.</p>
        <p>Through keynotes, research presentations and cross-sector conversations, participants can compare approaches, test assumptions and build collaborations around the future of management.</p>
      </div>
      <div className="about-pill-row"><span><strong>01</strong> Research exchange</span><span><strong>02</strong> Policy conversations</span><span><strong>03</strong> Industry collaboration</span><span><strong>04</strong> Human-centred transformation</span></div>
    </div>
  )
}
