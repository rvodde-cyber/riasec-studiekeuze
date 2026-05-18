import type { RIASOCLetter } from "@/lib/scoring";

export type Beroep = {
  code: RIASOCLetter;
  beroep: string;
  opleiding: string;
  omschrijving: string;
};

export type TypeMeta = {
  letter: RIASOCLetter;
  naam: string;
  emoji: string;
  tagline: string;
  korteIntro: string;
  uitleg: string[];
  voorbeeldwoorden: string[];
  tailwindColor: string;
};

export const typeVolgorde: RIASOCLetter[] = ["R", "I", "A", "S", "O", "C"];

export const typeMeta: Record<RIASOCLetter, TypeMeta> = {
  R: {
    letter: "R",
    naam: "Realistisch",
    emoji: "🔧",
    tagline: "Ik werk liever met mijn handen dan met woorden",
    korteIntro: "Vragen over praktisch werken, techniek en de fysieke wereld.",
    uitleg: [
      "Je hebt waarschijnlijk veel affiniteit met concreet werk: repareren, bouwen, sporten of werken met dieren en planten.",
      "Je lost praktische problemen het liefst stap voor stap op, met tastbare resultaten.",
      "In een studie of beroep zoek je vaak duidelijke taken, werktuigen of techniek.",
    ],
    voorbeeldwoorden: [
      "praktisch",
      "technisch",
      "hands-on",
      "outdoor",
      "precisie",
    ],
    tailwindColor: "type-r",
  },
  I: {
    letter: "I",
    naam: "Intellectueel",
    emoji: "🔬",
    tagline: "Ik ben nieuwsgierig en wil begrijpen hoe dingen werken",
    korteIntro: "Vragen over analyseren, onderzoeken en zelfstandig denken.",
    uitleg: [
      "Je bent nieuwsgierig naar wetenschap, technologie en complexe vraagstukken.",
      "Je leest graag, stelt vragen en zoekt patronen in informatie.",
      "Je voelt je vaak op je plek bij onderzoek, data of theoretische uitdagingen.",
    ],
    voorbeeldwoorden: [
      "analytisch",
      "nieuwsgierig",
      "onderzoekend",
      "logisch",
      "diepgang",
    ],
    tailwindColor: "type-i",
  },
  A: {
    letter: "A",
    naam: "Artistiek",
    emoji: "🎨",
    tagline: "Ik druk mezelf het liefst creatief uit",
    korteIntro: "Vragen over creativiteit, expressie en esthetiek.",
    uitleg: [
      "Je maakt, ontwerpt of schrijft graag en let op sfeer en vorm.",
      "Je denkt buiten gebaande paden en zoekt ruimte voor eigen stijl.",
      "Je haalt energie uit muziek, beeld, verhaal of vormgeving.",
    ],
    voorbeeldwoorden: [
      "creatief",
      "expressief",
      "origineel",
      "esthetisch",
      "innovatief",
    ],
    tailwindColor: "type-a",
  },
  S: {
    letter: "S",
    naam: "Sociaal",
    emoji: "🤝",
    tagline: "Ik help anderen en werk graag samen",
    korteIntro: "Vragen over samenwerken, uitleggen en zorg voor mensen.",
    uitleg: [
      "Je luistert goed, legt uit en zorgt dat iedereen meedoet.",
      "Je voelt je aangetrokken tot onderwijs, zorg of welzijn.",
      "Je haalt voldoening uit contact, begeleiden en teams.",
    ],
    voorbeeldwoorden: [
      "empathisch",
      "coachend",
      "samenwerkend",
      "inclusief",
      "betrokken",
    ],
    tailwindColor: "type-s",
  },
  O: {
    letter: "O",
    naam: "Ondernemend",
    emoji: "💡",
    tagline: "Ik neem graag het voortouw en overtuig anderen",
    korteIntro: "Vragen over leiding nemen, overtuigen en ondernemen.",
    uitleg: [
      "Je neemt initiatief, presenteert en brengt ideeën naar buiten.",
      "Je vindt het spannend om te verkopen, te leiden of te ondernemen.",
      "Je denkt in kansen, impact en het vergroten van iets dat je gelooft.",
    ],
    voorbeeldwoorden: [
      "initiatiefrijk",
      "overtuigend",
      "energiek",
      "strategisch",
      "ondernemend",
    ],
    tailwindColor: "type-o",
  },
  C: {
    letter: "C",
    naam: "Conventioneel",
    emoji: "📋",
    tagline: "Ik hou van structuur, orde en nauwkeurig werken",
    korteIntro: "Vragen over structuur, administratie en nauwkeurigheid.",
    uitleg: [
      "Je werkt graag volgens duidelijke regels, planning en procedures.",
      "Cijfers, tabellen en geordende informatie geven je overzicht.",
      "Je houdt van betrouwbaarheid, controle en nette afronding.",
    ],
    voorbeeldwoorden: [
      "gestructureerd",
      "nauwkeurig",
      "betrouwbaar",
      "planmatig",
      "systematisch",
    ],
    tailwindColor: "type-c",
  },
};

export const vragen: string[] = [
  "Ik repareer graag apparaten of machines.",
  "Ik werk liever buiten dan binnen.",
  "Ik vind het leuk om dingen te bouwen met mijn handen.",
  "Ik gebruik graag gereedschap of technische apparatuur.",
  "Ik doe graag aan sport of lichamelijke activiteiten.",
  "Ik vind het leuk om met dieren of planten te werken.",
  "Ik ben goed in het oplossen van praktische problemen.",
  "Ik los graag ingewikkelde vraagstukken op.",
  "Ik lees graag over wetenschap of technologie.",
  "Ik stel veel vragen en wil altijd begrijpen hoe dingen werken.",
  "Ik doe graag experimenten of onderzoek.",
  "Ik analyseer graag informatie en zoek naar patronen.",
  "Ik vind wiskunde of logica interessant.",
  "Ik werk liever zelfstandig dan in een groep.",
  "Ik maak graag creatieve dingen, zoals tekeningen of muziek.",
  "Ik schrijf graag verhalen, gedichten of teksten.",
  "Ik vind het leuk om dingen te ontwerpen of te versieren.",
  "Ik ben gevoelig voor sfeer, stijl en esthetiek.",
  "Ik denk graag buiten de gebaande paden.",
  "Ik vind toneel, dans of film erg interessant.",
  "Ik druk mezelf liever creatief uit dan via regels en systemen.",
  "Ik help graag anderen bij hun problemen.",
  "Ik werk graag in een team.",
  "Ik vind het leuk om iets uit te leggen of te onderwijzen.",
  "Ik ben goed in luisteren naar anderen.",
  "Ik voel me aangetrokken tot zorg, welzijn of onderwijs.",
  "Ik organiseer graag activiteiten voor groepen.",
  "Ik vind het belangrijk dat iedereen meedoet en zich gehoord voelt.",
  "Ik neem graag het initiatief en de leiding.",
  "Ik overtuig anderen makkelijk van mijn ideeën.",
  "Ik vind het leuk om dingen te verkopen of te promoten.",
  "Ik denk graag na over hoe je iets kunt verbeteren of uitbreiden.",
  "Ik ga graag risico's aan als ik ergens in geloof.",
  "Ik vind presenteren voor een groep niet eng.",
  "Ik droom van mijn eigen project of bedrijf.",
  "Ik werk graag met cijfers, tabellen of administratie.",
  "Ik hou van structuur, planning en duidelijke regels.",
  "Ik werk nauwkeurig en maak weinig fouten.",
  "Ik vind het prettig als ik precies weet wat er van me verwacht wordt.",
  "Ik orden graag informatie en bestanden.",
  "Ik werk graag met computers voor administratie of databeheer.",
  "Ik voel me prettig in een georganiseerde werkomgeving.",
];

export const beroepen: Beroep[] = [
  { code: "R", beroep: "Elektricien", opleiding: "Elektrotechniek (hbo)", omschrijving: "Installeert en onderhoudt elektrische systemen." },
  { code: "R", beroep: "Werktuigbouwkundige", opleiding: "Werktuigbouwkunde (hbo)", omschrijving: "Ontwerpt en beheert mechanische systemen." },
  { code: "R", beroep: "Agrariër", opleiding: "Agrarisch Management (hbo)", omschrijving: "Beheert land, gewassen of vee duurzaam." },
  { code: "R", beroep: "IT-beheerder", opleiding: "HBO-ICT / Informatica", omschrijving: "Beheert netwerken, servers en IT-infrastructuur." },
  { code: "R", beroep: "Bouwkundig opzichter", opleiding: "Bouwkunde (hbo)", omschrijving: "Leidt en controleert bouwprocessen op locatie." },
  { code: "R", beroep: "Sporttechnoloog", opleiding: "Sport & Bewegen (hbo)", omschrijving: "Verbindt sport met technologie en prestatieverbetering." },
  { code: "I", beroep: "Onderzoeker", opleiding: "Toegepaste Biologie / Chemie (hbo)", omschrijving: "Doet systematisch onderzoek naar wetenschappelijke vraagstukken." },
  { code: "I", beroep: "Data-analist", opleiding: "HBO-ICT / Data Science", omschrijving: "Analyseert grote datasets en trekt conclusies." },
  { code: "I", beroep: "Milieuadviseur", opleiding: "Milieukunde (hbo)", omschrijving: "Adviseert over duurzaamheid en milieu." },
  { code: "I", beroep: "Toegepast psycholoog", opleiding: "Toegepaste Psychologie (hbo)", omschrijving: "Onderzoekt menselijk gedrag en past dit toe in de praktijk." },
  { code: "I", beroep: "Finance controller", opleiding: "Finance & Control (hbo)", omschrijving: "Analyseert financiële stromen en stuurt bij." },
  { code: "I", beroep: "Technisch ingenieur", opleiding: "Technische Informatica (hbo)", omschrijving: "Lost complexe technische problemen op." },
  { code: "A", beroep: "Grafisch ontwerper", opleiding: "Communicatiedesign (hbo)", omschrijving: "Maakt visuele communicatie voor print en digitaal." },
  { code: "A", beroep: "Journalist", opleiding: "Journalistiek (hbo)", omschrijving: "Onderzoekt nieuws en vertelt verhalen voor diverse media." },
  { code: "A", beroep: "Modeontwerper", opleiding: "Fashion Design (hbo)", omschrijving: "Ontwerpt kleding en mode-collecties." },
  { code: "A", beroep: "Game designer", opleiding: "Game Design / Media (hbo)", omschrijving: "Ontwikkelt games en interactieve ervaringen." },
  { code: "A", beroep: "Architect (ontwerp)", opleiding: "Bouwkunde / Interieurarchitectuur (hbo)", omschrijving: "Ontwerpt gebouwen en ruimtes." },
  { code: "A", beroep: "Content creator", opleiding: "Communicatie / Media (hbo)", omschrijving: "Produceert tekst, beeld en video voor digitale platforms." },
  { code: "S", beroep: "Leraar basisonderwijs", opleiding: "Pabo (hbo)", omschrijving: "Begeleidt jonge kinderen in hun leer- en ontwikkelproces." },
  { code: "S", beroep: "Maatschappelijk werker", opleiding: "Social Work (hbo)", omschrijving: "Ondersteunt mensen in kwetsbare situaties." },
  { code: "S", beroep: "Verpleegkundige", opleiding: "Verpleegkunde (hbo)", omschrijving: "Verleent medische zorg en begeleidt patiënten." },
  { code: "S", beroep: "HR-adviseur", opleiding: "Human Resource Management (hbo)", omschrijving: "Begeleidt medewerkers en ontwikkelt personeelsbeleid." },
  { code: "S", beroep: "Pedagogisch begeleider", opleiding: "Pedagogiek (hbo)", omschrijving: "Begeleidt kinderen en jongeren in hun ontwikkeling." },
  { code: "S", beroep: "Loopbaancoach", opleiding: "HRM / Coaching (hbo)", omschrijving: "Helpt mensen bij het ontdekken van hun loopbaanrichting." },
  { code: "O", beroep: "Manager / Teamleider", opleiding: "Bedrijfskunde / Management (hbo)", omschrijving: "Stuurt teams aan en neemt strategische beslissingen." },
  { code: "O", beroep: "Marketing specialist", opleiding: "Commerciële Economie (hbo)", omschrijving: "Ontwikkelt campagnes om producten te promoten." },
  { code: "O", beroep: "Ondernemer", opleiding: "Entrepreneurship / IBS (hbo)", omschrijving: "Bouwt een eigen bedrijf of project op." },
  { code: "O", beroep: "Jurist (HBO)", opleiding: "HBO-Rechten", omschrijving: "Adviseert over juridische kwesties." },
  { code: "O", beroep: "Evenementenmanager", opleiding: "Event Management (hbo)", omschrijving: "Organiseert events van concept tot uitvoering." },
  { code: "O", beroep: "Communicatieadviseur", opleiding: "Communicatie (hbo)", omschrijving: "Ontwikkelt communicatiestrategieën voor organisaties." },
  { code: "C", beroep: "Accountant", opleiding: "Accountancy (hbo)", omschrijving: "Controleert en rapporteert over financiële administratie." },
  { code: "C", beroep: "Logistiek manager", opleiding: "Logistiek & Economie (hbo)", omschrijving: "Optimaliseert transport- en distributieprocessen." },
  { code: "C", beroep: "Bedrijfsadministrateur", opleiding: "Bedrijfseconomie (hbo)", omschrijving: "Beheert financiële en administratieve processen." },
  { code: "C", beroep: "Kwaliteitsmanager", opleiding: "Technische Bedrijfskunde (hbo)", omschrijving: "Bewaakt kwaliteitsnormen en verbetert werkprocessen." },
  { code: "C", beroep: "IT-auditor", opleiding: "Business IT & Management (hbo)", omschrijving: "Controleert IT-systemen op betrouwbaarheid en veiligheid." },
  { code: "C", beroep: "Belastingadviseur", opleiding: "Fiscaal Recht / Accountancy (hbo)", omschrijving: "Adviseert over belastingzaken." },
];

export function letterNaarHex(letter: RIASOCLetter): string {
  const map: Record<RIASOCLetter, string> = {
    R: "#C4602A",
    I: "#2E6DA4",
    A: "#7B4D8E",
    S: "#4A7C6F",
    O: "#D4862A",
    C: "#2D7A4F",
  };
  return map[letter];
}

export function filterBeroepenVoorCode(code: string, max = 8): Beroep[] {
  const top = code.slice(0, 2).split("") as RIASOCLetter[];
  if (top.length < 2) return beroepen.slice(0, max);
  const set = new Set(top);
  const match = beroepen.filter((b) => set.has(b.code));
  return match.slice(0, max);
}
