import { Button } from '@mui/material'
import React from 'react'
import { useLang } from '../../context/language.context'

const res = [
    {img:'./english.png',title:"ENGLISH"},
    {img:'./hebrow.png',title:"עברית"}
]

export default function LanguageBtn() {
    const {language, toggleLanguage} = useLang()
    return (
    <Button onClick={toggleLanguage}  startIcon={<img src={res[Number(language)].img} style={{width:20,height:"20px"}} alt={res[Number(language)].title} />}>{res[Number(language)].title}</Button>
  )
}
