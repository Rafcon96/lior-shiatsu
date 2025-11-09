import React from "react";
import { Button, Grid, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLang } from "../../context/language.context";
import { useNavigate } from "react-router-dom";

const res = {
  body:[`מטפל מוסמך בשיאצו, עיסוי שוודי ורקמות עמוקות,
  דיקור אורתופדי וסיני משולב .
  מטעם "קמפוס ברושים" באוניברסיטת תל אביב ומטעם "בית הספר למקצועות הטיפול" 
 בעברי הייתי מהנדס כימיה במחלקת הנדסה בחברת התרופות "טבע", וב-"חברת החשמל"
  במקביל סבלתי מכאבים פיזיים וכך נחשפתי לעולם התרפיה והתנועה.
  
 התאהבתי בחיבור בין המדע ללא נודע, והוקסמתי מגילוי יכולות הריפוי הקדומות שנמצאות בהיותנו יצורים חיים
 במשך השנים, התמקדתי יותר ויותר בעולם הטיפול. 
  אספתי כלים רבים מעולם הרפואה המערבי ומחוכמת המזרח העתיקה, מתחום המדע ומהתנועה
  כדי לייצר את חווית הטיפול המדויקת והיעילה ביותר.`
    ,
    `Qualified therapist in shiatsu and combined orthopedic and Chinese acupuncture
    On behalf of Borshim Campus at Tel Aviv University
     and on behalf of the School of Care Professions
     Plant engineer at a startup company, IEC,
     and in the engineering department at Tave Pharmaceuticals,
    In the course of my work, I began to suffer chronically from back and shoulder pain and recurring inflammations.
    At the same time I developed in the world of movement and therapy
     From the connection between science and the unknown, I fell in love with the touch of magic, I was fascinated
    In discovering the ability of ancient healing that is found in our being living beings,
    I left the world of engineering in favor of the therapeutic field.
    Over the years I have collected many tools to produce the best and personalized treatment experience for each patient that combines an understanding of the Western and Eastern worlds of medicine`
  ],
  actionButtons:[
    {buttonTitle:[`על הטיפול`,`About Treatment`],path:'/about'},
    {buttonTitle:[`מחירון`,`Pricing`],path:'/prices'},
  ],
  title: ['ליאור שחר', 'LIOR SHAHR'],
  subtitle:  ['ליאור שחר', 'Lior Shahar'],
}

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 90px)',
  background: 'linear-gradient(135deg, rgba(233, 241, 239, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(247, 246, 243, 0.95) 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL}/home-background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: theme.spacing(3, 0),
  },
}));

const ContentCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px var(--shadow)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(106, 166, 166, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px var(--shadow)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    borderRadius: '16px',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 12px 40px var(--shadow)',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(106, 166, 166, 0.12) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '& img': {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '0 8px 24px var(--shadow)',
    border: '4px solid rgba(255, 255, 255, 0.9)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05) rotate(5deg)',
    },
    [theme.breakpoints.down('md')]: {
      width: '120px',
      height: '120px',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'var(--primary)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: '9999px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 12px var(--shadow)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'var(--primary-dark)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px var(--shadow)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 3),
    fontSize: '14px',
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  color: 'var(--primary)',
  fontFamily: "'Playfair Display', serif",
  fontWeight: 500,
  marginBottom: theme.spacing(3),
  fontSize: '1.2rem',
  fontStyle: 'italic',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

function Home() {
  const {language} = useLang()
  const navigate = useNavigate()
  const onBtnClick = (path) => {navigate(path)}

  return (
    <HeroSection>
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: { xs: 'auto', md: 'calc(100vh - 200px)' } }}>
          {/* Left Column - Content */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: language ? 1 : 1 }}>
            <ContentCard>
              <LogoContainer>
                <img 
                  src={`${process.env.PUBLIC_URL}/liorLogo2.png`} 
                  alt={language ? 'Lior logo' : 'ליאור לוגו'} 
                />
              </LogoContainer>
              
              <TitleTypography
                variant="h3"
                align={language ? 'left' : 'right'}
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  textAlign: language ? 'left' : 'right',
                }}
              >
                {res.title[Number(language)]}
              </TitleTypography>

              <SubtitleTypography
                variant="h5"
                align={language ? 'left' : 'right'}
                sx={{
                  textAlign: language ? 'left' : 'right',
                }}
              >
                {res.subtitle[Number(language)]}
              </SubtitleTypography>

              <Typography
                variant="body1"
                align={language ? 'left' : 'right'}
                sx={{
                  whiteSpace: "pre-line",
                  wordSpacing: "0.2rem",
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  mb: 4,
                  textAlign: language ? 'left' : 'right',
                }}
              >
                {res.body[Number(language)]}
              </Typography>

              <Grid container spacing={2} justifyContent={language ? 'flex-start' : 'flex-end'}>
                {res.actionButtons.map((btn, index) => (
                  <Grid item key={index}>
                    <StyledButton 
                      onClick={() => onBtnClick(btn.path)} 
                      size="large"
                    >
                      {btn.buttonTitle[Number(language)]}
                    </StyledButton>
                  </Grid>
                ))}
              </Grid>
            </ContentCard>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: language ? 2 : 2 }}>
            <ImageContainer>
              <img 
                src={`${process.env.PUBLIC_URL}/liorHome.jpeg`} 
                alt={language ? "Lior Shahar - Massage and Wellness Therapist" : "ליאור שחר - מטפל בעיסוי ובריאות"} 
              />
            </ImageContainer>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </HeroSection>
  );
}

export default Home;
