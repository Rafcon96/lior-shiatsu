import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Container } from '@mui/material'
import { getPage } from '../utils/payloadApi'
import { RenderPage } from '../components/PayloadBlocks/RenderBlocks'
import { useLang } from '../context/language.context'
import SEO from '../components/SEO'
import Loading from '../components/Loading'

// Import legacy components as fallbacks
import About from './About'
import Prices from './Prices'
import Contact from './Contact'
import TestimonialSwiper from './TestimonialSwiper'

/**
 * Page component that tries Payload first, falls back to legacy components
 * for specific routes (about, prices, contact, testimonial)
 */
const PageWithFallback = () => {
  const { slug } = useParams()
  const { language } = useLang()
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [useFallback, setUseFallback] = useState(false)

  const locale = language ? 'en' : 'he'

  // Map of slugs to legacy components
  const legacyComponents = {
    about: About,
    prices: Prices,
    contact: Contact,
    testimonial: TestimonialSwiper,
  }

  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) {
        setError('No page slug provided')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const pageData = await getPage(slug, locale)

        if (pageData) {
          // Page exists in Payload, use it
          setPage(pageData)
          setUseFallback(false)
        } else {
          // Page doesn't exist in Payload, check if we have a legacy component
          if (legacyComponents[slug]) {
            setUseFallback(true)
          } else {
            setError('Page not found')
          }
        }
      } catch (err) {
        console.error('Error fetching page:', err)
        // On error, try fallback if available
        if (legacyComponents[slug]) {
          setUseFallback(true)
        } else {
          setError('Failed to load page')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug, locale])

  if (loading) {
    return <Loading message="Loading page..." />
  }

  if (error && !useFallback) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" color="error">
          {error || 'Page not found'}
        </Typography>
      </Container>
    )
  }

  // Use legacy component if Payload page not found
  if (useFallback && legacyComponents[slug]) {
    const LegacyComponent = legacyComponents[slug]
    return <LegacyComponent />
  }

  // Render Payload page
  if (page) {
    return (
      <>
        <SEO page={page} locale={locale} />
        <RenderPage page={page} locale={locale} />
      </>
    )
  }

  return null
}

export default PageWithFallback

