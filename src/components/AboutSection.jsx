import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles, Calendar } from 'lucide-react';
const AboutSection = () => {
  const stats = [{
    label: 'Membres Actifs',
    value: '300+',
    icon: Users
  }, {
    label: 'Projets Réalisés',
    value: '5',
    icon: Sparkles
    },
    {
    label: 'Programmes Éducatifs',
    value: '5',
    icon: BookOpen
  }, {
    label: 'Projets à venir',
    value: '3',
    icon: Calendar
  },];
  const values = [{
    title: 'Solidarité',
    description: 'Nous croyons en l\'entraide et le soutien mutuel au sein de notre communauté.',
    icon: Heart
  }, {
    title: 'Éducation',
    description: 'Promouvoir l\'éducation religieuse et académique pour tous nos membres et de leur famille.',
    icon: BookOpen
  }, {
    title: 'Communauté',
    description: 'Renforcer les liens fraternels et créer un environnement d\'unité.',
    icon: Users
  }];
  return <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos de Notre Dahira
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Une communauté dédiée à la promotion des valeurs islamiques, du mouridisme, l'entraide sociale et le développement spirituel de ses membres.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>)}
        </div>

        {/* Mission */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">Dahira Moutahlikhina Touba Grenoble s'engage à créer une communauté mouride forte et unie, fondée sur les principes islamiques de fraternité, de charité et d'excellence. Nous œuvrons pour le bien-être spirituel, éducatif et social, au service du mouridisme et de son fondateur Cheiikh Ahmadou Bamba Macké, à travers des programmes innovants et des initiatives communautaires.</p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <motion.div key={value.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <value.icon className="w-14 h-14 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;