import { useState } from 'react'
import { conference, contacts, socials } from '../data/conference'
import { faculty } from '../data/people'
import { Accordion } from '../components/Accordion'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  const [facultyOpen, setFacultyOpen] = useState(false)
  return (
    <div className="container page-content">
      <SectionHeading kicker="Reach the organisers" title="Contact" intro="Questions about submissions, registration or the programme? The conference team is ready to help." />
      <div className="contact-grid"><section className="contact-card contact-card--primary"><span className="section-kicker">Conference office</span><h2>Let's make the next step simple.</h2><p>For conference details and department information, visit the BIT Patna website or write to one of the coordinators below.</p><a className="button button--gold" href={conference.instituteLink} target="_blank" rel="noreferrer">Visit BIT Patna <Icon name="external" size={16} /></a><div className="social-row">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <Icon name="external" size={13} /></a>)}</div></section><section className="contact-people">{contacts.map((contact) => <article className="contact-person" key={contact.name}><span className="contact-person-index">0{contacts.indexOf(contact) + 1}</span><div><span>{contact.role}</span><h3>{contact.name}</h3><small>{contact.affiliation}</small><div className="contact-links"><a href={`mailto:${contact.email}`}><Icon name="mail" size={14} />{contact.email}</a><a href={`tel:${contact.phone?.replace(/[^+\d]/g, '')}`}><Icon name="phone" size={14} />{contact.phone}</a></div></div></article>)}</section></div>
      <section className="address-strip"><Icon name="pin" size={20} /><div><span className="section-kicker">Department address</span><p>{conference.address}</p></div><a href="https://maps.google.com/?q=BIT+Mesra+Patna+Campus" target="_blank" rel="noreferrer">Open map <Icon name="external" size={14} /></a></section>
      <div className="faculty-directory"><button type="button" className="faculty-directory-trigger" onClick={() => setFacultyOpen(!facultyOpen)} aria-expanded={facultyOpen}><span><span className="section-kicker">Department directory</span><strong>Management faculty contacts</strong></span><span>{facultyOpen ? 'Hide' : 'View'} faculty <Icon name="chevron" size={17} /></span></button>{facultyOpen && <div className="faculty-directory-grid">{faculty.map((member) => <article key={member.name}><h3>{member.name}</h3><span>{member.designation}</span><p>{member.interests}</p><a href={`mailto:${member.email}`}><Icon name="mail" size={14} />{member.email}</a></article>)}</div>}</div>
    </div>
  )
}
