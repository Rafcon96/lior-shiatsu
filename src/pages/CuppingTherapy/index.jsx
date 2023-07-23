import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function CuppingTherapy({height = 250}) {
    const {language} = useLang()
    // const styles = res.imgPath ? 
    //         { order: { xs: 2, md: res.imgLeft ? 1 : 2 }, height}
    //         :
    //         {backgroundImage:`url(${process.env.PUBLIC_URL}/lior1.png`, order: { xs: 2, md: res.imgLeft ? 1 : 2 },
    //             backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:0.8, height
    //         }

  return (
    <Grid container spacing={2}> 
        <Grid item xs={12} md={6} spacing={2}>
            <Grid item container justifyContent={'center'} >
                { <img src={process.env.PUBLIC_URL + "/car2.jpg"} alt={'כוסות רוח img'} style={{height,width:"80%",borderRadius:'5px'}} /> }
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
                    כוסות רוח
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
                  כוסות רוח הן שיטת טיפול אלטרנטיבית, שהייתה נפוצה באירופה ובחלקים נוספים בעולם וביבשות נוספות, ונחשבת/ מוכרת כחלק אינטגרטיבי בטיפול לפי הרפואה הסינית. 
        כוסות רוח עשויות מחומרים שונים, בעבר יוצרו מבמבוק וזכוכית, 
        וכיום יש כוסות העשויות סילקון ופוליקרבונט וכוללות משאבה ליצירת ואקום מבוקר. 
        מנגנון הפעולה לא באמת מובן עד הסוף
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
                      איך זה עובד ? 
        במהלך הטיפול יוצרים תת-לחץ בחלל הכוס ומשאירים אותה למספר דקות.
        אנסה להסביר את מה שכן ידוע-
        בעקבות יצירת הוואקום העור נמשך פנימה אל הכוס, 
        והלחץ השלילי המופעל גורם לזרימת דם מוגברת לאזור. 
        או שמשיכת השריר העדינה למס' הדקות עוזרת לשחרורו, ישנם שבירות קלות של קפילרות, נימי הדם מה שיוצר את הסימנים המאפיינים, בעקבות זאת יש זרימה טובה יותר של חמצן ואנריגיה "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.  
        והלחץ השלילי גורם לזרימת דם מוגברת לאזור, ,  "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.
                </Typography>
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
                        מתי כל זה התחיל ? 
       מקור כוסות רוח אינו ברור, יש הערכות שהשתמשו כבר ביוון העתיקה כ- 400 לפנה"ס
       השיטה הומלצה ע"י הנביא מוחמד, יש אזכורים גם בספרו של הרמב"ם ולכן הייתה מאד שימושית בתוך הקהילה היהודית במזרח אירופה, במצריים העתיקה ומקומות נוספים בעולם, 
        בתחילת ה-120 , סר ויליאם אוסלר שכונה "אבי הרפואה המודרנית" בזכות תרומתו הרבה לרפואה באר"הב ובעולם  מהמליץ על שימוש בכוסות רוח לדלקות ריאה ולדלקת מיאליטיס(דלקת בעמוד השידרה).
                </Typography>
            </Grid>
        </Grid>  
    </Grid>
  )
}
