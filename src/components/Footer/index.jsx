import { Box, Grid, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLang } from '../../context/language.context';




const StyledFooter = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #8BA68B 0%, #6B8E6B 100%)',
  color: 'white',
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(8),
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
  },
}));

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
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontFamily: 'inherit',
  fontWeight: 500,
  color: 'white',
  textDecoration: 'none',
  letterSpacing: '1px',
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

export default function Footer() {

    const isMobile = useMediaQuery('(max-width:1200px)')
    const { language } = useLang()
    const res = {
        contact: ['ליצירת קשר 052-8356836', 'Contact: 052-8356836'],
    }

    
    return (
        <StyledFooter>
            <Box sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
                <Grid container direction="column" alignItems="center" spacing={3} dir={language ? 'ltr' : 'rtl'}>
                    <Grid item>
                        <ContactText>
                            {res.contact[Number(language)]}
                        </ContactText>
                    </Grid>
                    
                    <Grid item>
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            {isMobile && (
                                <Grid item>
                                    <a 
                                        href="https://api.whatsapp.com/send?phone=972528356836"
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
                                    href="https://www.facebook.com/lior0007"
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
                                <a 
                                    href="tel:+972528356836"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <StyledIconButton aria-label="Phone">
                                        <PhoneIcon />
                                    </StyledIconButton>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>

            
                </Grid>
            </Box>
            
    
        </StyledFooter>
    )
}
