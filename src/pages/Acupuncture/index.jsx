import { Box, Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useLang } from '../../context/language.context'
import AnimatedReveal from '../../components/AnimatedReveal'
import { useNavigate } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const res = {
    title: ['דיקור', 'Acupuncture'],
    imgAlt: ['דיקור img', 'Acupuncture image'],
    intro: [
        `למה אנחנו דוקרים, ואיך זה עובד ?
ישנן המון השערות ומחקרים רבים שנעשו ונעשים כל הזמן, אך התעלומה טרם נפתרה.
ההסבר המדעי כיום מציע שהמחט גורמת לגירוי רפלקסים של מערכת העצבים ולשחרור אנדורפינים ויוצרת זרימת דם טובה יותר באזור הנדקר. מה שמפחית את מדדי הדלקת ואת הפעילות החשמלית הספונטנית.`,

        `Why do we needle, and how does it work?
There are many hypotheses and ongoing studies, yet the mystery is not fully solved.
The current scientific view suggests the needle stimulates nervous system reflexes,
promotes endorphin release and improves local blood flow, which reduces inflammatory
markers and spontaneous electrical activity.`,
    ],
    evidence: [
        `מבדיקה וסקירה עדכנית, נמצא כי הדיקור הראה השפעה ברמה בינונית עד גבוהה ב:
הקלה על כאבי צוואר וכתפיים, הקלה בכאב מיופשיאלי, הקלה בכאב הקשור לפיברומיאלגיה,
הקלה בכאבי גב תחתון לא ספציפיים, שיפור בתקשורת התפקודית של חולים עם אפזיה לאחר שבץ,
עלייה בשיעור הצלחת הנקה תוך 24 שעות מהלידה, הפחתה בחומרת תסמיני דמנציה וסקולרית,
ושיפור תסמיני נזלת אלרגית באף.
מתוך: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,`,
        `A recent review found acupuncture shows moderate-to-high level effects for:
relieving neck and shoulder pain, myofascial pain, pain related to fibromyalgia,
non-specific low back pain, improving functional communication in post-stroke aphasia,
increasing successful breastfeeding within 24 hours of birth, reducing severity of
vascular dementia symptoms, and improving symptoms of allergic rhinitis.
Source: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,`,
    ],
    linkText: ['לינק למאמר המלא', 'Link to the full article'],
    qna: [
        `האם זה כואב?
בחלק מהטיפולים מורגשת דקירה קטנה וחולפת, ובמקרים רבים הדיקור אינו מורגש כלל.
מה עובי המחט?
המחט דקה מאוד, המחטים בעובי שונה בהתאם לאזור הנדקר. הדקות בעובי 0.15 מ"מ והעבות כ-0.4 מ"מ.
לפי התיאוריה הסינית, הצ'י היא אנרגיית החיים. האנרגיה זורמת בערוצים קבועים לאורך הגוף הנקראים מרידיאנים.
לדיקור במרידיאנים יכולת לפתוח חסימות בזרימת הצ'י, וזו המשמעות של דיקור סיני.
הטיפול בדיקור סיני קשור קשר הדוק ליין וליאנג – ניגודים משלימים של חם/קר, תנועה/מנוחה, עודף/חוסר.
האיזון ביניהם מרכזי לשמירת הבריאות והרווחה, ובאמצעות הדיקור ניתן לשפר את הזרימה והאיזון.`,
        `Does it hurt?
Sometimes the insertion is not felt at all, and sometimes it can be painful.
How thick is the needle?
Needles are very thin and vary by area: finer needles are about 0.15 mm and thicker ones about 0.4 mm.
According to Chinese theory, Qi is the life energy flowing through fixed channels called meridians.
Acupuncture along the meridians can open blockages in Qi flow — this is the essence of Chinese acupuncture.
Acupuncture relates closely to Yin and Yang — complementary opposites such as warm/cold, active/rest, excess/deficiency.
Balancing them is central to health and wellbeing; acupuncture can help improve flow and balance.`,
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
  fontFamily: "'Playfair Display', serif",
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

const StyledLink = styled('a')(({ theme }) => ({
  color: '#4f46e5',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
  transition: 'all 0.2s ease',
  display: 'inline-block',
  marginTop: theme.spacing(1),
  '&:hover': {
    color: '#4338ca',
    textDecoration: 'underline',
    transform: 'translateY(-1px)',
  },
}))

export default function Acupuncture({height = 350}) {
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
                <StyledTypography align={language ? 'left' : 'right'}>
                  {res.intro[localeIndex]}
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
                  src={process.env.PUBLIC_URL + "/dickor1.jpg"} 
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

      {/* Evidence Section */}
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
                  {res.evidence[localeIndex]}
                </StyledTypography>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <StyledLink href='https://www.bmj.com/content/376/bmj-2021-067475'>
                    {res.linkText[localeIndex]}
                  </StyledLink>
                </Box>
              </StyledContentBox>
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {/* Q&A Section */}
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
                  {res.qna[localeIndex]}
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
