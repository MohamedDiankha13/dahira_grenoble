import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Acquisition Keur Serigne Touba',
      description: 'Projet de construction d\'un lieu de ressemblement des fidèles.',
      budget: '400 000 euros',
      progress: 0,
      status: 'planning',
      timeline: 'En préparation',
    },
    {
      id: 2,
      title: 'Programme d\'aide - Commission sociale',
      description: 'Distribution régulière de denrées alimentaires et aide envers étudiants.',
      budget: '1000 €',
      progress: 80,
      status: 'planning', // Listed under 'À venir' in user request
      timeline: 'Programme Continu',
    },
    {
      id: 3,
      title: 'Organisation Grand Magal de Touba',
      description: 'Grand rassemblement de foi et de gratitude.',
      budget: '12 000 €',
      progress: 5,
      status: 'planning',
      timeline: 'Août 2026',
    },
    {
      id: 4,
      title: 'Organisation Magal Kazu Rajab et Porokhane',
      description: 'Célébration annuelle commémorant la vie et l\'œuvre de figures emblématiques du Mouridisme.',
      budget: '1 000 euros',
      progress: 100,
      status: 'in-progress',
      timeline: 'En cours',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const getStatusLabel = (status) => {
    const labels = {
      planning: 'À Venir',
      'in-progress': 'En Cours',
      completed: 'Terminé',
    };
    return labels[status];
  };

  const getStatusColor = (status) => {
    const colors = {
      planning: 'bg-blue-100 text-blue-700',
      'in-progress': 'bg-yellow-100 text-yellow-700',
      completed: 'bg-green-100 text-green-700',
    };
    return colors[status];
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Projets
          </h2>
          <p className="text-xl text-gray-600">
            Des initiatives concrètes pour le développement de notre communauté
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { value: 'all', label: 'Tous' },
            { value: 'in-progress', label: 'En Cours' },
            { value: 'planning', label: 'À Venir' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === btn.value
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1 pr-2">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Budget:</span>
                    <span>{project.budget}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Timeline:</span>
                    <span>{project.timeline}</span>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Progrès</span>
                      <span className="text-sm font-bold text-green-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;