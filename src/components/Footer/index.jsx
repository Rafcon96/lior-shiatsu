import { Box, Grid, Modal, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMap from '../GoogleMap';
import useMediaQuery from '@mui/material/useMediaQuery';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const location = {
    address: 'מזרחי 27 תל אביב.',
    lat: 32.058380,
    lng: 34.769620,
  }

export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isMobile = useMediaQuery('(max-width:1200px)')
    
    return (
        <Grid container justifyContent={"center"} style={{ background: 'rgba(235, 158, 52,0.7)', height:100,marginTop:8}}>
            <Grid item container style={{color:"white"}} justifyContent={"center"}>
                <Grid item>
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'white',
                        textDecoration: 'none',
                        textAlign:'center'
                        }}
                    >
                        ליצירת קשר 052-8356836
                    </Typography>
            </Grid>
            </Grid>
            <Grid item container spacing={6} justifyContent={"center"}>
                {!!isMobile &&
            <Grid item>
                
            <a href="https://api.whatsapp.com/send?phone=972528356836" >                
                    <WhatsAppIcon fontSize={"large"} style={{color:"white"}}/>
                    
                </a>
            </Grid>}
            <Grid item>
            <a href="https://www.facebook.com/lior0007" >
                <FacebookIcon fontSize={"large"} style={{color:"white"}}/>
            </a>
            </Grid>
            {/* <Grid item>
            
            <a href="mailto:lior0007@gmail.com" >
                <EmailIcon fontSize={"large"} style={{color:"white"}}/>
            </a>
                
            </Grid> */}
            <Grid item>
            <a href="tel:+972528356836">
                <PhoneIcon fontSize={"large"} style={{color:"white"}}/>
            </a>
            </Grid>
                {/* <Grid item>
                        <LocationOnIcon onClick={handleOpen} fontSize={"large"} style={{color:"white", cursor: "pointer"}}/>
                </Grid> */}
            </Grid>
                {<Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <GoogleMap location={location} zoomLevel={17} />
                    </Box>
                </Modal>}
        </Grid>
    )
}
