import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import Testimonial from "../Testimonial";
import { Grid } from "@mui/material";

const defaultTestimonials = [
  {
    name: "Diana Shvartz",
    avatar: "D.S",
    testimonial: [
      "הגעתי לטיפול הראשון בעקבות כאבי גב חוזרים. חששתי מהדיקור וליאור היה קשוב, מרגיע ומקצועי מאד! ממליצה בחום 🙏🏾",
      "I came for my first treatment due to recurring back pain. I was afraid of acupuncture and Lior was attentive, calming and very professional. Highly recommended 🙏🏾",
    ],
  },
  {
    name: "ron dishak",
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
    name: "omer ema",
    avatar: "O.E",
    testimonial: [
      "מגיעה לטיפולים אצל ליאור אחת לחודש למעלה משנתיים! אני מאמנת כושר וסובלת מפציעות ספורט. הטיפולים אצל ליאור מסייעים לי באיזון הגוף והנפש ומפיגים עומסים ולחצים. ממליצה מכל הלב, סומכת על ליאור בעיניים עצומות ונהנית מכל רגע!",
      "I've been coming to Lior once a month for over two years! I'm a fitness trainer and suffer from sports injuries. Lior's treatments help balance body and mind and release stress and tension. Highly recommended — I trust Lior completely and enjoy every moment!",
    ],
  },
  {
    name: "tedy raviv",
    avatar: "T.R",
    testimonial: [
      "הייתי צריך טיפול דחוף בגלל צוואר תפוס, הסכים לקבל אותי באותו יום ועזר לי מאוד.",
      "I needed urgent treatment for a stiff neck; he agreed to see me the same day and helped me a lot.",
    ],
  },
  {
    name: "limor haviv",
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
];

const getLocalizedValue = (value, index) => {
  if (Array.isArray(value)) {
    return value[index] ?? value[0] ?? "";
  }
  return value;
};

export default function Cube({ language, res }) {
  const items =
    res?.testimonials && res.testimonials.length
      ? res.testimonials
      : defaultTestimonials;
  const langIndex = language ? 1 : 0;

  return (
    <Grid container sx={{ height: 200,marginBottom: 32 }}>
      <Swiper
        key={langIndex}
        effect={"cube"}
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        speed={4500}
        pagination={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
        style={{
          maxWidth: 280,
          height: 310,
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: -140,
          marginTop: -180,
        }}
      >
        {items.map((item, index) => {
          const name = getLocalizedValue(item.name, langIndex);
          const testimonial = getLocalizedValue(item.testimonial, langIndex);

          return (
            <SwiperSlide key={`cube-${name}-${index}`}>
              <Testimonial
                name={name}
                testimonial={testimonial}
                avatar={item.avatar}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
