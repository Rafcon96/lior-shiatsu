import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderBody from '../../components/HeaderBody'
import TitleBodyImg from '../../components/TitleBodyImg'
import { useLang } from '../../context/language.context'


const content = [
    {   title: ["שיאצו","shiatsu"],
        img:"/lior1.png",
        imgLeft:true,
        body:[`
        שיאצוּ (ביפנית: 指圧 "שי" משמעו- אצבע, ו"אצו"- לחץ) היא שיטת טיפול במגע בתחום הרפואה המשלימה. מקורה ביפן, שם היא טיפול רפואי מורשה. 
היכולה לסייע בבעיות אורתופדיות בעמוד השדרה, בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, בעיות רגשיות כמו הפרעות שינה, מתח, דיכאון ועוד.

 ישנן שתי אסכולות שיאצו: אחת המבוססת על אנטומיה ופיזיולוגיה מערבית, והשנייה מבוססת על רפואה סינית מסורתית (TCM). 
ההנחה המרכזית של השיטה היא כי בגוף האדם קיימים ערוצי אנרגיה המכונים מרידיאנים, אשר משפיעים ומושפעים מהאיברים הפנימיים. על פי השיטה, כל מחלה היא מצב הנובע מחוסר איזון כלשהו מעודף או חוסר באיבר, היוצר "חסימה" בערוץ המרידיאן, 
 וגורם להופעת תסמינים כמו כאב, לחץ כבדות או רפיון.

 איך מתבצע הטיפול ?
השיאצו מבוסס על הפעלת לחץ על נקודות מסוימות בגוף, 
במטרה לאזן את האנרגיה בגוף ולשקם את הבריאות והתחושה הכללית.
בלבוש בבגדים נוחים. ואני המטפל משתמש אגודלים, במרפקים, באמות להנעת המרידאנים ולמתיחת השרירים
הלחץ אמור להיות מדויק ונעים, ולעתים יכול להיות מעט כואב, אבל בהימנע מכאב מכווץ.
       `
        ,`Shiatsu (/ʃiˈæts-, -ˈɑːtsuː/ shee-AT-, -⁠AHT-soo;[1] 指圧) is a form of Japanese bodywork based on concepts in traditional Chinese medicine such as qi meridians. Having been popularized in the twentieth century by Tokujiro Namikoshi (1905–2000),[2] shiatsu derives from the older Japanese massage modality called anma.
        There is no scientific evidence that shiatsu will prevent or cure any disease.[3] Although it is considered a generally safe treatment—if sometimes painful—there have been reports of adverse health effects arising from its use, a few of them serious`
        ]
    }   
    ,{title: [`דיקור`,`Acupuncture`],
     body:[`למה אנחנו דוקרים,  ואיך זה עובד ? 
     ישנן המון השערות ומחקרים רבים שנעשו ונעשים כל הזמן, אך התעלומה טרם נפתרה.
     ההסבר המדעי כיום מציע שהמחט גורמת לגירוי רפלקסים של מערכת העצבים 
     ולשחרור אנדורפינים ויוצרת זרימת דם טובה יותר באזור הנדקר. מה שמפחית את מדדי הדלקת 
         ואת הפעילות החשמלית הספונטנית.
     מה הם אנדורפינים ? אנדורפינים הם קבוצת כימיקלים המופרשים במוח אשר זכו לשם "מפתחות לגן העדן",
      בעקבות יכולתם לשלוט בהנאה ובכאב.  
     (העדויות מראות שהמחט גורמת לגירוי הרפלקסים המפעילים עצבים פריפריאליים שמעבירים מידע סנסורי מחוט השדרה למוח,
      ואז משפעלים מסלולים אוטונומיים פריפריאליים, ובסופו של דבר עושים מודולציה לפיזיולוגיית הגוף). 
     מתחילת שנות האלפיים ועד היום, התפרסמו אלפי מאמרים אודות מחקרים שנעשו בסין, ארה"ב, בריטניה, גרמניה, קנדה, אוסטרליה ועוד.
     אז מה זה כל הבזז הזה..  
     מבדיקה וסקירה עדכנית, נמצא כי הדיקור הראה השפעה ברמה בינונית עד גבוהה 
     ב: הקלה על כאבי צוואר וכתפיים, הקלה בכאב מיופשיאלי, הקלה בכאב הקשור לפיברומיאלגיה, 
     הקלה בכאבי גב תחתון לא ספציפיים,
      שיפור בתקשורת התפקודית של חולים עם אפזיה לאחר שבץ,
     עלייה בשיעור הצלחת הנקה תוך 24 שעות מהלידה,
      הפחתה בחומרת תסמיני דמנציה וסקולרית, ושיפור תסמיני נזלת אלרגית באף. 
     מתוך: 2022 Department of Medicine, Faculty of Health Sciences, McMaster University, Canada,
     https://www.bmj.com/content/376/bmj-2021-067475
     
     האם זה כואב ?
לעיתים הדקירה איננה מורגשת כלל ולעיתים יכולה לכאוב מאוד. 
מה עובי המחט ?
המחט דקה מאוד, המחטים בעובי שונה בהתאם לאזור הנדקר. הדקות בעובי שער הראש כ-0.15 מ"מ  
והעבות כמו שערות הזקן (העבות בגוף כ-0.4 מ"מ ). 

לפי התיאוריה הסינית, הצ'י היא אנרגיית החיים. 
האנרגיה זורמת בערוצים קבועים לאורך הגוף הנקראים מרידיאנים.
לדיקור המרידיאנים יכולת לפתוח חסימות בזרימת הצ'י. וזו בעצם המשמעות של דיקור סיני.
הטיפול בדיקור סיני קשור קשר הדוק ליין וליאנג – היום והלילה האור והחושך, החוסר והעודף. 
שהם הניגודים המשלימים 
המונח "יאנג" מתייחס לאנרגיה החמה והפעילה שבגוף, בעוד "ין" מתייחס לאנרגיה הקרה והשקטה. 
לפי התורה הסינית, האיזון בין יינג ויאנג הוא מרכיב מרכזי לשמירת הבריאות והרווחה הכללית של האדם.
באמצעות הדיקור, מתקנים יכולים לשפר את זרימת האנרגיה בגוף ולשפר את האיזון בין היאנג לין`
        ,
        `Acupuncture is a form of alternative medicine and a component of traditional Chinese medicine (TCM) in which thin needles are inserted into the body. Acupuncture is a pseudoscience;the theories and practices of TCM are not based on scientific knowledge, and it has been characterized as quackery. There is a range of acupuncture variants which originated in different philosophies,and techniques vary depending on the country in which it is performed, but can be divided into two main foundational philosophical applications and approaches, the first being the modern standardized form called eight principles TCM and the second an older system that is based on the ancient Daoist wuxing, better known as the five elements or phases in the West. Acupuncture is most often used to attempt pain relief, though acupuncturists say that it can also be used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment`
        ]
     ,img:"/car3.jpg"}
     ,{title: ["כוסות רוח","Cupping therapy"],
        img:"/car2.jpg",
        imgLeft:true,
        body:[`כוסות רוח הן שיטת טיפול אלטרנטיבית, שהייתה נפוצה באירופה ובחלקים נוספים בעולם וביבשות נוספות, ונחשבת/ מוכרת כחלק אינטגרטיבי בטיפול לפי הרפואה הסינית. 
        כוסות רוח עשויות מחומרים שונים, בעבר יוצרו מבמבוק וזכוכית, 
        וכיום יש כוסות העשויות סילקון ופוליקרבונט וכוללות משאבה ליצירת ואקום מבוקר. 
        מנגנון הפעולה לא באמת מובן עד הסוף, 
         איך זה עובד ? 
        במהלך הטיפול יוצרים תת-לחץ בחלל הכוס ומשאירים אותה למספר דקות.
        אנסה להסביר את מה שכן ידוע-
        בעקבות יצירת הוואקום העור נמשך פנימה אל הכוס, 
        והלחץ השלילי המופעל גורם לזרימת דם מוגברת לאזור. 
        או שמשיכת השריר העדינה למס' הדקות עוזרת לשחרורו, ישנם שבירות קלות של קפילרות, נימי הדם מה שיוצר את הסימנים המאפיינים, בעקבות זאת יש זרימה טובה יותר של חמצן ואנריגיה "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.  
        ההבנה שבשל הוואקום העור נמשך פנימה אל הכוס, והלחץ השלילי גורם לזרימת דם מוגברת לאזור, או שמשיכת השריר העדינה למס' הדקות עוזרת לשחרורו, ישנם שבירות קלות של קפילרות, נימי הדם מה שיוצר את הסימנים המאפיינים, בעקבות זאת יש זרימה טובה יותר של חמצן ואנריגיה "QI" למקום הפגוע והתקוע מה שמסב לרוב הקלה מידית בכאב.  
        מתי כל זה התחיל ? 
        מקור כוסות רוח אינו ברור, יש הערכות שהשתמשו כבר ביוון העתיקה כ- 400 לפנה"ס
        השיטה הומלצה ע"י הנביא מוחמד, יש הזכורים גם בספרו של הרמב"ם ולכן הייתה מאד שימושית בתוך הקהילה היהודית במזרח אירופה, במצריים העתיקה ומקומות נוספים בעולם, 
         בתחלת ה-120 , סר ולים אוסלר שכונה "אבי הרפואה המודרנית" בזכות תרומתו הרבה לרפואה באר"הב ובעולם  מהמליץ על שימוש בכוסות רוח לדלקות ריאה ולדלקת מיאליטיס(דלקת בעמוד השידרה). 
       `    ,
        `Cupping therapy is a form of alternative medicine in which a local suction is created on the skin with the application of heated cups. Its practice mainly occurs in Asia but also in Eastern Europe, the Middle East, and Latin America. Cupping has been characterized as a pseudoscience and its practice as quackery.
        Cupping practitioners attempt to use cupping therapy for a wide array of medical conditions including fevers, chronic low back pain, poor appetite, indigestion, high blood pressure, acne, atopic dermatitis, psoriasis, anemia, stroke rehabilitation, nasal congestion, infertility, and menstrual period cramping`
        ]
    }
    ]
export default function Treatments() {
    const {language} = useLang()
  return (
    <Grid container spacing={1}>
        
       
        {
            content.map((item, index)=>{
                return <Grid key={index + item.title} container  sx={{marginBottom:10}}  item xs={12}><TitleBodyImg res={item} height={425} /></Grid>
            })
        }
        
    </Grid>
  )
}
