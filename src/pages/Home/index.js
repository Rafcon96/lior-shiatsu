import ImageSlider from '../../components/Carousel'
import React from "react";
import Contact from '../Contact';


// להוסיף לשונית : - עמוד אחד של 4את הטיפולים 
// טיפולים

// על עצמי 

// תמונות מתחלפות 3 תמונות -- מקור יהיה ווצרפא ופייסבוק 

// מחירון  -- שאוכל להבין ולשנות בעצמי עם 
// מבצעים עם קו על מחיר + מחיר אחרי 

// + שורה של מבצעים לחודש XXX 
 
// צור קשר עם קישור ל' ON TOP \ FOTTER קישור ישיר ל WHATAPP 






const slides = [
    {title: "מסג איוורדי",
    img:"./car1.jpg",
     body:"עיסוי אירוודה זה עיסוי מענג, מרגיע וייחודי, הוא חלק מרכזי בשיטת ריפוי הוליסטית שמבוססת על המסורת ההודית וידועה כמחברת ומאזנת בין הגוף והנפש."}
     ,{title: "כוסות רוח",
     img:"./car2.jpg",
     body:"כוסות רוח, מרגיע וייחודי, הוא חלק מרכזי בשיטת ריפוי הוליסטית שמבוססת על המסורת ההודית וידועה כמחברת ומאזנת בין הגוף והנפש."}
     ,{title: "דיקור",
     img:"./car3.jpg",
     body:"דיקור של ליאור אם זה מערבי זה עושה כואב מאוד"}
    ]

// const containerStyles = {
//   width: "500px",
//   height: "280px",
//   margin: "0 auto",
// };
function Home() {
  return (
    < >
    
            <ImageSlider slides={slides} />
            {/* <Contact /> */}
      
    </>
  );
}

export default Home;