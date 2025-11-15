import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import LanguageBtn from '../LanguageBtn'
import { useLang } from '../../context/language.context';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: ['בית', 'Home'], link: '/' },
  { name: ['על הטיפול', 'About'], link: '/about' },
  { name: ['מחירון', 'Prices'], link: '/prices' },
  { name: ['ביקורות מטופלים', 'Testimonials'], link: '/testimonial' },
  { name: ['צור קשר', 'Contact'], link: '/contact' },
]

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 248, 245, 0.98) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  borderBottom: '1px solid rgba(139, 166, 139, 0.1)',
  transition: 'all 0.3s ease',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  [theme.breakpoints.down('md')]: {
    height: 70,
  },
}));

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  color: active ? '#8BA68B' : '#5A7A5A',
  fontSize: '16px',
  fontWeight: active ? 600 : 500,
  textDecoration: 'none',
  padding: '8px 20px',
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
}));

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
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {language} = useLang();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <StyledAppBar position="sticky" sx={{ width: "100%" }}>
      <Toolbar
        sx={{
          minHeight: { xs: 70, md: 90 },
          px: { xs: 2, md: 4 },
          width: '100%',
          display: 'flex',
        }}
      >
        {/* Container with 3 equal sections */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'space-between', md: 'space-between' },
            alignItems: 'center',
            paddingRight: language ? 5 : 0,
            paddingLeft: language ? 0 : 5,
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Section 1: Mobile Menu Icon (Left for English, Right for Hebrew) */}
          <Box
            sx={{
              flex: { xs: '1 1 33.333%', md: '0 0 auto' },
              display: 'flex',
              justifyContent: language ? 'flex-start' : 'flex-end',
              alignItems: 'center',
            }}
          >
            {/* Mobile Menu */}
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
                  '&:hover': { backgroundColor: 'rgba(139, 166, 139, 0.1)' }
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
                {pages.map((page, index) => (
                  <MenuItem 
                    key={index} 
                    onClick={handleCloseNavMenu}
                    sx={{
                      '&:hover': { backgroundColor: 'rgba(139, 166, 139, 0.1)' }
                    }}
                  >
                    <StyledLink 
                      to={page.link} 
                      active={isActive(page.link) ? 1 : 0}
                      style={{ width: '100%', textAlign: 'center' }}
                    >
                      {page.name[Number(language)]}
                    </StyledLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Desktop Menu */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: language ? "space-between" : "space-between",
                gap: 1,
                flexWrap: 'wrap',
              }} 
              dir={language ? 'ltr' : 'rtl'}
            >
              {pages.map((page, index) => (
                <StyledLink 
                  key={index} 
                  to={page.link}
                  active={isActive(page.link) ? 1 : 0}
                >
                  {page.name[Number(language)]}
                </StyledLink>
              ))}
            </Box>
          </Box>

          {/* Section 2: Logo (Center) */}
          <Box
            sx={{
              flex: { xs: '1 1 33.333%', md: '0 0 auto' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LogoContainer>
              <img 
                src={`${process.env.PUBLIC_URL}/liorLogo2.png`} 
                alt="liorLogo" 
              />
            </LogoContainer>
          </Box>

          {/* Section 3: Language Button (Right for English, Left for Hebrew) */}
          <Box
            sx={{
              flex: { xs: '1 1 33.333%', md: '0 0 auto' },
              display: 'flex',
              justifyContent:  'flex-end',
              alignItems: 'center',
            }}
          >
            <LanguageBtn />
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
