import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Dahira Al-Khayria</h3>
            <p className="text-green-100 leading-relaxed">
              Une communauté dévouée au service de Cheikh Ahmadou Bamba Mbacké, fondateur du mouridisme.
              Sous le Ndigueul de Serigne Mourtada Mbacké, nous œuvrons pour la promotion des valeurs islamiques,
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-green-100">Grenoble, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-green-100">+33 00 00 00 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-green-100">contact@dahira_touba_grenoble.fr</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-green-800 pt-8 text-center">
          <p className="text-green-200">
            © 2026 Dahira Touba Grenoble. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;