import { advisoryCommittee, committeeGroups, executiveBoard } from '../data/people'
import { Accordion } from '../components/Accordion'
import { PersonCard } from '../components/PersonCard'
import { SectionHeading } from '../components/SectionHeading'

export function Committee() {
  return (
    <div className="container page-content">
      <SectionHeading kicker="The people behind the programme" title="Committee" intro="Open a group to meet the people guiding IVDC–2027 from its first idea to the final conversation." />
      <div className="committee-layout"><div className="committee-rail"><span>01</span><p>Leadership<br />&amp; delivery</p><span>02</span><p>Executive<br />oversight</p><span>03</span><p>Advisory<br />voices</p></div><div className="committee-stack">{committeeGroups.map((group) => <Accordion key={group.title} title={group.title}><div className="person-grid">{group.members.map((member) => <PersonCard key={`${group.title}-${member.name}`} person={member} compact />)}</div></Accordion>)}<Accordion title="Board of Executive"><div className="person-grid">{executiveBoard.map((member) => <PersonCard key={member.name} person={member} compact />)}</div></Accordion><Accordion title="Advisory Committee"><div className="person-grid">{advisoryCommittee.map((member) => <PersonCard key={member.name} person={member} compact />)}</div></Accordion></div></div>
    </div>
  )
}
