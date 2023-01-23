import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderBody from '../../components/HeaderBody'
import TitleBodyImg from '../../components/TitleBodyImg'

const content = [
    {   title: "?למי מיועד הטיפול",
        img:"/lior1.png",
        imgLeft:true,
        body:" הטיפול מתאים לכל גבר ואשה בכל תקופות חייהםטיפול הוא הדרך המושלמת להפגת מתחים בחיי היום יום. לטיפולים אפקט משחרר ומאזן, הוא מדיטטיבי מרגיע ורבים יוצאים מהטיפול בתחושה בריאה ושלווה. מוזמן לבוא, להירגע ולהיטען מחדש כתחזוקה מונעת ואפקטיב"
    }   
    ,{title: "הטיפול יכול להביא להקלה משמעותית ואף לריפוי מלא במצבים הבאים",
     body:"כאבי צוואר וגב, בעיות כתפיים ,עייפות, מגרנות,  קשיים ואי נוחות במערכת העיכול, כאבי מפרקים, פגיעות וטראומות לאחר תאונה ולשפר טווחי תנועה. הטיפול יכול לתמוך, להקל ולרווח סימפטומים של כאבים כרוניים ומצבים רגשים כמו : PTSD-C, מגרנות, בעיות בדרכי הנשימה, אנדומטריאוזיס פיברומיאלגיה, אובדן/פרדה, במהלך טיפולי הקרנות ולאחר מכן, פריון ולאחר לידה.  "
     ,img:"/lior1.png"}
     ,{title: "דיקור סיני (אקופונקטורה)",
        img:"./lior1.png",
        imgLeft:true,
        body:"נעשה בעזרת מחטים עדינות המוחדרות לעור בנקודות הנבחרות בהתאם לטיפול על גבי מסלולי אנרגיה של הגוף הנקראים מרדיאנים."}
    ]
export default function Treatments() {
  return (
    <Grid container spacing={2} style={{paddingTop:30,paddingBottom:120}}>
        {/* <Grid item container>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h4"
                    noWrap
                    sx={{
                    mr: 2,
                    display:  'flex' ,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    ?למי מיועד הטיפול 
                </Typography>
          </Grid>
            <Grid item container justifyContent={"center"} spacing={2}>
                <Grid item container xs={6} sm={5} md={4}><img style={{objectFit:"cover"}} src={"./lior1.png"} /></Grid>
                <Grid item md={8} xs={6} sm={7}>
                <Typography
                    variant="h6"
         
                    sx={{
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    הטיפול מתאים לכל גבר ואשה בכל תקופות חייהם

טיפול הוא הדרך המושלמת להפגת מתחים בחיי היום יום. 
לטיפולים אפקט משחרר ומאזן, הוא מדיטטיבי מרגיע ורבים יוצאים מהטיפול בתחושה בריאה ושלווה.
המטופל  מוזמן לבוא, להירגע ולהיטען מחדש כתחזוקה מונעת ואפקטיבי
הטיפול יכול להקל, ולפתור בעיות אקוטיות רבות כגון: כאבי צוואר וגב, בעיות כתפיים ,עייפות, מגרנות, 
קשיים ואי נוחות במערכת העיכול, כאבי מפרקים, פגיעות וטראומות לאחר תאונה ולשפר טווחי תנועה.
 
הטיפול יכול לתמוך, להקל ולרווח סימפטומים של כאבים כרוניים ומצבים רגשים כמו : PTSD-C, מגרנות, בעיות בדרכי הנשימה, אנדומטריאוזיס
פיברומיאלגיה, אובדן/פרדה, במהלך טיפולי הקרנות ולאחר מכן, פריון ולאחר לידה. 

כל התהליך נשאר בדלתיים סגורות ובחסיונות מלאה של המטופל.
ולמי לא ?	
הטיפול לרוב אינו מתאים בטרימסטר הראשון של ההריון. 

                </Typography>
                </Grid>
            </Grid>
        </Grid> */}
        {
            content.map((item, index)=>{
                return <Grid key={index + item.title} container  sx={{marginBottom:10}}  item xs={12}><TitleBodyImg res={item}  /></Grid>
            })
        }
        
    </Grid>
  )
}
