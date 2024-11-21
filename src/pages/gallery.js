import React from 'react';
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('menu.gallery')}</h2>
      <p>{t('gallery_content')}</p> {/* Dodaj odgovarajući sadržaj */}
    </div>
  );
}

export default Gallery;
