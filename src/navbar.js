import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './bedi.css';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="text-center navigation">
      <a href="/">
        <img
          src="https://i.ibb.co/QM0Mg96/bedi-logo.jpg"
          alt=""
          className="logo"
        ></img>
      </a>
      <ul className="d-inline-flex ms-5 list-unstyled">
        <li className="p-3">
          <Link className="li_font" to="/">
            {t('menu.home')}
          </Link>
        </li>
        <li className="p-3">
          <Link className="li_font" to="/about">
            {t('menu.about')}
          </Link>
        </li>
        <li className="p-3">
          <Link to="/contact" className="li_font">
            {t('menu.contact')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
