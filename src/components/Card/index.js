import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({imgPath, title, body, linkPath}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ minHeight: "220px"}}
        image={process.env.PUBLIC_URL + imgPath}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button variant='outlined' href={linkPath} size="small">קרא עוד...</Button>
      </CardActions>
    </Card>
  );
}