import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DonationSection = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [totalDonations, setTotalDonations] = useState(0);

  const predefinedAmounts = [50, 100, 200, 500];

  useEffect(() => {
    const stored = localStorage.getItem('totalDonations');
    if (stored) {
      setTotalDonations(Number(stored));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const amount = selectedAmount || Number(customAmount);
    
    if (!amount || amount <= 0) {
      toast({
        title: 'Erreur',
        description: 'Veuillez sélectionner ou entrer un montant valide',
        variant: 'destructive',
      });
      return;
    }

    if (!donorName || !donorEmail) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive',
      });
      return;
    }

    const newTotal = totalDonations + amount;
    setTotalDonations(newTotal);
    localStorage.setItem('totalDonations', newTotal.toString());

    const donations = JSON.parse(localStorage.getItem('donations') || '[]');
    donations.push({
      amount,
      name: donorName,
      email: donorEmail,
      date: new Date().toISOString(),
    });
    localStorage.setItem('donations', JSON.stringify(donations));

    toast({
      title: '✨ Merci pour votre générosité!',
      description: `Votre don de ${amount.toLocaleString()} € a été enregistré avec succès.`,
    });

    setSelectedAmount(null);
    setCustomAmount('');
    setDonorName('');
    setDonorEmail('');
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heart className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Faire un Don
          </h2>
          <p className="text-xl text-gray-600">
            Votre générosité aide à construire une communauté plus forte
          </p>
        </motion.div>

        {/* Total Donations Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center mb-12 shadow-xl"
        >
          <TrendingUp className="w-12 h-12 mx-auto mb-3" />
          <p className="text-lg mb-2">Total des Dons Collectés</p>
          <p className="text-5xl font-bold">{totalDonations.toLocaleString()} €</p>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Choisissez un montant
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {amount.toLocaleString()} €
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Ou entrez un montant personnalisé
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Montant en €"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 bg-white"
              />
            </div>

            {/* Donor Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Nom complet"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre Email
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="email@exemple.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 bg-white"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Faire un Don
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;