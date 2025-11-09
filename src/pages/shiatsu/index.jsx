import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

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
}

export default function Shiatsu({height = 400}) {
    const {language} = useLang()

  return (
    <Grid container spacing={2}sx={{px:5}} dir={language ? 'ltr' : 'rtl'}>
        <Grid item xs={12} md={6} spacing={2}>
            <Grid item container justifyContent={'center'}>
                { <img src={process.env.PUBLIC_URL + "/lior1.png"} alt={res.imgAlt[Number(language)]} style={{height,width:"80%",borderRadius:'5px'}} /> }
            </Grid>
        </Grid>
        <Grid item container xs={12} md={6}>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h4"
                    align={'center'}
                    alignContent={'center'}
                    sx={{
                    m: 1,
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize:'clamp(1.9rem, 4.5vw, 4rem)'
                    }}
                >
                    {res.title[Number(language)]}
                </Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h6"
                    align={'center'}
                    sx={{
                        whiteSpace:"pre-line",
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw,1.75rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.intro1[Number(language)]}
                </Typography>
            </Grid>
            </Grid>
            <Grid container>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h6"
                    align={'center'}
                    sx={{
                        whiteSpace:"pre-line",
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw, 1.75rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.intro2[Number(language)]}
                </Typography>
            </Grid>
            <Grid/>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h6"
                    align={'center'}
                    sx={{
                        whiteSpace:"pre-line",
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw, 1.75rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.howItWorks[Number(language)]}
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
