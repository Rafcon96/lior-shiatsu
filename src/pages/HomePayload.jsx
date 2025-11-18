import React, { useState, useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { getPage } from '../utils/payloadApi'
import { RenderPage } from '../components/PayloadBlocks/RenderBlocks'
import { useLang } from '../context/language.context'

/**
 * Home page component that fetches data from Payload CMS
 * Falls back to hardcoded content if Payload is unavailable
 */
const HomePayload = () => {
  const { language } = useLang()
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const locale = language ? 'en' : 'he'

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        setLoading(true)
        // Try to fetch 'home' page, or fallback to root page
        const pageData = await getPage('home', locale) || await getPage('', locale)
        
        if (pageData) {
          setPage(pageData)
        } else {
          setError('Home page not found in Payload')
        }
      } catch (err) {
        console.error('Error fetching home page from Payload:', err)
        setError('Failed to load from Payload')
      } finally {
        setLoading(false)
      }
    }

    fetchHomePage()
  }, [locale])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error || !page) {
    // Fallback: return null to let the original Home component render
    // Or you could import and render the original Home component here
    return null
  }

  return <RenderPage page={page} locale={locale} />
}

export default HomePayload

