import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='ms-4'>
      <h2>{t('menu.about')}</h2>
      <p>{t('about_content')}</p> {/* Dodaj odgovarajući sadržaj */}
    </div>
  );
}

export default About;
