import { Box, Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useLang } from '../../context/language.context'
import AnimatedReveal from '../../components/AnimatedReveal'
import { useNavigate } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const res = {
    title: ['שיאצו', 'Shiatsu'],
    imgAlt: ['תמונת שיאצו', 'Shiatsu image'],
    intro1: [
        `שיאצוּ (ביפנית: 指圧 — "שי" משמעו אצבע, "אצו" — לחץ) היא שיטת טיפול במגע מרפואה משלימה שמקורה ביפן, שם היא טיפול רפואי מורשה.
יכולה לסייע בבעיות אורתופדיות בעמוד השדרה, בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, ובעיות רגשיות כמו הפרעות שינה, מתח ודיכאון.`,
        `Shiatsu (Japanese: 指圧 — "finger pressure") is a Japanese bodywork modality rooted in Traditional Chinese Medicine concepts.
It is used for orthopedic issues of the spine, internal conditions (neurology, digestion, gynecology), and emotional concerns like sleep disorders, stress, and low mood.`,
    ],
    intro2: [
        `ישנן שתי אסכולות שיאצו: אחת המבוססת על אנטומיה ופיזיולוגיה מערבית, והשניה על רפואה סינית מסורתית (TCM).
התפיסה המרכזית: בגוף קיימים מרידיאנים — ערוצי אנרגיה — המשפיעים ומושפעים מן האיברים הפנימיים. חוסר איזון (עודף/חסר) יוצר "חסימה" במרידיאן וגורם לתסמינים כגון כאב, לחץ או רפיון.`,
        `Two main approaches exist: one grounded in Western anatomy/physiology, the other in Traditional Chinese Medicine (TCM).
Core view: energy channels called meridians affect and are affected by internal organs. Imbalances (excess/deficiency) can block flow and manifest as pain, tension, or weakness.`,
    ],
    howItWorks: [
        `איך מתבצע הטיפול?
השיאצו מבוסס על הפעלת לחץ מדויק בנקודות לאורך המרידיאנים לאיזון אנרגיה ושיקום תחושה ובריאות כללית.
הטיפול מתבצע בביגוד נוח; אני משתמש באגודלים, מרפקים ואמות להנעת המרידיאנים ולמתיחת שרירים.
התחושה אמורה להיות מדויקת ונעימה; לעיתים ייתכן כאב קל אך נמנעים מכאב מכווץ.`,
        `How is the treatment performed?
Shiatsu applies precise pressure along meridians to balance energy and improve overall wellbeing.
Treatment is done in comfortable clothing; I use thumbs, elbows, and forearms to mobilize meridians and stretch muscles.
The pressure should feel accurate and pleasant; mild discomfort can occur but we avoid tightening pain.`,
    ],
    cta: {
      title: ['מתלבט.ת?', 'Still Hesitating?'],
      subtitle: ['בואו נשוחח ונתאים לכם את הטיפול המושלם', 'Let\'s talk and find the perfect treatment for you'],
      button: ['צרו קשר עכשיו', 'Contact Us Now'],
    },
}

const sectionStyles = [
  {
    background: 'linear-gradient(180deg, rgba(219,234,254,0.45) 0%, rgba(255,255,255,0) 100%)',
    waveColor: '#dbeafe',
  },
  {
    background: 'linear-gradient(180deg, rgba(252,231,243,0.6) 0%, rgba(255,255,255,0) 100%)',
    waveColor: '#fbcfe8',
  },
  {
    background: 'linear-gradient(180deg, rgba(209,250,229,0.45) 0%, rgba(255,255,255,0) 100%)',
    waveColor: '#bbf7d0',
  },
]

const WaveDivider = ({ position = 'top', color = '#dbeafe', opacity = 0.8 }) => (
  <Box
    component="svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    sx={{
      position: 'absolute',
      [position]: 0,
      left: 0,
      width: '100%',
      height: { xs: 60, md: 120 },
      transform: position === 'top' ? 'rotate(180deg)' : 'none',
      color,
      opacity,
      pointerEvents: 'none',
    }}
  >
    <path
      fill="currentColor"
      d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,154.7C672,139,768,117,864,117.3C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  </Box>
)

const CTASection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(139, 166, 139, 0.1) 0%, rgba(106, 142, 107, 0.15) 100%)',
  borderRadius: '24px',
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  border: '2px solid rgba(139, 166, 139, 0.2)',
  boxShadow: '0 8px 32px rgba(31, 64, 38, 0.1)',
  transition: 'all 0.3s ease',
  maxWidth: '900px',
  mx: 'auto',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(31, 64, 38, 0.15)',
    borderColor: 'rgba(139, 166, 139, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 2),
    borderRadius: '16px',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}))

const CTATitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Amatic SC', cursive",
  fontWeight: 700,
  color: '#2f5232',
  marginBottom: theme.spacing(1),
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
}))

const CTASubtitle = styled(Typography)(({ theme }) => ({
  color: '#4a5b47',
  marginBottom: theme.spacing(3),
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  fontWeight: 400,
}))

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #8BA68B 0%, #6B8E6B 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 5),
  borderRadius: '9999px',
  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 6px 20px rgba(139, 166, 139, 0.3)',
  transition: 'all 0.3s ease',
  gap: theme.spacing(1),
  '&:hover': {
    background: 'linear-gradient(135deg, #6B8E6B 0%, #5A7A5A 100%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 24px rgba(139, 166, 139, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.2, 4),
    fontSize: '0.95rem',
  },
}))

const StyledContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.92)',
  borderRadius: 5,
  boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 30px 70px rgba(15, 23, 42, 0.15)',
  },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily:   "'Playfair Display', serif",
  fontWeight: 400,
  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
  lineHeight: 1.8,
  color: 'rgba(30, 41, 59, 0.9)',
  whiteSpace: 'pre-line',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Amatic SC', cursive",
  fontWeight: 700,
  letterSpacing: '.2rem',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  color: 'rgba(30, 41, 59, 0.95)',
  textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}))

export default function Shiatsu({height = 400}) {
    const {language} = useLang()
    const navigate = useNavigate()
    const localeIndex = Number(language)

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#f8fbff',
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
      }}
    >
      {/* Intro Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: sectionStyles[0].background,
        }}
      >
        <WaveDivider position="top" color={sectionStyles[0].waveColor} opacity={0.5} />
        <WaveDivider position="bottom" color={sectionStyles[0].waveColor} opacity={0.35} />
        <AnimatedReveal>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'} spacing={4}>
            <Grid item xs={12} md={6} container alignItems={'center'}>
              <StyledContentBox sx={{ width: '100%', p: { xs: 3, md: 5 } }}>
                <StyledTitle align={'center'}>
                  {res.title[localeIndex]}
                </StyledTitle>
                <StyledTypography >
                  {res.intro1[localeIndex]}
                </StyledTypography>
              </StyledContentBox>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent={'center'} alignItems={'center'}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 25px 70px rgba(15, 23, 42, 0.2)',
                  },
                }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/lior1.png"} 
                  alt={res.imgAlt[localeIndex]} 
                  style={{
                    height,
                    width: "100%",
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {/* Intro 2 Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: sectionStyles[1].background,
        }}
      >
        <WaveDivider position="top" color={sectionStyles[1].waveColor} opacity={0.35} />
        <WaveDivider position="bottom" color={sectionStyles[1].waveColor} opacity={0.25} />
        <AnimatedReveal delay={100}>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'}>
            <Grid item xs={12} md={10}>
              <StyledContentBox sx={{ p: { xs: 3, md: 5 } }}>
                <StyledTypography >
                  {res.intro2[localeIndex]}
                </StyledTypography>
              </StyledContentBox>
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {/* How It Works Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: sectionStyles[2].background,
        }}
      >
        <WaveDivider position="top" color={sectionStyles[2].waveColor} opacity={0.35} />
        <WaveDivider position="bottom" color={sectionStyles[2].waveColor} opacity={0.25} />
        <AnimatedReveal delay={200}>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'}>
            <Grid item xs={12} md={10}>
              <StyledContentBox sx={{ p: { xs: 3, md: 5 } }}>
                <StyledTypography >
                  {res.howItWorks[localeIndex]}
                </StyledTypography>
              </StyledContentBox>
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 6 },
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(139, 166, 139, 0.05) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatedReveal>
          <CTASection>
            <CTATitle>
              {res.cta.title[localeIndex]}
            </CTATitle>
            <CTASubtitle>
              {res.cta.subtitle[localeIndex]}
            </CTASubtitle>
            <CTAButton
              variant="contained"
              size="large"
              startIcon={<ContactMailIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                mx: 'auto',
              }}
            >
              {res.cta.button[localeIndex]}
            </CTAButton>
          </CTASection>
        </AnimatedReveal>
      </Box>
    </Box>
  )
}
