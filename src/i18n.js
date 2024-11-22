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
        "gallery_content": "Ovo je sadržaj stranice Galerija.",
        "col_head":"Što trebam izdvojiti u proračunu kada planiram kuhinju?",
        "col1_p1": "1. Veličina sobe -",
        "col1_p2": "Nije samo dužni metar ono što određuje cijenu. Proizvodi po narudžbi također su ključni, na primjer ako se skladišni prostor tj. ormarići i slično planira više.",
        "col1_p3": "Materijali -",
        "col1_p4": "Iverica se smatra najjeftinijim postoljem za kuhinjski namještaj. Drveni furnir ili lak obično su u srednjem cjenovnom segmentu. Kamen i staklo su skuplji.",
        "col1_p5": "3. Ugradbeni aparati -",
        "col1_p6": "Ono što morate imati su: hladnjak i zamrzivač, ploča za kuhanje, pećnica, armatura. Perilica posuđa i napa također olakšavaju svakodnevno kuhanje. Strastveni kuhari imaju koristi od kuhala na paru, ladice za grijanje i hladnjaka za vino.",
        "col1_p7": "Za više informacija i ideja, osobni savjeti, vrlo rado odgovaramo na sva vaša pitanja!",
        "col2_p1": "Prilikom planiranja, a pogotovo kod montaže, veliku važnost dajemo da detalji budu na svom mjestu",
        "col2_p2": "Kod planiranja i montaže namještaja, posvećenost detaljima je ono što nas izdvaja. Svaki komad namještaja i svaki prostor tretiramo kao jedinstven, prilagođavajući se vašim potrebama i željama. Naš cilj je osigurati savršeno poravnanje, precizno postavljanje i funkcionalnost svakog elementa. Bilo da se radi o preciznom  postavljanju kuhinjskih elemenata ili skladnom uklapanju namještaja u vaš prostor, osiguravamo Vam da svaki detalj bude na pravom mjestu. Jer, sitnice čine razliku!"
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
        "gallery_content": "Dies ist der Inhalt der Galerie-Seite.",
        "col_head":"Was sollte ich bei der Küchenplanung im Budget berücksichtigen?",
        "col1_p1": "1. Raumgröße:",
        "col1_p2": "Der Preis hängt nicht nur von der laufenden Meterzahl ab. Maßanfertigungen, wie z. B. zusätzliche Schränke oder Stauraum, können die Kosten erhöhen.",
        "col1_p3": "2. Materialien:",
        "col1_p4": "Spanplatte ist die günstigste Option für Küchenmöbel. Holzfurniere oder Lackoberflächen liegen im mittleren Preissegment. Materialien wie Stein und Glas sind teurer.",
        "col1_p5": "3. Einbaugeräte:",
        "col1_p6": "Unverzichtbar sind: Kühlschrank, Gefrierschrank, Kochfeld, Backofen und Armaturen. Spülmaschine und Dunstabzug erleichtern den Alltag. Leidenschaftliche Köche profitieren von Dampfgarern, Wärmeschubladen und Weinkühlschränken.",
        "col1_p7": "Für weitere Informationen und persönliche Beratung stehen wir Ihnen gerne zur Verfügung!",
        "col2_p1": "Bei der Planung und vor allem bei der Montage legen wir großen Wert darauf, dass jedes Detail seinen richtigen Platz hat.",
        "col2_p2": "Bei der Planung und Montage von Möbeln ist unsere Liebe zum Detail das, was uns auszeichnet. Jedes Möbelstück und jeder Raum wird von uns als einzigartig betrachtet, stets abgestimmt auf Ihre Bedürfnisse und Wünsche. Unser Ziel ist es, perfekte Ausrichtung, präzise Installation und die volle Funktionalität jedes Elements zu gewährleisten. Egal ob es sich um die exakte Platzierung von Küchenelementen oder die harmonische Integration von Möbeln in Ihren Raum handelt – wir stellen sicher, dass jedes Detail an seinem Platz ist. Denn es sind die kleinen Dinge, die den Unterschied"
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