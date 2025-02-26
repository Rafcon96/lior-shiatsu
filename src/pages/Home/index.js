// import ImageSlider from '../../components/Carousel'
import React from "react";
// import Contact from '../Contact';
import { Button, Grid, Typography } from '@mui/material';
import { useLang } from "../../context/language.context";
import { useNavigate } from "react-router-dom";

const res = {
  body:[`מטפל מוסמך בשיאצו, עיסוי שוודי ורקמות עמוקות,
  דיקור אורתופדי וסיני משולב .
  מטעם "קמפוס ברושים" באוניברסיטת תל אביב ומטעם "בית הספר למקצועות הטיפול" 
 בעברי הייתי מהנדס כימיה במחלקת הנדסה בחברת התרופות "טבע", וב-"חברת החשמל"
  במקביל סבלתי מכאבים פיזיים וכך נחשפתי לעולם התרפיה והתנועה.
  
 התאהבתי בחיבור בין המדע ללא נודע, והוקסמתי מגילוי יכולות הריפוי הקדומות שנמצאות בהיותנו יצורים חיים
 במשך השנים, התמקדתי יותר ויותר בעולם הטיפול. 
  אספתי כלים רבים מעולם הרפואה המערבי ומחוכמת המזרח העתיקה, מתחום המדע ומהתנועה
  כדי לייצר את חווית הטיפול המדויקת והיעילה ביותר.`
    ,
    `Qualified therapist in shiatsu and combined orthopedic and Chinese acupuncture
    On behalf of Borshim Campus at Tel Aviv University
     and on behalf of the School of Care Professions
     Plant engineer at a startup company, IEC,
     and in the engineering department at Tave Pharmaceuticals,
    In the course of my work, I began to suffer chronically from back and shoulder pain and recurring inflammations.
    At the same time I developed in the world of movement and therapy
     From the connection between science and the unknown, I fell in love with the touch of magic, I was fascinated
    In discovering the ability of ancient healing that is found in our being living beings,
    I left the world of engineering in favor of the therapeutic field.
    Over the years I have collected many tools to produce the best and personalized treatment experience for each patient that combines an understanding of the Western and Eastern worlds of medicine`
  ],
  actionButtons:[
    {buttonTitle:[`על הטיפול`,`About`],path:'../About'},
    // {buttonTitle:[`טיפולים`,`treatments`],path:'../treatments'},
    {buttonTitle:[`מחירון`,`prices`],path:'../prices'},
    // {buttonTitle:[`צור קשר`,`contact`],path:'lior-shiatsu/contact'},
  ]
}

// const containerStyles = {
//   width: "500px",
//   height: "280px",
//   margin: "0 auto",
// };
function Home() {
  const {language} = useLang()
  const navigate = useNavigate()
  const onBtnClick = (path) => {navigate(path)}

  return (
    <Grid container direction={'row'} sx={{backgroundImage:`url(${process.env.PUBLIC_URL}/home-background.jpg)`,paddingBottom:7}} dir="rtl">
      <Grid item direction={'column'} container xs={12} sm={6} justifyContent={'center'}>
        <Grid item container justifyContent={'center'} sx={{paddingTop:"20px"}}>
          <img src={`${process.env.PUBLIC_URL}/liorLogo2.png`} style={{width:"50%",borderRadius:'50%',boxShadow: '3px 3px red, -1em 0 .4em olive'}}/>
        </Grid>
      <Grid item >
        <Typography
          variant="h4"
          align={'center'}
          textAlign={'center'}
          alignContent={'center'}
          justifyContent={'center'}
          sx={{
            m:3,
            whiteSpace:"pre-line",
            wordSpacing: "0.2rem",
            lineHeight:1.6,
            display:  'flex',
            // fontFamily: 'Amatic SC',
            // fontWeight: 700,
            color: 'black',
            textDecoration: 'none',
            fontSize:'clamp(1rem, 2vw, 1.6rem)'
          }}
          >
              {res.body[Number(language)]}
          </Typography>
      </Grid >
        <Grid item container spacing={2} justifyContent={"center"} >
          {
            res.actionButtons.map((btn,index)=>
              <Grid item key={index}>
                <Button onClick={e=>{onBtnClick(btn.path)}} size='large' sx={{fontSize:'clamp(0.5rem, 2.5vw, 1rem)',width:'clamp(70px, 2.5vw, 100)'}} variant="contained">{btn.buttonTitle[Number(language)]}</Button>
              </Grid>
            )
          }
      </Grid>
      </Grid>
      <Grid item container sm={6} xs={12} justifyContent={'center'}  style={{order:0}}>
        <img src={`${process.env.PUBLIC_URL}/liorHome.jpeg`} style={{width:"95%",borderRadius:'10%',marginTop:20}}/>  
      </Grid>
      

            
      
    </Grid>
  );
}
{/* <ImageSlider slides={slides} /> */}
            {/* <Contact /> */}

export default Home;