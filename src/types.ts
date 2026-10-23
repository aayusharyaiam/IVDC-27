export type TabId =
  | 'home'
  | 'about'
  | 'tracks'
  | 'papers'
  | 'dates'
  | 'registration'
  | 'committee'
  | 'speakers'
  | 'contact'

export interface Track {
  number: number
  title: string
  topics: string[]
}

export interface Person {
  name: string
  role?: string
  affiliation: string
  group?: string
  email?: string
  phone?: string
  profileUrl?: string
}

export interface CommitteeGroup {
  title: string
  members: Person[]
}

export interface Speaker extends Person {
  category: 'International' | 'National'
}

export interface DateItem {
  label: string
  date: string
  iso: string
  detail: string
}

export interface FeeRow {
  category: string
  earlyBird: string
  regular: string
}
