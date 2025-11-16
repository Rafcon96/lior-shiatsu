import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import { useLang } from '../../context/language.context'

const res = [

    {img:'/hebrow.png',title:"עב"},    {img:'/english.png',title:"EN"},
]

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#5A7A5A',
  border: '1px solid rgba(90, 122, 90, 0.3)',
  borderRadius: '8px',
  padding: theme.spacing(0.5, 1.5),
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(139, 166, 139, 0.1)',
    borderColor: '#8BA68B',
    transform: 'translateY(-1px)',
  },
  '& .MuiButton-startIcon': {
    // marginRight: theme.spacing(0.5),
    marginLeft: 0,
  },
}));

export default function LanguageBtn() {
    const {language, toggleLanguage} = useLang()
    const nextLangIndex = Number(!language)
    const nextLang = res[nextLangIndex]
    return (
    <StyledButton 
      onClick={toggleLanguage}
      aria-label={language ? 'Switch to Hebrew' : 'החלף לאנגלית'}
      startIcon={
        <img 
          src={`${process.env.PUBLIC_URL}${nextLang.img}`} 
          style={{width: 20, height: 20}} 
          alt={nextLang.title} 
        />
      }
    >
      {nextLang.title}
    </StyledButton>
  )
}
