import { useState } from 'react'
import { downloadCv } from '../utils/downloadCv'

type DownloadCvButtonProps = {
  variant?: 'sidebar' | 'inline'
  label?: string
}

export function DownloadCvButton({
  variant = 'inline',
  label = 'Download CV',
}: DownloadCvButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (loading) return
    setLoading(true)
    try {
      await downloadCv()
    } catch (error) {
      console.error('Failed to generate CV PDF:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className={`cv-btn cv-btn--${variant}`}
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
    >
      {loading ? 'Generating…' : label}
    </button>
  )
}
