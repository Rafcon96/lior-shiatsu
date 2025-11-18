import { Box, Grid, Typography, IconButton, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useState, useEffect } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneIcon from '@mui/icons-material/Phone'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLang } from '../../context/language.context'
import { getGlobal } from '../../utils/payloadApi'
import { Link as RouterLink } from 'react-router-dom'

const StyledFooter = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #8BA68B 0%, #6B8E6B 100%)',
  color: 'white',
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(8),
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
  },
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  width: 50,
  height: 50,
  [theme.breakpoints.down('sm')]: {
    width: 45,
    height: 45,
  },
}))

const ContactText = styled(Typography)(({ theme }) => ({
  fontFamily: 'inherit',
  fontWeight: 500,
  color: 'white',
  textDecoration: 'none',
  letterSpacing: '1px',
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}))

const FooterLink = styled(RouterLink)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.95rem',
  padding: theme.spacing(0.5, 1),
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textDecoration: 'underline',
  },
}))

export default function FooterPayload() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const { language } = useLang()
  const [footerNavItems, setFooterNavItems] = useState([])
  const locale = language ? 'en' : 'he'

  // Contact info (can be moved to Payload later)
  const contactInfo = {
    contact: ['ליצירת קשר 052-8356836', 'Contact: 052-8356836'],
    whatsapp: 'https://api.whatsapp.com/send?phone=972528356836',
    facebook: 'https://www.facebook.com/lior0007',
    phone: 'tel:+972528356836',
  }

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const footer = await getGlobal('footer', locale)
        if (footer && footer.navItems && footer.navItems.length > 0) {
          // Transform Payload nav items
          const transformed = footer.navItems.map((item) => {
            const link = item.link || {}
            let label = ''
            if (typeof link.label === 'object') {
              label = link.label[locale] || link.label.he || link.label.en || ''
            } else if (typeof link.label === 'string') {
              label = link.label
            }

            let url = '/'
            if (link.type === 'reference' && link.reference) {
              url =
                typeof link.reference === 'object'
                  ? `/${link.reference.slug || ''}`
                  : `/${link.reference}`
            } else if (link.type === 'custom' && link.url) {
              url = link.url
            }

            return {
              label,
              url,
              newTab: link.newTab || false,
            }
          })
          setFooterNavItems(transformed)
        }
      } catch (error) {
        console.error('Error fetching footer from Payload:', error)
        // Keep empty array, footer will still show contact info
      }
    }

    fetchFooter()
  }, [locale])

  return (
    <StyledFooter>
      <Box sx={{ width: '100%' }}>
        <Grid container direction="column" alignItems="center" dir={language ? 'ltr' : 'rtl'}>
          {/* Contact Info */}
          <Grid item>
            <ContactText>{contactInfo.contact[Number(language)]}</ContactText>
          </Grid>

          {/* Social Icons */}
          <Grid item>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              {isMobile && (
                <Grid item>
                  <a
                    href={contactInfo.whatsapp}
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledIconButton aria-label="WhatsApp">
                      <WhatsAppIcon />
                    </StyledIconButton>
                  </a>
                </Grid>
              )}

              <Grid item>
                <a
                  href={contactInfo.facebook}
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIconButton aria-label="Facebook">
                    <FacebookIcon />
                  </StyledIconButton>
                </a>
              </Grid>

              <Grid item>
                <a href={contactInfo.phone} style={{ textDecoration: 'none' }}>
                  <StyledIconButton aria-label="Phone">
                    <PhoneIcon />
                  </StyledIconButton>
                </a>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer Navigation from Payload */}
          {footerNavItems.length > 0 && (
            <Grid item sx={{ mt: 3 }}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                {footerNavItems.map((item, index) => (
                  <Grid item key={index}>
                    {item.newTab ? (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <FooterLink to={item.url}>{item.label}</FooterLink>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </StyledFooter>
  )
}

