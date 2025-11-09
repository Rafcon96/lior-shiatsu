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
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#FAF8F5',
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
        }}
      >
        <Box sx={{ maxWidth: '2100px', minWidth: 'calc(100vw - 10px)', px: { xs: 2, sm: 3, md: 4 } }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
