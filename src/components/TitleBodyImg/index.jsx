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
    <Grid container  > 
        <Grid item xs={12} md={6} sx={styles} >
            <Grid item container justifyContent={'center'} >
                {res?.imgPath ? <img src={process.env.PUBLIC_URL + res.imgPath} alt={res.title[Number(language)]} style={{height,width:"80%",borderRadius:res?.borderRadius}} /> : null}
            </Grid>
        </Grid>
        <Grid item container xs={12} md={6} sx={{order: { xs: 1, md: res.imgLeft ? 2 : 1 } }} alignContent={"start"} px={{xs:0, md:3}}>
            <Grid item container >
                <Typography
                    variant="h4"
                    align={language ? 'left' : 'right'}
                    sx={{
                    m: 1,
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize:'clamp(1.2rem, 3vw, 3rem)',
                    textAlign: language ? 'left' : 'right'
                    }}
                >
                    {res.title[Number(language)]}
                </Typography>
            </Grid>
            <Grid item container justifyContent={language ? 'flex-start' : 'flex-end'}>
                <Typography
                    variant="h6"
                    align={language ? 'left' : 'right'}
                    sx={{
                        whiteSpace:"pre-line",
                    mr: 1,
                    fontSize:'clamp(1rem, 2.5vw, 1.5rem)',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: language ? 'left' : 'right'
                    }}
                >
                    {res.body[Number(language)]}
                </Typography>
            </Grid>
        </Grid>           
    </Grid>
  )
}
