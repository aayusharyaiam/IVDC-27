import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 700)
    const removeTimer = window.setTimeout(() => setVisible(false), 1250)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`preloader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading IVDC-2027">
      <div className="preloader-mark"><Icon name="spark" size={30} stroke={1.4} /></div>
      <strong>IVDC<span>–2027</span></strong>
      <small>International Conference</small>
      <div className="preloader-line"><span /></div>
    </div>
  )
}
