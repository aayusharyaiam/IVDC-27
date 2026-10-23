import type { DateItem, FeeRow, Person } from '../types'

export const conference = {
  shortName: 'IVDC-2027',
  fullName: 'IVDC-2027',
  eyebrow: 'International Conference',
  title: 'Intelligent Value Creation in a Digital Civilization',
  theme: 'AI, Sustainable Finance, Governance and Human-Centric Transformation',
  venue: 'BIT Mesra, Patna Campus',
  date: '22nd – 23rd January 2027',
  organizer: 'Department of Management Studies, Birla Institute of Technology – Mesra Patna',
  paperLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd1-1EVc4Q2TAf8m-K1VrMiMboC7M3ElwR69SfYdfZ3DUvSdg/viewform?usp=publish-editor',
  registrationLink: 'https://docs.google.com/forms/d/1zHInGDA-rmIXJUHYgBd6FrhbQRj8DuWj93tYqY90QJY/edit',
  brochureAsset: 'IVDC-2027-Brochure.pdf',
  instituteLink: 'https://bitmesra.ac.in/bitpatna',
  address: 'Department of Management Studies, Birla Institute of Technology, Off Campus Patna, PO – BV College, Patna – 800014, Bihar',
}

export const dates: DateItem[] = [
  { label: 'Abstract submission', date: '05 November 2026', iso: '2026-11-05', detail: 'Share a concise 250–300 word abstract.' },
  { label: 'Acceptance notification', date: '15 November 2026', iso: '2026-11-15', detail: 'Authors will be notified about abstract decisions.' },
  { label: 'Full paper submission', date: '05 December 2026', iso: '2026-12-05', detail: 'Submit the complete paper of up to 5,000–6,000 words.' },
  { label: 'Registration deadline', date: '10 December 2026', iso: '2026-12-10', detail: 'Complete registration before the conference window.' },
  { label: 'Conference', date: '22nd – 23rd January 2027', iso: '2027-01-22', detail: 'Meet the IVDC-2027 community at BIT Mesra, Patna.' },
]

export const fees: FeeRow[] = [
  { category: 'Students', earlyBird: '₹700', regular: '₹1,000' },
  { category: 'Faculty & PhD Scholars', earlyBird: '₹3,000', regular: '₹4,000' },
  { category: 'Industry Participants', earlyBird: '₹5,000', regular: '₹6,500' },
  { category: 'International Delegates', earlyBird: '$150', regular: '$250' },
]

export const contacts: Person[] = [
  { name: 'Dr. Vijay Agarwal', role: 'Conference Convenor', affiliation: 'BIT Patna', email: 'vagarwal@bitmesra.ac.in', phone: '+91 9431382607' },
  { name: 'Dr. Ashish Mohan Dubey', role: 'Organizing Secretary', affiliation: 'BIT Patna', email: 'amdubey@bitmesra.ac.in', phone: '+91 9412005502' },
  { name: 'Dr. Monika Singh', role: 'Conference Convenor', affiliation: 'BIT Patna', email: 'drmonika@bitmesra.ac.in', phone: '+91 8765681041' },
]

export const socials = [
  { label: 'Instagram', short: 'IG', href: 'https://www.instagram.com/bitmpatna/' },
  { label: 'Facebook', short: 'FB', href: 'https://www.facebook.com/profile.php?id=61572278246230' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/company/bit-mesra/' },
]
