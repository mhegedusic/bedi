import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languageSwitch pe-2 text-primary ">
      <button
        className="btn btn-space btn-md"
        onClick={() => changeLanguage('hr')}
      >
        <img
          src="https://i.ibb.co/tDrzztC/logo-croatia.png"
          alt="logo-croatia"
          border="0"
          width="20px"
          height="10px"
        ></img>
        HR
      </button>
      <button
        className="btn btn-space btn-md"
        onClick={() => changeLanguage('de')}
      >
        <img
          src="https://i.ibb.co/fF5r5Q9/deutch-logo.png"
          alt="deutch-logo"
          border="0"
          width="20px"
          height="10px"
        ></img>
        DE
      </button>
    </div>
  );
}

export default LanguageSwitcher;
