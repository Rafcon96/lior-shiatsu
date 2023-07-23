import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderBody from "../../components/HeaderBody";
import TitleBodyImg from "../../components/TitleBodyImg";
import { useLang } from "../../context/language.context";

const res = [
  {
    title: ["שיאצו", "shiatsu"],
    img: "/lior1.png",
    imgLeft: true,
    body1: [
      `
        שיאצוּ (ביפנית: 指圧 "שי" משמעו- אצבע, ו"אצו"- לחץ) היא שיטת טיפול במגע בתחום הרפואה המשלימה. מקורה ביפן, שם היא טיפול רפואי מורשה. 
היכולה לסייע בבעיות אורתופדיות בעמוד השדרה, בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, בעיות רגשיות כמו הפרעות שינה, מתח, דיכאון ועוד.
       `
        ,`Shiatsu (/ʃiˈæts-, -ˈɑːtsuː/ shee-AT-, -⁠AHT-soo;[1] 指圧) is a form of Japanese bodywork based on concepts in traditional Chinese medicine such as qi meridians. Having been popularized in the twentieth century by Tokujiro Namikoshi (1905–2000),[2] shiatsu derives from the older Japanese massage modality called anma.
        There is no scientific evidence that shiatsu will prevent or cure any disease.[3] Although it is considered a generally safe treatment—if sometimes painful—there have been reports of adverse health effects arising from its use, a few of them serious`
        ],
        body2:[
            ` 
           ההנחה המרכזית של השיטה היא כי בגוף האדם קיימים ערוצי אנרגיה המכונים מרידיאנים, אשר משפיעים ומושפעים מהאיברים הפנימיים. 
           על פי השיטה, כל מחלה היא מצב הנובע מחוסר איזון כלשהו מעודף או חוסר באיבר, היוצר "חסימה" בערוץ המרידיאן 
            וגורם להופעת תסמינים כמו כאב, לחץ כבדות או רפיון.`,`english trans 2`

        ],
        body3:[`
            איך מתבצע הטיפול ?????
            השיאצו מבוסס על הפעלת לחץ על נקודות מסוימות בגוף, 
            במטרה לאזן את האנרגיה בגוף ולשקם את הבריאות והתחושה הכללית.
            בלבוש בבגדים נוחים. ואני המטפל משתמש אגודלים, במרפקים, באמות להנעת המרידאנים ולמתיחת השרירים
            הלחץ אמור להיות מדויק ונעים, ולעתים יכול להיות מעט כואב, אבל בהימנע מכאב מכווץ.
        `,
      `english 3`,
    ],
  },
  {
    title: [`דיקור`, `Acupuncture`],
    body1: [
      `למה אנחנו דוקרים,  ואיך זה עובד ? 
     ישנן המון השערות ומחקרים רבים שנעשו ונעשים כל הזמן, אך התעלומה טרם נפתרה.
     ההסבר המדעי כיום מציע שהמחט גורמת לגירוי רפלקסים של מערכת העצבים 
     ולשחרור אנדורפינים ויוצרת זרימת דם טובה יותר באזור הנדקר. מה שמפחית את מדדי הדלקת 
         ואת הפעילות החשמלית הספונטנית.`,
      `english1`,
    ],
    body2: [
      ` מבדיקה וסקירה עדכנית, נמצא כי הדיקור הראה השפעה ברמה בינונית עד גבוהה 
    ב: הקלה על כאבי צוואר וכתפיים, הקלה בכאב מיופשיאלי, הקלה בכאב הקשור לפיברומיאלגיה, 
    הקלה בכאבי גב תחתון לא ספציפיים,
     שיפור בתקשורת התפקודית של חולים עם אפזיה לאחר שבץ,
    עלייה בשיעור הצלחת הנקה תוך 24 שעות מהלידה,
     הפחתה בחומרת תסמיני דמנציה וסקולרית, ושיפור תסמיני נזלת אלרגית באף. 
    מתוך: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,
    https://www.bmj.com/content/376/bmj-2021-067475`,
      `english2`,
    ],
    body3: [
      `    האם זה כואב ?
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
    באמצעות הדיקור, מתקנים יכולים לשפר את זרימת האנרגיה בגוף ולשפר את האיזון בין היאנג לין `,
      `english 2`,
    ],

    img: "/car3.jpg",
  },
  {
    title: ["כוסות רוח", "Cupping therapy"],
    img: "/car2.jpg",
    imgLeft: true,
    body1: [
      `כוסות רוח הן שיטת טיפול אלטרנטיבית, שהייתה נפוצה באירופה ובחלקים נוספים בעולם וביבשות נוספות, ונחשבת/ מוכרת כחלק אינטגרטיבי בטיפול לפי הרפואה הסינית. 
        כוסות רוח עשויות מחומרים שונים, בעבר יוצרו מבמבוק וזכוכית, 
        וכיום יש כוסות העשויות סילקון ופוליקרבונט וכוללות משאבה ליצירת ואקום מבוקר. 
        מנגנון הפעולה לא באמת מובן עד הסוף,`,
      `eng1`,
    ],
    body2: [
      `         איך זה עובד ? 
        במהלך הטיפול יוצרים תת-לחץ בחלל הכוס ומשאירים אותה למספר דקות.
        אנסה להסביר את מה שכן ידוע-
        בעקבות יצירת הוואקום העור נמשך פנימה אל הכוס, 
        והלחץ השלילי המופעל גורם לזרימת דם מוגברת לאזור. 
        או שמשיכת השריר העדינה למס' הדקות עוזרת לשחרורו, ישנם שבירות קלות של קפילרות, נימי הדם מה שיוצר את הסימנים המאפיינים, בעקבות זאת יש זרימה טובה יותר של חמצן ואנריגיה "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.  
        והלחץ השלילי גורם לזרימת דם מוגברת לאזור, ,  "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.  `,`eng2`] ,

    body3: [
      ` מתי כל זה התחיל ? 
       מקור כוסות רוח אינו ברור, יש הערכות שהשתמשו כבר ביוון העתיקה כ- 400 לפנה"ס
       השיטה הומלצה ע"י הנביא מוחמד, יש אזכורים גם בספרו של הרמב"ם ולכן הייתה מאד שימושית בתוך הקהילה היהודית במזרח אירופה, במצריים העתיקה ומקומות נוספים בעולם, 
        בתחילת ה-120 , סר ויליאם אוסלר שכונה "אבי הרפואה המודרנית" בזכות תרומתו הרבה לרפואה באר"הב ובעולם  מהמליץ על שימוש בכוסות רוח לדלקות ריאה ולדלקת מיאליטיס(דלקת בעמוד השידרה). `,`eng3`
        ]
    }
    ]

    
export default function Treatments() {
  const { language } = useLang();
  console.log("Number(language)", Number(language));
  console.log("res[0].body1[Number(language)]", res[0].body3[Number(language)]);
  return (
    <Grid container spacing={1}>
      <Grid item container>
        <Grid item container justifyContent={"center"}>
          <Typography
            variant="h4"
            align={"center"}
            alignContent={"center"}
            sx={{
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.9rem, 4.5vw, 4rem)",
            }}
          >
            {res[0].title[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent={"center"}>
          <img
            src={process.env.PUBLIC_URL + res[0].img}
            alt={res[0].title[Number(language)]}
            style={{ maxHeight: "90%", maxWidth: "100%" }}
          />
        </Grid>

        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1rem, 4.5vw, 2rem)",
            }}
          >
            {res?.[0].body1[Number(language)]}
          </Typography>
          <Button href="/lior-shiatsu/treatments/shiatsu">קרא עוד ...</Button>
        </Grid>
        {/* <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[0].body2[Number(language)]}
          </Typography> */}
        {/* </Grid>
        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[0].body3[Number(language)]}
          </Typography>
        </Grid> */}
      </Grid>
      <Grid item container>
        <Grid item container justifyContent={"center"}>
          <Typography
            variant="h4"
            align={"center"}
            alignContent={"center"}
            sx={{
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.9rem, 4.5vw, 4rem)",
            }}
          >
            {res[1].title[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent={"center"}>
          <img
            src={process.env.PUBLIC_URL + res[1].img}
            alt={res[1].title[Number(language)]}
            style={{ maxHeight: "90%", maxWidth: "100%" }}
          />
        </Grid>

        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1rem, 4.5vw, 2rem)",
            }}
          >
            {res?.[1].body1[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[1].body2[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,

              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[1].body3[Number(language)]}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item container justifyContent={"center"}>
          <Typography
            variant="h4"
            align={"center"}
            alignContent={"center"}
            sx={{
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.9rem, 4.5vw, 4rem)",
            }}
          >
            {res[2].title[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent={"center"}>
          <img
            src={process.env.PUBLIC_URL + res[2].img}
            alt={res[2].title[Number(language)]}
            style={{ maxHeight: "90%", maxWidth: "100%" }}
          />
        </Grid>

        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1rem, 4.5vw, 2rem)",
            }}
          >
            {res?.[2].body1[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[2].body2[Number(language)]}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} md={6}>
          <Typography
            variant="h6"
            align={"center"}
            alignContent={"center"}
            sx={{
              whiteSpace: "pre-line",
              m: 1,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.2rem, 4.5vw, 1.5rem)",
            }}
          >
            {res?.[2].body3[Number(language)]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
