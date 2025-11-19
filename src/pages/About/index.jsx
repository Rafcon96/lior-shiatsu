import { Box, Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import HeaderBody from '../../components/HeaderBody'
import TitleBodyImg from '../../components/TitleBodyImg'
import { useLang } from '../../context/language.context'
import Card from '../../components/Card'
import AnimatedReveal from '../../components/AnimatedReveal'
import { useNavigate } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const res = {
    header:[" סוגי טיפולים שאני מציע:","type of tretment i offer:"],
    title:["כיצד מתבצע הטיפול?","How is the treatment carried out?"],
    cta: {
      title: ['מתלבט.ת?', 'Still Hesitating?'],
      subtitle: ['בואו נשוחח ונתאים לכם את הטיפול המושלם', 'Let\'s talk and find the perfect treatment for you'],
      button: ['צרו קשר עכשיו', 'Contact Us Now'],
    },
    body:[`הטיפול יתחיל בשיחה קצרה כדי להבין טוב יותר במה להתמקד.
     לפי העקרונות הסינים והמערביים, של אורח והרגלי חיים 
    ויחד ננסה לגלות אם יש סיבה רגשית או התנהגותית שעומדת מאחורי הכאב. 
    `,
    `The treatment will begin with a short conversation
    To better understand what to focus on in treatment,
    The diagnosis is made by questioning according to the Chinese and Western principles,
    of length and habits of life,
    like how much water do you drink? how is the sleep and so on
    And if there is an emotional reason behind this`
],
    body2:[` ברמה האורתופדית – נתבונן על מנחי הגוף במצב סטטי ובתנועה במרחב כדי לאתר מגבלות תנועה ולבחון אילו שרירים מקוצרים ומכווצים ואילו רפויים יותר. 
    רוב הטיפולים מתבצעים בשכיבה על מיטת הטיפולים בפוזיציות שונות בהקשבה לצורכי המטופל.
    השיאצו הוא בביגוד מלא ובמהלכו מתבצעות הנעות של מפרקים, לכן עדיף לבוא עם בגדים נוחים. 
    (כמו לחדר כושר או לשיעור פילטיס או יוגה .. נו אתם מבינים את הרעיון :)
    העיסוי מתבצע עם שמנים איכותיים, שמן שקדים, חמאת דקל וניחוחות שמנים ארומטיים ועוד.
   `,
    ` At the orthopedic level - guides the body in a static and movement perspective in space,
    Which muscles are shortened and contracted and which are more relaxed.
    And after we talked we can start
    Shiatsu is fully clothed and comfortable, so it is important to come with comfortable clothes,
    The patient lies on a treatment bed calmly,
    And as a therapist I use the palms, toes and joints
    Listening to the patient's needs.
    Sometimes as part of the treatment I will instruct the patient to do exercises at home, and together we will try to change habits.`
]
}

const content = [ 
    {title: ["למי מיועד הטיפול","Who is the treatment for"],
       img:"/lior1.png",
       imgLeft:true,
       body:[`אנשים המתמודדים עם בעיות בריאותיות או רגשיות המלוות בכאבים פיזים או קשיים נפשיים לטיפול אפקט משחרר ומאזן, הוא עוזר במיקוד והפגת סטרס.
       מטופלים רבים יוצאים מהטיפול בתחושה מדיטטיבית ומדווחים על לרוב על הקלה מיידית כאב.`,
           `Treatment suitable for every man and woman in all periods of their lives
           Therapy is the perfect way to relieve stress in everyday life.
           The treatment has a liberating and balancing effect, it is meditative and relaxing and many leave the treatment feeling healthy and peaceful.
           The patient is invited to come, relax and recharge as preventive and effective maintenance
           The treatment can alleviate and solve many acute problems`
       ]
       },
       {title: ["טיפול יכול להביא להקלה משמעותית ואף לריפוי במצבים הבאים:",
           "The treatment can bring significant relief and healing in the following situations"
           ],
        body:[`כאבי צוואר וגב, בעיות כתפיים ,עייפות, מגרנות, כאבי מפרקים, פגיעות וטראומות לאחר תאונה ולשפר טווחי תנועה.
        הטיפול יכול לתמוך, להקל ולרווח סימפטומים של כאבים כרוניים ומצבים רגשים כמו : C-PTSD,   מגרנות, 
         קשיים ואי נוחות במערכת העיכול , אובדן/פרידה, במהלך טיפולי הקרנות ולאחר מכן, פריון והתאוששות לאחר לידה.`,
          `Neck and back pain, shoulder problems, fatigue, irritations, difficulties and discomfort in the 
          digestive system, joint pain, injuries and traumas after an accident and improve range of motion.
           The treatment can support, relieve and relieve symptoms of chronic pain and emotional conditions
            such as: PTSD-C, irritations , respiratory problems, endometriosis, fibromyalgia, loss/separation,
             during radiation treatments and then, fertility and after birth`
       ]
        ,img:"/lior2.png"}
   ]

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

export default function About() {
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
      }}
    >
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
        }}
      >
        <WaveDivider position="top" color="#e0f2fe" opacity={0.5} />
        <WaveDivider position="bottom" color="#e0f2fe" opacity={0.35} />
        <AnimatedReveal>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'}>
            <Grid
              item
              container
              justifyContent={'center'}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.75)',
                borderRadius: 6,
                boxShadow: '0 30px 80px rgba(15, 23, 42, 0.1)',
                backdropFilter: 'blur(6px)',
                p: { xs: 3, md: 6 },
                maxWidth: 960,
              }}
            >
              <HeaderBody res={res} />
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {content.map((item, index) => {
        const palette = sectionStyles[index % sectionStyles.length]
        return (
          <Box
            component="section"
            key={index + item.title}
            sx={{
              position: 'relative',
              py: { xs: 8, md: 12 },
              px: { xs: 2, md: 6 },
              background: palette.background,
              overflow: 'hidden',
            }}
          >
            <WaveDivider position="top" color={palette.waveColor} opacity={0.35} />
            <WaveDivider position="bottom" color={palette.waveColor} opacity={0.25} />
            <AnimatedReveal delay={index * 100}>
              <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'}>
                <Grid
                  item
                  xs={12}
                  md={10}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderRadius: 5,
                    boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
                    p: { xs: 3, md: 5 },
                  }}
                >
                  <TitleBodyImg height={450} res={item} />
                </Grid>
              </Grid>
            </AnimatedReveal>
          </Box>
        )
      })}

      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: 'linear-gradient(180deg, rgba(165,180,252,0.18) 0%, rgba(255,255,255,0) 100%)',
        }}
      >
        <WaveDivider position="top" color="#c7d2fe" opacity={0.4} />
        <WaveDivider position="bottom" color="#c7d2fe" opacity={0.3} />
        <AnimatedReveal>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'} sx={{ mb: { xs: 4, md: 6 },mt:{xs:1,md:6} }}>
            <Typography
              variant="h4"
              align={'center'}
              sx={{
                display: 'flex',
                fontFamily: 'Amatic SC',
                fontWeight: 700,
                letterSpacing: '.2rem',
                textDecoration: 'none',
                px: 3,
                py: 1,
                borderRadius: 999,
                backgroundColor: 'rgba(79,70,229,0.08)',
                color: 'rgba(30,41,59,0.9)',
                boxShadow: '0 12px 30px rgba(79, 70, 229, 0.12)',
                textAlign: language ? 'left' : 'right',
              }}
            >
              {res.header[Number(language)]}
            </Typography>
          </Grid>
        </AnimatedReveal>

        <AnimatedReveal delay={120}>
          <Grid container dir={language ? 'ltr' : 'rtl'} justifyContent={'center'} spacing={4}>
            <Grid container item lg={4} xs={12} justifyContent={'center'}>
              <Card
                imgPath={'/lior1.png'}
                title={['שיאצו', 'Shiatsu'][Number(language)]}
                linkPath={'../shiatsu'}
                body={[
                  `שיאצוּ (ביפנית: 指圧 "שי" משמעו- אצבע, ו"אצו"- לחץ) היא שיטת טיפול במגע בתחום הרפואה המשלימה. מקורה ביפן, שם היא טיפול רפואי מורשה.
יכולה לסייע בבעיות אורתופדיות בעמוד השדרה, בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, ובעיות רגשיות כמו הפרעות שינה, מתח ודיכאון.`,
                  `Shiatsu (Japanese bodywork) is used for orthopedic spine issues, internal conditions (neurology, digestion, gynecology), and emotional concerns like sleep disorders, stress, and low mood.`,
                ][Number(language)]}
              />
            </Grid>
            <Grid item lg={4} xs={12} container justifyContent={'center'}>
              <Card
                imgPath={'/dickor1.jpg'}
                title={['דיקור', 'Acupuncture'][Number(language)]}
                linkPath={'../acupuncture'}
                body={[
                  `למה אנחנו דוקרים, ואיך זה עובד?
ישנן המון השערות ומחקרים רבים; ההסבר המדעי מדבר על גירוי רפלקסים של מערכת העצבים,
שחרור אנדורפינים ושיפור זרימת הדם המקומית — מה שמפחית מדדי דלקת ופעילות חשמלית ספונטנית.`,
                  `Why acupuncture, and how does it work?
Hypotheses include reflex stimulation of the nervous system, endorphin release, and improved local blood flow — reducing inflammatory markers and spontaneous electrical activity.`,
                ][Number(language)]}
              />
            </Grid>
            <Grid item lg={4} xs={12} container justifyContent={'center'}>
              <Card
                imgPath={'/car2.jpg'}
                title={['כוסות רוח', 'Cupping therapy'][Number(language)]}
                linkPath={'../cuppingTherapy'}
                body={[
                  `איך זה עובד?
במהלך הטיפול יוצרים תת-לחץ בחלל הכוס ומשאירים אותה למספר דקות; הוואקום מושך את העור פנימה ומגביר זרימת דם, לעיתים מסייע לשחרור השריר ולהקלה מידית בכאב.`,
                  `How does it work?
Negative pressure is created inside the cup for a few minutes; the vacuum draws tissue up, increases blood flow, can help muscle release, and often provides immediate pain relief.`,
                ][Number(language)]}
              />
            </Grid>
          </Grid>
        </AnimatedReveal>
      </Box>

      {/* Call to Action Section */}
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
