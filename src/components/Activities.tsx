"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChalkboardTeacher, FaLightbulb, FaUserGraduate, FaGlobeEurope } from 'react-icons/fa';

interface ActivityItem {
  title: string;
  description: string;
  location: string;
  date: string;
}

const Activities = () => {
  const [activeTab, setActiveTab] = useState('seminaries');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const tabs = [
    { id: 'seminaries', label: 'Seminaries', icon: <FaChalkboardTeacher /> },
    { id: 'innovation', label: 'Innovatie', icon: <FaLightbulb /> },
    { id: 'personal', label: 'Persoonlijke Ontwikkeling', icon: <FaUserGraduate /> },
    { id: 'international', label: 'Internationalisering', icon: <FaGlobeEurope /> }
  ];

  const seminaries = [
    {
      title: 'Easi: The role of Power Apps, the low-code platform of Microsoft 365',
      description: 'Tijdens deze sessie leerde ik hoe ik met Power Apps op een eenvoudige manier een digitale applicatie kan maken. Er werd uitgelegd hoe manuele processen kan automatiseren en verbeteren met een gebruiksvriendelijke interface.',
      location: 'Lokaal G412 Hogeschool PXL',
      date: '12/03/2024 8:30 – 12:30'
    },
    {
      title: 'AE: API & Security Testing: Unleashing the Power of Manual Testing',
      description: 'Tijdens deze sessie kreeg ik inzicht in verschillende technieken om API\'s te testen, zoals buffer overflows en business logic flaws. De focus lag op de methodes in plaats van op de tools, al werkten we met Postman om alles uit te proberen.',
      location: 'Lokaal G412 Hogeschool PXL',
      date: '19/03/2024 8:30 – 12:30'
    },
    {
      title: 'MbarQ: ChatGPT implenentaties voor bedrijven',
      description: 'Tijdens deze sessie leerde ik hoe en wanneer ik ChatGPT op een nuttige manier kan inzetten binnen een bedrijf. We hebben kleine oefeningen gemaakt waarbij ik ChatGPT moest combineerde met cloudcomponenten om een oplossing te bouwen voor een specifiek probleem.',
      location: 'Lokaal G414 Hogeschool PXL',
      date: '23/04/2024 8:30 – 12:30'
    },
    {
      title: 'Harmony Group: Outsystems',
      description: 'Tijdens dit seminarie heb ik een mobiele app met de OutSystems platform gemaakt. We gebruikten een low-code omgeving waarmee je snel en eenvoudig de basis van een app kan opbouwen zonder van nul te programmeren.',
      location: 'Lokaal G412 Hogeschool PXL',
      date: '07/05/2024 8:30 – 11:30'
    }
  ];

  const innovation = [
    {
      title: 'Innovatieroute: Application Integration',
      description: 'Tijdens deze innovatieroute leerde ik hoe je verschillende applicaties met elkaar integreert via Red Hat Camel en Azure API Management. We bouwden zelf REST-services, gebruikten Kafka voor event processing en deden oefeningen rond API security en business processing. Elke sessie bestond uit theorie en praktische workshops.',
      location: 'Lokaal CC712 Corda 7',
      date: '24/09/2024, 01/10/2024, 08/10/2024 9:00 – 16:00'
    },
    {
      title: 'Hackathon: Hackthefuture, Flexso',
      description: 'Tijdens deze hackathon werkte ik samen met een team aan een SAP-webapplicatie. We gebruikten het UI5 Framework voor de frontend en CAP als middleware. De focus lag op het bouwen van een moderne oplossing binnen de SAP-omgeving, met aandacht voor communicatie tussen verschillende onderdelen van de SAP Tech Stack.',
      location: 'Flanders Meeting And Convention Center Antwerpen',
      date: '19/11/2024 09:00 – 20:00'
    }
  ];

  const personal = [
    {
      title: 'Projectweek 2TIN',
      description: 'Tijdens de projectweek werkten we aan teamvorming op basis van onze Thalento-rapporten en leerden we ons team beter kennen. Er waren ook sessies over academisch schrijven, samenwerken in een team, agile werken en onderzoekend handelen. Doorheen de week werd duidelijk hoe belangrijk goede communicatie en samenwerking zijn in een project.',
      location: 'Hogeschool PXL',
      date: '12/02/2024 – 16/02/2024'
    },
    {
      title: 'POP-sessie 2TIN: Learning Path: Feedback - the key to improvement',
      description: 'Tijdens deze sessie leerde ik hoe je op een correcte manier feedback geeft en ontvangt. We bespraken het verschil tussen kritiek en feedback en werkten met het 4G-model (gedrag, gevoel, gevolg, gewenst). Ook werd uitgelegd hoe je feedback kan gebruiken om beter samen te werken en jezelf te verbeteren.',
      location: 'Lokaal B121 Hogeschool PXL',
      date: '15/02/2024'
    },
    {
      title: 'POP-sessie 2TIN: Brein aan het werk! Niet storen!',
      description: 'Tijdens deze sessie leerden we wat het effect is van afleiding, multitasking en constante online zijn op onze focus. We kregen tips om onze aandacht beter te bewaren, zoals werken in blokken, notificaties uitschakelen en duidelijke prioriteiten stellen.',
      location: 'Lokaal B302 Hogeschool PXL',
      date: '05/03/2024 8:30 – 10:30'
    }
  ];

  const international = [
    {
      title: 'Amsterdam',
      description: 'Tijdens deze driedaagse trip in Amsterdam nam ik deel aan de Funda VueJS Meetup en AmsterdamJS, waar ik meer leerde over VueJS en JavaScript zelf. Daarnaast verkenden we de stad met culturele activiteiten zoals een bezoek aan het NEMO Science Museum, ARTIS zoo, een escape room door Amsterdam heen en lokale streetfoodspots.',
      location: 'Amsterdam, Nederland',
      date: '11/03/2025 – 13/03/2025'
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'seminaries':
        return renderItems(seminaries);
      case 'innovation':
        return renderItems(innovation);
      case 'personal':
        return renderItems(personal);
      case 'international':
        return renderItems(international);
      default:
        return null;
    }
  };

  const renderItems = (items: ActivityItem[]) => {
    return (
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab}
      >
        {items.map((item: ActivityItem, index: number) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p><span className="font-medium">Locatie:</span> {item.location}</p>
              <p><span className="font-medium">Datum:</span> {item.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="activities" className="py-24 bg-gray-100 dark:bg-gray-800">
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
                Overzicht Activiteiten
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:shadow-md'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities; 