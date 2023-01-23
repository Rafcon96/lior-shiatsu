import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function  nTitleBodyImg({res}) {
    
  return (
    <Grid container >
 
           
        <Grid item xs={12} md={5} sx={{backgroundImage:`url(${res.img})`, order: { xs: 2, md: res.imgLeft ? 1 : 2 }, backgroundPosition:"center", backgroundRepeat:"no-repeat", opacity:0.8, height:250 }}>
        </Grid>
        <Grid item container xs={12} md={7} sx={{order: { xs: 1, md: res.imgLeft ? 2 : 1 } }}>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h4"
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
                    {res.title}
                </Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h6"
                    align={'center'}
                    sx={{
                    mr: 2,
                    display:  'flex' ,
                    fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    {res.body}
                </Typography>
            </Grid>
        </Grid>           
    </Grid>
  )
}
