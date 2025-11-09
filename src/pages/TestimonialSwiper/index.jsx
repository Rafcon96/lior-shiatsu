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
import { Typography, useMediaQuery, Grid, Box } from "@mui/material";
import { useLang } from "../../context/language.context";
import Cube from "../../components/Cube";

const res = {
  heading: ["ביקורות ממטופלים מגוגל", "Reviews from Google"],
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

export default function TestimonialSwiper() {
  const isMobileView = useMediaQuery("(max-width:1200px)");
  const { language } = useLang();
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
      </Box>
    </Container>
  );
}
