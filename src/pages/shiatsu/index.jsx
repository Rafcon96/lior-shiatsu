import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function Shiatsu({height = 400}) {
    const {language} = useLang()
    // const styles = res.imgPath ? 
    //         { order: { xs: 2, md: res.imgLeft ? 1 : 2 }, height}
    //         :
    //         {backgroundImage:`url(${process.env.PUBLIC_URL}/lior1.png`, order: { xs: 2, md: res.imgLeft ? 1 : 2 },
    //             backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:0.8, height
    //         }

  return (
    <Grid container spacing={2}sx={{px:5}}> 
        <Grid item xs={12} md={6} spacing={2}>
            <Grid item container justifyContent={'center'} >
                { <img src={process.env.PUBLIC_URL + "/lior1.png"} alt={'shiatsu img'} style={{height,width:"80%",borderRadius:'5px'}} /> }
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
                    שיאצו
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
                          `
        שיאצוּ (ביפנית: 指圧 "שי" משמעו- אצבע, ו"אצו"- לחץ) היא שיטת טיפול במגע בתחום הרפואה המשלימה. מקורה ביפן, שם היא טיפול רפואי מורשה. 
היכולה לסייע בבעיות אורתופדיות בעמוד השדרה, בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, בעיות רגשיות כמו הפרעות שינה, מתח, דיכאון ועוד.
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
                        
            ישנן שתי אסכולות שיאצו: אחת המבוססת על אנטומיה ופיזיולוגיה מערבית, והשנייה מבוססת על רפואה סינית מסורתית (TCM). 
           ההנחה המרכזית של השיטה היא כי בגוף האדם קיימים ערוצי אנרגיה המכונים מרידיאנים, אשר משפיעים ומושפעים מהאיברים הפנימיים. על פי השיטה, כל מחלה היא מצב הנובע מחוסר איזון כלשהו מעודף או חוסר באיבר, היוצר "חסימה" בערוץ המרידיאן, 
            וגורם להופעת תסמינים כמו כאב, לחץ כבדות או רפיון.
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
                        
                       ? איך מתבצע הטיפול 
            השיאצו מבוסס על הפעלת לחץ על נקודות מסוימות בגוף, 
            במטרה לאזן את האנרגיה בגוף ולשקם את הבריאות והתחושה הכללית.
            בלבוש בבגדים נוחים. ואני המטפל משתמש אגודלים, במרפקים, באמות להנעת המרידאנים ולמתיחת השרירים
            הלחץ אמור להיות מדויק ונעים, ולעתים יכול להיות מעט כואב, אבל בהימנע מכאב מכווץ.
                </Typography>
            </Grid>
        </Grid>  
    </Grid>
  )
}
