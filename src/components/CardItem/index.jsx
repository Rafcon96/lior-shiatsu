
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardItem({ content, index, sizeH = 400}) {
    
  return (
    <Card style={{margin:10, Zindex: 0,backgroundColor: 'transparent',
    boxShadow: 'none',}}>
      <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
            {Array.isArray(content) ? content[index].title : content.title} 
          </Typography>
      <CardActionArea>
        <CardMedia
          component="img"
          height={sizeH}
          image={Array.isArray(content) ? content[index].img : content.img}
          alt="green iguana"
          // sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          {Array.isArray(content)   ? content[index].body : content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
