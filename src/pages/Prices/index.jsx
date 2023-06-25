import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

const res = {
    title: ["מחירון לשעת טיפול", "price for hour of treatment"],
    header:{title:["טיפול", "treatment"],price1:["מחיר רגיל","Reguler Price"],
    price2:["מחיר לאחר הנחה","discount Price"]}

    
}
const itemRes = [
  {title:["שיאצו", "Shiatsu"],price1:380,price2:350},
  {title:["שיאצו ודיקור", "shiatsu & acupuncture"],price1:280,price2:250},
  {title:["עיסוי / עיסוי משולב","massage / massage with other"],price1:300,price2:280},
  {title:["טיפול עד הבית", "house treatment"],price1:500,price2:380},
]

export default function Prices() {
  const {language} = useLang()
  const row = (res) => {
    return (
      <Grid container justifyContent={"center"} alignItems={'center'}>
        <Grid xs={4} item sx={{order: language ? 1 : 3,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
                m: 2,
                display:  'flex' ,
                
                fontFamily: 'Amatic SC',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.title[Number(language)]}
          </Typography>
        </Grid>
        <Grid xs={4} item sx={{order: 2,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
                m: 2,
                display:  'flex' ,
                
                fontFamily: 'Amatic SC',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'line-through',
                fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.price1}
            </Typography>
        </Grid>
        <Grid xs={4} item sx={{order: language ? 3 : 1,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
                m: 2,
                display:  'flex' ,
                
                fontFamily: 'Amatic SC',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.price2}
            </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container justifyContent={'center'}> 
      <Grid item container justifyContent={'center'}>
      <Typography
            variant="h2"
            align={'center'}
            textAlign={'center'}
            alignContent={'center'}
            justifyContent={'center'}
            sx={{
            m: 2,
            display:  'flex' ,
            fontFamily: 'Amatic SC',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            fontSize:'clamp(1.9rem, 4.5vw, 4rem)'
            }}
        >
            {res.title[Number(language)]}
          </Typography>
      </Grid>
      <Grid container sx={{order:1}}>
        <Grid xs={4} item sx={{order: language ? 0 : 2,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
              m: 2,
              display:  'flex' ,
              fontFamily: 'Amatic SC',
              fontWeight: 700,
              
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.header.title[Number(language)]}
          </Typography>
        </Grid>
        <Grid xs={4} item sx={{order: 1,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
              m: 2,
              display:  'flex' ,
              
              fontFamily: 'Amatic SC',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.header.price1[Number(language)]}
            </Typography>
        </Grid>
        <Grid xs={4} item sx={{order: language ? 2 : 0,}}>
          <Typography
              variant="h6"
              align={'center'}
              textAlign={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              sx={{
              m: 2,
              display:  'flex' ,
              fontFamily: 'Amatic SC',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'clamp(1rem, 2.5vw, 2rem)'
              }}
          >
              {res.header.price2[Number(language)]}
            </Typography>
        </Grid>
        <Grid container sx={{border:"1px solid black",order:2}} justifyContent={'center'}></Grid>
        {
          itemRes.map((item, index)=><Grid container justifyContent={'center'} order={index + 3} key={index}>
              {row(item)}
            </Grid>)
        }
      </Grid>
    </Grid>
  )
}
