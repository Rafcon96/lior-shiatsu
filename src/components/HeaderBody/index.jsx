import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function HeaderBody({res}) {
  return (
    <Grid container direction={"column"}  style={{border:"2px solid red"}} >
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
  )
}
