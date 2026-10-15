import { tracks } from '../data/tracks'
import { Accordion } from '../components/Accordion'
import { SectionHeading } from '../components/SectionHeading'

export function Tracks() {
  return (
    <div className="container page-content">
      <SectionHeading kicker="Research directions" title="Conference tracks" intro="Start with a track title. Open it to explore the questions and conversations it invites." />
      <div className="track-intro"><span className="track-total">09</span><p>Tracks are intentionally broad enough to welcome interdisciplinary work while remaining grounded in the conference theme of intelligent, sustainable and human-centric value creation.</p></div>
      <div className="accordion-stack tracks-stack">
        {tracks.map((track) => <Accordion key={track.number} number={String(track.number).padStart(2, '0')} title={track.title}><ul className="topic-list">{track.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></Accordion>)}
      </div>
    </div>
  )
}
