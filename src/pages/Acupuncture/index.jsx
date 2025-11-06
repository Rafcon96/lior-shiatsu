import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

const res = {
    title: ['דיקור', 'Acupuncture'],
    imgAlt: ['דיקור img', 'Acupuncture image'],
    intro: [
        `למה אנחנו דוקרים,  ואיך זה עובד ?
ישנן המון השערות ומחקרים רבים שנעשו ונעשים כל הזמן, אך התעלומה טרם נפתרה.
ההסבר המדעי כיום מציע שהמחט גורמת לגירוי רפלקסים של מערכת העצבים
ולשחרור אנדורפינים ויוצרת זרימת דם טובה יותר באזור הנדקר. מה שמפחית את מדדי הדלקת
ואת הפעילות החשמלית הספונטנית.`,
        `Why do we needle, and how does it work?
There are many hypotheses and ongoing studies, yet the mystery is not fully solved.
The current scientific view suggests the needle stimulates nervous system reflexes,
promotes endorphin release and improves local blood flow, which reduces inflammatory
markers and spontaneous electrical activity.`,
    ],
    evidence: [
        `מבדיקה וסקירה עדכנית, נמצא כי הדיקור הראה השפעה ברמה בינונית עד גבוהה ב:
הקלה על כאבי צוואר וכתפיים, הקלה בכאב מיופשיאלי, הקלה בכאב הקשור לפיברומיאלגיה,
הקלה בכאבי גב תחתון לא ספציפיים, שיפור בתקשורת התפקודית של חולים עם אפזיה לאחר שבץ,
עלייה בשיעור הצלחת הנקה תוך 24 שעות מהלידה, הפחתה בחומרת תסמיני דמנציה וסקולרית,
ושיפור תסמיני נזלת אלרגית באף.
מתוך: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,`,
        `A recent review found acupuncture shows moderate-to-high level effects for:
relieving neck and shoulder pain, myofascial pain, pain related to fibromyalgia,
non-specific low back pain, improving functional communication in post-stroke aphasia,
increasing successful breastfeeding within 24 hours of birth, reducing severity of
vascular dementia symptoms, and improving symptoms of allergic rhinitis.
Source: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,`,
    ],
    linkText: ['לינק למאמר המלא', 'Link to the full article'],
    qna: [
        `האם זה כואב?
לעיתים הדקירה איננה מורגשת כלל ולעיתים יכולה לכאוב מאוד.
מה עובי המחט?
המחט דקה מאוד, המחטים בעובי שונה בהתאם לאזור הנדקר. הדקות בעובי 0.15 מ"מ והעבות כ-0.4 מ"מ.
לפי התיאוריה הסינית, הצ'י היא אנרגיית החיים. האנרגיה זורמת בערוצים קבועים לאורך הגוף הנקראים מרידיאנים.
לדיקור במרידיאנים יכולת לפתוח חסימות בזרימת הצ'י, וזו המשמעות של דיקור סיני.
הטיפול בדיקור סיני קשור קשר הדוק ליין וליאנג – ניגודים משלימים של חם/קר, תנועה/מנוחה, עודף/חוסר.
האיזון ביניהם מרכזי לשמירת הבריאות והרווחה, ובאמצעות הדיקור ניתן לשפר את הזרימה והאיזון.`,
        `Does it hurt?
Sometimes the insertion is not felt at all, and sometimes it can be painful.
How thick is the needle?
Needles are very thin and vary by area: finer needles are about 0.15 mm and thicker ones about 0.4 mm.
According to Chinese theory, Qi is the life energy flowing through fixed channels called meridians.
Acupuncture along the meridians can open blockages in Qi flow — this is the essence of Chinese acupuncture.
Acupuncture relates closely to Yin and Yang — complementary opposites such as warm/cold, active/rest, excess/deficiency.
Balancing them is central to health and wellbeing; acupuncture can help improve flow and balance.`,
    ],
}

export default function Acupuncture({height = 350}) {
    const {language} = useLang()

  return (
    <Grid container spacing={2} sx={{px:3}} dir={language ? 'ltr' : 'rtl'}>
        <Grid item xs={12} md={6}>
            <Grid item container justifyContent={'center'}>
                { <img src={process.env.PUBLIC_URL + "/dickor1.jpg"} alt={res.imgAlt[Number(language)]} style={{height,width:"90%",borderRadius:'5px'}} /> }
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
                    mr: 1,
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
                    mr: 1,
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw, 2rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.evidence[Number(language)]}
                </Typography>
                <a href='https://www.bmj.com/content/376/bmj-2021-067475'>{res.linkText[Number(language)]}</a>
            </Grid>
            <Grid/>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h6"
                    align={'center'}
                    sx={{
                        whiteSpace:"pre-line",
                    mr: 1,
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw, 2rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
{res.qna[Number(language)]}
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
