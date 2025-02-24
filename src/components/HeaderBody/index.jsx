import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function HeaderBody({res}) {
  const {language} = useLang()
  return (
    <Grid container direction={"column"}  style={{border:"2px solid green"}} >
        <Grid item container justifyContent={"center"}>
                <Typography
                    variant="h4"
                    align={'center'}
                    alignContent={'center'}
                    sx={{
                    m: 2,
                    display:  'flex' ,
                    // fontFamily: 'Amatic SC',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                   {res.title[Number(language)]}
                </Typography>
          </Grid>
          <Grid item container justifyContent={"center"}>
            <Typography
                // variant="h6"
                align={'right'}
                sx={{
                  whiteSpace:"pre-line",
                mr: 2,
                display:  'flex' ,
                // fontFamily: 'Amatic SC',
                fontWeight: 700,
                
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                {res.body[Number(language)]}
            </Typography>
          </Grid>
          <Grid item container justifyContent={"center"} sx={{marginTop:2}}>
            <Typography
                // variant="h6"
                align={'right'}
                sx={{
                mr: 2,
                display:  'flex' ,
                // fontFamily: 'Amatic SC',
                fontWeight: 700,
                
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                {res.body2[Number(language)]}
            </Typography>
          </Grid>
    </Grid>
  )
}
