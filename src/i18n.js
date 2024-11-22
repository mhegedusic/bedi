import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    hr: {
      translation: {
        "welcome": "Dobrodošli",
        "description": "Ovo je aplikacija na hrvatskom jeziku.",
        "home":"Filip - Montaža kuhinje i namještaja",
        "home_title": "Vaš pouzdani partner za montažu i selidbu namještaja",
        "home_content": "Dobrodošli na stranicu vaše omiljene destinacije za profesionalnu montažu, demontažu i transport namještaja. Naš cilj je olakšati svaki korak procesa selidbe i prilagodbe prostora. Bez obzira na to selite li se u novi dom, preuređujete postojeći prostor ili trebate pomoć s montažom kuhinje ili drugog namještaja, mi smo tu za vas. Naša usluga obuhvaća:",
        "li1": "Montažu i demontažu namještaja: Precizno i stručno rastavljamo i sastavljamo sve vrste namještaja",
        "li2": "Prijevoz na novu lokaciju: Sigurno prevozimo vaše dragocjenosti na novu adresu",
        "li3": "Adaptaciju prostora: Usklađujemo namještaj prema vašim željama i potrebama",
        "home_content2": "Naš tim čine iskusni profesionalci koji razumiju koliko su važni detalji. Svakom zadatku pristupamo odgovorno, osiguravajući da vaša imovina bude zaštićena i montirana do savršenstva. Odaberite nas za brzu, pouzdanu i bezbrižnu uslugu. Obratite nam se već danas i uvjerite se zašto su naši klijenti uvijek zadovoljni. Vaš dom zaslužuje najbolje – a mi smo tu da to omogućimo!",
        "menu": {
          "home": "Početna",
          "about": "O nama",
          "contact": "Kontakt",
          "gallery": "Galerija"
        },
        "about_content": "Ovo je sadržaj stranice O meni.",
        "contact_content": "Ovo je sadržaj stranice Kontakt.",
        "gallery_content": "Ovo je sadržaj stranice Galerija."
      }
    },
    de: {
      translation: {
        "welcome": "Willkommen",
        "description": "Dies ist eine Anwendung auf Deutsch.",
        "home":"Filip - Küchen & Möbelmontage",
        "home_title": "Ihr zuverlässiger Partner für Möbelmontage und Umzüge",
        "home_content": "Willkommen auf der Webseite Ihrer ersten Adresse für professionelle Möbelmontage, Demontage und Transport. Unser Ziel ist es, jeden Schritt Ihres Umzugs oder Ihrer Raumgestaltung zu erleichtern.Ob Sie umziehen, Ihren Wohnraum neu gestalten oder Unterstützung bei der Montage von Küchen oder Möbeln benötigen – wir sind für Sie da. Unsere Dienstleistungen umfassen:",
        "li1": "Möbelmontage und -demontage: Präzises und fachgerechtes Zerlegen und Zusammensetzen aller Möbeltypen",
        "li2": "Transport zum neuen Standort: Sicherer und zuverlässiger Transport Ihrer Möbel und Wertgegenstände",
        "li3": "Anpassung an Ihre Bedürfnisse: Individuelle Lösungen für Ihre Wohnräume",
        "home_content2": "Unser Team besteht aus erfahrenen Fachkräften, die auf jedes Detail achten. Wir behandeln Ihre Möbel mit größter Sorgfalt und sorgen dafür, dass alles perfekt montiert wird. Wählen Sie uns für eine schnelle, zuverlässige und stressfreie Abwicklung. Kontaktieren Sie uns noch heute und erleben Sie, warum unsere Kunden immer zufrieden sind. Ihr Zuhause verdient das Beste – und wir machen es möglich!",


        "menu": {
          "home": "Heim",
          "about": "Unternehmen",
          "contact": "Kontakt",
          "gallery": "Galerie"
        },
        "about_content": "Dies ist der Inhalt der Über mich-Seite.",
        "contact_content": "Dies ist der Inhalt der Kontaktseite.",
        "gallery_content": "Dies ist der Inhalt der Galerie-Seite."
      }
    }
  };
  
  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "hr", // Postavi inicijalni jezik
    fallbackLng: "hr", // Zadani jezik ako prijevod nije dostupan
    interpolation: {
      escapeValue: false // React već ima zaštitu od XSS-a
    }
  });

export default i18n;