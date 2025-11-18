import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Container } from '@mui/material'
import { getPage } from '../utils/payloadApi'
import { RenderPage } from '../components/PayloadBlocks/RenderBlocks'
import { useLang } from '../context/language.context'
import SEO from '../components/SEO'
import Loading from '../components/Loading'

/**
 * Dynamic page component that fetches and renders pages from Payload
 */
const Page = () => {
  const { slug } = useParams()
  const { language } = useLang()
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const locale = language ? 'en' : 'he'

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
        
        if (!pageData) {
          setError('Page not found')
        } else {
          setPage(pageData)
        }
      } catch (err) {
        console.error('Error fetching page:', err)
        setError('Failed to load page')
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug, locale])

  if (loading) {
    return <Loading message="Loading page..." />
  }

  if (error || !page) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" color="error">
          {error || 'Page not found'}
        </Typography>
      </Container>
    )
  }

  return (
    <>
      <SEO page={page} locale={locale} />
      <RenderPage page={page} locale={locale} />
    </>
  )
}

export default Page

