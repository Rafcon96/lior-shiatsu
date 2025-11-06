import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

const res = {
  name: ['שם ומשפחה', 'Full name'],
  phone: ['טלפון', 'Phone'],
  subject: ['כותרת', 'Subject'],
  message: ['תוכן ההודעה', 'Message'],
  send: ['שלח', 'Send'],
}

export default function Contact() {
  const { language } = useLang()
  return (
    <Grid container dir={language ? 'ltr' : 'rtl'}>
        <Grid item container>
            <TextField  label={res.name[Number(language)]} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={res.phone[Number(language)]} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={res.subject[Number(language)]} variant="outlined"/>
        </Grid>
        <Grid item container>
            <TextField  label={res.message[Number(language)]} variant="outlined"/>
        </Grid>
        <Grid item container>
            <Button>{res.send[Number(language)]}</Button>
        </Grid>
    </Grid>
  )
}
