import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const CTASection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(139, 166, 139, 0.1) 0%, rgba(106, 142, 107, 0.15) 100%)',
  borderRadius: '24px',
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(6),
  textAlign: 'center',
  border: '2px solid rgba(139, 166, 139, 0.2)',
  boxShadow: '0 8px 32px rgba(31, 64, 38, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(31, 64, 38, 0.15)',
    borderColor: 'rgba(139, 166, 139, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 2),
    borderRadius: '16px',
    marginTop: theme.spacing(4),
  },
}))

const CTATitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Amatic SC', cursive",
  fontWeight: 700,
  color: '#2f5232',
  marginBottom: theme.spacing(1),
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
}))

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #8BA68B 0%, #6B8E6B 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 5),
  borderRadius: '9999px',
  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 6px 20px rgba(139, 166, 139, 0.3)',
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(2),
  '&:hover': {
    background: 'linear-gradient(135deg, #6B8E6B 0%, #5A7A5A 100%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 24px rgba(139, 166, 139, 0.4)',
  },
}))

/**
 * Render CallToAction block from Payload
 * @param {Object} block - CTA block data from Payload
 * @param {string} locale - Current locale
 */
export const RenderCallToAction = ({ block, locale = 'he' }) => {
  if (!block) return null

  return (
    <Container maxWidth="lg">
      <CTASection>
        {block.richText && (
          <div
            dangerouslySetInnerHTML={{
              __html: block.richText,
            }}
            style={{ marginBottom: '1rem' }}
          />
        )}
        
        {block.links && block.links.length > 0 && (
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {block.links.map((link, index) => (
              <CTAButton
                key={index}
                href={link.url}
                variant={link.appearance === 'outline' ? 'outlined' : 'contained'}
                startIcon={index === 0 ? <ContactMailIcon /> : null}
              >
                {link.label}
              </CTAButton>
            ))}
          </Box>
        )}
      </CTASection>
    </Container>
  )
}

export default RenderCallToAction

