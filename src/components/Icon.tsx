type IconName = 'arrow' | 'calendar' | 'chevron' | 'close' | 'external' | 'mail' | 'menu' | 'phone' | 'pin' | 'spark' | 'copy'

interface IconProps {
  name: IconName
  size?: number
  stroke?: number
}

export function Icon({ name, size = 20, stroke = 1.8 }: IconProps) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }

  switch (name) {
    case 'arrow':
      return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" /></svg>
    case 'calendar':
      return <svg {...common}><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M7 2.5v4M17 2.5v4M3 9.5h18M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01" /></svg>
    case 'chevron':
      return <svg {...common}><path d="m6 9 6 6 6-6" /></svg>
    case 'close':
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>
    case 'external':
      return <svg {...common}><path d="M14 5h5v5M19 5l-8 8" /><path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" /></svg>
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    case 'phone':
      return <svg {...common}><path d="M7 3.5h3l1.5 4-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 7 3.5Z" /></svg>
    case 'pin':
      return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
    case 'spark':
      return <svg {...common}><path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></svg>
    case 'copy':
      return <svg {...common}><rect x="8" y="8" width="11" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" /></svg>
  }
}
