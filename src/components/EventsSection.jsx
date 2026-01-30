import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '/src/components/ui/tabs';

const EventsSection = () => {
  const [events] = useState({
    upcoming: [
      {
        id: 1,
        title: 'Début du Ramadan',
        date: '2026-02-18',
        time: '06:00',
        location: 'Mosquée de Grenoble',
        description: 'Le mois sacré du jeûne commence. Une période de piété, de partage et de purification spirituelle pour la communauté.',
      },
      {
        id: 2,
        title: 'Laylat al-Qadr (Nuit du Destin)',
        date: '2026-03-16',
        time: '21:00',
        location: 'Mosquée Centrale',
        description: 'La Nuit du Destin, meilleure que mille mois. Veillée de prières intenses commémorant la révélation du Coran.',
      },
      {
        id: 3,
        title: 'Korité – Eid al-Fitr',
        date: '2026-03-20',
        time: '08:30',
        location: 'Grande Mosquée / Parc Paul Mistral',
        description: 'Fête de la rupture du jeûne marquant la fin du Ramadan. Prière communautaire et moments de joie en famille.',
      },
      {
        id: 4,
        title: 'Grand Magal de Touba',
        date: '2026-08-02',
        time: '09:00',
        location: 'Touba / Dahira Grenoble',
        description: 'Commémoration du départ en exil de Cheikh Ahmadou Bamba (18 Safar 1448H). Grand rassemblement de foi et de gratitude.',
      },
      {
        id: 5,
        title: 'Mawlid – Naissance du Prophète',
        date: '2026-08-25',
        time: '19:30',
        location: 'Salle Polyvalente Grenoble',
        description: 'Célébration de la naissance du Prophète Muhammad (PSL). Chants religieux (Qacidas) et conférences sur sa vie.',
      },
    ],
    past: [
      {
        id: 6,
        title: 'Conférence sur le Mouridisme',
        date: '2026-01-15',
        time: '14:00',
        location: 'Centre Culturel',
        description: 'Rencontre et échanges sur les enseignements de Cheikh Ahmadou Bamba.',
      },
      {
        id: 7,
        title: 'Programme de Santé Gratuit',
        date: '2026-01-08',
        time: '10:00',
        location: 'Centre Médical',
        description: 'Consultations médicales gratuites pour la communauté',
      },
    ],
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const EventCard = ({ event, isPast = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isPast ? 'opacity-75' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="bg-green-100 rounded-lg p-3 text-center min-w-[70px]">
          <p className="text-2xl font-bold text-green-700">
            {new Date(event.date).getDate()}
          </p>
          <p className="text-xs text-green-600 uppercase">
            {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-green-600" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Événements
          </h2>
          <p className="text-xl text-gray-600">
            Participez à nos activités et renforcez les liens communautaires
          </p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="upcoming">À Venir</TabsTrigger>
            <TabsTrigger value="past">Passés</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {events.upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {events.past.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;