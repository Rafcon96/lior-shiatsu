import { Box, Grid, Modal, Typography, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleMap from '../GoogleMap';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLang } from '../../context/language.context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid rgba(139, 166, 139, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    p: 4,
};

const baseLocation = {
    address: ['מגן דוד 36, הרצליה', '36 Magen David St, Herzliya'],
    lat: 32.166576,
    lng: 34.831905,
}

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
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const isMobile = useMediaQuery('(max-width:1200px)')
    const { language } = useLang()
    const localeIndex = Number(language);
    const res = {
        contact: ['ליצירת קשר 052-8356836', 'Contact: +972 52-835-6836'],
        viewMap: ['מפת הגעה', 'View Map'],
        mapTitle: ['מיקום הקליניקה', 'Clinic Location'],
    }
    const localizedLocation = React.useMemo(() => ({
        lat: baseLocation.lat,
        lng: baseLocation.lng,
        address: baseLocation.address[localeIndex],
    }), [localeIndex]);
    
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

                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={handleOpen}
                            sx={{
                                mt: 1,
                                borderColor: 'rgba(255, 255, 255, 0.6)',
                                color: 'white',
                                px: 3,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            {res.viewMap[localeIndex]}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <GoogleMap
                        location={localizedLocation}
                        zoomLevel={17}
                        heading={res.mapTitle[localeIndex]}
                        locale={language ? 'en' : 'he'}
                    />
                </Box>
            </Modal>
        </StyledFooter>
    )
}
