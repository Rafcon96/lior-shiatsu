import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { getMediaUrl } from '../../utils/payloadApi'

const HeroContainer = styled(Box)(({ theme, variant }) => {
  const variants = {
    highImpact: {
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      },
    },
    mediumImpact: {
      minHeight: '70vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
      },
    },
    lowImpact: {
      minHeight: 'auto',
      padding: theme.spacing(6, 0),
      background: 'linear-gradient(135deg, rgba(233, 241, 239, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)',
    },
  }

  return {
    ...variants[variant] || variants.lowImpact,
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  }
})

const ContentBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}))

const HeroButton = styled(Button)(({ theme }) => ({
  background: 'var(--primary)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: '9999px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  marginTop: theme.spacing(2),
  '&:hover': {
    background: 'var(--primary-dark)',
  },
}))

/**
 * Render Hero block from Payload
 * @param {Object} hero - Hero data from Payload
 * @param {string} locale - Current locale
 */
export const RenderHero = ({ hero, locale = 'he' }) => {
  if (!hero || hero.type === 'none') return null

  const heroType = hero.type || 'lowImpact'
  const backgroundImage = hero.media ? getMediaUrl(hero.media) : null

  // For carousel type, render carousel component
  if (heroType === 'carousel' && hero.slides) {
    return <HeroCarousel slides={hero.slides} locale={locale} />
  }

  // For other types, render single hero
  const style = backgroundImage && ['highImpact', 'mediumImpact'].includes(heroType)
    ? { backgroundImage: `url(${backgroundImage})` }
    : {}

  return (
    <HeroContainer variant={heroType} style={style}>
      <Container maxWidth="lg">
        <ContentBox>
          {hero.richText && (
            <div
              dangerouslySetInnerHTML={{
                __html: hero.richText,
              }}
            />
          )}
          
          {hero.links && hero.links.length > 0 && (
            <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {hero.links.map((link, index) => (
                <HeroButton
                  key={index}
                  href={link.url}
                  variant={link.appearance === 'outline' ? 'outlined' : 'contained'}
                >
                  {link.label}
                </HeroButton>
              ))}
            </Box>
          )}
        </ContentBox>
      </Container>
    </HeroContainer>
  )
}

/**
 * Render Hero Carousel
 */
const HeroCarousel = ({ slides, locale }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [slides.length])

  if (!slides || slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <HeroContainer
      variant="highImpact"
      style={{
        backgroundImage: slide.media ? `url(${getMediaUrl(slide.media)})` : undefined,
      }}
    >
      <Container maxWidth="lg">
        <ContentBox>
          {slide.heading && (
            <HeroTitle variant="h2" component="h1">
              {slide.heading}
            </HeroTitle>
          )}
          {slide.subheading && (
            <Typography variant="h5" sx={{ mb: 2 }}>
              {slide.subheading}
            </Typography>
          )}
          {slide.richText && (
            <div
              dangerouslySetInnerHTML={{
                __html: slide.richText,
              }}
            />
          )}
          {slide.links && slide.links.length > 0 && (
            <Box sx={{ mt: 3 }}>
              {slide.links.map((link, index) => (
                <HeroButton key={index} href={link.url}>
                  {link.label}
                </HeroButton>
              ))}
            </Box>
          )}
        </ContentBox>
        
        {slides.length > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </HeroContainer>
  )
}

export default RenderHero

