import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

export default function HeaderBody({res}) {
  const {language} = useLang()
  const alignment = language ? 'left' : 'right'
  // const justify = language ? 'flex-start' : 'flex-end'

  return (
    <Grid
      container
      direction="column"
      // alignItems={{ xs: 'stretch', md: justify }}
      sx={{
        textAlign: alignment,
        gap: 2,
      }}
    >
      <Grid item>
        <Typography
          variant="h4"
          align={alignment}
          sx={{
            mx: { xs: 1, md: 0 },
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {res.title[Number(language)]}
          
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            whiteSpace: 'pre-line',
            mx: { xs: 1, md: 0 },
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
          align={alignment}
        >
          {res.body[Number(language)]}
        </Typography>
      </Grid>
      <Grid item sx={{ mt: 1 }}>
        <Typography
          sx={{
            mx: { xs: 1, md: 0 },
            fontWeight: 500,
            color: 'inherit',
            textDecoration: 'none',
          }}
          align={alignment}
        >
          {res.body2[Number(language)]}
        </Typography>
      </Grid>
    </Grid>
  )
}
