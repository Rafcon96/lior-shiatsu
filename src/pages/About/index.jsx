import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderBody from '../../components/HeaderBody'
import TitleBodyImg from '../../components/TitleBodyImg'
import { useLang } from '../../context/language.context'

const res = {
    header:[": סוגי טיפולים שאני מציע","type of tretment i offer:"],
    title:["?כיצד מתבצע הטיפול","How is the treatment carried out?"],
    body:[`הטיפול יתחיל בשיחה קצרה כדי להבין טוב יותר במה להתמקד.
     לפי העקרונות הסינים והמערביים, של אורח והרגלי חיים 
    ויחד ננסה לגלות אם יש סיבה רגשית או התנהגותית שעומדת מאחורי הכאב. 
    `,
    `The treatment will begin with a short conversation
    To better understand what to focus on in treatment,
    The diagnosis is made by questioning according to the Chinese and Western principles,
    of length and habits of life,
    Like, like how much water do you drink? how is the sleep and so'
    And if there is an emotional reason behind this`
],
    body2:[` ברמה האורתופדית – נתבונן על מנחי הגוף במצב סטטי ובתנועה במרחב כדי לאתר מגבלות תנועה ולבחון אילו שרירים מקוצרים ומכווצים ואילו רפויים יותר. 
    רוב הטיפולים מתבצעים בשכיבה על מיטת הטיפולים בפוזיציות שונות בהקשבה לצורכי המטופל.
    השיאצו הוא בביגוד מלא ובמהלכו מתבצעות הנעות של מפרקים, לכן עדיף לבוא עם בגדים נוחים. 
    (כמו לחדר כושר או לשיעור פילטיס או יוגה .. נו אתם מבינים את הרעיון :)
    העיסוי מתבצע עם שמנים איכותיים, שמן שקדים, חמאת דקל וניחוחות שמנים ארומטיים ועוד.
    צנעת המטופל נשמרת וכל התהליך נשאר בדלתיים סגורות …`,
    ` and at the orthopedic level - guides the body in a static and movement perspective in space,
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
        body:[`.לאנשים המתמודדים עם בעיות בריאותיות או רגשיות 
        .המלוות בכאביפ פיזים או קשיים נפשיים 
        .לטיפול אפקט משחרר ומאזן, הוא עוזר במיקוד והפגת סטרס
        מטופלים רבים יוצאים מהטיפול בתחושה מדיטטיבית ומדווחים על לרוב על הקלה מיידית כאב.`,
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
         body:[`כאבי צוואר וגב, בעיות כתפיים ,עייפות, מגרנות, כאבי מפרקים, פגיעות וטראומות לאחר תאונה ולשפר טווחי תנועה
         . הטיפול יכול לתמוך, להקל ולרווח סימפטומים של כאבים כרוניים ומצבים רגשים כמו : C-PTSD, 
          מגרנות, בעיות בדרכי הנשימה , אנדומטריוזיס, פיברומיאלגיה, 
          קשיים ואי נוחות במערכת העיכול , אובדן/פרידה, במהלך טיפולי הקרנות ולאחר מכן, פריון והתאוששות לאחר לידה.`,
           `Neck and back pain, shoulder problems, fatigue, irritations, difficulties and discomfort in the 
           digestive system, joint pain, injuries and traumas after an accident and improve range of motion.
            The treatment can support, relieve and relieve symptoms of chronic pain and emotional conditions
             such as: PTSD-C, irritations , respiratory problems, endometriosis, fibromyalgia, loss/separation,
              during radiation treatments and then, fertility and after birth`
        ]
         ,img:"/lior2.png"}
    ]

export default function About() {
    const {language} = useLang()
  return (
    <Grid container>
        <Grid item container sx={{marginBottom:5}}>
            <HeaderBody res={res} />
        </Grid>
        <Grid item container >
        {
            content.map((item, index)=>{
                return <Grid key={index + item.title} container  sx={{marginBottom:10}}  item xs={12}><TitleBodyImg height={450} res={item}  /></Grid>
            })
        } 
        </Grid>      
    </Grid>
  )
}
