/* Dáta modulov */
const moduly = [
  {
    id: 'modul0',
    title: 'Informácie',
    items: [
      { id: 'informacie', label: 'Informácie' },
    ],
  },
  {
    id: 'modul1',
    title: '1. Čo je Operačný Systém',
    items: [
      { id: 'uvod_definicia', label: 'Definícia a Funkcie' },
      { id: 'uvod_historia', label: 'História Vývoja' },
      { id: 'uvod_rozdelenie', label: 'Rozdelenia OS' },
      { id: 'uvod_test', label: 'Preverenie vedomostí' },
    ],
  },
  {
    id: 'modul2',
    title: '2. Windows',
    items: [
      { id: 'windows_historia', label: 'História' },
      { id: 'windows_verzie', label: 'Verzie' },
      { id: 'windows_info', label: 'Informácie' },
      { id: 'windows_test', label: 'Preverenie vedomostí' },
    ],
  },
  {
    id: 'modul3',
    title: '3. Linux',
    items: [
      { id: 'linux_historia', label: 'História' },
      { id: 'linux_verzie', label: 'Verzie' },
      { id: 'linux_info', label: 'Informácie' },
      { id: 'linux_test', label: 'Preverenie vedomostí' },
    ],
  },
  {
    id: 'modul4',
    title: '4. Mac OS',
    items: [
      { id: 'macos_historia', label: 'História' },
      { id: 'macos_verzie', label: 'Verzie' },
      { id: 'macos_info', label: 'Informácie' },
      { id: 'macos_test', label: 'Preverenie vedomostí' },
    ],
  },
  {
    id: 'modul5',
    title: '5. Špeciálne / Neznáme',
    items: [
      { id: 'specialne_reactos', label: 'ReactOS' },
      { id: 'specialne_haiku', label: 'Haiku OS' },
      { id: 'specialne_templeos', label: 'TempleOS' },
      { id: 'specialne_test', label: 'Preverenie vedomostí' },
    ],
  },
  {
    id: 'modul6',
    title: '6. Finálny Test',
    items: [
      { id: 'finalny_test', label: 'Finálny Test' },
    ],
  },
];

const databazaTestov = {
  'uvod_test': [
    {
      otazka: "V analógii s orchestrom, čím je Operačný systém?",
      moznosti: ["Hudobníkom", "Dirigentom", "Nástrojom"],
      spravna: 1
    },
    {
      otazka: "Čo sa stane, ak nastane chyba priamo v Jadre (Kernel) systému?",
      moznosti: ["Zavrie sa len aktuálny program", "Celý počítač sa zrúti (BSOD)", "Systém sa prepne do núdzového režimu"],
      spravna: 1
    },
    {
      otazka: "Ktorá funkcia OS umožňuje robiť viac vecí naraz (napr. hudba + písanie)?",
      moznosti: ["Správa súborov", "Správa zariadení", "Správa procesora (Multitasking)"],
      spravna: 2
    },
    {
      otazka: "Ako sa programovali počítače v 1. generácii (1945 – 1955)?",
      moznosti: ["Pomocou diernych štítkov", "Cez príkazový riadok", "Fyzickým prepájaním káblov"],
      spravna: 2
    },
    {
      otazka: "Čo bolo typické pre 2. generáciu počítačov (Dávkové spracovanie)?",
      moznosti: ["Dierne štítky", "Dotykové obrazovky", "Vznik internetu"],
      spravna: 0
    },
    {
      otazka: "Kto v skutočnosti vynašiel grafické rozhranie (myš a okná)?",
      moznosti: ["Steve Jobs (Apple)", "Bill Gates (Microsoft)", "Inžinieri v Xerox PARC"],
      spravna: 2
    },
    {
      otazka: "Čo znamená, že serverový OS beží v 'Headless' režime?",
      moznosti: ["Nemá pripojený monitor ani klávesnicu", "Nemá grafické rozhranie, len text", "Nemá žiadneho správcu"],
      spravna: 0
    },
    {
      otazka: "Čo je to 'Sandbox' (Pieskovisko) v mobilných systémoch?",
      moznosti: ["Priestor na ukladanie hier", "Bezpečnostná izolácia aplikácií", "Nástroj na šetrenie batérie"],
      spravna: 1
    },
    {
      otazka: "Aký typ systému je nutný pre riadenie airbagov v aute?",
      moznosti: ["Hard Real-Time OS", "Soft Real-Time OS", "Embedded Windows"],
      spravna: 0
    },
    {
      otazka: "Kde by ste najčastejšie našli Vstavaný (Embedded) OS?",
      moznosti: ["V superpočítačoch", "V inteligentnej chladničke alebo routeri", "V notebookoch pre študentov"],
      spravna: 1
    }
  ],
  
  'windows_test': [
    {
      otazka: "Ako sa pôvodne mal volať projekt Windows, kým nezasiahol marketing?",
      moznosti: ["Interface Manager", "Visual DOS", "Micro Screen"],
      spravna: 0
    },
    {
      otazka: "Prečo bol Windows 1.0 (1985) sklamaním?",
      moznosti: ["Bol príliš drahý", "Okná sa nemohli prekrývať", "Nemal podporu myši"],
      spravna: 1
    },
    {
      otazka: "Čo umožnila technológia 'Plug and Play' vo Windows 95?",
      moznosti: ["Hrať hry počas práce", "Jednoduchšie zapojenie hardvéru bez nastavovania", "Okamžité spustenie systému"],
      spravna: 1
    },
    {
      otazka: "Aký bol hlavný rozdiel medzi líniami Windows 9x a Windows NT?",
      moznosti: ["9x bol stabilný, NT bol na hry", "9x bol drahší ako NT", "NT bol stabilný a bezpečný, 9x bol len nadstavba DOSu"],
      spravna: 2
    },
    {
      otazka: "Ktorá verzia Windows definitívne zjednotila domáce a firemné systémy (9x a NT)?",
      moznosti: ["Windows 98", "Windows XP", "Windows 2000"],
      spravna: 1
    },
    {
      otazka: "Čo bolo považované za najväčšiu chybu Windows 8?",
      moznosti: ["Vysoká cena", "Odstránenie tlačidla Štart a Metro UI", "Pomalý štart systému"],
      spravna: 1
    },
    {
      otazka: "Prečo mal Windows 7 technické číslo verzie 6.1?",
      moznosti: ["Bola to chyba programátorov", "Kvôli spätnej kompatibilite starších programov", "Pretože to bol len vylepšený Windows Vista"],
      spravna: 1
    },
    {
      otazka: "Aký súborový systém používa Windows na pevnom disku (podporuje ACL a veľké súbory)?",
      moznosti: ["FAT32", "NTFS", "EXT4"],
      spravna: 1
    },
    {
      otazka: "Čo je to Windows Register (Registry)?",
      moznosti: ["Zoznam nainštalovaných hier", "Hierarchická databáza nastavení systému", "Priečinok s dokumentmi"],
      spravna: 1
    },
    {
      otazka: "Čo v skutočnosti znamená 'Modrá smrť' (BSOD)?",
      moznosti: ["Obranný mechanizmus jadra pred poškodením", "Vírus zničil pevný disk", "Monitor stratil signál"],
      spravna: 0
    }
  ],

  'linux_test': [
    {
      otazka: "Kto v roku 1991 poslal slávny e-mail o začiatku vývoja Linuxu?",
      moznosti: ["Steve Jobs", "Bill Gates", "Linus Torvalds"],
      spravna: 2
    },
    {
      otazka: "Ako sa mal Linux pôvodne volať (predtým, než ho premenoval Ari Lemmke)?",
      moznosti: ["Freax", "Minix 2.0", "TorvaldsOS"],
      spravna: 0
    },
    {
      otazka: "Čo je technicky 'Linux'?",
      moznosti: ["Grafické prostredie", "Len jadro (Kernel)", "Webový prehliadač"],
      spravna: 1
    },
    {
      otazka: "Aká licencia zaručuje, že zdrojový kód Linuxu je otvorený a zadarmo?",
      moznosti: ["Copyright", "GPL (General Public License)", "EULA"],
      spravna: 1
    },
    {
      otazka: "Čo je to 'Distribúcia'?",
      moznosti: ["Verzia jadra", "Chyba v systéme", "Kompletný balík jadra a softvéru (napr. Ubuntu)"],
      spravna: 2
    },
    {
      otazka: "Ako začína súborový systém v Linuxe (tzv. Root)?",
      moznosti: ["Lomkou /", "Diskom C:", "Priečinkom System"],
      spravna: 0
    },
    {
      otazka: "Čo znamená skratka LTS pri verziách (napr. Ubuntu 22.04 LTS)?",
      moznosti: ["Latest Technology System", "Long Term Support (Dlhodobá podpora)", "Linux Terminal System"],
      spravna: 1
    },
    {
      otazka: "Odkiaľ sa v Linuxe najbezpečnejšie inštalujú programy?",
      moznosti: ["Z náhodných stránok na webe", "Z centrálnych Repozitárov", "Z CD nosičov"],
      spravna: 1
    },
    {
      otazka: "Ktorý príkaz slúži na získanie práv superpoužívateľa (admina)?",
      moznosti: ["admin", "please", "sudo"],
      spravna: 2
    },
    {
      otazka: "Kde má Linux 100% podiel na trhu?",
      moznosti: ["Medzi 500 najvýkonnejšími superpočítačmi", "V kancelárskych notebookoch", "V herných konzolách"],
      spravna: 0
    }
  ],

  'macos_test': [
    {
      otazka: "Aký systém kúpil Apple v roku 1996, aby zachránil firmu a vytvoril základ pre Mac OS X?",
      moznosti: ["BeOS", "NeXTSTEP", "Windows 95"],
      spravna: 1
    },
    {
      otazka: "Čo je technickým základom (srdcom) systému macOS?",
      moznosti: ["MS-DOS", "Unix (Darwin)", "Linux"],
      spravna: 1
    },
    {
      otazka: "Ako sa volá funkcia, ktorá bráni spusteniu nepodpísaných aplikácií (malvéru)?",
      moznosti: ["Defender", "Gatekeeper", "Firewall"],
      spravna: 1
    },
    {
      otazka: "Čo znamená pojem 'Unified Memory' v čipoch Apple Silicon?",
      moznosti: ["Pamäť je zdieľaná medzi procesorom a grafikou bez nutnosti kopírovania", "Pamäť je uložená na cloude", "Možnosť spojiť dve RAM karty do jednej"],
      spravna: 0
    },
    {
      otazka: "Ako sa volá súborový systém optimalizovaný pre SSD disky (okamžité kopírovanie)?",
      moznosti: ["NTFS", "HFS+", "APFS"],
      spravna: 2
    },
    {
      otazka: "Akú zmenu v názvosloví verzií urobil Apple po roku 2013?",
      moznosti: ["Prešiel z 'Veľkých mačiek' na 'Miesta v Kalifornii'", "Prešiel z čísiel na mená bohov", "Prestal dávať verziám mená"],
      spravna: 0
    },
    {
      otazka: "Čo umožňuje funkcia 'Handoff' v rámci ekosystému Continuity?",
      moznosti: ["Prenášať obraz na televízor", "Rozrobiť prácu na iPhone a dokončiť ju na Macu", "Ovládať Mac hlasom"],
      spravna: 1
    },
    {
      otazka: "Ktorá funkcia slúži na rýchly bezdrôtový prenos súborov medzi Apple zariadeniami?",
      moznosti: ["Bluetooth Share", "AirDrop", "iTransfer"],
      spravna: 1
    },
    {
      otazka: "Čo bolo hlavným nedostatkom prvého systému Macintosh v roku 1984?",
      moznosti: ["Nemal myš", "Nemal chránený multitasking (jedna chyba zhodila celý PC)", "Bol čierno-biely"],
      spravna: 1
    },
    {
      otazka: "Koľko stojí aktualizácia na najnovší macOS od roku 2013?",
      moznosti: ["129 dolárov", "Je zadarmo", "9,99 mesačne"],
      spravna: 1
    }
  ],

  'specialne_test': [
    {
      otazka: "Aký je hlavný cieľ projektu ReactOS?",
      moznosti: ["Vytvoriť klon Linuxu", "Dosiahnuť binárnu kompatibilitu s Windowsom", "Vytvoriť nový systém pre Apple"],
      spravna: 1
    },
    {
      otazka: "Akú metódu používajú vývojári ReactOS, aby sa vyhli žalobám?",
      moznosti: ["Kradnutie kódu", "Clean Room Design (Reverzné inžinierstvo)", "Licencovanie od Microsoftu"],
      spravna: 1
    },
    {
      otazka: "V akom štádiu vývoja sa ReactOS nachádza (hoci sa vyvíja 25 rokov)?",
      moznosti: ["Alfa verzia (nie na bežné použitie)", "Finálna verzia", "Enterprise verzia"],
      spravna: 0
    },
    {
      otazka: "Na akej architektúre Windows je ReactOS postavený?",
      moznosti: ["Windows 9x (DOS)", "Windows NT (New Technology)", "Windows 10 Metro"],
      spravna: 1
    },
    {
      otazka: "Aké sú hardvérové nároky ReactOS?",
      moznosti: ["Vyžaduje superpočítač", "Potrebuje aspoň 8 GB RAM", "Beží aj na 96 MB RAM"],
      spravna: 2
    },
    {
      otazka: "Haiku je duchovným nástupcom ktorého zaniknutého systému?",
      moznosti: ["OS/2", "BeOS", "Solaris"],
      spravna: 1
    },
    {
      otazka: "Na aké použitie sa Haiku špecializuje?",
      moznosti: ["Serverové farmy", "Osobný počítač (Desktop)", "Mobilné telefóny"],
      spravna: 1
    },
    {
      otazka: "Čím je výnimočný súborový systém BFS v Haiku?",
      moznosti: ["Funguje ako databáza s metadátami", "Nepodporuje priečinky", "Je kompatibilný s Windows"],
      spravna: 0
    },
    {
      otazka: "Čo sú to 'Replikanty' v systéme Haiku?",
      moznosti: ["Vírusy", "Časti aplikácií pripnuté na plochu (Widgety)", "Zálohy systému"],
      spravna: 1
    },
    {
      otazka: "Vďaka čomu je systém Haiku taký rýchly a responzívny?",
      moznosti: ["Nemá grafické rozhranie", "Je napísaný v Assembleri", "Efektívne využíva multithreading (viac vlákien)"],
      spravna: 2
    },
    {
      otazka: "Kto sám vytvoril celý TempleOS (100 000 riadkov kódu)?",
      moznosti: ["Linus Torvalds", "Terry A. Davis", "Steve Wozniak"],
      spravna: 1
    },
    {
      otazka: "Prečo má TempleOS rozlíšenie iba 640x480 a 16 farieb?",
      moznosti: ["Autor nevedel naprogramovať lepšie", "Bol to 'Boží príkaz' pre jednoduchosť", "Systém je z roku 1980"],
      spravna: 1
    },
    {
      otazka: "V akom programovacom jazyku je TempleOS napísaný?",
      moznosti: ["C++", "Python", "HolyC"],
      spravna: 2
    },
    {
      otazka: "Čo znamená, že v TempleOS beží všetko v 'Ring-0'?",
      moznosti: ["Systém je extrémne bezpečný", "Aplikácie majú plný prístup k hardvéru (žiadna ochrana)", "Systém beží v kruhu"],
      spravna: 1
    },
    {
      otazka: "Prečo TempleOS nepodporuje pripojenie na internet?",
      moznosti: ["Aby ostal 'chrám' čistý pred vonkajším svetom", "Lebo internet je pomalý", "Lebo autor nemal modem"],
      spravna: 0
    }
  ],
  'finalny_test': [
    { 
      otazka: "K čomu sa v analógii prirovnáva operačný systém?", 
      moznosti: ["K huslistovi", "K dirigentovi", "K notám"], 
      spravna: 1 
    },
    { 
      otazka: "Ktorá časť OS má neobmedzený prístup k hardvéru?", 
      moznosti: ["Jadro (Kernel)", "Prehliadač", "Prieskumník"], 
      spravna: 0 
    },
    { 
      otazka: "Čo znamená multitasking?", 
      moznosti: ["Schopnosť robiť viac vecí naraz", "Rýchle kopírovanie súborov", "Pripojenie viacerých monitorov"], 
      spravna: 0 
    },
    { otazka: "Kde sa používajú RTOS (Real-Time) systémy?", 
      moznosti: ["V kanceláriách", "V autách a kardiostimulátoroch", "V mobiloch"], 
      spravna: 1 
    },
    { 
      otazka: "Ktorá verzia Windows priniesla tlačidlo Štart?", 
      moznosti: ["Windows 3.1", "Windows 95", "Windows XP"], 
      spravna: 1 
    },
    { 
      otazka: "Aký súborový systém používa Windows (podpora ACL)?", 
      moznosti: ["FAT32", "NTFS", "EXT4"], 
      spravna: 1 
    },
    { 
      otazka: "Čo je to 'Modrá smrť' (BSOD)?", 
      moznosti: ["Vírus", "Obranný reštart systému", "Chyba grafiky"], 
      spravna: 1 
    },
    { 
      otazka: "Ktorý Windows spojil domáce (9x) a firemné (NT) systémy?", 
      moznosti: ["Windows 2000", "Windows ME", "Windows XP"], 
      spravna: 2 
    },
    { 
      otazka: "Kto založil Linux?", 
      moznosti: ["Steve Jobs", "Bill Gates", "Linus Torvalds"], 
      spravna: 2 
    },
    { 
      otazka: "Čo je to 'Distribúcia'?", 
      moznosti: ["Iba jadro", "Kompletný balík (Jadro + softvér)", "Platená verzia"], 
      spravna: 1 
    },
    { 
      otazka: "Čo znamená 'Root'?", 
      moznosti: ["Superpoužívateľ (Admin)", "Koreň stromu", "Oboje"], 
      spravna: 2 
    },
    { 
      otazka: "Odkiaľ sa bezpečne inštaluje softvér v Linuxe?", 
      moznosti: ["Z repozitárov", "Z ulož.to", "Z exe súborov"], 
      spravna: 0 
    },
    { 
      otazka: "Na akom základe beží macOS?", 
      moznosti: ["MS-DOS", "Unix", "Linux"], 
      spravna: 1 
    },
    { 
      otazka: "Čo je to 'Gatekeeper'?", 
      moznosti: ["Ochrana pred nepodpísanými aplikáciami", "Správca súborov", "Antivírus"], 
      spravna: 0 
    },
    { 
      otazka: "Aký súborový systém používa Apple pre SSD?", 
      moznosti: ["NTFS", "APFS", "HFS+"], 
      spravna: 1 
    },
    { 
      otazka: "Čo umožňuje funkcia 'Continuity'?", 
      moznosti: ["Prepojenie Mac a iPhone", "Dlhšiu výdrž batérie", "Lacnejšie aplikácie"], 
      spravna: 0 
    },
    { 
      otazka: "Cieľ systému ReactOS?", 
      moznosti: ["Klonovať Windows", "Klonovať Linux", "Nový Android"], 
      spravna: 0 
    },
    { 
      otazka: "V akom jazyku je napísaný TempleOS?", 
      moznosti: ["C++", "HolyC", "Java"], 
      spravna: 1 
    },
    { 
      otazka: "Prečo TempleOS nemá sieť?", 
      moznosti: ["Pre bezpečnosť a čistotu", "Pre chybu v kóde", "Pre starý hardvér"], 
      spravna: 0 
    },
    { 
      otazka: "Čím je známy systém Haiku?", 
      moznosti: ["Je to nástupca BeOS a je veľmi rýchly", "Je to vírus", "Je to systém pre servery"], 
      spravna: 0 
    }
  ]
};

/* 1. Funkcia na vygenerovanie HTML */ 
function vygenerujHTMLTestu(idSekcie) {
  const otazky = databazaTestov[idSekcie];
  if (!otazky) return '<p>Test sa pripravuje.</p>';

  let html = `<div class="test-kontajner" id="test-${idSekcie}">`;
  
  otazky.forEach((polozka, index) => {
    html += `
      <div class="otazka-box">
        <h4>${index + 1}. ${polozka.otazka}</h4>
        <div class="moznosti-wrapper">
          ${polozka.moznosti.map((moznost, i) => `
            <button class="tlacidlo-test" onclick="skontrolujOdpoved('${idSekcie}', ${index}, ${i}, this)">
              ${moznost}
            </button>
          `).join('')}
        </div>
        <div class="vysledok-text" id="vysledok-${idSekcie}-${index}" style="margin-top: 10px; font-weight: 600;"></div>
      </div>
    `;
  });

  html += '</div>';
  return html;
}

/* 2. Funkcia na kontrolu odpovede */
function skontrolujOdpoved(idSekcie, indexOtazky, indexMoznosti, tlacidlo) {
  const rodic = tlacidlo.parentElement;
  const vsetkyTlacidla = rodic.querySelectorAll('.tlacidlo-test');

  /* LOGIKA PRE FINÁLNY TEST */
  if (idSekcie === 'finalny_test') {
    /* Odznačí ostatné v tejto otázke */
    vsetkyTlacidla.forEach(btn => btn.removeAttribute('data-oznacene'));
    tlacidlo.setAttribute('data-oznacene', 'true');
    rodic.setAttribute('data-vybrana-odpoved', indexMoznosti);
    return;
  }

  /* LOGIKA PRE BEŽNÉ TESTY */
  const spravnaOdpoved = databazaTestov[idSekcie][indexOtazky].spravna;
  const vysledokDiv = document.getElementById(`vysledok-${idSekcie}-${indexOtazky}`);
  
  vsetkyTlacidla.forEach(btn => btn.disabled = true);

  if (indexMoznosti === spravnaOdpoved) {
    tlacidlo.classList.add('spravne');
    vysledokDiv.innerHTML = '<span style="color: var(--success-color)">✅ Správne!</span>';
  } else {
    tlacidlo.classList.add('nespravne');
    vsetkyTlacidla[spravnaOdpoved].classList.add('spravne');
    vysledokDiv.innerHTML = '<span style="color: var(--error-color)">❌ Nesprávne.</span>';
  }
}

/* 3. Funkcia na vyhodnotenie finálneho testu */
function vyhodnotFinalnyTest() {
  clearInterval(casovacInterval);
  const otazky = databazaTestov['finalny_test'];
  let pocetSpravnych = 0;
  
  /* Nájde kontajner s otázkami */
  const kontajner = document.querySelector('#test-finalny_test');
  if (!kontajner) return;

  const otazkyDOM = kontajner.querySelectorAll('.otazka-box');

  otazky.forEach((otazkaData, index) => {
    const box = otazkyDOM[index];
    const wrapper = box.querySelector('.moznosti-wrapper');
    const tlacidla = wrapper.querySelectorAll('.tlacidlo-test');
    const vysledokDiv = document.getElementById(`vysledok-finalny_test-${index}`);
    
    /* Zisti, čo užívateľ vybral */
    const vybranaIndex = wrapper.getAttribute('data-vybrana-odpoved');

    /* Zablokuj tlačidlá */
    tlacidla.forEach(btn => btn.disabled = true);

    if (vybranaIndex !== null) {
      const tip = parseInt(vybranaIndex);
      if (tip === otazkaData.spravna) {
        pocetSpravnych++;
        tlacidla[tip].classList.add('spravne'); 
        vysledokDiv.innerHTML = '<span style="color: var(--success-color)">✅ Správne</span>';
      } else {
        tlacidla[tip].classList.add('nespravne'); 
        tlacidla[otazkaData.spravna].classList.add('spravne'); 
        vysledokDiv.innerHTML = '<span style="color: var(--error-color)">❌ Chyba</span>';
      }
    } else {
      /* Ak neodpovedal */
      tlacidla[otazkaData.spravna].classList.add('spravne');
      vysledokDiv.innerHTML = '<span style="color: orange">⚠️ Neodpovedané</span>';
    }
  });

  /* Výpočet známky */
  const pocetOtazok = otazky.length;
  const percenta = Math.round((pocetSpravnych / pocetOtazok) * 100);
  let znamka = 5;
  let farba = "var(--error-color)";
  
  if (percenta >= 90) { znamka = 1; farba = "var(--success-color)"; }
  else if (percenta >= 75) { znamka = 2; farba = "#17a2b8"; } 
  else if (percenta >= 50) { znamka = 3; farba = "#ffc107"; } 
  else if (percenta >= 30) { znamka = 4; farba = "#fd7e14"; } 

  /* Zobrazenie výsledku */
  const kontajnerVysledku = document.getElementById('celkove-hodnotenie');
  kontajnerVysledku.innerHTML = `
    <div class="vysledok-box" style="border-color: ${farba}">
      <h3 style="color: ${farba}; font-size: 2.5rem; margin-bottom: 0.5rem;">Známka: ${znamka}</h3>
      <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Získal si <strong>${pocetSpravnych}</strong> z ${pocetOtazok} bodov (${percenta}%).</p>
      <div style="width: 100%; background: #ddd; height: 10px; border-radius: 5px; margin-top: 15px; overflow: hidden;">
        <div style="width: ${percenta}%; background: ${farba}; height: 100%;"></div>
      </div>
    </div>
  `;
  
  kontajnerVysledku.scrollIntoView({ behavior: 'smooth' });
}

/* Funkcia na odpočítavanie času */
function spustitCasovac(minuty) {
  // Najprv zrušíme starý časovač, ak beží
  clearInterval(casovacInterval);
  
  let sekundyCelkovo = minuty * 60;
  const displej = document.getElementById('casovac-displej');
  
  // Ak tam nie je displej (napr. sme odišli zo sekcie), skonči
  if (!displej) return;

  function aktualizuj() {
    // Výpočet minút a sekúnd
    const m = Math.floor(sekundyCelkovo / 60);
    const s = sekundyCelkovo % 60;
    
    // Formátovanie (aby bolo 05 namiesto 5)
    displej.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;

    // Zmena farby, keď ostáva málo času (posledná minúta)
    if (sekundyCelkovo < 60) {
      displej.style.color = '#ff6b6b'; // Červená
    }

    // Koniec času
    if (sekundyCelkovo <= 0) {
      clearInterval(casovacInterval);
      alert("⏳ Čas vypršal! Test sa teraz automaticky ukončí.");
      vyhodnotFinalnyTest(); // Automaticky vyhodnotí a zablokuje tlačidlá
    }

    sekundyCelkovo--;
  }

  // Spustíme hneď a potom každú sekundu
  aktualizuj();
  casovacInterval = setInterval(aktualizuj, 1000);
}

let tmavyRezim = false;
let aktivnaSekcia = 'informacie';
let rozbaleneModuly = { modul0: false };
let hesloOdblokované = false;
let casovacInterval;

/* Načítaj voľbu tmavého režimu */
function nacitajRezim() {
  const jeTmavyRezim = localStorage.getItem('tmavyRezim') === 'true';
  tmavyRezim = jeTmavyRezim;
  if (jeTmavyRezim) {
    document.documentElement.classList.add('tmavyRezim');
    document.getElementById('tlacidlo-rezim').textContent = '☀️ Svetlý režim';
  }
}

/* Prepnutie režimu */
function prepnutieRezim() {
  tmavyRezim = !tmavyRezim;
  localStorage.setItem('tmavyRezim', tmavyRezim.toString());
  if (tmavyRezim) {
    document.documentElement.classList.add('tmavyRezim');
    document.getElementById('tlacidlo-rezim').textContent = '☀️ Svetlý režim';
  } else {
    document.documentElement.classList.remove('tmavyRezim');
    document.getElementById('tlacidlo-rezim').textContent = '🌙 Tmavý režim';
  }
}

/* Prepnutie modulu */
function prepnutieModulu(idModulu) {
  rozbaleneModuly[idModulu] = !rozbaleneModuly[idModulu];
  renderujBocnyPanel();
}

/* Zobrazenie obsahu */
function zobrazObsah(idSekcie) {
  if (idSekcie === 'finalny_test' && !hesloOdblokované) {
    aktivnaSekcia = idSekcie;
    renderujObsah();
    renderujBocnyPanel();
    return;
  }

  aktivnaSekcia = idSekcie;
  renderujObsah();
  const prvokObsahu = document.getElementById('obsah');
  if (prvokObsahu) {
    prvokObsahu.scrollTop = 0;
  }
  renderujBocnyPanel();
}

/* Overenie hesla */
function overHeslo() {
  const vstup = document.getElementById('vstup-hesla').value;
  const chybaDiv = document.getElementById('chyba-hesla');
  
  if (vstup === 'SPSTAD123') {
    hesloOdblokované = true;
    chybaDiv.classList.remove('zobrazit');
    renderujObsah();
  } else {
    chybaDiv.classList.add('zobrazit');
    chybaDiv.textContent = 'Nesprávne heslo. Skúste znova.';
    document.getElementById('vstup-hesla').value = '';
  }
}

/* Renderovanie bočného panelu */
function renderujBocnyPanel() {
  const panel = document.getElementById('bocny-panel');
  panel.innerHTML = '';

  moduly.forEach((modul) => {
    const modulDiv = document.createElement('div');
    modulDiv.className = 'bocny-panel-modul';

    // Logika pre svietenie hlavného tlačidla:
    let jeAktivnyHlavny = false;

    if (modul.id === 'modul0' || modul.id === 'modul6') {
      // Pre Informácie a Finálny test: Svieti, ak je otvorená ich sekcia
      jeAktivnyHlavny = (aktivnaSekcia === modul.items[0].id);
    } else {
      // Pre Windows, Linux atď: Svieti, ak je rozbalený
      jeAktivnyHlavny = rozbaleneModuly[modul.id];
    }

    const tlacidloModulu = document.createElement('button');
    tlacidloModulu.className = `nazov-modulu ${jeAktivnyHlavny ? 'aktivny' : ''}`;

    // Moduly bez podsekcií (Informácie a Finálny Test)
    if (modul.id === 'modul0' || modul.id === 'modul6') {
      tlacidloModulu.innerHTML = `<span>${modul.title}</span>`;
      tlacidloModulu.style.cursor = 'pointer';
      tlacidloModulu.onclick = () => zobrazObsah(modul.items[0].id);
    } else {
      // Moduly s podsekciami (Windows, Linux...)
      tlacidloModulu.innerHTML = `
        <span>${modul.title}</span>
        <span class="sipka-modulu ${rozbaleneModuly[modul.id] ? 'otvorene' : ''}">▼</span>
      `;
      tlacidloModulu.onclick = () => prepnutieModulu(modul.id);
    }

    const podmenu = document.createElement('div');
    podmenu.className = `podmenu ${rozbaleneModuly[modul.id] ? 'otvorene' : ''}`;

    modul.items.forEach((polozka) => {
      const tlacidloPolozky = document.createElement('button');
      // Tu sa kontroluje, či má svietiť podsekcia (napr. História)
      tlacidloPolozky.className = `polozka-podmenu ${aktivnaSekcia === polozka.id ? 'aktivny' : ''}`;
      tlacidloPolozky.textContent = polozka.label;
      tlacidloPolozky.onclick = () => zobrazObsah(polozka.id);
      podmenu.appendChild(tlacidloPolozky);
    });

    modulDiv.appendChild(tlacidloModulu);
    
    if (modul.id !== 'modul0' && modul.id !== 'modul6') {
      modulDiv.appendChild(podmenu);
    }
    
    panel.appendChild(modulDiv);
  });
}

/* Renderovanie obsahu */
function renderujObsah() {
  clearInterval(casovacInterval);
  const obsahDiv = document.getElementById('obsah');
  obsahDiv.innerHTML = '';

  /*=============================
    INFORMÁCIE
    =============================*/
  if (aktivnaSekcia === 'informacie') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Vitajte na OS Akadémii</h2>
          <p>Táto interaktívna vzdelávacia platforma ti pomôže pochopiť svet operačných systémov. Naučíš sa históriu ich vývoja, poznáš najpoužívanejšie OS a pochopíš, ako fungujú.</p>
          
          <h3>Čo nájdeš na tejto stránke?</h3>
          <ul>
            <li><strong>1. Čo je Operačný Systém</strong> – Základné informácie a história OS</li>
            <li><strong>2. Windows</strong> – Najpoužívanejší OS na svete</li>
            <li><strong>3. Linux</strong> – Open-source OS dominujúci na serveroch</li>
            <li><strong>4. Mac OS</strong> – OS pre počítače Apple</li>
            <li><strong>5. Špeciálne / Neznáme OS</strong> – Ďalšie zaujímavé operačné systémy</li>
          </ul>

          <h3>Tmavý režim</h3>
          <p>Kliknite na tlačidlo v pravom hornom rohu na prepnutie medzi svetlým a tmavým režimom. Vaša voľba sa automaticky uloží.</p>
        </div>
      </section>
    `;
  }

  /*=============================
    ČO JE OPERAČNÝ SYSTÉM
    =============================*/
  else if (aktivnaSekcia === 'uvod_definicia') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Čo je to Operačný systém?</h2>
          <p>
            Operačný systém (OS) je základný softvér, ktorý ovláda všetok hardvér v počítači a poskytuje prostredie pre beh ostatných programov. Je to <strong>prostredník</strong> (interface) medzi vami (používateľom) a kremíkovými čipmi vo vnútri skrinky.
          </p>
          
          <p>
            <strong>Analógia:</strong> Predstavte si počítač ako orchester. Hudobníci sú hardvér (jeden hrá na bicie, iný na husle). Operačný systém je <strong>dirigent</strong>. Bez neho by každý hral inak a vznikol by chaos. Dirigent určuje, kto má kedy hrať a ako nahlas.
          </p>

          <h3>Štyri hlavné úlohy OS (Manažér zdrojov)</h3>
          <p>Operačný systém musí neustále spravodlivo rozdeľovať zdroje počítača:</p>
          <ul>
            <li><strong>Správa procesora (Process Management):</strong> Rozhoduje, ktorý program dostane prístup k procesoru a na ako dlho. Vďaka tomu môžeme robiť viac vecí naraz (multitasking) – počúvať hudbu a zároveň písať dokument.</li>
            <li><strong>Správa pamäte (Memory Management):</strong> Každý program potrebuje RAM. OS prideľuje pamäť tak, aby si aplikácie navzájom neprepísali dáta. Keď je pamäť plná, OS odloží dáta na disk (swapovanie).</li>
            <li><strong>Správa súborov (File System):</strong> Hardvér pozná len nuly a jednotky. OS nám ich premieňa na zrozumiteľné priečinky a súbory, ktoré môžeme kopírovať, mazať a presúvať.</li>
            <li><strong>Správa zariadení (I/O Management):</strong> Komunikuje s myšou, klávesnicou, tlačiarňou či grafickou kartou pomocou špeciálnych miniprogramov nazývaných <strong>ovládače (drivers)</strong>.</li>
          </ul>

          <h3>Srdce systému: Kernel (Jadro)</h3>
          <p>
            Najdôležitejšou časťou každého OS je <strong>Jadro (Kernel)</strong>.
          </p>
          <p>
            Je to prvá časť systému, ktorá sa načíta do pamäte pri zapnutí počítača a zostáva tam až do vypnutia. Kernel má, na rozdiel od bežných programov, <strong>neobmedzený prístup</strong> k hardvéru. Ak spadne prehliadač, kernel ho zavrie. Ak spadne kernel (chyba v jadre), zrúti sa celý počítač (napr. Modrá smrť vo Windows).
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'uvod_historia') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Od diernych štítkov po umelú inteligenciu</h2>
          <p>
            Operačné systémy neexistovali vždy. Prvé počítače boli len obrovské kalkulačky, ktoré obsluhovali ľudia ručným prepájaním káblov. Vývoj OS sa zvyčajne delí na <strong>štyri generácie</strong>.
          </p>

          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Generácia</th>
                  <th>Obdobie</th>
                  <th>Technológia</th>
                  <th>Ako to fungovalo?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Bez OS</strong></td>
                  <td>1945 – 1955</td>
                  <td>Vákuové elektrónky</td>
                  <td>Neexistoval žiaden softvér. Programátori museli fyzicky prepájať obvody a káble (plugboards). Počítač patril v jednom čase len jednému človeku.</td>
                </tr>
                <tr>
                  <td><strong>2. Dávkové spracovanie</strong></td>
                  <td>1955 – 1965</td>
                  <td>Tranzistory</td>
                  <td>Programy sa písali na <strong>dierne štítky</strong>. Operátor zozbieral štítky od viacerých programátorov do "dávky" (batch) a pustil ich naraz.</td>
                </tr>
                <tr>
                  <td><strong>3. Multitasking</strong></td>
                  <td>1965 – 1980</td>
                  <td>Integrované obvody</td>
                  <td>Vzniklo <strong>Zdieľanie času (Time-sharing)</strong>. Jeden veľký počítač (Mainframe) obsluhoval desiatky ľudí naraz cez terminály. Tu sa zrodil legendárny <strong>UNIX</strong>.</td>
                </tr>
                <tr>
                  <td><strong>4. Osobné počítače</strong></td>
                  <td>1980 – Dnes</td>
                  <td>Mikroprocesory</td>
                  <td>Počítače sa zmenšili. Vznikol MS-DOS a neskôr revolúcia v podobe <strong>GUI</strong> (okná, myš, ikonky), ktorú priniesol Apple a Microsoft.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Kľúčový moment: Xerox PARC</h3>
          <p>
            Málokto vie, že moderné ovládanie počítača (Myš + Okná) nevymyslel ani Apple, ani Microsoft. Vymysleli ho inžinieri vo výskumnom centre <strong>Xerox PARC</strong> v 70. rokoch.
          </p>
          <p>
            Vedenie Xeroxu tomu neverilo, ale <strong>Steve Jobs</strong> (Apple) to uvidel počas exkurzie a pochopil, že toto je budúcnosť. Neskôr sa inšpiroval aj <strong>Bill Gates</strong> (Microsoft) a zvyšok je história.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'uvod_rozdelenie') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Rozdelenie operačných systémov podľa použitia</h2>
          <p>
            Univerzálny operačný systém neexistuje. Systém, ktorý riadi jadrovú elektráreň, musí fungovať úplne inak ako systém vo vašom mobile. Preto OS delíme do niekoľkých kategórií podľa toho, na čo sú určené.
          </p>

          <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 20px 0;">

          <h3>1. Desktopové OS (General Purpose)</h3>
          <p>
            Tieto systémy poznáme najlepšie. Sú navrhnuté pre <strong>interakciu s používateľom</strong>. Ich hlavným cieľom je pohodlné ovládanie (GUI), podpora širokej škály hardvéru (tlačiarne, skenery) a beh bežných aplikácií (prehliadač, hry, Office).
          </p>
          <ul>
            <li><strong>Špecifikum:</strong> Nie sú optimalizované na kritický výkon, ale na "dobrý pocit" používateľa. Ak program sekne na 2 sekundy, nič hrozné sa nestane.</li>
            <li><strong>Príklady:</strong> Microsoft Windows, macOS, Linux (Ubuntu, Fedora), ChromeOS.</li>
          </ul>

          <h3>2. Serverové OS</h3>
          <p>
            Bežia na výkonných počítačoch v dátových centrách. Často nemajú ani monitor, ani klávesnicu a myš (tzv. <strong>Headless</strong> režim) a ovládajú sa na diaľku cez príkazový riadok.
          </p>
          <ul>
            <li><strong>Cieľ:</strong> Stabilita a Bezpečnosť. Musia bežať mesiace až roky bez reštartu (vysoký Uptime).</li>
            <li><strong>Multiusers:</strong> Musia zvládať tisíce pripojených používateľov naraz (napr. webstránka, na ktorú chodí veľa ľudí).</li>
            <li><strong>Príklady:</strong> Windows Server, Red Hat Enterprise Linux (RHEL), Debian, FreeBSD, Solaris.</li>
          </ul>

          <h3>3. Mobilné OS</h3>
          <p>
            Vznikli s príchodom smartfónov. Sú optimalizované pre dotykové obrazovky, procesory typu ARM a hlavne pre <strong>šetrenie batérie</strong>.
          </p>
          <ul>
            <li><strong>Sandbox (Pieskovisko):</strong> Z bezpečnostných dôvodov tu aplikácie nemajú prístup k celému systému. Instagram nemôže čítať dáta z vašej bankovej aplikácie.</li>
            <li><strong>Príklady:</strong> Android (založený na Linuxe), iOS (založený na Unixe/Darwin).</li>
          </ul>

          <h3>4. RTOS (Real-Time Operating Systems)</h3>
          <p>
            Toto je špeciálna kategória pre kritické nasadenie. Pri bežnom Windowse neviete zaručiť, že operácia prebehne presne za 1 milisekundu. Pri RTOS to zaručiť musíte.
          </p>
          <p>
            Delíme ich na dve skupiny:
          </p>
          <ul>
            <li><strong>Hard Real-Time:</strong> Ak systém nestihne termín, je to katastrofa (napr. vystrelenie airbagu, riadenie kardiostimulátora, brzdy v aute).</li>
            <li><strong>Soft Real-Time:</strong> Ak systém nestihne termín, klesne kvalita, ale nikto nezomrie (napr. streamovanie videa – ak dáta neprídu včas, obraz len sekne).</li>
            <li><strong>Príklady:</strong> QNX (v autách), VxWorks (sondy na Marse), FreeRTOS.</li>
          </ul>

          <h3>5. Vstavané (Embedded) OS</h3>
          <p>
            Sú to "neviditeľné" systémy všade okolo nás. Často majú veľmi slabý procesor a málo pamäte. Sú navrhnuté tak, aby robili len jednu konkrétnu vec, ale robili ju efektívne.
          </p>
          <ul>
            <li><strong>Kde ich nájdete:</strong> Inteligentné chladničky, routery, bankomaty, semafory, robotické vysávače.</li>
            <li><strong>Príklady:</strong> Embedded Linux, Windows IoT, TinyOS.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'uvod_test') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Informácie o Operačných Systémoch – Preverenie vedomostí</h2>
          
          ${vygenerujHTMLTestu('uvod_test')}

        </div>
      </section>
    `;
  }

  /*=============================
    WINDOWS 
    =============================*/
  else if (aktivnaSekcia === 'windows_historia') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Komplexná história Microsoft Windows</h2>
          
          <p>
            Cesta operačného systému Windows sa začala ako odvážna reakcia na meniaci sa svet výpočtovej techniky. V raných 80. rokoch minulého storočia počítače neboli intuitívne stroje. Vyžadovali znalosť syntaxe a príkazov. Príbeh Windows je príbehom prechodu od textu k obrazu.
          </p>

          <h3>Zrod z DOSu: Projekt Interface Manager (1981 – 1985)</h3>
          <p>
            Keď IBM v roku 1981 uviedlo svoj PC, bežalo na systéme MS-DOS od Microsoftu. Bill Gates však videl demonštráciu grafického rozhrania (GUI) v laboratóriách Xerox PARC a neskôr u Apple. Pochopil, že ak chce Microsoft prežiť, musí vytvoriť "grafickú vrstvu". Pôvodný názov projektu bol <em>Interface Manager</em>, ale marketingový stratég Rowland Hanson presadil názov <strong>Windows</strong>, pretože systém pracoval s viacerými oknami na obrazovke.
          </p>
          <p>
            <strong>Windows 1.0 (1985)</strong> bol však sklamaním. Okná sa nemohli prekrývať (kvôli hrozbe žaloby od Apple), navigácia bola neohrabaná a aplikácií bolo málo. Skutočný úspech prišiel až s verziami <strong>3.0 a 3.1</strong> v 90. rokoch, ktoré po prvýkrát priniesli skutočný multitasking a ikonické prostredie, ktoré definovalo modernú prácu v kancelárii.
          </p>

          <h3>Zmena paradigmy: Windows 95 a internetová vojna</h3>
          <p>
            Vydanie <strong>Windows 95</strong> v auguste 1995 bolo kultúrnym fenoménom. Systém definitívne oddelil svet technických nadšencov od bežných užívateľov. Zaviedol architektúru <strong>Plug and Play</strong>, ktorá (hoci vtedy ešte nestabilná) predznamenala éru, kde sa hardvér už nepripájal zložitým nastavovaním jumperov, ale jednoduchým zapojením.
          </p>
          <p>
            V tomto období sa odohrala aj tzv. "Vojna prehliadačov". Microsoft si uvedomil silu internetu neskoro, ale razantne. Integroval <strong>Internet Explorer</strong> priamo do systému Windows 98, čím prakticky zlikvidoval konkurenčný Netscape. Tento krok viedol k historickému antimonopolnému súdu v USA, kde bol Microsoft obvinený zo zneužívania dominantného postavenia na trhu.
          </p>
          

          <h3>Rozkol jadier: 9x vs. NT</h3>
          <p>
            Málokto vie, že Microsoft dlho vyvíjal dva úplne odlišné systémy súčasne. 
          </p>
          <ul>
            <li><strong>Línia 9x (95, 98, ME):</strong> Vychádzala zo starých základov DOSu. Vynikala pri hrách, ale často "padala" a mala slabé zabezpečenie.</li>
            <li><strong>Línia NT (New Technology):</strong> Vznikala od nuly pod vedením Davea Cutlera (ex-Digital Equipment). Vyznačovala sa extrémnou stabilitou, bezpečnosťou a bola určená pre servery a pracovné stanice.</li>
          </ul>
          <p>
            K historickému zjednoteniu došlo v roku 2001 s príchodom <strong>Windows XP</strong>. Microsoft zobral stabilné jadro NT a obliekol ho do farebného, užívateľsky prívetivého prostredia. XP sa stal takým úspešným, že paradoxne brzdil inovácie na ďalších 10 rokov, pretože nikto nemal potrebu zo stabilného systému prechádzať inam.
          </p>

          <h3>Éra moderných kríz a triumfov (2007 – súčasnosť)</h3>
          <p>
            Nasledoval cyklus "zlý systém – dobrý systém". <strong>Windows Vista</strong> bola technologicky ambiciózna (zaviedla nové grafické jadro Aero), ale bola príliš náročná na vtedajší hardvér. Reputáciu zachránil až <strong>Windows 7</strong>, ktorý optimalizoval kód Visty a dodnes je považovaný za zlatý štandard stability.
          </p>
          <p>
            V roku 2012 Microsoft spanikáril pred rastúcou popularitou tabletov a vydal <strong>Windows 8</strong>. Odstránenie tlačidla Štart a prechod na celoobrazovkové dlaždice (Metro UI) bolo označené za najväčšiu chybu v histórii firmy. Používatelia odmietli používať desktop ako tablet.
          </p>
          <p>
            Dnešná éra, reprezentovaná <strong>Windows 10 a 11</strong>, je návratom k logike. Windows 11 prináša čistý, centrovaný dizajn a hlbokú integráciu s <strong>umelou inteligenciou (Copilot)</strong> a cloudovými službami. Systém už nie je len krabicový produkt, ale neustále sa vyvíjajúca služba (Windows as a Service), ktorá reflektuje potreby hybridnej práce a kybernetickej bezpečnosti 21. storočia.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'windows_verzie') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Prehľad verzií a architektúry</h2>
          <p>
            Vývoj Windows nešiel po priamke. Microsoft dlhé roky vyvíjal dve nezlučiteľné línie systémov, ktoré sa spojili až v roku 2001. Dnešné verzie už nefungujú ako "krabicové produkty", ale ako neustále aktualizovaná služba.
          </p>

          <h3>Časová os a verzie jadra</h3>
          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Verzia</th>
                  <th>Rok</th>
                  <th>Jadro (Kernel)</th>
                  <th>Architektúra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 1.0</td>
                  <td>1985</td>
                  <td>-</td>
                  <td>16-bit (DOS nadstavba)</td>
                </tr>
                <tr>
                  <td>Windows 3.1</td>
                  <td>1992</td>
                  <td>-</td>
                  <td>16-bit (DOS nadstavba)</td>
                </tr>
                <tr>
                  <td>Windows 95</td>
                  <td>1995</td>
                  <td>4.0</td>
                  <td>Hybrid 16/32-bit (9x)</td>
                </tr>
                <tr>
                  <td>Windows 98</td>
                  <td>1998</td>
                  <td>4.10</td>
                  <td>Hybrid 16/32-bit (9x)</td>
                </tr>
                <tr>
                  <td>Windows XP</td>
                  <td>2001</td>
                  <td>NT 5.1</td>
                  <td>32-bit / 64-bit (NT)</td>
                </tr>
                <tr>
                  <td>Windows Vista</td>
                  <td>2007</td>
                  <td>NT 6.0</td>
                  <td>32-bit / 64-bit (NT)</td>
                </tr>
                <tr>
                  <td>Windows 7</td>
                  <td>2009</td>
                  <td>NT 6.1</td>
                  <td>32-bit / 64-bit (NT)</td>
                </tr>
                <tr>
                  <td>Windows 10</td>
                  <td>2015</td>
                  <td>NT 10.0</td>
                  <td>32-bit / 64-bit / ARM</td>
                </tr>
                <tr>
                  <td>Windows 11</td>
                  <td>2021</td>
                  <td>NT 10.0</td>
                  <td>64-bit / ARM</td>
                </tr>
              </tbody>
            </table>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8;">Zdroj dát: Microsoft Release Information</p>
          </div>

          <h3>Architektonický zlom: 9x vs. NT</h3>
          <p>
            Najdôležitejším technickým míľnikom v histórii Windows nie je zmena vzhľadu, ale zmena jadra. V 90. rokoch existovali vedľa seba dva svety:
          </p>
          <ul>
            <li><strong>Línia Windows 9x (95, 98, ME):</strong> Tieto systémy boli len "vylepšeným DOSom". Nemali skutočné zabezpečenie (každý používateľ mohol zmazať systémové súbory) a aplikácie mohli priamo pristupovať k hardvéru, čo často spôsobovalo pády celého systému (Modrá smrť).</li>
            <li><strong>Línia Windows NT (New Technology):</strong> Bola vyvinutá pre servery a firmy. Používala vrstvu <strong>HAL (Hardware Abstraction Layer)</strong>, ktorá oddeľovala softvér od hardvéru. Ak spadla jedna aplikácia, nezrútil sa celý systém.</li>
          </ul>
          <p>
            <strong>Windows XP</strong> bol revolučný práve tým, že priniesol stabilitu NT jadra bežným domácim používateľom a definitívne ukončil éru DOSu.
          </p>

          <h3>Prečo je Windows 7 v skutočnosti verzia 6.1?</h3>
          <p>
            Ak sa pozriete do tabuľky vyššie, všimnete si zvláštnosť. Windows 7 má verziu jadra 6.1, Windows 8 má 6.2 a Windows 8.1 je 6.3. Microsoft to urobil zámerne kvôli <strong>spätnej kompatibilite</strong>. Mnoho starších programov kontrolovalo verziu systému, a ak by sa číslo radikálne zmenilo (napr. na 7.0), programy by odmietli fungovať. Až Windows 10 si trúfol skočiť na číslo 10.0.
          </p>

          <h3>Súčasnosť: Windows ako služba (WaaS)</h3>
          <p>
            Od Windows 10 Microsoft zmenil model distribúcie. Namiesto vydávania úplne nového systému každé 3 roky (ako to bolo pri XP -> Vista -> 7), systém dostáva veľké aktualizácie funkcií (napr. verzia 22H2) priamo cez internet. Tento model sa nazýva <strong>Windows as a Service</strong> a zaručuje, že všetci používatelia majú najnovšie bezpečnostné záplaty bez nutnosti preinštalovania počítača.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'windows_info') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Technické informácie a architektúra</h2>
          <p>
            Windows sa od ostatných operačných systémov líši špecifickou štruktúrou správy súborov, registrami a spôsobom, akým pristupuje k hardvéru.
          </p>

          <h3>1. Súborový systém NTFS</h3>
          <p>
            Zatiaľ čo USB kľúče často používajú starší systém FAT32, Windows na pevnom disku vyžaduje <strong>NTFS (New Technology File System)</strong>. Oproti starším systémom ponúka:
          </p>
          <ul>
            <li><strong>Žurnálovanie:</strong> Systém si zapisuje zmeny do denníka pred ich vykonaním. Ak vypadne prúd, dáta sa nepoškodia tak ľahko.</li>
            <li><strong>Prístupové práva (ACL):</strong> Umožňuje nastaviť, ktorý používateľ môže otvoriť konkrétny súbor.</li>
            <li><strong>Podpora veľkých súborov:</strong> FAT32 limituje veľkosť jedného súboru na 4 GB, NTFS tento limit prakticky nemá.</li>
          </ul>

          <h3>2. Windows Register (Registry)</h3>
          <p>
            Na rozdiel od Linuxu, ktorý väčšinu nastavení ukladá do textových súborov, Windows používa <strong>Register</strong>. Je to obrovská hierarchická databáza, kde sú uložené nastavenia hardvéru, softvéru a používateľských profilov.
          </p>
          <p>
            <em>Poznámka: Úprava registrov (príkaz regedit) je mocný nástroj, ale nesprávny zásah môže znefunkčniť celý systém.</em>
          </p>

          <h3>3. Bezpečnosť a UAC</h3>
          <p>
            Od verzie Vista obsahuje Windows funkciu <strong>UAC (User Account Control)</strong>. To je to známe okno, ktoré stmaví obrazovku a pýta si povolenie, keď chce program vykonať zmeny v počítači. Slúži na to, aby malvér nemohol na pozadí tajne inštalovať vírusy bez vedomia používateľa.
          </p>

          <h3>4. Modrá smrť (BSOD)</h3>
          <p>
            Slávna "Modrá obrazovka smrti" (Blue Screen of Death) v skutočnosti nie je chyba, ale <strong>obranný mechanizmus</strong>. Nastane, keď jadro systému zistí kritickú chybu, ktorú nevie opraviť. Aby sa predišlo trvalému poškodeniu hardvéru alebo dát, systém sa radšej okamžite zastaví a reštartuje.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'windows_test') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Windows – Preverenie vedomostí</h2>

          ${vygenerujHTMLTestu('windows_test')}

        </div>
      </section>
    `;
  }

  /*=============================
    LINUX
    =============================*/
  else if (aktivnaSekcia === 'linux_historia') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Príbeh Linuxu: Od "hobby projektu" k svetovej dominancii</h2>
          
          <p>
            Na začiatku 90. rokov existovali dva svety: drahé a uzavreté systémy UNIX pre veľké firmy a jednoduchý MS-DOS pre domáce PC. Chýbal systém, ktorý by bol výkonný ako UNIX, ale bežal na bežnom domácom počítači.
          </p>

          <h3>1. Slávny e-mail z roku 1991</h3>
          <p>
            Všetko sa začalo 25. augusta 1991, keď 21-ročný fínsky študent <strong>Linus Torvalds</strong> poslal do diskusnej skupiny správu:
            "Ahoj všetci... Robím (zadarmo) operačný systém (len hobby, nebude to nič veľké a profesionálne ako GNU) pre klony 386/486 AT..."
          </p>
          
          <p>
            Linus bol frustrovaný z licenčných obmedzení systému MINIX (ktorý sa používal na školách) a chcel si vytvoriť vlastný terminálový emulátor. Pôvodne ho chcel nazvať <strong>Freax</strong> (Free + Freak + X), ale správca FTP servera Ari Lemmke mu vytvoril priečinok s názvom <strong>Linux</strong> (Linus + UNIX). Meno už ostalo.
          </p>

          <h3>2. Spojenie s projektom GNU (Svadba rozumu)</h3>
          <p>
            Samotný Linux je len <strong>jadro</strong> (kernel) – teda "motor", ktorý komunikuje s hardvérom. Aby bol použiteľný, potrebuje "karosériu" – nástroje, prekladače a programy.
          </p>
          <p>
            V tom istom čase Richard Stallman a jeho hnutie <strong>FSF (Free Software Foundation)</strong> mali takmer hotový slobodný systém GNU, ale chýbalo im funkčné jadro (ich vlastné jadro Hurd meškalo). Keď sa Linusovo jadro spojilo s nástrojmi GNU, vznikol kompletný systém, ktorý dnes technicky správne nazývame <strong>GNU/Linux</strong>.
          </p>

          <h3>3. Model Open Source a licencia GPL</h3>
          <p>
            Kľúčovým momentom bolo rozhodnutie vydať Linux pod licenciou <strong>GPL (General Public License)</strong>. Tá zaručuje, že ktokoľvek môže vidieť zdrojový kód, upraviť ho a vylepšiť, ale musí svoje zmeny opäť zverejniť zadarmo.
          </p>
          <p>
            To spustilo lavínu. Tisíce vývojárov po celom svete začali posielať opravy a vylepšenia. Zatiaľ čo Microsoft zamestnával stovky programátorov v jednej budove, na Linuxe pracovali tisíce ľudí cez internet, 24 hodín denne.
          </p>

          <h3>4. Tux a komercializácia</h3>
          <p>
            V roku 1996 bolo rozhodnuté o logu. Linus mal rád tučniaky (traduje sa, že ho jeden pohrýzol v ZOO v Austrálii), a tak vznikol <strong>Tux</strong> – oficiálny maskot Linuxu.
          </p>
          <p>
            Koncom 90. rokov si potenciál Linuxu všimli veľké firmy ako IBM, Oracle či Google. Zistili, že je stabilnejší a lacnejší ako platené riešenia. Vznikli prvé veľké distribúcie ako <strong>Red Hat</strong> (1993) a <strong>Debian</strong> (1993), ktoré priniesli Linux do firemného prostredia.
          </p>

          <h3>5. Dnešná dominancia</h3>
          <p>
            Hoci na desktopoch má Linux len malý podiel (cca 3-4 %), v skutočnosti ovláda svet:
          </p>
          <ul>
            <li><strong>Internet:</strong> Väčšina webových serverov (vrátane Facebooku, Google) beží na Linuxe.</li>
            <li><strong>Superpočítače:</strong> 100 % z 500 najvýkonnejších počítačov sveta používa Linux.</li>
            <li><strong>Mobily:</strong> Android (najrozšírenejší OS na svete) beží na linuxovom jadre.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'linux_verzie') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Linux nemá verzie, má "Distribúcie"</h2>
          <p>
            Vo svete Windows dostanete jeden hotový systém od jednej firmy. V Linuxe to funguje inak. Keďže je kód otvorený, ktokoľvek môže zobrať jadro Linuxu, pridať k nemu grafické prostredie, sadu programov a vytvoriť vlastný operačný systém. Tieto varianty sa nazývajú <strong>distribúcie</strong> (alebo "distrá").
          </p>

          <h3>Rodokmeň distribúcií</h3>
          <p>
            Existujú stovky distribúcií, ale väčšina z nich vychádza z troch hlavných "rodín". Ak pochopíte tieto tri, poznáte celý svet Linuxu.
          </p>

          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Rodina (Základ)</th>
                  <th>Kľúčové distribúcie</th>
                  <th>Pre koho je určená?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Debian</strong></td>
                  <td>
                    <strong>Debian:</strong> "Otec" distribúcií, extrémne stabilný.<br>
                    <strong>Ubuntu:</strong> Najpopulárnejší Linux pre ľudí.<br>
                    <strong>Linux Mint:</strong> Vzhľadom pripomína Windows, ideálny pre začiatočníkov.
                  </td>
                  <td>Bežní používatelia, servery, školy.</td>
                </tr>
                <tr>
                  <td><strong>Red Hat (RPM)</strong></td>
                  <td>
                    <strong>RHEL:</strong> Platený systém pre korporácie.<br>
                    <strong>Fedora:</strong> Testovacie pole pre nové technológie.<br>
                    <strong>CentOS / AlmaLinux:</strong> Serverové riešenia zadarmo.
                  </td>
                  <td>Firmy, vývojári, servery.</td>
                </tr>
                <tr>
                  <td><strong>Arch Linux</strong></td>
                  <td>
                    <strong>Arch:</strong> "Urob si sám" systém. Inštalujete ho cez príkazový riadok.<br>
                    <strong>Manjaro:</strong> Arch, ale s jednoduchou inštaláciou.
                  </td>
                  <td>Pokročilí používatelia, hráči (Steam Deck).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Dva svety aktualizácií</h3>
          <p>
            Pri výbere verzie Linuxu sa stretnete s dvoma prístupmi k aktualizáciám:
          </p>
          <ul>
            <li><strong>LTS (Long Term Support):</strong> "Dlhodobá podpora". Verzia vychádza raz za pár rokov (napr. Ubuntu 22.04, 24.04) a je podporovaná 5 rokov. Je to ako Windows – stabilné, nemení sa to pod rukami. Vhodné pre firmy a servery.</li>
            <li><strong>Rolling Release (Priebežné vydania):</strong> Nemá verzie (ako Arch Linux). Systém sa aktualizuje neustále, každý deň dostávate najnovšie verzie softvéru. Máte vždy to najnovšie, ale občas sa môže niečo pokaziť.</li>
          </ul>

          <h3>Android: Linux, o ktorom neviete</h3>
          <p>
            Technicky najrozšírenejšou "verziou" Linuxu je <strong>Android</strong>. Používa linuxové jadro na komunikáciu s hardvérom telefónu, hoci grafické rozhranie a aplikácie sú úplne iné ako na počítači.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'linux_info') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Technická architektúra a filozofia</h2>
          <p>
            Prechod z Windows na Linux môže byť kultúrny šok. Neexistujú tu disky C: alebo D:, programy sa neinštalujú sťahovaním .exe súborov z internetu a "správca" sa volá inak.
          </p>

          <h3>1. Súborový systém: Kam zmizol disk C?</h3>
          <p>
            Windows používa písmená pre disky (C:\, D:\). Linux používa <strong>jeden stromový systém</strong>, ktorý začína lomkou <code>/</code> (tzv. <strong>Root</strong> alebo Koreň).
          </p>
          <ul>
            <li><strong>/ (Root):</strong> Začiatok všetkého. Všetky disky, USB kľúče a súbory sú "pripijené" (mounted) do priečinkov pod týmto koreňom.</li>
            <li><strong>/home:</strong> Tu sú uložené dáta používateľov (Dokumenty, Obrázky). Je to ekvivalent "C:\Users\" vo Windows.</li>
            <li><strong>/bin a /usr:</strong> Tu sú uložené samotné programy a systémové nástroje.</li>
          </ul>
          <p>
            Najpoužívanejší formát súborového systému je dnes <strong>ext4</strong> (Fourth Extended Filesystem), ktorý je extrémne odolný voči fragmentácii disku (preto Linux netreba defragmentovať).
          </p>

          <h3>2. Terminál a sila príkazového riadka</h3>
          <p>
            Zatiaľ čo vo Windows je príkazový riadok (CMD) skrytý doplnok, v Linuxe je to srdce systému. Grafické prostredie je len nadstavba. Väčšina serverov ani nemá monitor – ovládajú sa na diaľku len textovými príkazmi.
          </p>
          <p>
            <em>Prečo ho používať?</em> Napísať príkaz <code>sudo apt update</code> je často rýchlejšie ako klikanie cez tri okná nastavení.
          </p>

          <h3>3. Inštalácia softvéru: Balíčkovací systém</h3>
          <p>
            Linux vymyslel "App Store" dávno predtým, ako vznikli smartfóny. Programy sa sťahujú z centrálnych a overených skladov, ktoré sa volajú <strong>Repozitáre</strong>.
          </p>
          <ul>
            <li>Nemusíte hľadať inštalačky po webe (a riskovať vírusy).</li>
            <li>Systém sa stará o aktualizácie <strong>všetkých</strong> programov naraz, nie len samotného Windows.</li>
          </ul>

          <h3>4. Bezpečnosť a Root (Superpoužívateľ)</h3>
          <p>
            V Linuxe bežný používateľ nemôže zmeniť systémové súbory. Na to potrebuje práva "Superpoužívateľa" (Root). V praxi sa to rieši príkazom <strong>sudo</strong> (SuperUser DO).
          </p>
          <p>
            Ak sa vírus dostane do počítača pod bežným účtom, nemôže zmazať systém, pretože nepozná heslo pre <em>sudo</em>. To robí Linux prirodzene odolným voči väčšine malvéru.
          </p>

          <h3>5. Kde všade je Linux?</h3>
          <p>
            Vďaka svojej stabilite a možnosti bežať bez reštartu celé roky (vysoký uptime) dominuje mimo bežných PC:
          </p>
          <ul>
            <li><strong>Vesmír:</strong> ISS aj vozidlá na Marse (napr. helikoptéra Ingenuity) používajú Linux.</li>
            <li><strong>Filmový priemysel:</strong> Takmer všetky špeciálne efekty v Hollywoode (od Avatara po Avengers) sa renderujú na Linuxových farmách.</li>
            <li><strong>Vaša obývačka:</strong> Smart TV, routery a inteligentné chladničky bežia na orezanom Linuxe.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'linux_test') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Linux – Preverenie vedomostí</h2>

          ${vygenerujHTMLTestu('linux_test')}

        </div>
      </section>
    `;
  }

  /*=============================
    MAC OS
    =============================*/
  else if (aktivnaSekcia === 'macos_historia') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>História macOS: Cesta k Unixovej dokonalosti</h2>
          
          <p>
            Príbeh operačného systému od Apple je príbehom dvoch úplne odlišných ér. Tá prvá takmer položila firmu na kolená, tá druhá z nej urobila najhodnotnejšiu spoločnosť na svete.
          </p>

          <h3>1. Klasický Mac OS (1984 – 1999)</h3>
          <p>
            Všetko sa začalo v roku 1984 legendárnou reklamou počas Super Bowlu a uvedením prvého Macintoshu. Systém (vtedy nazvaný jednoducho "System 1") priniesol revolúciu – <strong>grafické užívateľské rozhranie (GUI)</strong> a myš do domácností.
          </p>
          <p>
            Hoci bol systém vizuálne krásny, mal obrovský technický nedostatok: chýbal mu <strong>chránený multitasking</strong>. Ak zamrzla jedna aplikácia, museli ste reštartovať celý počítač. V 90. rokoch tento zastaraný základ prestal stíhať konkurenčnému Windows 95.
          </p>

          <h3>2. Hľadanie záchrany a návrat Jobsa</h3>
          <p>
            V polovici 90. rokov bol Apple na pokraji krachu. Ich vlastný pokus o nový systém (projekt Copland) zlyhal. Apple sa rozhodol, že si moderný systém musí kúpiť od inej firmy.
          </p>
          <p>
            Rozhodovali sa medzi systémom <strong>BeOS</strong> (od Jeana-Louisa Gasséeho) a <strong>NeXTSTEP</strong> (od vyhodeného zakladateľa Apple, Steva Jobsa). Apple kúpil NeXT, a s ním sa do firmy vrátil aj Steve Jobs. To zmenilo všetko.
          </p>

          <h3>3. Zrod Mac OS X (2001)</h3>
          <p>
            Steve Jobs "vyhodil" starý kód Mac OS a nahradil ho systémom z NeXTu. Tak vznikol <strong>Mac OS X</strong>.
          </p>
          <ul>
            <li><strong>Unixové srdce:</strong> Pod krásnym grafickým obalom (Aqua) v skutočnosti beží Unix (konkrétne základ Darwin). To systému dodalo extrémnu stabilitu.</li>
            <li><strong>Aqua rozhranie:</strong> Prvé verzie mali tlačidlá, ktoré vyzerali ako kvapky vody a "lízatká". Jobs vtedy povedal: <em>"Vytvorili sme tlačidlá na obrazovke tak dobre, že ich budete chcieť oblízať."</em></li>
          </ul>

          <h3>4. Éra "Veľkých mačiek" a "Kalifornie"</h3>
          <p>
            Apple je známy svojím marketingom verzií.
          </p>
          <ul>
            <li><strong>2001 – 2012 (Mačkovité šelmy):</strong> Verzie sa volali Cheetah, Puma, Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, Mountain Lion.</li>
            <li><strong>2013 – súčasnosť (Miesta v Kalifornii):</strong> Od verzie Mavericks prešiel Apple na názvy prírodných pamiatok (Yosemite, El Capitan, Mojave, Sonoma), čím chcel zdôrazniť svoje korene.</li>
          </ul>

          <h3>5. Architektonické skoky</h3>
          <p>
            Žiadny iný systém neprežil toľko zmien "mozgu" (procesora) ako macOS a pritom si zachoval kompatibilitu:
          </p>
          <ul>
            <li><strong>2006:</strong> Prechod z procesorov PowerPC na <strong>Intel</strong>. (Umožnilo to inštalovať Windows na Mac).</li>
            <li><strong>2020:</strong> Prechod z Intelu na <strong>Apple Silicon (čipy M1, M2, M3)</strong>. Tým Apple spojil svet počítačov a mobilov, čím získal obrovský náskok vo výkone a výdrži batérie.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'macos_verzie') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Od Mačiek ku Kalifornii: Zmätok v číslovaní</h2>
          <p>
            Na rozdiel od Windows, kde sme zvyknutí na skoky (7 -> 8 -> 10 -> 11), Apple zvolil inú stratégiu. Takmer 20 rokov (2001 – 2020) bol systém technicky stále vo verzii <strong>10 (OS X)</strong> a menilo sa len číslo za bodkou.
          </p>

          <h3>Kľúčové generácie systému</h3>
          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Verzia</th>
                  <th>Kódový názov</th>
                  <th>Rok</th>
                  <th>Kľúčová zmena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10.0</td>
                  <td><strong>Cheetah</strong></td>
                  <td>2001</td>
                  <td>Prvá verzia. Pomalá, ale položila základy moderného systému.</td>
                </tr>
                <tr>
                  <td>10.6</td>
                  <td><strong>Snow Leopard</strong></td>
                  <td>2009</td>
                  <td>Legenda. Žiadne nové funkcie, len čistý výkon a stabilita. Dodnes obľúbený.</td>
                </tr>
                <tr>
                  <td>10.10</td>
                  <td><strong>Yosemite</strong></td>
                  <td>2014</td>
                  <td>Kompletná zmena dizajnu na "plochý" štýl (podobný iOS).</td>
                </tr>
                <tr>
                  <td>10.15</td>
                  <td><strong>Catalina</strong></td>
                  <td>2019</td>
                  <td>Koniec 32-bitových aplikácií (staré hry prestali fungovať). Rozdelenie iTunes.</td>
                </tr>
                <tr>
                  <td>11.0</td>
                  <td><strong>Big Sur</strong></td>
                  <td>2020</td>
                  <td>Historický zlom. Prvá verzia pre Apple Silicon čipy a nový dizajn.</td>
                </tr>
                <tr>
                  <td>15.0</td>
                  <td><strong>Sequoia</strong></td>
                  <td>2024</td>
                  <td>Aktuálna éra. Integrácia Apple Intelligence a ovládanie iPhonu cez Mac.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Prečo sa verzia 10 držala tak dlho?</h3>
          <p>
            Značka <strong>OS X</strong> (čítaj "ou-es ten", rímska desiatka) bola pre Apple silným marketingovým nástrojom. Symbolizovala stabilitu Unixového jadra.
          </p>
          <p>
            Zmena na <strong>macOS 11 (Big Sur)</strong> prišla až v roku 2020, aby symbolizovala novú éru prechodu na vlastné procesory (M1). Odvtedy Apple čísluje verzie "normálne" každý rok (11, 12, 13, 14, 15...).
          </p>

          <h3>Systém aktualizácií: Zadarmo a navždy</h3>
          <p>
            V roku 2013 (pri verzii Mavericks) Apple urobil krok, ktorý zmenil priemysel: <strong>sprístupnil operačný systém úplne zadarmo</strong>.
          </p>
          <ul>
            <li>Dovtedy stála aktualizácia Mac OS okolo 129 dolárov.</li>
            <li>Dnes je aktualizácia samozrejmosťou a používatelia prechádzajú na novú verziu masovo v priebehu pár týždňov po vydaní.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'macos_info') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Technické špeciality a Ekosystém</h2>
          <p>
            Apple je známy tým, že "vyrába celý widget" – hardvér, operačný systém aj služby. To umožňuje funkcie, ktoré sú na Windowse alebo Linuxe ťažko dosiahnuteľné.
          </p>

          <h3>1. Súborový systém APFS (Apple File System)</h3>
          <p>
            V roku 2017 Apple nahradil staručký systém HFS+ novým <strong>APFS</strong>. Je navrhnutý špeciálne pre SSD disky (Flash úložiská).
          </p>
          <ul>
            <li><strong>Okamžité kopírovanie:</strong> Ak skopírujete 10 GB súbor na tom istom disku, stane sa to okamžite. APFS dáta nekopíruje fyzicky, len vytvorí nový odkaz na tie isté dáta (tzv. klonovanie).</li>
            <li><strong>Šifrovanie:</strong> Bezpečnosť je zabudovaná priamo do štruktúry súborového systému.</li>
            <li><strong>Snapshots:</strong> Systém si vie robiť "fotky" stavu disku, čo umožňuje super-rýchle zálohovanie cez Time Machine.</li>
          </ul>

          <h3>2. Ekosystém a Kontinuita</h3>
          <p>
            Najväčšou zbraňou macOS nie je samotný systém, ale to, ako spolupracuje s iPhonom. Táto sada funkcií sa volá <strong>Continuity</strong>:
          </p>
          <ul>
            <li><strong>Handoff:</strong> Rozpíšete mail na iPhone, sadnete k Macu a ikonka mailu vyskočí v rohu – môžete okamžite pokračovať tam, kde ste prestali.</li>
            <li><strong>Universal Clipboard:</strong> Skopírujete text (Ctrl+C) na Macu a vložíte ho (Paste) na iPhone. Funguje to magicky.</li>
            <li><strong>AirDrop:</strong> Bezdrôtový prenos súborov medzi zariadeniami, ktorý nevyžaduje nastavovanie siete ani párovanie.</li>
          </ul>

          <h3>3. Gatekeeper a Bezpečnosť</h3>
          <p>
            macOS je Unixový systém, takže má oddelené práva používateľov (podobne ako Linux). Navyše má vrstvu <strong>Gatekeeper</strong>.
          </p>
          <p>
            Keď stiahnete aplikáciu z internetu, Gatekeeper skontroluje, či má platný digitálny podpis od Apple (Notarization). Ak nie, systém ju odmietne spustiť, aby zabránil šíreniu malvéru.
          </p>

          <h3>4. Unified Memory (Jednotná pamäť)</h3>
          <p>
            S príchodom čipov Apple Silicon (M1, M2...) sa zmenil pohľad na RAM. Mac nemá zvlášť pamäť pre procesor a zvlášť pre grafickú kartu. Má <strong>Unified Memory</strong>.
          </p>
          <p>
            Vďaka tomu sa dáta nemusia kopírovať z jedného čipu do druhého. Preto 8 GB RAM na Macu často pôsobí rovnako rýchlo ako 16 GB RAM na bežnom PC.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'macos_test') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Mac OS – Preverenie vedomostí</h2>

          ${vygenerujHTMLTestu('macos_test')}

        </div>
      </section>
    `;
  }

  /*=============================
    ŠPECIÁLNE / NEZNÁME OS
    =============================*/
  else if (aktivnaSekcia === 'specialne_reactos') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>ReactOS: Windows, ktorý nie je od Microsoftu</h2>
          <p>
            ReactOS je pravdepodobne najambicióznejší open-source projekt v histórii operačných systémov. Jeho cieľom nie je vytvoriť systém "podobný" Windowsu, ale vytvoriť systém, ktorý <strong>je binárne kompatibilný</strong> s Windowsom.
          </p>

          <p>
            <strong>Zjednodušene:</strong> Cieľom je, aby ste na ReactOS mohli nainštalovať svoje staré hry, Photoshop alebo MS Office a ono to proste fungovalo, hoci pod kapotou nie je ani kúsok kódu od Microsoftu.
          </p>

          <h3>Prečo vlastne vznikol?</h3>
          <p>
            Projekt začal v roku 1996 (pôvodne ako FreeWin95). Hlavnou motiváciou bola sloboda. Ak by Microsoft jedného dňa zanikol alebo by prestal podporovať staršie programy, používatelia by mali k dispozícii otvorenú alternatívu, ktorá ich softvér udrží pri živote.
          </p>

          <h3>Technické pozadie: Reverzné inžinierstvo</h3>
          <p>
            Vývojári ReactOS nepoužívajú uniknuté zdrojové kódy Windows. Namiesto toho používajú tzv. <strong>Clean Room Design</strong>. Programátori študujú dokumentáciu k tomu, ako sa Windows správa navonok, a potom píšu vlastný kód, ktorý tie isté funkcie vykoná identicky.
          </p>

          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Vlastnosť</th>
                  <th>Popis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Vzhľad</strong></td>
                  <td>Pripomína Windows 2003 alebo klasický štýl Windows XP.</td>
                </tr>
                <tr>
                  <td><strong>Kompatibilita</strong></td>
                  <td>Zameriava sa na architektúru NT (NT 5.2). Podporuje mnoho .exe aplikácií a ovládačov.</td>
                </tr>
                <tr>
                  <td><strong>Hardvér</strong></td>
                  <td>Beží na veľmi starých počítačoch (stačí mu 96 MB RAM), ale aj na modernom hardvéri.</td>
                </tr>
                <tr>
                  <td><strong>Licencia</strong></td>
                  <td>Úplne zadarmo (GNU GPL), kód si môže ktokoľvek pozrieť a upraviť.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Aktuálny stav: Stále v "Alfa" verzii</h3>
          <p>
            Hoci je projekt vo vývoji vyše 25 rokov, stále sa považuje za <strong>Alfa verziu</strong>. To znamená, že nie je vhodný na každodennú prácu ako váš hlavný systém. 
          </p>
          <ul>
            <li><strong>Čo funguje:</strong> Inštalácia mnohých starších hier, prehliadačov a kancelárskych balíkov.</li>
            <li><strong>Čo je problém:</strong> Podpora moderných webových prehliadačov (kvôli zložitosti JS enginov) a najnovších ovládačov pre grafické karty.</li>
          </ul>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'specialne_haiku') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Haiku: Návrat strateného systému BeOS</h2>
          <p>
            V 90. rokoch existoval systém s názvom <strong>BeOS</strong>. Bol taký pokrokový, že Apple vážne zvažoval jeho kúpu namiesto systému od Steva Jobsa. Apple sa nakoniec rozhodol inak (kúpil NeXT), BeOS zanikol, ale jeho myšlienka žije ďalej v systéme <strong>Haiku</strong>.
          </p>

         <p>
            <strong>Zaujímavosť:</strong> Názov "Haiku" bol vybraný komunitou, aby odrážal eleganciu a jednoduchosť japonskej poézie, rovnako ako eleganciu tohto systému.
          </p>

          <h3>Prečo je iný ako Linux alebo Windows?</h3>
          <p>
            Haiku nie je "ďalšia distribúcia Linuxu". Je to úplne samostatný systém s vlastným jadrom.
          </p>
          <p>
            Zatiaľ čo Windows a Linux sa snažia byť všetkým (serverom, desktopom, mobilom), Haiku sa zameriava na jedinú vec: <strong>Osobný počítač (Desktop)</strong>. Vďaka tomu je extrémne optimalizovaný. Na počítači, kde sa Windows 10 spúšťa minútu, nabehne Haiku za pár sekúnd.
          </p>
          
          

          <h3>Unikátne technológie</h3>
          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Technológia</th>
                  <th>Čo to robí?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Architektúra</strong></td>
                  <td>Haiku je od základov navrhnuté pre <strong>multithreading</strong> (viac vlákien). Využíva jadrá procesora oveľa efektívnejšie ako iné systémy. Aplikácie vďaka tomu nikdy "nezamŕzajú".</td>
                </tr>
                <tr>
                  <td><strong>Súborový systém (BFS)</strong></td>
                  <td>Funguje ako databáza. Súbory majú <strong>metadáta</strong>. Môžete napríklad okamžite vyhľadať "všetky emaily od Petra z minulého týždňa" bez toho, aby ste ich museli otvárať.</td>
                </tr>
                <tr>
                  <td><strong>Replikanty</strong></td>
                  <td>Unikátna funkcia. Môžete "vytrhnúť" kus bežiaceho programu (napr. ovládanie hlasitosti v prehrávači) a prilepiť ho priamo na plochu ako widget.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Pre koho je určený?</h3>
          <p>
            Haiku je dnes v štádiu beta verzie. Je prekvapivo stabilný a má funkčný webový prehliadač (WebPositive). Je ideálny pre nadšencov, programátorov alebo ľudí, ktorí chcú oživiť starý notebook a zažiť "alternatívnu históriu" počítačov.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'specialne_templeos') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>TempleOS: Boží chrám v kóde</h2>
          <p>
            Väčšina operačných systémov vzniká v tímoch tisícov ľudí. TempleOS napísal <strong>jeden jediný človek</strong> – Terry A. Davis. Strávil nad ním 10 rokov života, napísal viac ako 100 000 riadkov kódu a vytvoril si k nemu vlastný programovací jazyk aj kompilátor.
          </p>
          
          <p>
            <strong>Pozadie príbehu:</strong> Terry A. Davis trpel schizofréniou. Veril, že komunikuje priamo s Bohom a dostal za úlohu postaviť "tretí chrám" (Third Temple) v podobe operačného systému. Hoci je jeho príbeh smutný, technická stránka jeho diela je fascinujúca.
          </p>

          <h3>Technické "Božie prikázania"</h3>
          <p>
            TempleOS je moderný 64-bitový systém, ktorý však zámerne ignoruje všetky moderné štandardy. Všetko v ňom je navrhnuté tak, aby to bolo "priehľadné a jednoduché", presne podľa Terryho vízie.
          </p>

          <div class="tabulka-wrapper">
            <table class="tabulka-data">
              <thead>
                <tr>
                  <th>Vlastnosť</th>
                  <th>Ako to funguje v TempleOS?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Grafika</strong></td>
                  <td>Fixné rozlíšenie <strong>640x480</strong> a 16 farieb. Terry tvrdil, že Boh mu prikázal toto rozlíšenie, aby "mu deti mohli kresliť obrázky pre Boha" bez zložitých grafických kariet.</td>
                </tr>
                <tr>
                  <td><strong>Jazyk HolyC</strong></td>
                  <td>Systém nie je napísaný v C, ale v Terryho vlastnej variácii <strong>HolyC</strong>. Umožňuje písať kód, ktorý sa okamžite kompiluje a beží (JIT).</td>
                </tr>
                <tr>
                  <td><strong>Ring-0 (Žiadna ochrana)</strong></td>
                  <td>V bežnom OS sú aplikácie oddelené od jadra. V TempleOS beží <strong>všetko v režime jadra</strong> (Ring 0). Hra má prístup k celej pamäti. Je to extrémne rýchle, ale jedna chyba zhodí celý počítač.</td>
                </tr>
                <tr>
                  <td><strong>Sieť</strong></td>
                  <td>Žiadny internet. TempleOS nepodporuje sieťové karty. Podľa autora je to preto, aby bol chrám "čistý" a bezpečný pred vonkajším svetom.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Letový simulátor a Oracle</h3>
          <p>
            Súčasťou systému sú bizarné, ale technicky pôsobivé aplikácie. Napríklad plne funkčný <strong>3D letový simulátor</strong> (s orlami namiesto lietadiel), ktorý Terry napísal sám bez použitia grafickej karty – všetko počíta procesor.
          </p>
          <p>
            Systém obsahuje aj "Oracle" (Veštiareň), program, ktorý generuje náhodné slová a biblické texty, cez ktoré sa Terry rozprával s Bohom.
          </p>

          <h3>Odkaz Terryho Davisa</h3>
          <p>
            Terry zomrel v roku 2018, ale TempleOS ostal zachovaný. Programátori ho dnes študujú ako príklad "Outsider Art" (umenia mimo prúdu). Je dôkazom toho, čo dokáže jeden brilantný mozog, aj keď je sužovaný chorobou.
          </p>
        </div>
      </section>
    `;
  }

  else if (aktivnaSekcia === 'specialne_test') {
    obsahDiv.innerHTML = `
      <section class="sekcia-obsahu aktivny">
        <div class="karta">
          <h2>Špeciálne OS – Preverenie vedomostí</h2>

          ${vygenerujHTMLTestu('specialne_test')}

        </div>
      </section>
    `;
  }
  /* Sekcia Finálny Test */
  else if (aktivnaSekcia === 'finalny_test') {
      if (hesloOdblokované) {
        obsahDiv.innerHTML = `
          <section class="sekcia-obsahu aktivny">
            <div class="karta">
              <h2>Záverečný Test Akadémie</h2>
              
              <div id="casovac-kontajner">
                ⏱️ Zostávajúci čas: <span id="casovac-displej">20:00</span>
              </div>

              <p>Gratulujeme k odomknutiu finálneho testu! Máte <strong>20 minút</strong> na vypracovanie.</p>
              
              <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border-color);">

              ${vygenerujHTMLTestu('finalny_test')}

              <div style="text-align: center; margin-top: 2rem;">
                <button onclick="vyhodnotFinalnyTest()" class="tlacidlo-vyhodnotit">
                  📊 Vyhodnotiť test
                </button>
              </div>

              <div id="celkove-hodnotenie"></div>

            </div>
          </section>
        `;
        // SPUSTENIE ČASOVAČA (20 minút)
        spustitCasovac(20);

      } else {
        // ... tu ostáva kód pre zamknutú časť (heslo) ...
        obsahDiv.innerHTML = `
          <section class="sekcia-obsahu aktivny">
            <div class="karta">
              <h2>Finálny Test</h2>
              <p>Finálny test je chránený heslom. Prosím, zadajte heslo na prístup.</p>
              
              <div style="margin-top: 20px;">
                <input type="password" id="vstup-hesla" placeholder="Zadajte heslo..." style="padding: 10px; font-size: 1rem;" />
                <button onclick="overHeslo()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-left: 10px;">Odomknúť Test</button>
              </div>
              
              <div id="chyba-hesla" style="color: red; margin-top: 10px; display: none;"></div>
            </div>
          </section>
        `;
      }
    }
} 

/* Inicializácia pri načítaní stránky */
window.addEventListener('DOMContentLoaded', () => {
  nacitajRezim();
  renderujBocnyPanel();
  renderujObsah();
});