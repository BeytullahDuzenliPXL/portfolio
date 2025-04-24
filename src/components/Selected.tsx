"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGlobeEurope, FaLaptopCode, FaMobile } from 'react-icons/fa';

const Selected = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const activities = [
    {
      id: 0,
      title: 'Amsterdam',
      icon: <FaGlobeEurope className="w-8 h-8" />,
      type: 'Internationalisering',
      description: {
        omschrijving: 'Tijdens deze driedaagse trip in Amsterdam nam ik deel aan de Funda Vue.js Meetup en AmsterdamJS, waar ik meer leerde over Vue.js en JavaScript zelf. Mijn eigen doel was vooral om bij te leren over tools waar ik zelf ook mee werk, zoals Nuxt, en om te zien hoe developers daar in het werkveld mee omgaan.',
        kern: 'Van 11 tot en met 13 maart ben ik met een groep naar Amsterdam gegaan voo internationaliseringsactiviteit voor I-Talent. Over drie dagen hebben we twee IT meetups en verschillende culturele activiteiten gedaan in de stad.\n\nDe eerste meetup die we bezochten was de Vue.js Meetup bij Funda, waar het ging over testen in Vue, het werken met micro-frontends en geavanceerde optimalisaties in Nuxt. Het meest interessante deel vond ik de talk van Daniel Roe, de lead van het Nuxt core team. In zijn sessie "Unpacking Bundling" liet hij zien hoe Nuxt omgaat met dingen zoals inline styles, payload optimalisatie en third-party scripts. Hij toonde onder andere hoe je met nuxt scripts sommige externe tools, zoals Google Tag Manager, kan vervangen zodat je site sneller laadt. Ook de manier waarop Nuxt styles enkel inlaadt wat echt gebruikt wordt op de pagina vond ik indrukwekkend. Sommige stukken waren redelijk technisch, maar omdat ik zelf al met Nuxt heb gewerkt, kon ik het goed volgen. Het was sowieso nice om uitleg te krijgen van iemand die zo dicht bij het project staat. Het was wel leuk om te zien hoe een framework dat ik zelf gebruik steeds actief verbeterd wordt.\n\nDe tweede meetup was AmsterdamJS, en die ging over hoe JavaScript als programmeertaal blijft evolueren. Er werd uitgelegd hoe nieuwe features zoals decorators worden voorgesteld en getest, en dat dit een lang proces is waar veel feedback en overleg bij komt kijken. Daarnaast was er ook een talk over internationalisatie, waarbij ze toonden hoe de huidige tools vaak beperkt zijn en hoe een nieuwe standaard dat wil verbeteren. Het doel is om vertalingen en meertalige apps makkelijker en consistenter te maken in de toekomst. Op het einde was er een panel met mensen van TC39, de groep die mee beslist over de JavaScript-standaarden. We mochten vragen stellen over de toekomst van de taal. Ik heb zelf geen vragen gesteld, maar het was wel interessant om te horen hoe zo\'n commissie werkt en hoe beslissingen tot stand komen. Deze meetup was iets theoretischer dan die van Funda, maar gaf wel een goed beeld van waar JavaScript naartoe gaat en wat we kunnen verwachten de komende jaren.\n\nNaast de IT evenementen deden we ook wat culturele activiteiten. We bezochten de ARTIS zoo, daarna deden we een escape room die zich afspeelde doorheen de stad. Dit was iets helemaal anders, maar wel leuk om in groep te doen. We hebben ook streetfood geproefd van Amsterdam op verschillende plekken in de stad, wat wel een fijne ervaring was. De sfeer in de groep was goed en het was tof om eens buiten de schoolcontext met medestudenten samen te zijn.\n\nEén activiteit die wat tegenviel was het bezoek aan het NEMO Science Museum. Op voorhand leek het interessant door de naam "science museum", maar toen we binnen waren bleek het vooral gericht te zijn op kinderen. Er waren wel veel interactieve opstellingen, maar inhoudelijk was het eerder basic. Toch was het nog oké als activiteit tussendoor, en we hebben er het beste van gemaakt.',
        reflectie: 'Ik nam deel aan een driedaagse internationaliseringsactiviteit in Amsterdam. Daar woonde ik twee IT-meetups bij: de Vue.js Meetup bij Funda en AmsterdamJS. Tijdens deze meetups leerde ik meer over Vue, Nuxt en JavaScript in het algemeen. Daarnaast deden we ook culturele activiteiten zoals een bezoek aan het NEMO Science Museum, de ARTIS zoo, een escape room en het proeven van streetfood.\n\nIk vond het een interessante ervaring. De talks sloten goed aan bij technologieën waar ik al mee bezig ben, dus het was er meer informatie over te krijgen. Het was ook leuk om buiten de schoolomgeving met klasgenoten samen te zijn en tegelijk nieuwe dingen te leren.\n\nUit de talk van Daniel Roe heb ik geleerd hoe Nuxt efficiënter omgaat met scripts, styles en performantie. Er werd uitgelegd hoe Nuxt bepaalde scripts kan vervangen en hoe het framework enkel styles laadt die effectief nodig zijn. Dit gaf mij nieuwe inzichten over hoe ik performantie in mijn eigen projecten kan verbeteren en ook hoe ik Nuxt zelf beter op de correcte manier kan gebruiken.\n\nEen sterk punt was dat ik de inhoud van de meetups goed kon volgen, zeker omdat ik al met Vue.js en Nuxt gewerkt had. Een zwakker punt is dat ik geen vragen heb gesteld, terwijl dat wel een kans was om meer uit het event te halen.\n\nIn onze opleiding hebben we gewerkt met Vue.js. Daardoor was het extra interessant om deze meetup bij te wonen, omdat ik de onderwerpen herkende maar toch op een andere manier gepresenteerd kreeg. Het gaf extra verdieping bij wat we al gezien hebben in de lessen.'
      }
    },
    {
      id: 1,
      title: 'Hack The Future',
      icon: <FaLaptopCode className="w-8 h-8" />,
      type: 'Innovatie',
      description: {
        omschrijving: 'Ik nam deel aan de hackathon "Hack The Future", ik had de hackathon van Flexso gekozen. Voor deze hackathon moest ik gebruik maken van SAP UI5 en CAP. Tijdens de oefening werkte ik samen met een teamgenoot om een oplossing te vinden op basis van data over sterrenstelsels en buitenaards leven. We moesten een applicatie maken die met behulp van de Drake Equation kon inschatten waar intelligent leven te vinden was, en een verkenningsteam aansturen. Het was een leerrijke ervaring om te zien wat SAP precies was, want ik had er eerder nog nooit mee gewerkt. Aan de einde van de hackathon wist ik wel dat het niets voor mij was.',
        kern: 'Voor de hackathon moesten we een app maken door gebruik te maken van SAP-technologieën om expedities naar sterrenstelsels te sturen en contact te maken met aliens.\n\nWe kregen een vooraf opgezette codebase met een UI5 frontend en een CAP middleware. De structuur was best complex met verschillende mappen voor de app, database en services. Het was wel een uitdaging om deze technologieën snel te leren, want het was volledig nieuw voor mij.\n\nDe opdracht draaide rond een groot datamodel met informatie over sterrenstelsels, opgeslagen in CSV-bestanden. Deze bestanden bevatten info over 100 sterrenstelsels, verschillende soorten aliens, sterren, planeten en hoe goed ze bij elkaar passen. Bijvoorbeeld, \'Galaxies.csv\' had informatie over sterrenstelsels zoals hun naam, afstand, aantal zonnestelsels en meest voorkomende types sterren en planeten.\n\nOm te bepalen waar we leven konden vinden, moesten we de "Drake Equation" toepassen. Deze berekende de kans op buitenaards leven op basis van dingen zoals het aantal planeten in een sterrenstelsel, vermenigvuldigd met hoe goed sterren kunnen overleven en de kans dat het meest voorkomende alientype kan leven op het meest voorkomende planettype.\n\nEen moeilijk deel was het communiceren met het verkenningsteam via een externe API-service waarvan het adres in het enviroment bestand stond. Deze service stuurde data terug met berichten van eventuele aliens. Deze berichten waren versleuteld en wij moesten ze dan ook ong ontcijferen.\n\nDe eerste uren hebben we besteed aan het begrijpen van de code en het datamodel. De entiteiten in het \'schema.cds\' bestand, zoals \'Galaxies\', \'AlienTypes\' en \'CompabilityScores\', waren de basis van onze app. We moesten leren hoe de CAP-middleware deze data beschikbaar maakte via de ExplorationService en hoe we die konden gebruiken in de UI5-frontend.\n\nWe begonnen met het tonen van een lijst sterrenstelsels, gerangschikt op hun Drake-score, zodat we konden zien waar de kans op intelligent leven het grootst was. Daarna hebben we functies toegevoegd om expedities uit te sturen naar de beste sterrenstelsels en de berichten te ontcijferen.\n\nHet werken met UI5 was niet gemakkelijk. De componentgebaseerde architectuur, databinding en de OData V4 modelintegratie waren allemaal nieuw voor ons. We moesten vaak de documentatie bekijken om te snappen hoe we bepaalde UI-elementen moesten maken.\n\nTijdens het werken met SAP UI5 en CAP kwam ik erachter dat deze technologieën heel anders zijn dan wat we normaal in de lessen gebruiken. UI5 heeft zijn eigen manier van werken met componenten die ze \'controls\' noemen, en je moet alles verbinden met datamodellen via een speciaal soort binding. CAP is het deel dat zorgt voor de verbinding met de database en het maakt automatisch een API die OData heet. Ik vond het lastig om te wennen aan deze manier van werken, maar na een tijdje begon ik de logica erachter wel te begrijpen. Ondanks de uitdagingen was het interessant om te zien hoe grotere bedrijven zoals Flexso hun applicaties bouwen en waarom ze voor dit soort technologieën kiezen.\n\nWe waren ook tijdens de middagpauze de zoo van Antwerpen gaan bezoeken. We mochten gratis binnen met de Hack The Future badge die we hadden gekregen.',
        reflectie: 'Ik nam deel aan de Hack The Future hackathon, met de opdracht van Flexso. Tijdens deze dag werkte ik samen met een teamgenoot aan een opdracht waarin we een applicatie moesten maken op basis van SAP-technologieën zoals UI5 en CAP. De bedoeling was om met behulp van een datamodel en de Drake Equation te bepalen waar in het universum intelligent leven te vinden zou kunnen zijn, en een verkenningsteam aan te sturen via een externe API.\n\nHet was een leerrijke dag omdat alles nieuw was voor mij. Ik had nog nooit met SAP UI5 of CAP gewerkt, dus duurde wel even om de structuur en werkwijze van de codebase te begrijpen die we hadden gekregen. Ondanks dat het niet echt mijn ding is, was het wel interessant om te zien hoe zulke technologieën in elkaar zitten en waarom grote bedrijven ermee werken.\n\nIk heb geleerd wat SAP, SAP UI5 en CAP zijn en hoe ze samenwerken binnen een applicatie. Ook begrijp ik nu beter hoe OData werkt, hoe CAP automatisch endpoints genereert en hoe je een frontend in UI5 koppelt aan de juiste datamodellen. Daarnaast heb ik geleerd hoe je met een complex datamodel werkt en hoe je data op een logische manier presenteert aan de gebruiker.\n\nIk had nog nooit met SAP gewerkt, maar ik kon vrij snel begrijpen hoe het project technisch in elkaar zat en hoe alles met elkaar verbonden was. Ik kon actief meewerken aan het project en heb op korte tijd veel bijgeleerd. De documentatie van UI5 vond ik soms moeilijk omdat het een beetje onduidelijk was.\n\nTijdens mijn opleiding hebben we niet gewerkt met de SAP-technologieën, maar de vaardigheden die ik nodig had sluiten wel aan bij mijn opleiding.'
      }
    },
    {
      id: 2,
      title: 'Flutter',
      icon: <FaMobile className="w-8 h-8" />,
      type: 'Seminarie',
      description: {
        omschrijving: 'Ik nam deel aan een seminarie over Flutter, georganiseerd door IT Licious. Tijdens deze sessie kregen we een introductie tot het Flutter-framework en leerden we hoe het gebruikt wordt om apps te bouwen voor zowel iOS als Android. Er werd ook een concrete use case getoond van hoe Flutter werd toegepast in de app van Sporza.',
        kern: 'Tijdens het seminarie kregen we een introductie tot Flutter, het open-source UI-framework van Google dat het mogelijk maakt om met één codebase apps te bouwen voor iOS, Android en het web.\n\nEr werd ook uitgelegd hoe VRT oorspronkelijk werkte met React Native, en hoe ze daar veel beperkingen mee hadden. De app werd te moeilijk om te onderhouden, de gebruikerservaring en prestaties begonnen te verschillen tussen Android en iOS. Daarnaast waren er veel problemen met WebViews, en de native codebases begonnen uit elkaar te lopen.\n\nNa de uitleg van Flutter moest ik zelf werken aan een Flutter project. Ik startte met een basisproject die we hebben gekregen waarin alleen een app-bar met de titel "IT Licious" stond. De opdracht was om \'todo-list\' app te bouwen. Stap voor stap voegde ik nieuwe functionaliteiten toe, bijvoorbeeld een invoerveld, een lijst waar de taken in gaan, knoppen die er voor zorgen om \'todo-items\' toe te voegen en te verwijderen, en animaties.\n\nHet bouwen van de gebruikersinterface was in het begin heel anders aan wat ik gewend was. Alles in Flutter is opgebouwd uit widgets, zelfs een simpele tekst of een container. Deze widgets zijn \'immutable\', wat betekent dat ze niet rechtstreeks aangepast kunnen worden. In plaats daarvan wordt bij elke verandering een nieuwe widget gegenereerd met de aangepaste inhoud, die de oude vervangt. Dit zorgt ervoor dat de UI steeds opnieuw wordt opgebouwd. In het begin was dit vreemd, maar bij elke stap begon het concept meer logisch aan te voelen.\n\nDoor deze workshop heb ik geleerd hoe ik met widgets zoals Column, ListView, TextFormField en Row een overzichtelijke layout kan maken. Ik heb geleerd hoe ik de app interactief kan maken door gebruik te maken van \'setState\', zodat de lijsten automatisch bijgewerkt worden wanneer een taak werd toegevoegd of verwijderd. Ik heb ook geleerd hoe ik kan werken met een TextEditingController om input uit het tekstveld op te slaan en te wissen.\n\nIk moest ook animaties toevoegen aan de app, hiervoor heb ik gebruik gemaakt van de flutter_animate package. Daarmee kon ik ervoor zorgen dat nieuwe lijstitems met een fade-in effect op het scherm verschenen.\n\nTijdens de workshop kwam ik een interessante bug tegen. Als ik meerdere items met dezelfde tekst aan de lijst toevoegden en ik probeerde de tweede te verwijderen, werd altijd de eerste verwijderd. Dit gebeurde omdat Flutter automatisch items in een lijst vergelijkt op basis van hun inhoud, niet hun positie. Ze hebben ons uitgelegd dat dit een algemeen probleem is binnen Flutter maar ook in vele andere frameworks.\n\nDe oplossing om dit probleem op te lossen was om elke item een unieke identifier te geven, bijvoorbeeld door een UUID toe te voegen aan de taak item. Dit heeft me ook geholpen om meer over Flutter te weten en hoe het onder de motorkap werkt en hoe belangrijk het is om aan unieke identificatie te denken bij het ontwerpen van apps.\n\nNaast de workshop kregen we ook uitleg over hoe Flutter in grotere projecten gebruikt wordt. Bij de app van Sporza begonnen ze met het herschrijven van kleinere delen van hun app in Flutter, om daarna stapsgewijs over te schakelen. Volgens de spreker leverde dit betere prestaties en minder platform specifieke bugs op.',
        reflectie: 'Ik nam deel aan het seminarie van IT Licious over Flutter. Tijdens de sessie kregen we eerst uitleg over wat Flutter is en daarna moest ik een \'todo-list\' app maken als oefening. Hierdoor heb ik verschillende onderdelen van Flutter geleerd zoals widgets en animaties.\n\nIk vond het interessant om eens een ander cross-platform framework dan React Native te proberen. Hoewel ik er geïnteresseerd aan begon, merkte ik al snel dat Flutter niet echt mijn ding is. De manier waarop alles als widget wordt opgebouwd, vond ik minder logisch dan wat ik gewoon ben. Toch vond ik het belangrijk om eens ermee te werken, omdat het me heeft geholpen om een beter beeld te krijgen van de verschillen tussen Flutter en andere frameworks.\n\nIk heb geleerd hoe Flutter werkt op vlak van layout, interactie en state management. Door te werken met widgets zoals ListView, TextFormField en setState, kreeg ik een duidelijker inzicht in de structuur van Flutter. Ook begreep ik hierdoor beter hoe Flutter echt werkt, bijvoorbeeld door het gebruik te maken van immutable widgets en het belang van unieke identifiers.\n\nHet heeft geen directe link met mijn opleiding, maar voor het vak Mobile Development had ik de keuze om mijn app met React Native of met Flutter te maken, en ik had toen gekozen voor React Native. Het was dus nuttig voor mij dat ik deze seminarie heb gevolgd, want nu weet ik hoe Flutter ook werkt.\n\nIk heb deze opdracht geselecteerd voor de bespreking omdat deze seminarie mij heeft geholpen om een belangrijke keuze te maken. Door deze seminarie weet ik hoe Flutter nu is in de praktijk. Nu weet ik zeker dat mijn voorkeur uitgaat naar React Native, want het lijkt veel meer op hoe ik een website bouw in React.'
      }
    }
  ];

  return (
    <section id="selected" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Selectie van Activiteiten
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveTab(activity.id)}
                className={`px-6 py-4 rounded-xl flex flex-col items-center gap-3 transition-all w-40 ${
                  activeTab === activity.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-full ${
                  activeTab === activity.id 
                    ? 'bg-white/20' 
                    : 'bg-indigo-100 dark:bg-indigo-900/30'
                }`}>
                  {activity.icon}
                </div>
                <span className="font-medium text-center">{activity.title}</span>
                <span className="text-xs opacity-80">{activity.type}</span>
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Omschrijving</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activities[activeTab].description.omschrijving}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Kern</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {activities[activeTab].description.kern.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Reflectie</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {activities[activeTab].description.reflectie.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Selected; 