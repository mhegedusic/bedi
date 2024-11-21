import React from 'react';
import { useTranslation } from 'react-i18next';
import "bootstrap/dist/css/bootstrap.min.css";


function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='languageSwitch pe-2 text-primary '>
      <button className='btn btn-space btn-md' onClick={() => changeLanguage('hr')}>HR</button>
      <button className='btn btn-space btn-md' onClick={() => changeLanguage('de')}>DE</button>
     </div>
  );
}

export default LanguageSwitcher;
