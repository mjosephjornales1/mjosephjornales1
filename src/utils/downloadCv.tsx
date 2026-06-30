import { profile } from '../data/profile'

export async function downloadCv(): Promise<void> {
  const [{ pdf }, { CvDocument }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('../pdf/CvDocument'),
  ])

  const blob = await pdf(<CvDocument />).toBlob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${profile.name.replace(/\s+/g, '_')}_CV.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
