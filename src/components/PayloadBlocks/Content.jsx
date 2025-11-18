import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
}))

const ColumnBox = styled(Box)(({ theme, size }) => {
  const sizes = {
    oneThird: { flex: '0 0 33.333%', maxWidth: '33.333%' },
    half: { flex: '0 0 50%', maxWidth: '50%' },
    twoThirds: { flex: '0 0 66.666%', maxWidth: '66.666%' },
    full: { flex: '0 0 100%', maxWidth: '100%' },
  }

  return {
    ...sizes[size] || sizes.full,
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flex: '0 0 100%',
      maxWidth: '100%',
    },
  }
})

/**
 * Render Content block from Payload
 * @param {Object} block - Content block data from Payload
 * @param {string} locale - Current locale
 */
export const RenderContent = ({ block, locale = 'he' }) => {
  if (!block || !block.columns || block.columns.length === 0) return null

  return (
    <ContentContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {block.columns.map((column, index) => (
            <Grid item xs={12} key={index}>
              <ColumnBox size={column.size || 'full'}>
                {column.richText && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: column.richText,
                    }}
                  />
                )}
                {column.enableLink && column.link && (
                  <Link
                    href={column.link.url}
                    sx={{
                      display: 'inline-block',
                      mt: 2,
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {column.link.label || 'Read more'}
                  </Link>
                )}
              </ColumnBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ContentContainer>
  )
}

export default RenderContent

