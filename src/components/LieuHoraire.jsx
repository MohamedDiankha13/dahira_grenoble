import React from 'react';
import { motion } from 'framer-motion';

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lieu & horaires du dahira</h2>
          <p className="text-xl text-gray-600">Découvrez notre lieu, nos horaires et comment nous trouver.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lieu</h3>
            <p className="text-gray-700 mb-4">Dahira Moutahlikhina Touba Grenoble est un espace communautaire dédié à la pratique religieuse, l'éducation et la solidarité. Nous organisons des rencontres, des cours et des événements pour renforcer les liens au sein de la communauté.</p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900">Adresse</h4>
              <p className="text-gray-600">Keur Serigne Touba, Grenoble, France</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900">Horaires Dahira</h4>
              <ul className="text-gray-600 list-inside list-disc">
                <li>Vendredi: 14:00 — 18:00 (réunion & accueil)</li>
                <li>Samedi: 10:00 — 13:00 (activités communautaires)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Horaires des cours</h4>
              <p className="text-gray-600">Mardi & Jeudi: 18:30 — 20:00 (cours religieux et études)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-0 overflow-hidden shadow-xl"
          >
            <div className="w-full h-80 sm:h-96">
              <iframe
                title="Localisation Dahira Moutahlikhina Touba Grenoble"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=Salle+Lys+Rouge,+Grenoble,+Mistral&output=embed"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
