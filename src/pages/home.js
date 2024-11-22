import React from 'react';
import { useTranslation } from 'react-i18next';
import '../bedi.css';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="home me-1">
        <h1 className="pb-5 text-center">{t('home')}</h1>
        <p>BEDI</p>
        <img
          className="w-100"
          src="https://i.ibb.co/8ss49S4/bedi1.jpg"
          alt=""
        ></img>
      </div>
      <div className="home_text">
        <p className="_title ms-4">{t('home_title')}</p>
        <p className="about ms-4">
          {t('home_content')}
          <ul>
            <li>{t('li1')}</li>
            <li>{t('li2')}</li>
            <li>{t('li3')}</li>
          </ul>
          {t('home_content2')}
        </p>
      </div>
      <div className="flex">
        <div className="column">
          <img
            src="https://i.ibb.co/55bsf9n/kuhinja-bedi.jpg"
            height="99.3%"
            width="100%"
            alt="kuhinja-bedi"
            border="0"
          ></img>
        </div>
        <div className="column">
          <img
            src="https://i.ibb.co/R77RZ0X/details.jpg"
            width="100%"
            alt="details"
            border="0"
          ></img>
        </div>
      </div>

      <div className="flex d-sm-flex">
        <div className="column ms-2">
          <p className="ms-2">
            {t("col_head")}
            <p className="ms-4 me-4">
              <br />
              {t("col1_p1")}
              <br />
              {t("col1_p2")}
              <br />
              {t("col1_p3")}
              <br />
              {t("col1_p4")}
              <br />
              {t("col1_p5")}
              <br />
              {t("col1_p6")}
              <br />
              {t("col1_p7")}
            </p>
          </p>
        </div>

        <div className="column ms-2">
          <p className="ms-2">
            {t("col2_p1")}
            <br />
            <p className="ms-0 p-4 ">
            {t("col2_p2")}
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
