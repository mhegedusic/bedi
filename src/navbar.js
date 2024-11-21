import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './bedi.css';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className='text-center '>
      <a href='/'><img src='https://i.ibb.co/QM0Mg96/bedi-logo.jpg' alt='' className='logo'></img></a>
      <ul className='d-inline-flex ms-5 list-unstyled'>
      <li className='p-4'><Link className='text-decoration-none text-black fs-3' to="/">{t('menu.home')}</Link></li>
      <li className='p-4'><Link className='text-decoration-none text-black fs-3' to="/about">{t('menu.about')}</Link></li>
      <li className='p-4'><Link to="/contact" className='text-decoration-none text-black fs-3'>{t('menu.contact')}</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
