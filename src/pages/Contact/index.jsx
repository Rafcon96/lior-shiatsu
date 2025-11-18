import { Grid, Typography, Box, Paper, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import { useLang } from '../../context/language.context';

const content = {
  title: ['צור קשר', 'Contact Us'],
  subtitle: [
    'נשמח לשמוע מכם ולענות על כל שאלה.',
    'We would love to hear from you and answer any questions.',
  ],
  contactInfo: ['פרטי יצירת קשר', 'Contact Information'],
  emailLabel: ['אימייל', 'Email'],
  phoneLabel: ['טלפון', 'Phone'],
  whatsappLabel: ['ווטסאפ', 'WhatsApp'],
  locationLabel: ['מיקום', 'Location'],
  openInMaps: ['פתח ב-Google Maps', 'Open in Google Maps'],
};

const cards = [
  {
    icon: <WhatsAppIcon />,
    href: 'https://api.whatsapp.com/send?phone=972528356836',
    color: '#25D366',
    labelKey: 'whatsappLabel',
    value: '052-8356836',
    external: true,
  },
  {
    icon: <PhoneIcon />,
    href: 'tel:+972528356836',
    color: '#8BA68B',
    labelKey: 'phoneLabel',
    value: '052-8356836',
    external: false,
  },
];

export default function Contact() {
  const { language } = useLang();
  const localeIndex = Number(language);
  const isEnglish = Boolean(language);

  return (
    <Grid container justifyContent="center" minHeight="100vh" sx={{ width: '100%' }}>
      <Grid
        container
        sx={{
          width: '100%',
          maxWidth: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: { xs: 4, md: 6 },
        }}
        rowSpacing={3}
      >
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: 'Amatic SC',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#2f5232',
                mb: 2,
              }}
            >
              {content.title[localeIndex]}
            </Typography>
            <Typography
              align="center"
              sx={{
                color: '#4a5b47',
                fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                fontWeight: 500,
                letterSpacing: isEnglish ? '0.02em' : 0,
              }}
            >
              {content.subtitle[localeIndex]}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%' }}>
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                background: 'linear-gradient(165deg, #f8f9f8 0%, #ffffff 100%)',
                boxShadow: '0 8px 24px -12px rgba(31, 64, 38, 0.3)',
                border: '1px solid rgba(64, 112, 77, 0.1)',
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontFamily: 'Amatic SC',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                  color: '#2f5232',
                  mb: 3,
                }}
              >
                {content.contactInfo[localeIndex]}
              </Typography>

              <Grid container spacing={3} justifyContent="center">
                {cards.map((card, index) => (
                  <Grid key={card.labelKey} item xs={12} sm={6} md={3}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <IconButton
                        href={card.href}
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        sx={{
                          backgroundColor: card.color,
                          color: 'white',
                          width: 60,
                          height: 60,
                          mb: 1.5,
                          '&:hover': {
                            backgroundColor: card.color,
                            transform: 'translateY(-3px)',
                            filter: 'brightness(0.9)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {card.icon}
                      </IconButton>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5b47',
                          fontWeight: 500,
                          mb: 0.5,
                        }}
                      >
                        {content[card.labelKey][localeIndex]}
                      </Typography>
                      <Link
                        href={card.href}
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        sx={{
                          color: card.color,
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {card.value}
                      </Link>
                    </Box>
                  </Grid>
                ))}

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <IconButton
                      href="https://maps.app.goo.gl/aWKT6pwAnnw4jZ4q7"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#8BA68B',
                        color: 'white',
                        width: 60,
                        height: 60,
                        mb: 1.5,
                        '&:hover': {
                          backgroundColor: '#6B8E6B',
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LocationOnIcon />
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#4a5b47',
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {content.locationLabel[localeIndex]}
                    </Typography>
                    <Link
                      href="https://maps.app.goo.gl/aWKT6pwAnnw4jZ4q7"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#8BA68B',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {content.openInMaps[localeIndex]}
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <IconButton
                      href="mailto:lior0007@gmail.com"
                      sx={{
                        backgroundColor: '#8BA68B',
                        color: 'white',
                        width: 60,
                        height: 60,
                        mb: 1.5,
                        '&:hover': {
                          backgroundColor: '#8BA68B',
                          transform: 'translateY(-3px)',
                          filter: 'brightness(0.9)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <EmailIcon />
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#4a5b47',
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {content.emailLabel[localeIndex]}
                    </Typography>
                    <Link
                      href="mailto:lior0007@gmail.com"
                      sx={{
                        color: '#8BA68B',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      lior0007@gmail.com
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
