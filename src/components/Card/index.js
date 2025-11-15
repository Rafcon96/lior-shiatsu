import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLang } from '../../context/language.context';

export default function MediaCard({ imgPath, title, body, linkPath }) {
  const { language } = useLang();
  const btnText = ['קרא עוד...', 'Read more...'][Number(language)];
  return (
    <Card
      sx={{
        maxWidth: 360,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        boxShadow: '0 28px 55px rgba(15, 23, 42, 0.16)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,1) 100%)',
        overflow: 'hidden',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(45,212,191,0.05) 100%)',
          opacity: 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        },
        '&:hover': {
          transform: 'translateY(-10px) scale(1.01)',
          boxShadow: '0 40px 70px rgba(15, 23, 42, 0.2)',
          '&::before': {
            opacity: 1,
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          sx={{
            minHeight: 220,
            filter: 'brightness(0.92)',
            transition: 'transform 0.45s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          image={process.env.PUBLIC_URL + imgPath}
          title={title}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.35) 90%)',
            pointerEvents: 'none',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 700, color: 'rgba(15,23,42,0.92)' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="rgba(51,65,85,0.9)" sx={{ lineHeight: 1.6 }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          component={RouterLink}
          to={linkPath}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          variant="contained"
          color="primary"
          size="medium"
          sx={{
            borderRadius: 999,
            px: 3,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: '0 10px 25px rgba(79, 70, 229, 0.35)',
            '&:hover': {
              boxShadow: '0 12px 30px rgba(79, 70, 229, 0.45)',
            },
          }}
        >
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
}