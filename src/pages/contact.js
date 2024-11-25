import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className='ms-4'>
      <h2>{t('menu.contact')}</h2>
      <p>{t('contact_content').split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}</p> {/* Dodaj odgovarajući sadržaj */}
    </div>
  );
}

export default Contact;
