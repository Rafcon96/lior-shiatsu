import * as React from 'react'
import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import LanguageBtn from '../LanguageBtn'
import { useLang } from '../../context/language.context'
import { Link, useLocation } from 'react-router-dom'
import { Grid } from '@mui/material'
import { getGlobal } from '../../utils/payloadApi'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 248, 245, 0.98) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  borderBottom: '1px solid rgba(139, 166, 139, 0.1)',
  transition: 'all 0.3s ease',
  top: 0,
  zIndex: 1100,
  [theme.breakpoints.down('md')]: {
    height: 70,
  },
}))

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  color: active ? '#8BA68B' : '#5A7A5A',
  fontSize: '16px',
  fontWeight: active ? 600 : 500,
  textDecoration: 'none',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    color: '#8BA68B',
    backgroundColor: 'rgba(139, 166, 139, 0.1)',
    transform: 'translateY(-2px)',
  },
  ...(active && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '2px',
      backgroundColor: '#8BA68B',
      borderRadius: '2px',
    },
  }),
}))

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    maxWidth: 70,
    height: 'auto',
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

// Fallback navigation if Payload is unavailable
const fallbackPages = [
  { name: { he: 'בית', en: 'Home' }, link: { url: '/' } },
  { name: { he: 'על הטיפול', en: 'About' }, link: { url: '/about' } },
  { name: { he: 'מחירון', en: 'Prices' }, link: { url: '/prices' } },
  { name: { he: 'ביקורות מטופלים', en: 'Testimonials' }, link: { url: '/testimonial' } },
  { name: { he: 'צור קשר', en: 'Contact' }, link: { url: '/contact' } },
]

function HeaderPayload() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const { language } = useLang()
  const location = useLocation()
  const [navItems, setNavItems] = useState(fallbackPages)
  const [loading, setLoading] = useState(true)

  const locale = language ? 'en' : 'he'

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const header = await getGlobal('header', locale)
        if (header && header.navItems && header.navItems.length > 0) {
          // Transform Payload nav items to our format
          const transformed = header.navItems.map((item) => {
            const link = item.link || {}
            // Handle localized label (could be object or string)
            let label = { he: '', en: '' }
            if (typeof link.label === 'object') {
              label = { he: link.label.he || '', en: link.label.en || '' }
            } else if (typeof link.label === 'string') {
              // If single string, use for both languages
              label = { he: link.label, en: link.label }
            }
            
            // Determine URL based on link type
            let url = '/'
            if (link.type === 'reference' && link.reference) {
              // Reference to a Payload page/post
              url = typeof link.reference === 'object' 
                ? `/${link.reference.slug || ''}`
                : `/${link.reference}`
            } else if (link.type === 'custom' && link.url) {
              // Custom URL
              url = link.url
            }
            
            return {
              name: label,
              link: {
                url: url,
                type: link.type || 'custom',
                reference: link.reference,
              },
            }
          })
          setNavItems(transformed)
        }
      } catch (error) {
        console.error('Error fetching header from Payload:', error)
        // Keep fallback navigation
      } finally {
        setLoading(false)
      }
    }

    fetchHeader()
  }, [locale])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const getLinkUrl = (item) => {
    return item.link.url || '/'
  }

  const getLinkLabel = (item) => {
    return item.name[locale] || item.name.he || item.name.en || ''
  }

  return (
    <StyledAppBar>
      <Grid container px={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flex: '1 1 33.333%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{
              color: '#5A7A5A',
              '&:hover': { backgroundColor: 'rgba(139, 166, 139, 0.1)' },
            }}
          >
            {anchorElNav ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: language ? 'right' : 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: language ? 'right' : 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(139, 166, 139, 0.1)',
                mt: 1,
              },
            }}
          >
            {navItems.map((page, index) => (
              <MenuItem
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  '&:hover': { backgroundColor: 'rgba(139, 166, 139, 0.1)' },
                }}
              >
                <StyledLink
                  to={getLinkUrl(page)}
                  active={isActive(getLinkUrl(page)) ? 1 : 0}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  {getLinkLabel(page)}
                </StyledLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flex: '1 1 33.333%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LogoContainer>
            <img
              src={`${process.env.PUBLIC_URL}/liorLogo2.png`}
              alt="liorLogo"
            />
          </LogoContainer>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <LanguageBtn />
        </Box>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        px={2}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LogoContainer>
            <img
              src={`${process.env.PUBLIC_URL}/liorLogo2.png`}
              alt="liorLogo"
            />
          </LogoContainer>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: 9,
          }}
        >
          {navItems.map((page, index) => (
            <StyledLink
              key={index}
              to={getLinkUrl(page)}
              active={isActive(getLinkUrl(page)) ? 1 : 0}
            >
              {getLinkLabel(page)}
            </StyledLink>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <LanguageBtn />
        </Box>
      </Grid>
    </StyledAppBar>
  )
}

export default HeaderPayload

