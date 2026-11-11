/* ====== HIER PAS JE DE INHOUD AAN ====== */
const SITE = {
  ticketUrl: "https://tickets.orpheus.nl/nl/buyingflow/tickets/61508/",   // link uit de QR-code op de flyer
  infoMail: "info@parkinsonbenefiet.nl",
  sponsorMail: "sponsor@parkinsonbenefiet.nl",
  sponsorContact: "Richard Dieteren (Sponsorcommissie)",
  sponsorTel: "06 303 747 31",
  videos: [                                      // YouTube-links; leeg laten = niet tonen
    { titel: "Erik Scherder nodigt u uit", url: "https://youtu.be/wsoG0AtSJCc" },
    { titel: "Bas Bloem nodigt u uit", url: "https://youtu.be/LvBVWOt1igY" }
  ]
};

// foto: bestandsnaam in de map images/ (leeg = initialen)
const SPEAKERS = [
  { naam: "Bas Bloem", rol: "Hoogleraar neurologie", foto: "bas-bloem.jpg" },
  { naam: "Erik Scherder", rol: "Hoogleraar neuropsychologie", foto: "erik-scherder.jpg" },
  { naam: "Erik van Wensen", rol: "Neuroloog", foto: "" },
  { naam: "Jan Vayne", rol: "Pianist", foto: "jan-vayne.jpg" },
  { naam: "Jan Mulder", rol: "Columnist en oud-voetballer", foto: "jan-mulder.jpg" },
  { naam: "Stephan Veen", rol: "Olympisch kampioen hockey", foto: "" },
  { naam: "Arnold Vanderlyde", rol: "Olympisch brons boksen", foto: "arnold-vanderlyde.jpg" },
  { naam: "Bettine Vriesekoop", rol: "Tafeltennisicoon", foto: "bettine-vriesekoop.jpg" },
  { naam: "Hans Böhm", rol: "Schaakmeester, publicist en presentator", foto: "hans-bohm.jpg" },
  { naam: "Tom van ’t Hek", rol: "Presentatie", foto: "tom-van-t-hek.jpg" }
];

// CONCEPT sponsorpakketten (uit de flyer, nog niet definitief)
const TIERS = [
  { prijs: "€ 250", naam: "Supporter", kleur: "#0F8695", tekst: "2 avondkaarten · naamsvermelding" },
  { prijs: "€ 500", naam: "Supporter+", kleur: "#0F8695", tekst: "4 avondkaarten · naamsvermelding" },
  { prijs: "€ 750", naam: "Vriend", kleur: "#0F8695", tekst: "6 avondkaarten · naam/logo · sponsorcommunicatie op aanvraag" },
  { prijs: "€ 1.000", naam: "Sponsor", kleur: "#0F8695", tekst: "2 complete arrangementen · naamsvermelding · sponsorcommunicatie · narrowcasting" },
  { prijs: "€ 1.500", naam: "Brons", kleur: "#A86F3A", sub: "Goede sponsorpositionering", tekst: "3 complete arrangementen · logo · sponsorcommunicatie · narrowcasting" },
  { prijs: "€ 2.500", naam: "Zilver", kleur: "#8E9AA0", sub: "Uitstekende sponsorpositionering", tekst: "4 complete arrangementen · logo · sponsorcommunicatie · narrowcasting · prominentere zichtbaarheid" },
  { prijs: "€ 5.000", naam: "Goud", kleur: "#C99A00", sub: "Uitmuntende sponsorpositionering", tekst: "6 complete arrangementen · prominente naam/logo, sponsorcommunicatie en narrowcasting · beste gereserveerde plaatsen · hospitality/ontvangst · foyerzichtbaarheid in overleg · bedank- en resultaatcommunicatie" },
  { prijs: "€ 10.000+", naam: "Partner op maat", kleur: "#231F20", tekst: "Maatwerk in hospitality, zichtbaarheid en passende koppeling aan het programma." }
];

/* FAQ: antwoord (a) mag HTML bevatten. Een vraag met een LEGE a: "" blijft verborgen op de site,
   zodra je het antwoord invult verschijnt de vraag vanzelf. */
const FAQ = [
 { groep: "Over het evenement", items: [
  { v: "Wat is Het fitte brein?", a: "Een benefietbijeenkomst over Parkinson, georganiseerd door Lionsclub Apeldoorn Het Loo in samenwerking met het Bettine Vriesekoop Fonds. Het is een show met muziek, wetenschap, humor, inspirerende verhalen en interactie met het publiek." },
  { v: "Wanneer is het?", a: "Op maandag 1 februari 2027. Het programma loopt van 15.30 tot 22.15 uur." },
  { v: "Wie werken er mee?", a: "Presentator Tom van ’t Hek ontvangt hoogleraar neurologie Bas Bloem, hoogleraar neuropsychologie Erik Scherder, neuroloog Erik van Wensen, pianist Jan Vayne, columnist en oud-voetballer Jan Mulder, olympisch hockeykampioen Stephan Veen, olympisch bronzen bokser Arnold Vanderlyde, tafeltennisicoon Bettine Vriesekoop en schaakmeester Hans Böhm. In de middag speelt Eltjo Herder zijn monoloog <em>Hé Mister Parkinson</em>." },
  { v: "Waarom deze bijeenkomst?", a: "De aanleiding is het leven van ons Lions-lid Edward Augusteijn met Parkinson, en de monoloog <em>Hé Mister Parkinson</em>." },
  { v: "Voor wie is het bedoeld?", a: "Voor iedereen die geïnteresseerd is: mensen met Parkinson en hun naasten, mantelzorgers, zorgprofessionals, sportliefhebbers en iedereen die het goede doel wil steunen. Het middagprogramma is speciaal gericht op zorgprofessionals en mantelzorgers." },
  { v: "Hoe kan ik helpen om de bijeenkomst bekend te maken?", a: "Graag! <a href=\"downloads/flyer-het-fitte-brein.pdf\">Download de flyer</a> en deel hem met uw leden, medewerkers of cliënten, bijvoorbeeld via uw nieuwsbrief, website of prikbord. Kaarten zijn te koop bij Orpheus of via <a href=\"${SITE.ticketUrl}\">de ticketlink</a>." }
 ]},
 { groep: "Kaarten", items: [
  { v: "Wat kosten de kaarten?", a: "<table><tr><th>Onderdeel</th><th>Aanvang</th><th>Prijs</th></tr><tr><td>Middag</td><td>15.30 uur</td><td>€ 10</td></tr><tr><td>Walking dinner</td><td>17.30 uur</td><td>€ 100</td></tr><tr><td>Avond</td><td>18.30 uur</td><td>€ 35</td></tr></table>" },
  { v: "Waar koop ik kaarten?", a: "Via <a href=\"${SITE.ticketUrl}\">de ticketverkoop van Orpheus</a> of op <a href=\"https://www.orpheus.nl\">www.orpheus.nl</a>. Op de flyer staat ook een QR-code die direct naar de kaartverkoop leidt." },
  { v: "Kan ik meerdere onderdelen combineren?", a: "Ja, elk onderdeel heeft een eigen kaart. Het avondprogramma is niet bij het walking dinner inbegrepen, maar kunt u apart bijboeken." },
  { v: "Hoeveel plaatsen zijn er voor het walking dinner?", a: "Maximaal 100. Wacht dus niet te lang met reserveren." },
  { v: "Is er een drankje inbegrepen?", a: "Bij de avond wordt u in de foyer ontvangen met koffie of thee, en in de pauze krijgt u een drankje." },
  { v: "Kan ik mijn kaart annuleren of omruilen?", a: "" },   // TODO: voorwaarden van Orpheus voor dit evenement
  { v: "Kan ik kaarten cadeau geven?", a: "Jazeker. Een kaart voor Het fitte brein is een mooi cadeau en u steunt er tegelijk het goede doel mee." }
 ]},
 { groep: "Programma", items: [
  { v: "Hoe ziet het programma eruit?", a: "<table><tr><th>Tijd</th><th>Onderdeel</th></tr><tr><td>15.30 uur</td><td>Inloop middagprogramma</td></tr><tr><td>16.00 – 17.30 uur</td><td>Middagprogramma met de monoloog <em>Hé Mister Parkinson</em> en nabespreking</td></tr><tr><td>17.30 – 19.15 uur</td><td>Walking dinner met Hans Böhm en de gasten</td></tr><tr><td>18.30 – 19.45 uur</td><td>Beleving in de foyer</td></tr><tr><td>19.45 – 22.15 uur</td><td>Hoofdprogramma in de Hanoszaal, met pauze</td></tr></table>" },
  { v: "Wat gebeurt er in het middagprogramma?", a: "Eltjo Herder speelt zijn monoloog <em>Hé Mister Parkinson</em>, een indringend toneelstuk over leven met de snelst groeiende hersenziekte ter wereld. Daarna volgt een nabespreking met onder anderen neuroloog Erik van Wensen. Het programma is bedoeld voor zorgprofessionals, mantelzorgers en andere geïnteresseerden." },
  { v: "Wat is het walking dinner?", a: "Een informeel diner waarbij u staand of lopend van gerecht tot gerecht gaat, in de VIP-foyer met uitzicht op de activiteiten in de foyer. Hans Böhm verzorgt een bijdrage en u ontmoet de bekende gasten uit het hoofdprogramma." },
  { v: "Wat is er te doen in de foyer?", a: "U wordt ontvangen met koffie of thee. Daarna kunt u meedoen aan een tafeltennisclinic met Bettine Vriesekoop, simultaanschaak spelen tegen Hans Böhm, kijken naar een boksdemonstratie van Arnold Vanderlyde en de yips challenge doen met Erik van Wensen." },
  { v: "Wat is de yips challenge?", a: "De yips zijn een plotselinge, onwillekeurige spierschok, vooral bekend uit golf, bijvoorbeeld bij het putten. Neuroloog Erik van Wensen doet er onderzoek naar (<a href=\"https://www.mdsabstracts.org/abstract/the-yips-in-golf-is-it-a-task-specific-dystonia/\">bron</a>)." },   // TODO: aanvullen wat bezoekers precies doen bij de challenge
  { v: "Wat gebeurt er in het hoofdprogramma?", a: "Tom van ’t Hek presenteert een show met Erik Scherder, Jan Vayne, Bas Bloem, Erik van Wensen, Jan Mulder, Stephan Veen, Bettine Vriesekoop, Hans Böhm en Arnold Vanderlyde. Toppianist Jan Vayne verzorgt de muziek. In de pauze krijgt u een drankje." },
  { v: "Moet ik sportkleding meenemen voor de clinics?", a: "" }   // TODO: bevestigen (voorstel: nee, gewone kleding en schoenen volstaan)
 ]},
 { groep: "Locatie en bereikbaarheid", items: [
  { v: "Waar is Theater Orpheus?", a: "Churchillplein 1, 7314 BZ Apeldoorn, aan de rand van het centrum (<a href=\"https://uit.inapeldoorn.nl/?p=4270349\">bron</a>)." },
  { v: "Kan ik parkeren bij Orpheus?", a: "Ja, onder het theater ligt een parkeergarage met ongeveer 425 plaatsen (<a href=\"https://www.centrumparkeren.nl/apeldoorn/parkeergarages/schouwburg\">bron</a>). Kijk voor de actuele tarieven op <a href=\"https://www.orpheus.nl\">orpheus.nl</a>." },
  { v: "Is Orpheus goed bereikbaar met openbaar vervoer?", a: "" },   // TODO: looptijd vanaf station Apeldoorn en buslijnen
  { v: "Is Orpheus toegankelijk met een rolstoel of rollator?", a: "Orpheus is rolstoeltoegankelijk. Heeft u bijzondere wensen, bijvoorbeeld een rolstoelplaats in de zaal? Geef dit dan door bij het bestellen van uw kaarten of neem contact op met Orpheus via 055 527 0300." },
  { v: "Ik heb Parkinson. Waar moet ik rekening mee houden?", a: "" }   // TODO: organisatie (rustplekken, zitplaatsen bij het walking dinner, begeleider welkom)
 ]},
 { groep: "Het goede doel", items: [
  { v: "Waar gaat de opbrengst naartoe?", a: "Naar twee doelen: onderzoek naar Parkinson door prof. Bas Bloem, en het Bettine Vriesekoop Fonds, dat zich richt op meer bewegen voor mensen met Parkinson." },
  { v: "Wat doet het Bettine Vriesekoop Fonds?", a: "Bettine Vriesekoop richtte haar fonds op om tafeltennis in te zetten als therapie bij Parkinson (<a href=\"https://www.rodi.nl/alphenaandenrijn/nieuws/507748/tafeltennisster-bettine-vriesekoop-tipt-senioren-tijdens-clinic-bij-wijkcentrum-swaenswijk\">bron</a>)." },
  { v: "Waarom bewegen bij Parkinson?", a: "Onderzoek laat zien dat regelmatig bewegen mensen met Parkinson helpt om beter te bewegen en helderder te denken. Precies daarover gaat Het fitte brein." },
  { v: "Gaat de hele opbrengst naar het goede doel?", a: "" },   // TODO: welk deel na aftrek van kosten, en of sponsors de kosten dragen
  { v: "Kan ik ook doneren zonder het evenement te bezoeken?", a: "" },   // TODO: rekeningnummer of donatielink, ANBI-status
  { v: "Kan mijn bedrijf sponsoren?", a: "Graag! Op de pagina <a href=\"sponsoren.html\">Sponsoren</a> leest u wat u ervoor krijgt. Vragen? Mail <a href=\"mailto:${SITE.sponsorMail}\">${SITE.sponsorMail}</a>." }
 ]},
 { groep: "Contact", items: [
  { v: "Ik heb een vraag die hier niet tussen staat. Bij wie kan ik terecht?", a: "Voor vragen over kaarten, toegankelijkheid en parkeren: Theater Orpheus, 055 527 0300. Voor vragen over het evenement of het goede doel: Lionsclub Apeldoorn Het Loo, <a href=\"mailto:${SITE.infoMail}\">${SITE.infoMail}</a>. Voor sponsoring: <a href=\"mailto:${SITE.sponsorMail}\">${SITE.sponsorMail}</a>." },
  { v: "Kan ik als pers aanwezig zijn of een interview aanvragen?", a: "" }   // TODO: naam en e-mail perscontact
 ]}
];
