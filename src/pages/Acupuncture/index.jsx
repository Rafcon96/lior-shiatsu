import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function Acupuncture({height = 250}) {
    const {language} = useLang()
    // const styles = res.imgPath ? 
    //         { order: { xs: 2, md: res.imgLeft ? 1 : 2 }, height}
    //         :
    //         {backgroundImage:`url(${process.env.PUBLIC_URL}/lior1.png`, order: { xs: 2, md: res.imgLeft ? 1 : 2 },
    //             backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:0.8, height
    //         }

  return (
    <Grid container spacing={2} sx={{px:3}} dir='rtl'> 
        <Grid item xs={12} md={6} >
            <Grid item container justifyContent={'center'} >
                { <img src={process.env.PUBLIC_URL + "/car3.jpg"} alt={'דיקור img'} style={{height,width:"90%",borderRadius:'5px'}} /> }
            </Grid>
        </Grid>
        <Grid item container xs={12} md={6} >
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
                    דיקור
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
 למה אנחנו דוקרים,  ואיך זה עובד ? 
     ישנן המון השערות ומחקרים רבים שנעשו ונעשים כל הזמן, אך התעלומה טרם נפתרה.
     ההסבר המדעי כיום מציע שהמחט גורמת לגירוי רפלקסים של מערכת העצבים 
     ולשחרור אנדורפינים ויוצרת זרימת דם טובה יותר באזור הנדקר. מה שמפחית את מדדי הדלקת 
         ואת הפעילות החשמלית הספונטנית.
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
                >מבדיקה וסקירה עדכנית, נמצא כי הדיקור הראה השפעה ברמה בינונית עד גבוהה 
                ב: הקלה על כאבי צוואר וכתפיים, הקלה בכאב מיופשיאלי, הקלה בכאב הקשור לפיברומיאלגיה, 
                הקלה בכאבי גב תחתון לא ספציפיים,
                 שיפור בתקשורת התפקודית של חולים עם אפזיה לאחר שבץ,
                עלייה בשיעור הצלחת הנקה תוך 24 שעות מהלידה,
                 הפחתה בחומרת תסמיני דמנציה וסקולרית, ושיפור תסמיני נזלת אלרגית באף. 
                מתוך: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,
                </Typography>
                <a href='https://www.bmj.com/content/376/bmj-2021-067475'>לינק למאמר המלא</a>
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
                >האם זה כואב ?
                לעיתים הדקירה איננה מורגשת כלל ולעיתים יכולה לכאוב מאוד. 
                מה עובי המחט ?
                המחט דקה מאוד, המחטים בעובי שונה בהתאם לאזור הנדקר. הדקות בעובי 0.15 מ"מ  
                והעבות כ-0.4 מ"מ.
            לפי התיאוריה הסינית, הצ'י היא אנרגיית החיים. 
                האנרגיה זורמת בערוצים קבועים לאורך הגוף הנקראים מרידיאנים.
                לדיקור המרידיאנים יכולת לפתוח חסימות בזרימת הצ'י. וזו בעצם המשמעות של דיקור סיני.
                הטיפול בדיקור סיני קשור קשר הדוק ליין וליאנג – היום והלילה האור והחושך, החוסר והעודף. 
                שהם הניגודים המשלימים 
                המונח "יאנג" מתייחס לאנרגיה החמה והפעילה שבגוף, בעוד "ין" מתייחס לאנרגיה הקרה והשקטה. 
                לפי התורה הסינית, האיזון בין יינג ויאנג הוא מרכיב מרכזי לשמירת הבריאות והרווחה הכללית של האדם.
                באמצעות הדיקור, מתקנים יכולים לשפר את זרימת האנרגיה בגוף ולשפר את האיזון בין היאנג לין 
                </Typography>
            </Grid>
        </Grid>  
    </Grid>
  )
}
