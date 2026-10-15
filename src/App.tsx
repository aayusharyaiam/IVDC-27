import { useCallback, useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header, tabs } from './components/Header'
import { Hero } from './components/Hero'
import { AnnouncementTicker } from './components/AnnouncementTicker'
import { Preloader } from './components/Preloader'
import { About } from './sections/About'
import { Committee } from './sections/Committee'
import { Contact } from './sections/Contact'
import { Home } from './sections/Home'
import { ImportantDates } from './sections/ImportantDates'
import { Papers } from './sections/Papers'
import { Registration } from './sections/Registration'
import { Speakers } from './sections/Speakers'
import { Tracks } from './sections/Tracks'
import { conference } from './data/conference'
import type { TabId } from './types'

const tabIds = new Set<TabId>(tabs.map((tab) => tab.id))

function hashTab(): TabId {
  const candidate = window.location.hash.replace('#', '') as TabId
  return tabIds.has(candidate) ? candidate : 'home'
}

const pageTitles: Record<TabId, string> = {
  home: 'Home',
  about: 'About the Conference',
  tracks: 'Conference Tracks',
  papers: 'Call for Papers',
  dates: 'Important Dates',
  registration: 'Registration',
  committee: 'Committee',
  speakers: 'Speakers',
  contact: 'Contact',
}

function ActiveSection({ activeTab, onSelect }: { activeTab: TabId; onSelect: (tab: TabId) => void }) {
  switch (activeTab) {
    case 'about': return <About />
    case 'tracks': return <Tracks />
    case 'papers': return <Papers />
    case 'dates': return <ImportantDates />
    case 'registration': return <Registration />
    case 'committee': return <Committee />
    case 'speakers': return <Speakers />
    case 'contact': return <Contact />
    case 'home':
    default:
      return <><Hero onSelect={onSelect} /><AnnouncementTicker /><Home onSelect={onSelect} /></>
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(hashTab)
  const [menuOpen, setMenuOpen] = useState(false)

  const selectTab = useCallback((tab: TabId) => {
    setActiveTab(tab)
    setMenuOpen(false)
    window.history.pushState({}, '', `#${tab}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])

  useEffect(() => {
    const syncFromUrl = () => {
      setActiveTab(hashTab())
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', syncFromUrl)
    window.addEventListener('hashchange', syncFromUrl)
    return () => {
      window.removeEventListener('popstate', syncFromUrl)
      window.removeEventListener('hashchange', syncFromUrl)
    }
  }, [])

  useEffect(() => {
    document.title = `${conference.shortName} | ${pageTitles[activeTab]}`
  }, [activeTab])

  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="app-shell">
        <Header activeTab={activeTab} menuOpen={menuOpen} onSelect={selectTab} onMenuToggle={toggleMenu} />
        <main id="main-content" tabIndex={-1} className={`main-content main-content--${activeTab}`}>
          <div className="section-transition" key={activeTab}>
            <ActiveSection activeTab={activeTab} onSelect={selectTab} />
          </div>
        </main>
        <Footer onSelect={selectTab} />
      </div>
    </>
  )
}
