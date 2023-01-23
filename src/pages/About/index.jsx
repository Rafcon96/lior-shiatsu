import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <Grid container justifyContent={"center"} spacing={1}>
        
            <Grid item container justifyContent={"center"}><h2>לליאור פנית לא טעית</h2></Grid>
            <Grid item container justifyContent={"center"}>
                <img style={{height:300,width:200}} src={'./liorGif1.GIF'} />
            </Grid>
            <Grid item container justifyContent={"center"}><h2>:בין הכובעים שלי</h2></Grid>
            <Grid item container justifyContent={'space-evenly'}>
            <Grid item xl={6} justifyContent={"center"}>
                <h2>מומחה ברפואה סינית *</h2>
                <Grid item container justifyContent={"center"}>
                    <img style={{height:300,width:200}} src={'./liorChina.jpg'} />
                </Grid>
            </Grid>
            <Grid item xl={6} justifyContent={"center"}>
             <Grid item container justifyContent={"center"}><h2>לוחם ווקינגי אכזר *</h2></Grid>
                <Grid item container justifyContent={"center"}>
                    <img style={{height:300,width:200}} src={'./liorViking.GIF'} />
                </Grid>
            </Grid>
            <Grid item container justifyContent={"center"}><h2>וככה המצאתי את הדיקור הסיני\ווקינגי משילוב אומניות לחימה ווקינגיות ורפואה סינית</h2></Grid>
            <Grid item container justifyContent={"center"}>
                    <img style={{height:200,width:500}} src={'./car3.jpg'} />
            </Grid>
            <Grid item container justifyContent={"center"}><h2>הבנת חיברתי בין שניהם</h2></Grid>
            <Grid item container justifyContent={"center"}>
                    <img style={{height:300,width:300}} src={'./liorConect.jpg'} />
            </Grid>
            
            <Grid item container sx={{width:"100%",height:'200px',backgroundAttachment:'fixed',backgroundPosition:'center',backgroundImage:'url(./liorConect.jpg)',backgroundSize:"cover"}}></Grid>

            </Grid>
            
            
           
    </Grid>
  )
}
