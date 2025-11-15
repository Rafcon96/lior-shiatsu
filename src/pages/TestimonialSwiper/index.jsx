import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Testimonial from "../../components/Testimonial";
import Container from "@mui/material/Container";
import { Typography, useMediaQuery, Grid, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLang } from "../../context/language.context";
import { useNavigate } from "react-router-dom";
import Cube from "../../components/Cube";
import ContactMailIcon from '@mui/icons-material/ContactMail';

const res = {
  heading: ["ביקורות ממטופלים מגוגל", "Reviews from Google"],
  cta: {
    title: ['מתלבט.ת?', 'Still Hesitating?'],
    subtitle: ['בואו נשוחח ונתאים לכם את הטיפול המושלם', 'Let\'s talk and find the perfect treatment for you'],
    button: ['צרו קשר עכשיו', 'Contact Us Now'],
  },
  testimonials: [
    {
      name: "Diana Shvartz",
      avatar: "D.S",
      testimonial: [
        "הגעתי לטיפול הראשון בעקבות כאבי גב חוזרים. חששתי מהדיקור וליאור היה קשוב, מרגיע ומקצועי מאד! ממליצה בחום 🙏🏾",
        "I came for my first treatment due to recurring back pain. I was afraid of acupuncture and Lior was attentive, calming and very professional. Highly recommended 🙏🏾",
      ],
    },
    {
      name: "Ron Dishak",
      avatar: "R.D",
      testimonial: [
        "ליאור היה קשוב אליי וידע לדייק את הטיפול. הרגשתי את האנרגיות בגוף בימים שלאחרי הטיפול. תודה לך על מגע קסום והרגשה קסומה עוד יותר!",
        "Lior listened to me and knew how to tailor the treatment precisely. I felt the energy in my body in the days after the session. Thank you for a magical touch and an even more magical feeling!",
      ],
    },
    {
      name: "Noam Younger",
      avatar: "N.Y",
      testimonial: [
        "הגעתי לליאור בעקבות כאבים בכתף לסדרה של טיפולים והוא ממש ממש עזר לי! מטפל בחסד בעל ידי זהב! מומלץ בחום",
        "I came to Lior because of shoulder pain for a series of treatments and he really helped me! A gifted therapist with golden hands! Highly recommended.",
      ],
    },
    {
      name: "Omer Ema",
      avatar: "O.E",
      testimonial: [
        "מגיעה לטיפולים אצל ליאור אחת לחודש למעלה משנתיים! אני מאמנת כושר וסובלת מפציעות ספורט. הטיפולים אצל ליאור מסייעים לי באיזון הגוף והנפש ומפיגים עומסים ולחצים. ממליצה מכל הלב, סומכת על ליאור בעיניים עצומות ונהנית מכל רגע!",
        "I've been coming to Lior once a month for over two years! I'm a fitness trainer and suffer from sports injuries. Lior's treatments help balance body and mind and release stress and tension. Highly recommended — I trust Lior completely and enjoy every moment!",
      ],
    },
    {
      name: "Tedy Raviv",
      avatar: "T.R",
      testimonial: [
        "הייתי צריך טיפול דחוף בגלל צוואר תפוס, הסכים לקבל אותי באותו יום ועזר לי מאוד.",
        "I needed urgent treatment for a stiff neck; he agreed to see me the same day and helped me a lot.",
      ],
    },
    {
      name: "Limor Haviv",
      avatar: "L.H",
      testimonial: [
        "מטפל מדהים. באתי בעקבות כאבי גב והוא ממש עזר לי. מומלץ בחום",
        "An amazing therapist. I came because of back pain and he really helped me. Highly recommended.",
      ],
    },
    {
      name: "Rafa",
      avatar: "R",
      testimonial: [
        "באתי לליאור לאחר פציעה. הוא היה מאוד מקצועי, בדק ותשאל. עזר לי עם הפציעה לאחר סדרת טיפולים. מאוד מומלץ ומקצועי.",
        "I came to Lior after an injury. He was very professional, examined me and asked thorough questions. He helped me recover after a series of treatments. Highly recommended and professional.",
      ],
    },
    {
      name: "Connie Naymark",
      avatar: "C.N",
      testimonial: [
        "ליאור היה מקסים ומקצועי, סופר אכפתי וער לצרכי המטופל. ממש נהניתי!!♥️",
        "Lior was lovely and professional, super caring and attentive to the patient's needs. I really enjoyed!! ♥️",
      ],
    },
    {
      name: ["איתי רייכנטל", "Itay Reichental"],
      avatar: "א.ר",
      testimonial: [
        "כבר שנים שאני הולך למעסים וליאור הוא פשוט מדהים, משחרר מתחים, תפיסות של אחרי אימון ונותן חוויה ייחודית. מומלץ בחום!",
        "I've been going to massage therapists for years and Lior is simply amazing — releases tension, post-workout tightness, and provides a unique experience. Highly recommended!",
      ],
    },
  ],
}

const CTASection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(139, 166, 139, 0.1) 0%, rgba(106, 142, 107, 0.15) 100%)',
  borderRadius: '24px',
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
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
    marginBottom: theme.spacing(3),
  },
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Amatic SC', cursive",
  fontWeight: 700,
  color: '#2f5232',
  marginBottom: theme.spacing(1),
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
  color: '#4a5b47',
  marginBottom: theme.spacing(3),
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  fontWeight: 400,
}));

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
}));

export default function TestimonialSwiper() {
  const isMobileView = useMediaQuery("(max-width:1200px)");
  const { language } = useLang();
  const navigate = useNavigate();
  const localeIndex = Number(language);
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "calc(100vh - 250px)",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 6 },
      }}
      dir={language ? "ltr" : "rtl"}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h2"
        align={"center"}
        textAlign={"center"}
        alignContent={"center"}
        justifyContent={"center"}
        sx={{
          m: 3,
          whiteSpace: "pre-line",
          wordSpacing: "0.2rem",
          lineHeight: 1.6,
          display: "flex",
          fontFamily: "Amatic SC",
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          fontSize: "clamp(1.5rem, 2vw, 2.2rem)",
        }}
      >
        {res.heading[Number(language)]}
      </Typography>
      {/* <Typography
        variant="h2"
        align={"center"}
        textAlign={"center"}
        alignContent={"center"}
        justifyContent={"center"}
        sx={{
          m: 3,
          whiteSpace: "pre-line",
          wordSpacing: "0.2rem",
          lineHeight: 1.6,
          display: "flex",
          fontFamily: "Amatic SC",
          fontWeight: 500,
          color: "black",
          textDecoration: "none",
          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
        }}
      >
        מוזמנים לבוא לטיפול או סידרת טיפולים במחיר מוזל
      </Typography> */}
      <Grid
        container
        justifyContent="center"
        sx={{
          maxWidth: isMobileView ? 350 : "100%",
          mx: "auto",
        }}
      >
        {isMobileView ? (
          <Cube language={language} res={res} />
        ) : (
          <Swiper
          // effect={"coverflow"}
          grabCursor={true}
          // centeredSlides={true}
          slidesPerView={3}
          spaceBetween={5}
          speed={4500}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   // slideShadows: true,
          // }}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
            {res.testimonials.map((item, index) => {
              const currentLanguageIndex = language ? 1 : 0;
              const name = Array.isArray(item.name)
                ? item.name[currentLanguageIndex] ?? item.name[0]
                : item.name;
              const testimonial = Array.isArray(item.testimonial)
                ? item.testimonial[currentLanguageIndex] ?? item.testimonial[0]
                : item.testimonial;

              return (
                <SwiperSlide key={`${name}-${index}`}>
                  <Testimonial
                    name={name}
                    testimonial={testimonial}
                    avatar={item.avatar}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </Grid>

      {/* Call to Action Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mt: { xs: 20, lg: 6 },
        }}
      >
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
      </Box>
      </Box>
    </Container>
  );
}
