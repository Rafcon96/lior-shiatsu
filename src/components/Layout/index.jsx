import { Box } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './style.css'
import { useLang } from '../../context/language.context'

export default function Layout({children}) {
  const { language } = useLang();

  React.useEffect(() => {
    const dir = language ? 'ltr' : 'rtl';
    if (document && document.documentElement) {
      document.documentElement.setAttribute('dir', dir);
    }
  }, [language]);

  return (
    <Box sx={{ 
      flexDirection: 'column',
      minHeight: '100vh',
      maxWidth: '100%',
      position: 'relative',
    }} dir={language ? 'ltr' : 'rtl'}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          overflowX: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
          <Box sx={{ width: '100%', maxWidth: '100%', px: { xs: 0, sm: 3, md: 4 }, mx: 'auto',pt: 8 }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
