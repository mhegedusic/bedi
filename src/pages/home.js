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
            Što trebam izdvojiti u proračunu kada planiram kuhinju?
            <p className="ms-4 me-4">
              <br />
              1. Veličina sobe -
              <br />
              Nije samo dužni metar ono što određuje cijenu. Proizvodi po
              narudžbi također su ključni, na primjer ako se skladišni prostor
              tj. ormarići i slično planira više.
              <br />
              2. Materijali -
              <br />
              Iverica se smatra najjeftinijim postoljem za kuhinjski namještaj.
              Drveni furnir ili lak obično su u srednjem cjenovnom segmentu.
              Kamen i staklo su skuplji.
              <br />
              3. Ugradbeni aparati -
              <br />
              Ono što morate imati su: hladnjak i zamrzivač, ploča za kuhanje,
              pećnica, armatura. Perilica posuđa i napa također olakšavaju
              svakodnevno kuhanje. Strastveni kuhari imaju koristi od kuhala na
              paru, ladice za grijanje i hladnjaka za vino.
              <br />
              Za više informacija i ideja, osobni savjeti, vrlo rado odgovaramo
              na sva vaša pitanja
            </p>
          </p>
        </div>

        <div className="column ms-2">
          <p className="ms-2">
            Prilikom planiranja, a pogotovo kod montaže, veliku važnost dajemo
            da detalji budu na svom mjestu
            <br />
            <p className="ms-4 p-4 ">
              Kod planiranja i montaže namještaja, posvećenost detaljima je ono
              što nas izdvaja. Svaki komad namještaja i svaki prostor tretiramo
              kao jedinstven, prilagođavajući se vašim potrebama i željama. Naš
              cilj je osigurati savršeno poravnanje, precizno postavljanje i
              funkcionalnost svakog elementa. Bilo da se radi o preciznom
              postavljanju kuhinjskih elemenata ili skladnom uklapanju
              namještaja u vaš prostor, osiguravamo Vam da svaki detalj bude na
              pravom mjestu. Jer, sitnice čine razliku!
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
