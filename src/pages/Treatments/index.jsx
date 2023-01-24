import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderBody from '../../components/HeaderBody'
import TitleBodyImg from '../../components/TitleBodyImg'
import { useLang } from '../../context/language.context'

const res = {
    header:[": סוגי טיפולים שאני מציע","type of tretment i offer:"],
    title:["?כיצד מתבצע הטיפול","How is the treatment carried out?"],
    body:[`הטיפול יתחיל בשיחה קצרה 
    כדי להבין טוב יותר במה למהתמקד בטיפול ,
    האבחנה מתבצעת בתשאול לפי העקרונות הסינים והמערביים,
    של אורך והרגלי החיים,
    כמו , כמו כמה מים אתה שותה? איך השינה ? וכו'
    ואם יש סיבה רגשית שעמודת מאחורי הזה 
    וברמה האורתופדית – מנחי הגוף בהסתכלות סטטית ותנועתית במרחב, 
    איזה שרירים מקוצרים ומכווצים ואילו רפויים יותר.
    ואחרי שדברנו אפשר להתחיל
    השיאצו הוא בביגוד מלא ונוח ולכן חשוב לבוא עם בגדים נוחים, 
    המטופל שוכב על מיטת טיפולים ברוגע,
    ואני כמטפל משתמש בכפות הידיים, הבהונות ומפרקים 
    בהקשבה לצורכי המטופל.  
     לעיתיים כחלק מהטיפול אנחה את המטופל לבצע תרגילים בבית, וביחד ננסה לשנות הרגלים.
    `,
    `The treatment will begin with a short conversation
    To better understand what to focus on in treatment,
    The diagnosis is made by questioning according to the Chinese and Western principles,
    of length and habits of life,
    Like, like how much water do you drink? how is the sleep and so'
    And if there is an emotional reason behind this
    and at the orthopedic level - guides the body in a static and movement perspective in space,
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
    {   title: ["שיאצו","shiatsu"],
        img:"/lior1.png",
        imgLeft:true,
        body:[`
        שיאצוּ (ביפנית: 指圧, "שי" משמעו - אצבע, ו"אצו" - לחץ) היא שיטת טיפול במגע בתחום הרפואה המשלימה, שמקורה ביפן, שם היא טיפול רפואי מורשה. לטענת תומכיה, היא עשויה לסייע בבעיות אורתופדיות בעמוד השדרה[1], בעיות פנימיות בתחומי נוירולוגיה, בעיות עיכול, גינקולוגיה, בעיות רגשיות כמו מתח ודיכאון ועוד.[2][3]
        ישנן שתי אסכולות שיאצו: אחת המבוססת על אנטומיה ופיזיולוגיה מערבית, והשנייה מבוססת על רפואה סינית מסורתית (TCM).
        השיטה מתבססת על עקרונות הרפואה הסינית, בהשפעת טכניקות כגון אקופונקטורה (דיקור) וטווינה. ההנחה המרכזית של השיטה היא כי בגוף האדם קיימים ערוצי אנרגיה בלתי נראים המכונים מרידיאנים, אשר משפיעים ומושפעים מהאיברים הפנימיים. על פי השיטה, כל מחלה היא מצב הנובע מחוסר איזון כלשהו, היוצר "חסימה אנרגטית" בערוץ האנרגיה/מרידיאן או באיבר, וגורם להופעת תסמינים כמו כאב, לחץ או רפיון.`
        ,`Shiatsu (/ʃiˈæts-, -ˈɑːtsuː/ shee-AT-, -⁠AHT-soo;[1] 指圧) is a form of Japanese bodywork based on concepts in traditional Chinese medicine such as qi meridians. Having been popularized in the twentieth century by Tokujiro Namikoshi (1905–2000),[2] shiatsu derives from the older Japanese massage modality called anma.
        There is no scientific evidence that shiatsu will prevent or cure any disease.[3] Although it is considered a generally safe treatment—if sometimes painful—there have been reports of adverse health effects arising from its use, a few of them serious`
        ]
    }   
    ,{title: [`דיקור`,`Acupuncture`],
     body:[`דיקור סיני או אקופונקטורה (מלטינית: acus = מחט, pungere = לדקור) היא צורה של רפואה אלטרנטיבית המתבססת על דקירת המטופל בסיכות דקות במיוחד במקומות מסוימים בגוף. מתרגלי השיטה טוענים כי הדיקור מסייע בהקלת כאבים, מונע מחלות ומסייע בטיפול בהן, משפר את מערכת החיסון ועוד.
     טיפול בדיקור סיני כולל מספר שלבים: הראשון הוא אבחון, לרוב באמצעות שיחה ובדיקת דופק ולשון; בחירת נקודות הדיקור בהתאם לאבחון; החדרת המחטים — המחטים קטנות, עדינות וגמישות, כשהן גורמות לתחושת עקצוץ רגעית, במקרים מסוימים - ושלב שכיבה בו על המטופל למעט בתנועה; והוצאת המחטים בסיום הטיפול. בתום הוצאת המחטים נערכת בדיקת דופק נוספת, כדי לבדוק את השפעת הדיקור על הגוף. מספר טיפולי הדיקור אינו קבוע, הוא תלוי במחלה/דלקת/ או כל דבר אחר שיש למטופל בהתאם לאבחון ולחומרת הבעיה המאובחנת.`
        ,
        `Acupuncture is a form of alternative medicine and a component of traditional Chinese medicine (TCM) in which thin needles are inserted into the body. Acupuncture is a pseudoscience;the theories and practices of TCM are not based on scientific knowledge, and it has been characterized as quackery. There is a range of acupuncture variants which originated in different philosophies,and techniques vary depending on the country in which it is performed, but can be divided into two main foundational philosophical applications and approaches, the first being the modern standardized form called eight principles TCM and the second an older system that is based on the ancient Daoist wuxing, better known as the five elements or phases in the West. Acupuncture is most often used to attempt pain relief, though acupuncturists say that it can also be used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment`
        ]
     ,img:"/tretmant1.jpeg"}
     ,{title: ["כוסות רוח","Cupping therapy"],
        img:"./car2.jpg",
        imgLeft:true,
        body:[`כוסות רוח הן שיטת טיפול אלטרנטיבית, שהייתה נפוצה באירופה ובחלקים נוספים בעולם, אך כיום משמשת ברפואה הסינית וחלק ממסורת שמשמשת כרפואה בקרב האוכלוסייה המבוגרת יותר באזרביג׳ן. 
        כוסות רוח עשויות לרוב מזכוכית, אך יש גם כאלה העשויות מחומרים אחרים כמו במבוק, פלסטיק או סיליקון.[1] שולי הכוס מעוגלים כדי למנוע פגיעה בעור המטופל. במהלך הטיפול יוצרים תת-לחץ בחלל הכוס באמצעות שימוש באש בכוסות מסורתיות ובאמצעות שימוש במשאבה בכוסות מודרניות יותר. הכוס מונחת על גבי העור של המטופל ושואבת את העור והרקמות אשר מתחתיו אל תוך חלל הכוס. על פי שיטת הטיפול המסורתית, היניקה מסייעת לזרימת הדם ובכך מרפאה.`
        ,
        `Cupping therapy is a form of alternative medicine in which a local suction is created on the skin with the application of heated cups. Its practice mainly occurs in Asia but also in Eastern Europe, the Middle East, and Latin America. Cupping has been characterized as a pseudoscience and its practice as quackery.
        Cupping practitioners attempt to use cupping therapy for a wide array of medical conditions including fevers, chronic low back pain, poor appetite, indigestion, high blood pressure, acne, atopic dermatitis, psoriasis, anemia, stroke rehabilitation, nasal congestion, infertility, and menstrual period cramping`
        ]
    }
    ]
export default function Treatments() {
    const {language} = useLang()
  return (
    <Grid container spacing={1}>
        <Grid item container>
            <HeaderBody res={res} />
        </Grid>
        <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h3"
                    align={'center'}
                    alignContent={'center'}
                    sx={{
                    m: 2,
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                   {res.header[Number(language)]}
                </Typography>
          </Grid>
        {
            content.map((item, index)=>{
                return <Grid key={index + item.title} container  sx={{marginBottom:10}}  item xs={12}><TitleBodyImg res={item} height={400} /></Grid>
            })
        }
        
    </Grid>
  )
}
