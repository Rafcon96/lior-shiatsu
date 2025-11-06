import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/language.context';

export default function MediaCard({imgPath, title, body, linkPath}) {
  const { language } = useLang();
  const btnText = ["קרא עוד...", "Read more..."][Number(language)];
  return (
    <Card sx={{ maxWidth: 345, display:"grid" }}>
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
      <CardActions  >
        <Grid container alignItems={'flex-end'} dir={language ? 'ltr' : 'rtl'}>
          <Button variant='outlined' href={linkPath} size="small">
            <Link to={linkPath} style={{ textDecoration: 'none', color: 'inherit' }}>{btnText}</Link>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}