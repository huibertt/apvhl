export const articles = [
  {
    label: "Artikel 1: Cheats",
    description:
      "Het gebruik maken van software (van derde partijen) om een voordeel in het spel te krijgen is niet toegestaan. Hieronder vallen o.a. cheats/hacks.",
    punishmentCategory: "8",
    subarticles: [
      {
        label: "Artikel 1A: Samenwerken met een cheater",
        description:
          "Het samenwerken met een cheater zal worden bestraft met een account wipe.",
        punishmentCategory: "9"
      },
      {
        label: "Artikel 1B: Externe Software",
        description:
          "Het gebruik maken van instellingen/programma's waardoor je voordelen krijgt is niet toegestaan. Hier vallen o.a. de volgende zaken onder:",
        list: [
          "Crosshair - zowel software als hardware",
          "Aangepaste schermresolutie (enige toegestane resoluties zijn AUTO, 16:9 en 16:10)",
          "Reshade",
          "Kill effects",
          "Tracers"
        ],
        punishmentCategory: "7"
      }
    ]
  },
  {
    label: "Artikel 2: Exploits/Bugs",
    description:
      "Hieronder wordt verstaan het doelbewust gebruik maken van een bug/exploit die in jou of andermans voordeel werkt.",
    list: [
      "Het dupliceren van ingame items, zonder dit te melden.",
      "Het niet aangeven van gedupliceerde items na server restarts/crashes of bij directe constatering.",
      "Het gebruik maken van een emote om aan de andere kant van een muur/deur te komen of uit te breken van bijvoorbeeld de gevangenis.",
      "Handelingen uitvoeren terwijl je dood bent. Hieronder valt ook praten in /me of het gebruik van emotes.",
      "Reloggen om zo weer meer health er bij te krijgen.",
      "De bug ‘one punch’ zal bestraft worden met een straf volgens de 5de categorie.",
      "Wanneer er sprake is van gedupliceerde items/geld, volgt er een straf van zowel de 7de als de 8ste categorie."
    ],
    punishmentCategory: "7",
    subarticles: [
      {
        label: "Artikel 2A: IRL Trade",
        description:
          "Het verhandelen van items, valuta, diensten en/of accounts voor echt geld is verboden.",
        punishmentCategory: "10"
      }
    ]
  },
  {
    label: "Artikel 3: Alt Characters",
    description:
      "Onder een alt character wordt verstaan dat een persoon meerdere accounts aanmaakt om binnen de stad Haarlem te spelen.",
    list: [
      "Het is verboden om een alt account aan te maken om vervolgens het banksaldo van dit account te overhandigen aan een speler, op welke manier dan ook.",
      "Het is niet toegestaan te spoofen om op die manier weer toegang te krijgen tot je account op Haarlem."
    ],
    punishmentCategory: "8",
    subarticles: [
      {
        label: "Artikel 3A: Startersgeld",
        list: [
          "Het is niet toegestaan startersgeld aan anderen te geven zonder enige bedoeling zelf te gaan spelen.",
          "Het is niet toegestaan om de speeltijd zonder enige doel af te wachten en dan als nog geld over te maken zonder doel te hebben langer te gaan spelen."
        ],
        punishmentCategory: "8"
      },
      {
        label: "Artikel 3B: Starterspakket",
        description:
          "Het dwingen van nieuwe spelers om het starterspakket te claimen, om die al dan niet te rippen.",
        punishmentCategory: "4"
      }
    ]
  },
  {
    label: "Artikel 4: Dreigen en intimideren",
    description:
      "Onder dit artikel vallen alle zaken die als bedreigend of intimiderend kunnen worden ervaren. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
    list: [
      "Dreigen met of daadwerkelijk 'doxen' van personen.",
      "Dreigen met of daadwerkelijk 'DDOSsen' van personen.",
      "Dreigen of daadwerkelijk bedreigen van personen."
    ],
    punishmentCategory: "8",
    subarticles: [
      {
        label: "Artikel 4A: Schelden/beledigen van spelers of staffleden",
        list: [
          "Het uitschelden van spelers is niet toegestaan.",
          "Het schelden met hedendaagse ziektes is niet toegestaan.",
          "Het doen van seksuele uitingen of beledigingen is niet toegestaan."
        ],
        punishmentCategory: "5"
      },
      {
        label: "Artikel 4B: Racisme/discriminatie",
        list: [
          "Het maken van racistische opmerkingen is niet toegestaan.",
          "Het maken van discriminerende opmerkingen is niet toegestaan."
        ],
        punishmentCategory: "6"
      }
    ]
  },
  {
    label: "Artikel 5: Haat veroorzakend/toxic gedrag",
    list: [
      "Het toxic reageren op wat voor manier dan ook wordt niet getolereerd. Discussie voeren mag, maar houd het beschaafd.",
      "Het toxic reageren in Discord zal bestraft worden met een strafuit de 5de categorie.",
      "Het discussieren in discord over een opgelegde straf van staff is niet toegestaan.",
      "Het in scenario toxic reageren omdat je het ergens niet mee eens bent.",
      "Het aanmaken van tickets/joinen van de wachtkamer zonder goed gegronde redenen wordt gezien als naaien, en zal worden bestraft."
    ],
    punishmentCategory: "4"
  },
  {
    label: "Artikel 5: Fail RP",
    description:
      "Onder deze regel vallen alle facetten die als onrealistisch kunnen worden beschouwd. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen. Vraag je tijdens het spelen in onze stad altijd af: 'Zou dit in het echt ook op deze manier kunnen gebeuren?'.",
    punishmentCategory: "4",
    list: [
      "Het roleplay scenario vermijden tijdens ernstige verwondingen met andere burgers of overheidsdiensten.",
      "Het roleplay scenario vermijden/niet uitspelen van verwondingen tijdens ernstige aanrijdingen met andere burgers of overheidsdiensten. Deze bepaling is niet exclusief en sluit andere gevallen niet uit.",
      {
        sublist: [
          "Met 80 km/h over de kop raken met je voertuig, ook al land je hem op de wielen.",
          "Met 80 km/h crashen tegen onverwoestbare objecten. (gebouwen, palen of props die NIET kapot gaan)",
          "Met 120 km/h crashen tegen andere voertuigen.",
          "Met 80 km/h crashen met een motor.",
          "Met 80 km/h van je motor afgeschoten worden.",
          "Crash effect hebben.",
          "Alle andere vormen die ook als GTA rijstijl gezien kunnen worden, zoals stuntjumps of je auto die (al dan niet bewust) door de lucht vliegt."
        ]
      },
      "(Overmatig) gebruik van ongepaste emotes.",
      "Praten in de porto of bellen onder water.",
      "Onjuist gebruik maken van een F6 menu tijdens scenarios.",
      "Zonder goede reden iemand zijn band lek steken/schieten.",
      "Het schieten op voertuigen van spelers zonder enige aanleiding of reden zonder <strong>minimaal 3 keer duidelijk (mondeling/verbaal) te waarschuwen</strong> met een tijd tussen de waarschuwingen van ten minste 30 seconden. Daarnaast moet je eerst proberen het voertuig tot stilstand te brengen door te pitten.",
      "Het stelen van een voertuig wanneer iemand bezig is met zijn voertuig. Deze regel is van toepassing op onderstaande handelingen, maar kan ook breder geïnterpreteerd worden.",
      {
        sublist: ["Inladen", "Uitladen", "Tanken", "Repareren"]
      },
      "Praten/communiceren op wat voor manier dan ook, terwijl je dood bent.",
      "Het campen op locaties die veel spelers trekken (drugslocaties, appartementen, garages, greenzones, bosjes) in de stad of op het eiland, waardoor je je langdurig (langer dan 2 minuten) op die locatie begeeft, met als doel het ten uitvoer brengen van illegale activiteiten zal worden bestraft met een straf uit de <strong>3de categorie</strong>. Enkele voorbeelden zijn:",
      {
        sublist: [
          "Wachten in een bosje, om als er een mule uit de garage wordt gehaald eropaf te lopen om goederen te ontvreemden.",
          "Wachten in het openbaar, om een voertuig mee te nemen welke niet van jou is om die vervolgens leeg te halen.",
          "Wachten in een bosje, om vervolgens mensen te rippen van hun goederen of wapens.",
          "Wachten in het openbaar, op drugs- of witwaslocaties om vervolgens personen te rippen van hun goederen"
        ]
      },
      "Een scenario waarin je je eigen belang boven dat van een ander zet, of waarbij de roleplay van andere ingevuld wordt voor eigen belang en leidt tot onrealistische dwang welke een scenario onredelijk veranderd, zal worden gezien als een combinatie van Powergaming en FailRP.",
      "Indien een speler totaal geen intentie heeft om te roleplayen, kan een straf worden gegeven tot de 8e categorie.",
      "Wanneer je gevorderd wordt door een overheidsinstantie, dien je hieraan te voldoen. Mocht je aan deze vorderingen niet voldoen en je verstoord hierdoor een scenario, zal dit leiden tot een straf tot de 3e categorie.",
      "Als een heli beschoten wordt, en de impact is te zien/horen op de heli, dient de heli af te koppelen en te landen om deze te inspecteren en te repareren. Pas dan mag er weer verder gevlogen worden.",
      "Terwijl je geboeid bent gebruik maken van je telefoon of portofoon.",
    ]
  },
  {
    label: "Artikel 6: Powergamen",
    description:
      "Het bewust veranderen van een scenario, door onrealistische/onmogelijke componenten toe te voegen waardoor het voor de andere partij niet uit te spelen is. Hieronder enkele voorbeelden, maar deze regel is niet beperkt tot deze voorbeelden:",
    list: [
      "Het vluchten in je appartement/greenzones/loods tijdens een scenario.",
      "Tijdens een achtervolging met zowel onder- als bovenwereld je auto wegzetten in een garage. Wil je in een achtervolging van auto willen wisselen? Dan moet je de oude auto laten staan.",
      "Je auto wegzetten tijdens een scenario.",
      "Iemand dwingen zijn voertuig sleutels aan jou te geven, met als doel deze leeg te halen.",
      "Binnen 10 minuten na het trekken van je wapen je wapen wegleggen of uit de stad gaan. Valt ook onder combatloggen.",
      "Een speler meenemen naar het eiland om hem daar te doden, of te kunnen rippen van zijn ongeziene wapen.",
      "Gebruik maken van het Z menu om de ID's van andere spelers te zien door muren, in bosjes, in auto's etc.",
      "Emotes gebruiken wanneer je beschoten wordt. (Emote abuse)",
      "Het liggen op een locatie om vervolgens in third person te kunnen kijken en zo niet op te vallen.",
      "Iemand vastbinden met F6 zonder geldige reden.",
      "Iemand fouilleren met F6 zonder geldige reden/zonder wapen.",
      "In een shootout je handen omhoog doen om zo te forceren dat je niet doodgeschoten mag worden door een agent.",
      "Onder dwang iemand iets uit zijn huis laten halen.",
      "Onder dwang iemand zijn auto uit de garage laten halen. Behalve wanneer je die auto eerder hebt gezien, en je aantoonbaar een achtervolging bent gestart.",
      "Het is niet toegestaan om de politie te forceren om een persoon af te fouilleren en af te geven."
    ],
    punishmentCategory: "4"
  },
  {
    label: "Artikel 7: OOC / Karakter breken",
    description:
      "Het is nooit toegestaan om karakter te breken. Out of character gaan is dus niet de bedoeling, ook niet als er iets gebeurd wat tegen de APV is. Ook woorden als 'goden', 'staff', 'broodje', 'tickets', 'refund', 'bug', 'vakantie' enzovoorts.",
    list: [
      "Het is alleen toegestaan om de Nederlandse of Engelse taal te typen/spreken in Haarlem.",
      "OOC gaan in porto."
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 8: Copbaiten",
    description:
      "Onder dit artikel vallen de onderstaande zaken. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
    list: [
      "Het uitlokken van reactie van overheidsdiensten.",
      "Het uitlokken/aangaan van achtervolgingen zonder illegale goederen/wapens/gezochtstatus te hebben.",
      "Het schieten op agenten zonder duidelijk aanwijsbare reden.",
      "Het verstoren van een scenario van agenten, denk daarbij aan het telkens heen en weer rijden bij een overval.",
      {
        sublist: [
          "Het mengen in scenario mag alleen van personen in dezelfde gang"
        ]
      }
    ],
    punishmentCategory: "2"
  },
  {
    label: "Artikel 9: No value of life (NVOL)",
    description:
      "Het is verplicht waarde te hechten aan je leven. Enkele voorbeelden van NVOL vind je hieronder:",
    list: [
      "Het moedwillig beëindigen van je eigen leven of dat van een ander.",
      "Het indrukken van de noodknop en/of het (meermaals) indrukken van de porto terwijl er een wapen op je gericht staat.",
      "Het niet meewerken wanneer er binnen de <strong>derde praatcirkel</strong> (shouting/schreeuwen) daadwerkelijk een vuurwapen op je gericht staat.",
      "Het niet meewerken wanneer er binnen armlengte een slag- of steekwapen op je gericht staat.",
      "Het niet meewerken wanneer er (buiten een gesloten voer-, vaar- of vliegtuig) een taser op je gericht staat",
      "Het actie ondernemen wanneer iemand zijn wapen laat zakken om gebruik te maken van zijn F6 menu, het typen in /me of gebruik te maken van het derde oog (ALT).",
      "Elke andere vorm waarin je jouw leven bewust in een te groot gevaar brengt valt onder dit artikel.",
      {
        sublist: [
          "Indien dit artikel meer dan twee keer op jouw naam staat, wordt er naast een ban elke opvolgende keer je wapen ingenomen."
        ]
      }
    ],
    punishmentCategory: "4"
  },
  {
    label: "Artikel 10: New life rule",
    description:
      "Wanneer een speler is doodgegaan in een scenario, dient een speler alles te vergeten uit dat specifieke scenario en de aanloop er naar toe. Je kan niet meer deelnemen aan dat scenario, en mag dus ook niet meer teruggaan naar de plek als het scenario zich daar nog bevind of om wraak te nemen. Ditzelfde geld voor een scenario verdeeld over meerdere dagen. Je kunt dan ook geen informatie meer doorgeven.",
    punishmentCategory: "3"
  },
  {
    label: "Artikel 11: Microfoon, taal en stem",
    description:
      "Iedere speler die speelt in onze stad is verplicht een microfoon te hebben en die ook te gebruiken. Mocht je hiervoor een sanctie ontvangen dien je te bewijzen, na het maken van een afspraak met een stafflid, dat je microfoon weer werkend is. Daarnaast is het verplicht om push to talk te gebruiken in de stad, zodat anderen geen last hebben van jouw achtergrond geluid.",
    punishmentCategory: "2",
    subarticles: [
      {
        label: "Artikel 11A: Voice changer en soundpad",
        description:
          "Het is voor een ieder toegestaan een voice changer te gebruiken, mits je voldoet aan onderstaande eisen:",
        list: [
          "Je bent en blijft verstaanbaar.",
          "Het is passend in de roleplay.",
          "In geval van stemvervorming om anoniem te blijven dien je een masker op te hebben die je mond bedekt.",
          "Als je gebruik wil maken van een soundpad is het niet toegestaan dit overmatig te gebruiken."
        ],
        punishmentCategory: "1"
      },
      {
        label: "Artikel 11B: Earrape",
        description:
          "Het is niet toegestaan om anderen tot last te zijn met je microfoon, voicechanger of soundpad door overmatig of extreem luid gebruik te maken van voornoemde middelen.",
        punishmentCategory: "2"
      },
      {
        label: "Artikel 11C: De Nederlandse taal",
        description:
          "Tijdens het spelen van onze stad is het verplicht de Nederlandse taal te beheersen en toe te passen.",
        list: [
          "Indien een andere taal passend is binnen je karakter, kun je op deze regel een gedeeltelijke uitzondering krijgen van het staffteam.",
          "Het standaard Engels spreken is niet toegestaan."
        ],
        punishmentCategory: "1"
      },
      {
        label: "Artikel 11D: Stemherkenning",
        description:
          "Het is toegestaan om personen aan hun stem te herkennen, tenzij:",
        list: [
          "Deze persoon een voicechanger/stemvervormer gebruikt MET een masker die zijn of haar mond bedekt."
        ],
        punishmentCategory: "2"
      }
    ]
  },
  {
    label: "Artikel 12: VDM",
    description:
      "Onder VDM (Vehicle Deathmatch) wordt verstaan dat het niet toegestaan is je voer-, vaar- of vliegtuig te gebruiken als wapen. Hieronder vallen onderstaande voorbeelden, maar is niet beperkt tot deze gevallen.",
    list: [
      "Het rammen van andere voertuigen.",
      "Het rammen van andere burgers.",
      "Het rijdend blokkeren van op jou afkomende voertuigen. Bij een blokkade moet jij <strong>altijd stilstaan</strong>.",
      "Het pitten op een onjuiste manier.",
      "Het pitten boven een snelheid van 130 km/h.",
      {
        sublist: [
          "Afhankelijk van de ernst van de situatie kan een stafflid een hogere sanctie opleggen."
        ]
      }
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 13: RDM",
    description:
      "Onder RDM (Random Deathmatch) wordt verstaan dat het niet toegestaan is burgers te vermoorden zonder aanleiding. <strong>Geldige redenen</strong> kunnen zijn, maar zijn niet beperkt tot:",
    list: [
      "Het in grove mate uitdagen in de stad, via de telefoon of via de sociale media die de stad gebruikt. Zorg hier voor voldoende en sluitend bewijs.",
      "Het in grove mate uitdagen in de stad van een organisatie.",
      "Verbaal provoceren is totaal op eigen risico, en kan gezien de omstandigheid vallen onder NVOL (artikel 9).",
      "Een lid verlaat jouw gang, echter moet dit <strong>binnen 48 uur</strong> na het moment van verlaten van de gang beslecht worden.",
      {
        sublist: [
          "Het is niet toegestaan iemand te vermoorden voor de volgende zaken/op de volgende manieren. <strong>Ongeldige redenen/manieren</strong> kunnen zijn, maar zijn niet beperkt tot:"
        ]
      },
      "Iemand die niet voldoet aan het commando om vernederende dingen te doen, zoals 'blaffen', 'zingen' of 'dansen'.",
      "Het in grove mate uitdagen in de stad van een organisatie.",
      "Kill on sight.",
      {
        sublist: [
          "Afhankelijk van de ernst van de situatie kan een stafflid een hogere sanctie opleggen. Indien dit artikel meer dan twee keer op jouw naam staat, wordt er naast een ban elke opvolgende keer je wapen ingenomen."
        ]
      }
    ],
    punishmentCategory: "3"
  },
  {
    label: "Artikel 14: Metagamen",
    description:
      "Informatie verkregen buiten de game, mag niet ingame gebruikt worden (met uitzondering van 'in karakter' kanalen in de officiële Haarlem discords). Verder hanteren wij de volgende regels:",
    list: [
      "Wanneer je in Haarlem zit is het niet toegestaan om te screensharen.",
      "Wanneer je in Haarlem zit is het niet toegestaan om een prive stream te hebben. Deze moet openbaar zijn en deze moet HaarlemRP of Haarlem Roleplay in de titel hebben.",
      "Wanneer je in Haarlem zit is het niet toegestaan te praten in je oortje terwijl je in scenario zit. Je moet dus gemute zitten.",
      "Het is niet toegestaan om ingame informatie te versturen via Discord. (met uitzondering van 'in karakter' kanalen in de officiële Haarlem discords)",
      "Mensen oproepen via discord of andere media om te komen valt onder metagamen."
    ],
    punishmentCategory: "3",
    subarticles: [
      {
        label: "Artikel 14B: Stream sniping",
        description:
          "Informatie verkregen buiten de game, via live streams, content creators of andere video content wordt gezien als streamsniping, en behelst een hogere sanctie dan metagaming.",
        punishmentCategory: "4"
      }
    ]
  },
  {
    label: "Artikel 15: Streamers en content creators",
    description:
      "Als streamer of content creator ben je van harte welkom op Haarlem. Je bent van grote waarde voor de stad en entertainment voor de burgers. Om er voor te zorgen dat deze extra verantwoordelijkheid niet misbruikt wordt, hebben wij een aantal regels opgesteld:",
    list: [
      "Zorg er voor dat de mensen met wie jij in een discord call zit, weten dat jij aan het streamen bent.",
      "Je bent als streamer/content creator een visitiekaartje voor Haarlem. Mochten er dingen gebeuren, maak een /report of een ticket.",
      "Overtredingen van de APV on-stream worden direct bestraft.",
      "Haarlem in een kwaad daglicht zetten op stream, zal resulteren in een ban.",
      "Samenwerken met een hacker, of het niet melden terwilj je weet dat er een hacker in de stad is zal resulteren in een ban."
    ],
    punishmentCategory: "6"
  },
  {
    label: "Artikel 16: Voertuig gebruik",
    description:
      "Naast de bepalingen die besproken zijn in artikel 12: VDM, gelden de onderstaande regels. Deze regel omvat de onderstaande punten, maar is niet beperkt tot deze gevallen:",
    list: [
      "Een voertuig mag geen hogere categorie pitten of brake checken.",
      "Wij hanteren de volgende volgorde in klasses, van groot naar klein:",
      {
        sublist: [
          "Vrachtwagens, 6x6 aangedreven voertuigen",
          "Busjes",
          "SUV's",
          "Personenauto's",
          "Sportauto's",
          "Hypercars"
        ]
      },
      "Brakechecken is toegestaan indien dit realistisch blijft. Wanneer jij iemand brake checkt, is dit op eigen risico! Het is niet mogelijk om hiervoor een refund aan te vragen indien dit nadelig uitpakt voor jou.",
      "Alle voertuigen mogen op gebaande paden rijden. Dit zijn paden die ook op je map staan, met uitzondering van kleine, steile zandpaden (bijv. die bij Mount Chiliad).",
      "Alleen offroaders mogen offroad. Offroad banden maken hierin niks uit.",
      "Het is niet toegestaan gebouwen te betreden met voertuigen die daarvoor niet geschikt zijn.",
      "Het is niet toegestaan om een motor te pitten.",
      "Het is niet toegestaan om een lesauto voor andere doeleinden te gebruiken dan je rijbewijs te halen."
    ],
    punishmentCategory: "1",
    subarticles: [
      {
        label: "Artikel 16A: GTA rijstijl",
        description:
          "Het onjuist gebruik van je voertuig, door onrealistisch rijgedrag. Enkele voorbeelden van GTA rijstijl zijn:",
        list: [
          "Stunt jumps over ramps, bergen of gebouwen.",
          "Onrealistisch offroad rijden.",
          "Het rammen of onnodig beuken van voertuigen.",
          "Het gebruik maken van obstakels om ergens overheen te jumpen.",
          "Wanneer je 1 of meerdere lekke banden hebt, mag je niet harder dan 130 km/h rijden."
        ],
        punishmentCategory: "2"
      },
      {
        label: "Artikel 16B: Whitelisted job voertuigen",
        list: [
          "Het is niet toegestaan om voertuigen van whitelisted job te gebruiken om andere dingen dan die job te doen.",
          "Het is niet toegestaan om eigen voertuigen te gebruiken bij het uitvoeren van whitelisted jobs."
        ],
        punishmentCategory: "1"
      }
    ]
  },
  {
    label: "Artikel 17: Sociale media",
    description:
      "Het uitvoeren van criminele activiteiten via social media is niet toegestaan. Voorbeelden hiervan zijn:",
    punishmentCategory: "1",
    list: [
      "Vragen om of het aanbieden van:",
      {
        sublist: [
          "Witwas",
          "Locaties",
          "Wapens",
          "Drugs",
          "Aanwezigheid van gangs"
        ]
      },
      "Het is daarnaast niet toegestaan om synoniemen of vervormingen van bovenstaande woorden te gebruiken. Denk aan 'snoepjes', 'honkbal spullen', 'poedersuiker' of 'sokken wassen'."
    ]
  },
  {
    label: "Artikel 18: Kleding",
    description:
      "Binnen onze stad gelden er een aantal simpele regels omtrent kleding, om te zorgen dat het voor iedereen eerlijk en leuk blijft.",
    punishmentCategory: "1",
    list: [
      "Het is niet toegestaan om de beginnersoutfit/standaard outfit te dragen. Iedereen dient een volledige en realistische outfit te hebben, waarin ook je armen en benen zichtbaar zijn.",
      "Het is je eigen verantwoordelijkheid om je kleding aan te passen als bijvoorbeeld je armen of benen niet zichtbaar zijn.",
      "Het dragen van een combathelm is niet toegestaan.",
    ],
    subarticles: [
      {
        label: "Artikel 18A: Impersonatie van overheidspersoneel",
        list: [
          "Het is niet toegestaan om jezelf voor te doen als een medewerker van een overheidsdienst.",
          "Het is niet toegestaan tactische vesten van een overheidsdienst te dragen.",
          "Het is niet toegestaan om accessoires van overheidsdiensten te dragen."
        ],
        punishmentCategory: "1"
      }
    ]
  },
  {
    label: "Artikel 19: Combatloggen",
    description:
      "Het spel afsluiten, terwijl je in een scenario zit is niet toegestaan. Het kan ook zijn dat je niet door eigen toedoen in een scenario beland, denk hierbij bijvoorbeeld aan een achtervolging. Ook dan is afsluiten niet toegestaan.",
    list: [
      "Indien je onverhoopt uit de server gaat, heb je maximaal 5 minuten om terug te komen.",
      "Kom je terug en is er niemand? Dan ben je verplicht om 10 minuten op die locatie te wachten en een report te maken.",
      "Indien je echt niet langer kan blijven, dien je te overleggen met personen die meedoen aan jouw scenario, en een report te maken.",
      {
        sublist: [
          "Ook het verlaten van de stad terwijl je dood ligt wordt gezien als combatloggen, en mag pas weer als je door de Ambulance bent geholpen of bent gerespawned."
        ]
      }
    ],
    punishmentCategory: "4"
  },
  {
    label: "Artikel 20: Communicatie met staff",
    description:
      "Mocht iets in de game niet gaan zoals deze APV beschrijft, kun je met /report een report aanmaken die indien mogelijk wordt opgepakt door het staffteam. Houd hierbij de volgende richtlijnen in acht:",
    punishmentCategory: "1",
    list: [
      "Verwoord ze duidelijk. Reports die de tekst: 'help', 'kom snel' of 'vdm' bevatten zullen niet worden opgepakt.",
      "Reports voor metagaming, RDM en combatloggen hoef je niet aan te maken. Hiervoor dien je een ticket aan te maken in onze ticket Discord.",
      "Wees altijd zo volledig mogelijk, en zorg dat je informatie geeft waar wij wat mee kunnen. Nogmaals: op teksten in reports als 'staff kom snel', 'kom eens' of 'ik heb een vraag' zal niet worden gereageerd."
    ],
    subarticles: [
      {
        label: "Artikel 20A: Spammen",
        list: [
          "Het is niet de bedoeling om reports te spammen. Ze zullen op volgorde van binnenkomst worden afgehandeld. Meer dan 2 reports per 30 seconden zal worden gezien als spam.",
          "Het is niet de bedoeling om informatie in /me te spammen."
        ],
        punishmentCategory: "2"
      }
    ]
  },
  {
    label: "Artikel 21: In karakter kanalen in de discord",
    description:
      "Het is toegestaan om de kanalen die onder het kopje 'In karakter' staan in onze discord, te gebruiken binnen de stad. Alles hierbuiten, is niet toegestaan en zal vallen onder Artikel 14: Metagamen. Momenteel zijn de volgende kanalen 'in karakter':",
    punishmentCategory: "2",
    list: ["Nieuws", "Twitter media", "Marktplaats"]
  },
  {
    label: "Artikel 22: Criminele activiteiten",
    punishmentCategory: "2",
    list: [
      "Het is niet toegestaan om voertuigen bij illegale deals te betrekken. Alle onderwereld goederen dienen gekocht te worden met geld of andere onderwereld goederen.",
      "Het is niet toegestaan om iemand te dwingen jou in zijn huis te laten. Als je er zelf voor kiest iemand binnen te laten, is dat op eigen risico.",
      "Het is niet toegestaan om onderwereld gerelateerde zaken aan te bieden via social media of de marktplaats."
    ],
    subarticles: [
      {
        label: "Artikel 22A: Oplichten en scammen",
        description:
          "Het is toegestaan om op te lichten of te scammen binnen onze stad. Echter zitten hier wel regels aan verbonden.",
        list: [
          "Het is niet toegestaan om te scammen met voertuigen.",
          "Wanneer jij een voertuig koopt en er wordt beweerd dat er bepaalde upgrades/chiptunes op zitten, is dit jouw eigen verantwoordelijkheid om dit te controleren.",
          "Op een bovenwereld gerelateerde scam zit een limiet van €500.000.",
          "Het uitlenen van geld of goed is ten alle tijde op eigen risico. Ook wanneer de lener gebanned wordt.",
          "Na een scam is het niet toegestaan de persoon te vermoorden.",
          "Het scammen van overheidspersoneel welke in dienst is, is niet toegestaan."
        ],
        punishmentCategory: "2"
      }
    ]
  },
  {
    label: "Artikel 23: Overvallen",
    punishmentCategory: "2",
    list: [
      "Er is geen maximum aan het aantal overvallers bij een overval.",
      "Tijdens een winkeloverval zal er geen DSI aanwezig zijn, tenzij er automatische wapens of gegijzelde agenten aanwezig zijn.",
      "Het maximale aantal hostages, minimaal benodigd aantal politie en maximaal aantal outside shooters zijn:",
      {
        sublist: [
          "<strong>Winkel overval</strong> - max hostages: 5 - min. politie: 4 - max outside shooters: 2",
          "<strong>Juwelier overval</strong> - max hostages: 6 - min. politie: 4 - max outside shooters: 3",
          "<strong>Kleine bank overval</strong> - max hostages: 5 - min. politie: 4 - max outside shooters: 3",
          "<strong>Grote bank overval</strong> - max hostages: 10 - min. politie: 7 - max outside shooters: 4"
        ]
      },
      "De personen die binnen in de overval staan, mogen vanaf het moment dat de politie ter plaatse is niet gecounterd worden. Dit geldt tot 30 minuten na de overval.",
      "De onderhandelaar tijdens een overval mag niet beschoten of gegijzeld worden.",
      "De hostages mogen geen vrienden of bekenden van je zijn.",
      "De hostages moeten in de overval locatie zitten. Outside hostages zijn niet toegestaan."
    ]
  },
  {
    label: "Artikel 24: Criminele groeperingen",
    punishmentCategory: "1",
    list: [
      "Wanneer jij met 5 personen of meer deelneemt aan een crimineel scenario, zal dit gezien worden als een criminele groepering en zal je je moeten houden aan de geldende onderwereld regels.",
      "Voorbeelden van criminele scenario's zijn: Het als groep deelnemen aan een onderwereld event, hunt, massagijzeling, overval, achtervolging, overval, etc.",
      "Het samenwerken met andere groeperingen/gangs is niet toegestaan.",
      "Het is verboden om nep meldingen te maken in de omgeving van een ganghuis met de intentie tot uitlokken van de criminelen, of het in de problemen werken van de rivaliserende groep."
    ],
    subarticles: [
      {
        label: "Artikel 24A: Gangwars",
        list: [
          "Een gangwar vraag je aan bij de onderwereld coördinator.",
          "Het is alleen toegestaan een wraakactie/gangwar te starten als je in roleplay bewijs hebt verzameld, en die ook kunt delen met de onderwereld coördinator.",
          "Een gangwar kan inclusief ally uitgevochten worden, als de rivaliserende gang hiermee akkoord is."
        ],
        punishmentCategory: "2"
      },
      {
        label: "Artikel 24B: Maximaal toegestaan aantal leden.",
        list: [
          "Het omzeilen van de maximale aantal leden van een groepering afhankelijk van je level, leidt tot directe ontbinding van de gang en/of officiële status van de gang.",
          "Bovenstaande geldt voor erkende gangs, en niet erkende gangs.",
          "Het is verplicht om in de Haarlem onderwereld discord te zitten.",
          "Het verbreken van bovenstaande regels zal leiden tot een gang strike."
        ],
        punishmentCategory: "1"
      },
      {
        label: "Artikel 24C: Officiële gangs",
        list: [
          "Het misbruiken van het gang menu is niet toegestaan.",
          "F6 abuse is niet toegestaan, en zal direct bestraft worden met een gang strike.",
          "Het één of meerdere malen foutief innemen van spullen kan leiden tot een gang strike.",
          "Het is niet toegestaan een persoon uit de auto te halen met je F6 menu. Dit mag alleen als de persoon eerder door jou geboeid is, en erin is gezet.",
          "Het verbreken van bovenstaande regels zal leiden tot een gang strike.",
          "Het is voor een officiële gang niet toegestaan een 2de gang te creeëren om hieruit een groei te kunnen bewerkstelligen."
        ],
        punishmentCategory: "11"
      }
    ]
  },
  {
    label: "Artikel 25: Onderwereld spelers",
    punishmentCategory: "3",
    list: [
      "Het is niet toegestaan om binnen 30 minuten dezelfde locatie te rippen.",
      "Het is niet toegestaan om binnen 90 minuten dezelfde persoon te rippen.",
      ""
    ],
    subarticles: [
      {
        label: "Artikel 25A: Wraakacties",
        list: [
          "Na of tijdens het uitvoeren van een wraakactie dien je altijd de reden te benoemen richting de persoon waar je wraak op hebt genomen.",
          "Voor een wraakactie dien je voldoende onderbouwd bewijs te hebben, en zorg dat je dit kan overleggen indien hierom gevraagd wordt.",
          "Een wraakactie tegen een whitelisted job (politie, ambulance, ramenwasser) is niet toegestaan.",
          "Het is niet toegestaan te mengen in een scenario/wraakactie als jij al eerder bent dood gegaan. (new life rule)"
        ],
        punishmentCategory: "5"
      }
    ]
  },
  {
    label: "Artikel 26: Ontvoeren en gijzelen",
    punishmentCategory: "1",
    list: [
      "Het ontvoeren van burgers is toegestaan vanaf 2 agenten in dienst.",
      "Een agent mag pas ontvoerd worden vanaf 4 agenten. Er moeten voor elke gegijzelde agent, dus minimaal 3 niet gegijzelde agenten zijn.",
      "Een persoon mag maximaal 60 minuten ontvoerd zijn.",
      "Het maximale opeisbare bedrag per burger is 100k.",
      "Het maximale opeisbare bedrag per politieagent is 150k.",
      "Het maximale opeisbare bedrag per scenario is 1 miljoen."
    ]
  },
  {
    label: "Artikel 27: Rippen op het vaste land",
    punishmentCategory: "3",
    list: [
      "Het is niet toegestaan om binnen 30 minuten dezelfde locatie te rippen.",
      "Het is niet toegestaan om binnen 90 minuten dezelfde persoon te rippen.",
      "Elk soort wapen, mag elk ander soort wapen rippen.",
      "Als je een wapen wil rippen, moet je deze fysiek gezien hebben. Zorg dat je hiervan ook een clip hebt indien er vragen zijn.",
      "Als je een wapen wil rippen wat je gezien hebt, heb je maximaal 2 uur de tijd voor.",
      "Indien jij gezichtsbedekkende kleding (inclusief helm, behalve als je op een motor rijdt, zet hem wel af), een kogelwerend vest of een holster draagt, mag je op elk moment gefouilleerd en geript worden. Een wapen hoeft hierbij niet fysiek gezien te zijn.",
      "Als je iemand overvalt, mag je maximaal 50 items rippen.",
      "Op kogels, wapens en attachments staat geen limiet.",
      "Mensen rippen mag voor een maximum van 1 miljoen, voor zowel wit als zwart geld.",
      "Je bent verplicht het zien van het wapen, tot aan het rippen zelf te clippen voor eventueel bewijs.",
      "Na het rippen mag je de persoon niet doodschieten.",
      "Het rippen van witwassers is enkel toegestaan als je de witwas handeling daadwerkelijk gezien hebt. Het campen van spawn/witwaslocaties is niet toegestaan.",
      "Bij het rippen van witwassers mag je al het geld rippen, zowel wit als zwart. Dit geld voor het voertuig (dashboard en kofferbak), bestuurder en passagiers en alle voertuigen in het convooi.",
      "Het rippen van witwassers is toegestaan met 0 agenten."
    ]
  },
  {
    label: "Artikel 28: Rippen op het eiland + vliegdekschip",
    punishmentCategory: "3",
    list: [
      "Het is niet toegestaan om binnen 30 minuten dezelfde locatie te rippen.",
      "Het is niet toegestaan om binnen 60 minuten dezelfde persoon te rippen.",
      "Elk soort wapen, mag elk ander soort wapen rippen.",
      "Als je een wapen wil rippen, hoeft deze niet fysiek gezien te zijn. Wapens op het eiland zijn eigen risico.",
      "Als je iemand overvalt, mag je maximaal 100 items rippen.",
      "Op kogels, wapens en attachments staat geen limiet.",
      "Mensen rippen mag voor een maximum van 2,5 miljoen, voor zowel wit als zwart geld.",
      "Na het rippen <strong>van een wapen, mag je</strong> de persoon doodschieten."
    ]
  },
  {
    label: "Artikel 29: Politie en het eiland",
    punishmentCategory: "2",
    list: [
      "Het is niet toegestaan om vanaf het eiland op patrouillerende schepen of helikopters van de politie te schieten.",
      "Het is toegestaan voor de DSI om operaties op het eiland uit te voeren.",
      "De politie noodhulp mag niet op het eiland komen, tenzij:",
      {
        sublist: [
          "Jij in een achtervolging naar het eiland vlucht.",
          "Jij een agent gijzeld en meeneemt naar het eiland."
        ]
      }
    ]
  },
  {
    label: "Artikel 30: Onderwereld en het eiland",
    punishmentCategory: "2",
    list: [
      "Op het eiland mag ook niet worden samen gewerkt.",
      "Het vermoorden van burgers op het eiland met als enige reden het hebben van een rivaliserende achternaam, is niet toegestaan.",
      "Het vermoorden van burgers op het eiland met als enige reden dat ze geen zaken bij jou doen, is niet toegestaan.",
      "Het wegsturen van burgers van het eiland voor jouw eigen veiligheid is wel toegestaan.",
      "Als aan het wegsturen geen gehoor wordt gegeven, sta je in je recht na 5 minuten de persoon te vermoorden. Benoem hierbij altijd de reden en zorg voor clips die ook de tijd aangeven."
    ]
  },
  {
    label: "Artikel 31: Fouilleren en F6",
    punishmentCategory: "2",
    list: [
      "Je kunt alleen iemand fouilleren wanneer je in het bezit bent van een wapen.",
      "Bij het innemen van wapens dien je het wapen fysiek gezien te hebben. Je mag ook het wapen pakken als diegene gezichtsbedekkende kleding, een kogelwerend vest of een holster draagt.",
      "Je mag geen kennis hebben van de illegale spullen die iemand op zak heeft, als hij niet voldoet aan de eisen van het afnemen. Dus als iemand een pistool op zak heeft die jij niet hebt gezien, maar pas tijdens het fouilleren aantreft, heb jij hier geen kennis van. Je mag deze wel fictief afpakken in /me om zodoende een veilige manier voor jezelf te creëren om het gebied te verlaten.",
      "Nadat je iemand gefouilleerd hebt, is het niet toegestaan diegene te verplichten om zijn tas af te doen.",
      "Er is geen vaststaande tijd die je moet wachten om een wapen af te fouilleren met F6, maar zorg dat de roleplay passend is bij de situatie. Misbruik leidt tot direct ontslag/gangstrike/opheffing.",
    ]
  },
  {
    label: "Artikel 32: Bovenwereld spelers",
    punishmentCategory: "4",
    list: [
      "Het is niet toegestaan corrupt te zijn. Hieronder vallen de volgende zaken:",
      {
        sublist: [
          "Wapens in de persoonlijke kluis van je overheidsbaan.",
          "Doorspelen van informatie naar burgers."
        ]
      }
    ]
  },
  {
    label: "Artikel 33: Burger naar Ambulance",
    punishmentCategory: "3",
    list: [
      "Het is niet toegestaan om zonder reden een overheidsvoertuig te stelen.",
      "Het is niet toegestaan om de ambulancemedewerker te vermoorden, beledigen of niet mee te werken aan de roleplay van een ambulancier.",
      "Het is niet toegestaan om de ambulancemedewerker te dwingen om handelingen uit te voeren.",
      "Net als bij reports naar staff dienen ook overheidsmeldingen altijd realistisch, uitgebreid en een compleet beeld van de situatie te schetsen.",
      "Roleplay met de ambulance moet realistisch zijn. Er wordt verwacht dat je eerlijk bent over je verwondingen, en deze logisch inschat. Ook dien je mee te werken met elke vorm van roleplay die de ambulancier opzet. De ambulancier is niet verplicht je te helpen als je hier niet aan voldoet.",
      "Ambulance medewerkers hebben ten alle tijde het recht om je dood te verklaren als je door verwondingen of de situatie niet meer in leven zou kunnen zijn."
    ],
    subarticles: [
      {
        label: "Artikel 33A: Ambulance naar burger",
        list: [
          "Het is niet toegestaan burgers te beledigen of te provoceren in welke vorm dan ook.",
          "Het is niet toegestaan om onrealistische roleplay neer te zetten, of je mogelijkheden te misbruiken.",
          "Het is niet toegestaan om iemand te reviven als de persoon:",
          {
            sublist: [
              "Minder dan 30% bloed heeft.",
              "Een harstlag onder de 25bpm heeft.",
              "Is neergeschoten.",
              "Aangeeft dood te zijn gegaan door RDM, VDM, FAILRP of welke vorm van APV overtreding dan ook. Hiervoor dient een ticket gemaakt te worden of wachtkamer gejoined te worden.",
              "Langer dan 5 minuten onder water heeft gelegen.",
              "Vanaf een hoogte van 5 verdiepingen is gevallen."
            ]
          },
          "Het samenwerken met of in opdracht werken van de onderwereld is niet toegestaan, en valt onder corruptie.",
          "Het uitvoeren van criminele activiteiten is niet toegestaan, en valt onder corruptie.",
          "Het betaald krijgen om iemand te reviven is niet toegestaan, en valt onder corruptie.",
          "Het is niet toegestaan om in dienst AFK te zijn/te ghosten om salaris te ontvangen.",
          "Het is verplicht in de porto te zitten wanneer je in dienst bent."
        ],
        punishmentCategory: "3"
      }
    ]
  },
  {
    label: "Artikel 34: Burger naar Politie",
    punishmentCategory: "3",
    list: [
      "Het is niet toegestaan om in een ruim overtal scenario een agent dood te schieten, tenzij:",
      {
        sublist: [
          "Politie met een overduidelijke meerderheid is.",
          "Politie niet mee werkt.",
        ]
      },
      "Het is niet toegestaan om zonder reden een overheidsvoertuig te stelen.",
      "Het is niet toegestaan om de politieagent zonder reden of uit wraak te vermoorden, beledigen of niet mee te werken aan de roleplay van een politieagent.",
      "Het is niet toegestaan om het politiebureau te campen en te wachten tot er agenten naar buiten komen.",
    ],
    subarticles: [
      {
        label: "Artikel 34A: Politie naar burger",
        list: [
          "Het is niet toegestaan om in een ruim overtal scenario, zonder dreiging een burger dood te schieten. Echter blijft dit altijd de eigen inschatting van de politieambtenaar maar schending hiervan kan leiden tot interne sancties.",
          "Het is niet toegestaan om iemand dood te schieten die geboeid is.",
          "Het is niet toegestaan om in dienst AFK te zijn/te ghosten om salaris te ontvangen.",
          "Het is verplicht in de porto te zitten wanneer je in dienst bent.",
          "Het leaken van documenten/informatie, ook na het uit dienst treden/ontslag, is niet toegestaan en zal worden bestraft met een straf volgens categorie 6.",
          "Het samenwerken met of in opdracht werken van de onderwereld is niet toegestaan, en valt onder corruptie.",
        ],
        punishmentCategory: "3"
      }
    ]
  },
  {
    label: "Artikel 35: Helikopters en vliegtuigen",
    description:
      "Om de vliegbewegingen binnen Haarlem in goede banen te leiden hanteren we de volgende regels m.b.t. helikopters en vliegtuigen:",
    punishmentCategory: "2",
    list: [
      "Minimale hoogte van 100 meter op het land, 200 meter boven blokkenpark, 50 meter boven het eiland.",
      "Landen is alleen toegestaan op verharde ondergrond, vliegtuigen alleen op landingsbanen.",
      "Het is niet toegestaan om als piloot uit een helikopter of vliegtuig te springen.",
      "Het is toegestaan als passagier uit een helikopter of vliegtuig te springen, mits je een parachute hebt."
    ]
  },
  {
    label: "Artikel 36: Erotische roleplay",
    punishmentCategory: "5",
    description:
      "Het is niet toegestaan om erotische roleplay uit te voeren. De enige mogelijke uitzondering is dansen in een stripclub, met toestemming van staff."
  },
  {
    label: "Artikel 37: Weggeven van goederen",
    punishmentCategory: "9",
    description:
      "Het weggeven en/of aannemen van goederen, van een speler die stopt of gestopt is, is niet toegestaan en zal worden bestraft met een account wipe en permanente ban."
  },
  {
    label: "Artikel 38: Medewerking in staffzaak",
    punishmentCategory: "5",
    list: [
      "Het is niet toegestaan om te liegen tegen staff.",
      "Het is niet toegestaan om informatie achter te houden.",
      "Het is niet toegestaan om het verstrekken van een clip te weigeren."
    ],
    subarticles: [
      {
        label: "Artikel 38A: Voordoen als staff",
        description:
          "Het voordoen als, of uitspraken gebruiken om de indruk te wekken dat je lid bent van het staffteam is niet toegestaan.",
        punishmentCategory: "7"
      }
    ]
  }
];
