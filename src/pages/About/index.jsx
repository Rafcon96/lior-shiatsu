import { Grid, Typography } from '@mui/material'
import React from 'react'
import TitleBodyImg from '../../components/TitleBodyImg'

const content = [
    {   title: ["קצת עליי","About me"],
        imgPath:"/liorRound.jpg",
        borderRadius:"50%",
        body:[`ליאור שחר , מטפל שיאצו מעסה ומדקר, בוגר מכללת ברושים לרפואה משלימה. בעזרת כלים מעולם המגע אני מעניק ריפוי לגוף ולנפש: עיסוי שוודי, רקמות עמוקות,
             עיסוי רפואי לפתולוגיות נקודתיות, טריגר פוינטס, הגדלת טווח תנועה וגמישות, עיסוי אבנים חמות, טיפול בכוסות רוח
             , עיסוי נשים בהריון. ניתן להגיע לטיפול בקליניקה הביתית, במרכז תל- אביב או לקבוע טיפול בבית הלקוח. בואו להעניק לעצמכם מרגוע, התחדשות ושקט`,
            `Lior Shahar, Shiatsu massage and acupuncture therapist, graduate of the Broshim College of Complementary Medicine. With the help of tools from the world of touch, I provide healing to the body and mind: Swedish massage, deep tissues,
            Medical massage for point pathologies, trigger points, increasing range of motion and flexibility, hot stone massage, cupping therapy
            , pregnant women massage. You can come for treatment at the home clinic, in the center of Tel Aviv or schedule a treatment at the client's home. Come give yourself relaxation, rejuvenation and peace`
            ]
    }   
     ,{title: ["למי מיועד הטיפול","Who is the treatment for"],
        img:"/lior1.png",
        imgLeft:true,
        body:[`הטיפול מתאים לכל גבר ואשה בכל תקופות חייהם
            טיפול הוא הדרך המושלמת להפגת מתחים בחיי היום יום. 
            לטיפול אפקט משחרר ומאזן, הוא מדיטטיבי מרגיע ורבים יוצאים מהטיפול בתחושה בריאה ושלווה.
            המטופל  מוזמן לבוא, להירגע ולהיטען מחדש כתחזוקה מונעת ואפקטיבי
            הטיפול יכול להקל, ולפתור בעיות אקוטיות רבות`,
            `Treatment suitable for every man and woman in all periods of their lives
            Therapy is the perfect way to relieve stress in everyday life.
            The treatment has a liberating and balancing effect, it is meditative and relaxing and many leave the treatment feeling healthy and peaceful.
            The patient is invited to come, relax and recharge as preventive and effective maintenance
            The treatment can alleviate and solve many acute problems`
        ]
        },
        {title: [":הטיפול יכול להביא להקלה משמעותית ואף לריפוי מלא במצבים הבאים",
            "The treatment can bring significant relief and even complete healing in the following situations"
            ],
         body:[`כאבי צוואר וגב, בעיות כתפיים ,עייפות, מגרנות,  קשיים ואי נוחות במערכת העיכול, כאבי מפרקים,
          פגיעות וטראומות לאחר תאונה 
          ולשפר טווחי תנועה. הטיפול יכול לתמוך, להקל ולרווח סימפטומים של כאבים כרוניים ומצבים רגשים כמו :
           PTSD-C, מגרנות, בעיות בדרכי הנשימה
           , אנדומטריאוזיס פיברומיאלגיה, אובדן/פרדה, במהלך טיפולי הקרנות ולאחר מכן, פריון ולאחר לידה.`,
           `Neck and back pain, shoulder problems, fatigue, irritations, difficulties and discomfort in the 
           digestive system, joint pain, injuries and traumas after an accident and improve range of motion.
            The treatment can support, relieve and relieve symptoms of chronic pain and emotional conditions
             such as: PTSD-C, irritations , respiratory problems, endometriosis, fibromyalgia, loss/separation,
              during radiation treatments and then, fertility and after birth`
        ]
         ,img:"/lior2.png"}
    ]

export default function About() {
  return (
    <Grid container>
        {
            content.map((item, index)=>{
                return <Grid key={index + item.title} container  sx={{marginBottom:10}}  item xs={12}><TitleBodyImg height={450} res={item}  /></Grid>
            })
        }       
    </Grid>
  )
}
