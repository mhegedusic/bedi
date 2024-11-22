import React from 'react';
import { useTranslation } from 'react-i18next';
import './bedi.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <footer>
        <div className="icons">
          <p className="contactUs"><strong>{t("contact_content")}</strong></p>
          <a href="https://www.facebook.com/fbmontage" target="_blank">
            <img
              src="https://www.freeiconspng.com/uploads/facebook-logo-3.png"
              width="350"
              alt="Facebook Logo HD PNG Pic"
            />
          </a>
          <a href="mailto: bf-design@hotmail.com">
            <img
              src="https://i.ibb.co/sjFJ7h0/email.png"
              alt="email"
              border="0"
            />
          </a>
        </div>
        <br />
        <strong>
          Filip Bedi <br />
          Filip - Küchen & Möbelmontage <br />
          <a href="tel:+49 173 2989675"><strong>Tel: +49 173 2989675</strong></a> <br />
          <a href="mailto:bf-design@hotmail.com"><strong>bf-design@hotmail.com</strong></a>
        </strong>
      </footer>
    </div>
  );
};

export default Footer;
