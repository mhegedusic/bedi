import React from 'react';
import './bedi.css';

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="icons">
          <p className="contactUs">Kontaktirajte nas</p>
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
          <a href="tel:+49 173 2989675">Tel: +49 173 2989675</a> <br />
          <a href="mailto:bf-design@hotmail.com">bf-design@hotmail.com</a>
        </strong>
      </footer>
    </div>
  );
};

export default Footer;
