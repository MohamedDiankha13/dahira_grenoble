import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const BudgetSection = () => {
  const budgetData = [
    { name: 'Magal + autres', value: 60, color: '#22c55e' },
    { name: 'Adiya', value: 10, color: '#f59e0b' },
    { name: 'Keur Serigne Touba', value: 20, color: '#ec4899' },
    { name: 'Roulement', value: 10, color: '#8b5cf6' },
  ];

  const projectProgress = [
    { name: 'Acquisition Keur Serigne Touba', progress: 0, budget: '400 000 €' },
    { name: 'Adiya 2026', progress: 3, budget: '800 €' },
    { name: 'Magal 2026', progress: 5, budget: '12 000 €' },
    { name: 'Investissement AudioVisuel', progress: 0, budget: '3 000 €' },
  ];

  return (
    <section id="budget" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Budget & Progrès des Projets
          </h2>
          <p className="text-xl text-gray-600">
            Transparence totale sur l'utilisation de vos contributions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Répartition du Budget
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-3">
              {budgetData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </div>
                  <span className="text-gray-900 font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Progrès des Projets
            </h3>
            <div className="space-y-6">
              {projectProgress.map((project, index) => (
                <div key={project.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-semibold">{project.name}</span>
                    <span className="text-green-600 font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">Budget: {project.budget}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;