"use client";

import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaUserGraduate } from 'react-icons/fa';

const Reflection = () => {
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

  return (
    <section id="reflection" className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Eindreflectie
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <motion.div 
              variants={itemVariants}
              className="space-y-6 text-gray-700 dark:text-gray-300"
            >
              <p className="text-lg leading-relaxed">
                Als ik terugkijk naar het begin van mijn opleiding, zie ik hoe veel ik veranderd ben. In het eerste jaar was ik een vrij stille student. Ik stelde bijna nooit vragen en ik hield alles voor mezelf. Als iets niet duidelijk was probeerde ik het zelf uit te zoeken in plaats van hulp te vragen. Nu ben ik veel meer open geworden. Ik stel sneller vragen en ga makkelijker in gesprek met anderen.
              </p>
              
              <p className="text-lg leading-relaxed">
                Wat me vooral is bijgebleven, is dat ik veel beter ben geworden in dingen zoals samenwerken en plannen. In groep werken ging vroeger vaak moeilijk, maar nu weet ik beter hoe ik met anderen moet overleggen en taken verdelen. Ik heb ook geleerd om eerlijk te zijn als iets niet lukt en om sneller hulp te vragen. In plannen ben ik ook beter geworden, vroeger liet ik alles op het laatste moment, maar nu plan ik alles goed.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <FaLightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Sterke Punten</h3>
                  <p>
                    Mijn sterke punten zijn dat ik graag nieuwe dingen leer en altijd benieuwd ben naar technologieën die ik nog niet ken. Als ik iets nieuws tegenkom, doe ik er research over en probeer te begrijpen hoe het werkt. Ik denk ook logisch na, wat belangrijk is bij programmeren om problemen op te lossen. Verder kan ik goed met stress omgaan, vooral als er veel tegelijk moet gebeuren in een project.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <FaChartLine className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Verbeterpunten</h3>
                  <p>
                    Wat ik nog wil verbeteren, is mijn aanpak bij grotere projecten. Vaak heb ik op voorhand alles goed gepland, maar wanneer ik echt begin probeer ik aan alles tegelijk te werken. Daardoor loopt het meestal fout, omdat ik mijn planning niet meer volg en alles tegelijk probeer te doen. Maar meestal besef ik wel op tijd dat ik op mijn planning moet letten, en dan probeer ik het stap voor stap weer in orde te krijgen. Ook rond clean code en best practices volgen in development wil ik nog beter worden.
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                    <FaUserGraduate className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pink-600 dark:text-pink-400">X-Factor</h3>
                  <p>
                    Wat betreft de X-Factor: ik herken mij het meest in het ondernemend en innovatief zijn. Ik vind het leuk om zelf ideeën uit te werken en iets te maken dat anders of beter is dan wat er al bestaat. Een voorbeeld daarvan is een memory card game die ik heb gemaakt met een technologie die ik nog niet eerder had gebruikt. Ik merkte dat de versies die online stonden vaak een slechte UI hadden, dus ik heb er iets van gemaakt dat er goed uitziet en waar ook multiplayer aan toegevoegd is.
                  </p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                Dit soort dingen doe ik graag. Iets maken waar een probleem in zit, en dat dan zelf oplossen op mijn manier. Dat geeft mij motivatie om verder te blijven leren en mezelf uit te dagen. Ik hou er ook van om iets te maken waar anderen iets aan hebben, bijvoorbeeld iets dat makkelijker werkt of er beter uitziet. Dat sluit goed aan bij de X-Factor 'empassie', omdat ik niet alleen iets voor mezelf bouw, maar ook rekening hou met de mensen die het gaan gebruiken.
              </p>
              
              <p className="text-lg leading-relaxed">
                Over drie tot vijf jaar hoop ik mijn eigen IT-bedrijf te hebben of samen met vrienden of familie te werken aan projecten. Ik wil graag van alles eens gemaakt hebben in de IT-wereld, zoals websites, mobile apps, games en tools die ook echt gebruikt worden door veel mensen. Ik wil mezelf blijven verbeteren en werken met technologieën waar ik plezier in heb.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reflection; 