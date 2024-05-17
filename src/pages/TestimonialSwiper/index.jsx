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
import Cube from "../../components/Cube";

export default function TestimonialSwiper() {
  const isMobileView = useMediaQuery("(max-width:1200px)");
  return (
    <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 250px)" }}>
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
        ביקורות ממטופלים מגוגל
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
      <Grid container   sx={{ maxWidth: isMobileView ? 350 : "100%", margin: "0 auto" }}>
       {isMobileView ? <Cube />  : <Swiper
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
          
          pagination={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimonial
              name={"Diana Shvartz"}
              testimonial={
                "הגעתי לטיפול הראשון בעקבות כאבי גב חוזרים. חששתי מהדיקור וליאור היה קשוב, מרגיע ומקצועי מאד! ממליצה בחום 🙏🏾"
              }
              avatar={"D.S"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"ron dishak"}
              testimonial={
                "ליאור היה קשוב אליי וידע לדייק את הטיפול. הרגשתי את האנרגיות בגוף בימים שלאחרי הטיפול. תודה לך על מגע קסום והרגשה קסומה עוד יותר!"
              }
              avatar={"R.D"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Noam Younger"}
              testimonial={
                "הגעתי לליאור בעקבות כאבים בכתף לסדרה של טיפולים והוא ממש ממש עזר לי! מטפל בחסד בעל ידי זהב! מומלץ בחום"
              }
              avatar={"N.Y"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"omer ema"}
              testimonial={`מגיעה לטיפולים אצל ליאור אחת לחודש למעלה משנתיים! אני מאמנת כושר וסובלת מפציעות ספורט. הטיפולים אצל ליאור מסייעים לי באיזון הגוף והנפש ומפיגים עומסים ולחצים. ממליצה מכל הלב, סומכת על ליאור בעיניים עצומות ונהנית מכל רגע!`}
              avatar={"O.E"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"tedy raviv"}
              testimonial={
                "הייתי צריך טיפול דחוף בגלל צוואר תפוס, הסכים לקבל אותי באותו יום ועזר לי מאוד."
              }
              avatar={"T.R"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"limor haviv"}
              testimonial={
                "מטפל מדהים. באתי בעקבות כאבי גב והוא ממש עזר לי. מומלץ בחום"
              }
              avatar={"L.H"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Rafa"}
              testimonial={`באתי לליאור לאחר פציעה. הוא היה מאוד מקצועי בדק אותי ותשאל.
 עזר לי עם הפציעה לאחר סשן טיפולים.
                מאוד מומלץ ומקצועי.`}
              avatar={"R"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Connie Naymark"}
              testimonial={
                "ליאור היה מקסים ומקצועי, סופר אכפתי וער לצרכי המטופל. ממש נהניתי!!♥️"
              }
              avatar={"C.N"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"איתי רייכנטל"}
              testimonial={
                "כבר שנים שאני הולך למעסים וליאור הוא פשוט מדהים, משחרר מתחים, תפיסות של אחרי אימון ונותן חוויה יחודית מומלץ בחום!"
              }
              avatar={"א.ר"}
            />
          </SwiperSlide>
        </Swiper>}
      </Grid>
    </Container>
  );
}
