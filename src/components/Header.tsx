import { useEffect, useRef, useState } from 'react'
import type { TabId } from '../types'
import { conference, socials } from '../data/conference'
import { assetPath } from '../utils/assets'
import { Icon } from './Icon'

export const tabs: { id: TabId; label: string; shortLabel?: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tracks', label: 'Tracks' },
  { id: 'papers', label: 'Call for Papers', shortLabel: 'Papers' },
  { id: 'dates', label: 'Important Dates', shortLabel: 'Dates' },
  { id: 'registration', label: 'Registration' },
  { id: 'committee', label: 'Committee' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'contact', label: 'Contact' },
]

interface HeaderProps {
  activeTab: TabId
  menuOpen: boolean
  onSelect: (tab: TabId) => void
  onMenuToggle: () => void
}

export function Header({ activeTab, menuOpen, onSelect, onMenuToggle }: HeaderProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const hasMounted = useRef(false)
  const [drawerMounted, setDrawerMounted] = useState(menuOpen)

  useEffect(() => {
    if (menuOpen) {
      setDrawerMounted(true)
      return
    }
    const timer = window.setTimeout(() => setDrawerMounted(false), 340)
    return () => window.clearTimeout(timer)
  }, [menuOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) onMenuToggle()
      if (event.key === 'Tab' && menuOpen) {
        const drawer = document.getElementById('mobile-navigation')
        const focusable = drawer?.querySelectorAll<HTMLElement>('button, a[href]')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('menu-open', menuOpen)
    if (hasMounted.current) {
      if (menuOpen) closeButtonRef.current?.focus()
      else hamburgerRef.current?.focus()
    }
    hasMounted.current = true
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen, onMenuToggle])

  const handleSelect = (tab: TabId) => onSelect(tab)

  return (
    <>
      <div className={`mobile-menu-backdrop ${menuOpen ? 'is-visible' : ''}`} onClick={onMenuToggle} aria-hidden="true" />
      <aside id="mobile-navigation" className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`} hidden={!drawerMounted} inert={!menuOpen} aria-hidden={!menuOpen} aria-label="Mobile navigation">
        <div className="drawer-head">
          <div><span className="drawer-eyebrow">IVDC–2027</span><strong>Conference menu</strong></div>
          <button ref={closeButtonRef} className="icon-button drawer-close" type="button" onClick={onMenuToggle} aria-label="Close menu"><Icon name="close" size={22} /></button>
        </div>
        <nav className="drawer-nav">
          {tabs.map((tab, index) => (
            <button key={tab.id} className={activeTab === tab.id ? 'is-active' : ''} type="button" onClick={() => handleSelect(tab.id)}>
              <span className="drawer-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{tab.label}</span>
              <Icon name="arrow" size={17} />
            </button>
          ))}
        </nav>
        <div className="drawer-socials">
          <span>Follow the department</span>
          <div>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>{social.short}</a>)}</div>
        </div>
      </aside>

      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <span>Department of Management Studies · BIT Mesra, Patna</span>
            <div className="utility-links">
              <span>22–23 January 2027</span>
              {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>{social.short}</a>)}
            </div>
          </div>
        </div>
        <div className="brand-row container">
          <button ref={hamburgerRef} className={`hamburger ${menuOpen ? 'is-active' : ''}`} type="button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            <span /><span /><span />
          </button>
          <button className="brand-lockup" type="button" onClick={() => handleSelect('home')} aria-label="Go to IVDC–2027 home">
            <img src={assetPath('bit-mesra-logo.png')} alt="Birla Institute of Technology Mesra" />
            <span><strong>IVDC<span>–2027</span></strong><small>Management Studies · Patna</small></span>
          </button>
          <div className="brand-event"><span>International Conference</span><strong>22nd–23rd January 2027</strong></div>
          <button className="header-submit" type="button" onClick={() => handleSelect('papers')}>Submit paper <Icon name="arrow" size={16} /></button>
        </div>
        <div className="tab-strip-wrap">
          <nav className="tab-strip container" aria-label="Conference sections">
            {tabs.map((tab) => (
              <button key={tab.id} className={activeTab === tab.id ? 'is-active' : ''} type="button" onClick={() => handleSelect(tab.id)} aria-current={activeTab === tab.id ? 'page' : undefined}>
                <span className="tab-full-label">{tab.label}</span><span className="tab-short-label">{tab.shortLabel || tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
