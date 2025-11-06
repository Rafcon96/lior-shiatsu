import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

const res = {
    title: ['כוסות רוח', 'Cupping therapy'],
    imgAlt: ['כוסות רוח img', 'Cupping therapy image'],
    intro: [
        `כוסות רוח הן שיטת טיפול אלטרנטיבית שהייתה נפוצה באירופה ובעולם, ונחשבת כחלק אינטגרטיבי בטיפול לפי הרפואה הסינית.
כוסות רוח עשויות מחומרים שונים: בעבר מבמבוק וזכוכית, וכיום גם מסיליקון ופוליקרבונט עם משאבה ליצירת ואקום מבוקר.
מנגנון הפעולה אינו ברור עד הסוף.`,
        `Cupping is an alternative therapy used historically across Europe and other regions, and is considered an integrative part of Traditional Chinese Medicine.
Cups have been made from bamboo and glass, and today also from silicone and polycarbonate with a pump for controlled vacuum.
The exact mechanism of action is not fully understood.`,
    ],
    howItWorks: [
        `איך זה עובד?
במהלך הטיפול יוצרים תת-לחץ בחלל הכוס ומשאירים אותה למספר דקות.
בעקבות הוואקום העור נמשך פנימה, והלחץ השלילי גורם לזרימת דם מוגברת לאזור.
משיכת השריר העדינה יכולה לסייע לשחרורו; לעיתים יש שבירות קלות של נימי דם היוצרות סימנים אופייניים.
ישנה כתוצאה מכך זרימה טובה יותר של חמצן ואנרגיית "Qi" למקום הפגוע — לרוב עם הקלה מידית בכאב.`,
        `How does it work?
During treatment, a vacuum is created inside the cup and it is left on the skin for a few minutes.
The negative pressure draws the tissue up, increasing local blood flow.
Gentle traction on the muscle may help it release; minor capillary ruptures can produce typical marks.
This can improve oxygen and Qi flow to the affected area and often provides immediate pain relief.`,
    ],
    history: [
        `מתי זה התחיל?
מקור הכוסות אינו חד-משמעי. יש הערכות לשימוש כבר ביוון העתיקה (כ-400 לפנה"ס).
השיטה הומלצה ע"י הנביא מוחמד; יש אזכורים גם אצל הרמב"ם.
בראשית המאה ה-20, סר ויליאם אוסלר, "אבי הרפואה המודרנית", המליץ על שימוש בכוסות לדלקות ריאה ועוד.`,
        `When did it start?
Origins are unclear. There are estimates of use in ancient Greece (~400 BCE).
The method was recommended by the Prophet Muhammad and referenced by Maimonides.
In the early 20th century, Sir William Osler, the "father of modern medicine," recommended cupping for conditions like pneumonia.`,
    ],
}

export default function CuppingTherapy({height = 350}) {
    const {language} = useLang()

  return (
    <Grid container spacing={2} sx={{px:5}} dir={language ? 'ltr' : 'rtl'}>
        <Grid item xs={12} md={6}>
            <Grid item container justifyContent={'center'}>
                { <img src={process.env.PUBLIC_URL + "/car2.jpg"} alt={res.imgAlt[Number(language)]} style={{height,width:"80%",borderRadius:'5px'}} /> }
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
                    fontSize:'clamp(1rem, 2.5vw, 2rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.intro[Number(language)]}
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
                    fontSize:'clamp(1rem, 2.5vw, 2rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.howItWorks[Number(language)]}
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
                    fontSize:'clamp(1rem, 2.5vw, 2rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.history[Number(language)]}
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
