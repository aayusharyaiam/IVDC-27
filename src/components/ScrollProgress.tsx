import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      frame = 0
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="scroll-progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
