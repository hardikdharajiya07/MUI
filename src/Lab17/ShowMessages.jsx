
import React, { createContext, useContext, useState } from 'react';

export const data= createContext();
const messages = {
  en: {
    welcome: "Welcome",
    goodbye: "Goodbye"
  },
  es: {
    welcome: "Bienvenido",
    goodbye: "Adiós"
  },
    fr: {
    welcome: "Bienvenue",
    goodbye: "Au revoir"
  }
};
export function ShowMessages({ children }) {
  const [language, setLanguage] = useState('en');
    return (
    <data.Provider value={{ language, setLanguage }}>
     <ShowMessagesContent/>
    </data.Provider>
  );
}
function ShowMessagesContent() {
  const { language, setLanguage } = useContext(data);
  return (
    <div>
      <div>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Spanish</button>
        <button onClick={() => setLanguage('fr')}>French</button>
      </div>    
        <h1>{messages[language].welcome}</h1>
        <h2>{messages[language].goodbye}</h2>
    </div>
  );
}
    
