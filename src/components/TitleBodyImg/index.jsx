import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function TitleBodyImg({res , height = 250}) {
    const {language} = useLang()
    const styles = res.imgPath ? 
            { order: { xs: 2, md: res.imgLeft ? 1 : 2 }, height}
            :
            {backgroundImage:`url(${process.env.PUBLIC_URL}${res.img})`, order: { xs: 2, md: res.imgLeft ? 1 : 2 },
                backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:0.8, height
            }

  return (
    <Grid container spacing={2}> 
        <Grid item xs={12} md={6} sx={styles} >
            <Grid item container justifyContent={'center'} >
                {res?.imgPath ? <img src={process.env.PUBLIC_URL + res.imgPath} alt={res.title[Number(language)]} style={{height,width:"80%",borderRadius:res?.borderRadius}} /> : null}
            </Grid>
        </Grid>
        <Grid item container xs={12} md={6} sx={{order: { xs: 1, md: res.imgLeft ? 2 : 1 } }} alignContent={"start"}>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h4"
                    align={'center'}
                    alignContent={'center'}
                    sx={{
                    m: 1,
                    display:  'flex' ,
                    // fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize:'clamp(1.2rem, 2.0vw, 3rem)'
                    }}
                >
                    {res.title[Number(language)]}
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
                    // fontFamily: 'Amatic SC',
                    // fontWeight: 700,
                    fontSize:'clamp(1rem, 2.5vw, 1.5rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    {res.body[Number(language)]}
                </Typography>
            </Grid>
        </Grid>           
    </Grid>
  )
}
