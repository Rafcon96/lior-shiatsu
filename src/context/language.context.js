import React from 'react';
import { HEBROW } from '../utils/language';

const languageContext = React.createContext();
const {Provider} = languageContext;

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = React.useState(HEBROW)
  const toggleLanguage = () => setLanguage(v => !v)
  return (
    <Provider value={{language, toggleLanguage}}>
      {children}
    </Provider>
  )
}

export const useLang = () => React.useContext(languageContext)