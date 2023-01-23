import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Grid container> 
        <Grid item container>
            <TextField  label={"שם ומשפחה"} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={"טלפון"} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={"כותרת"} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={"תוכן ההודעה"} variant="outlined"/>
        </Grid>
        <Grid item container>
            <Button>send msg</Button>
        </Grid>
    </Grid>
  )
}
