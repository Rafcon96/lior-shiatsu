import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEO component for Payload pages
 * @param {Object} page - Page data from Payload
 * @param {string} locale - Current locale
 */
export const SEO = ({ page, locale = 'he' }) => {
  if (!page) return null

  const meta = page.meta || {}
  const title = meta.title || page.title || 'Lior Shahar'
  const description = meta.description || ''
  const image = meta.image
    ? (typeof meta.image === 'object' ? meta.image.url : meta.image)
    : ''

  const baseUrl = process.env.REACT_APP_PAYLOAD_API_URL
    ? process.env.REACT_APP_PAYLOAD_API_URL.replace('/api', '')
    : 'http://localhost:3000'

  const pageUrl = `${baseUrl}/${page.slug || ''}`

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Language */}
      <html lang={locale} />
    </Helmet>
  )
}

export default SEO

