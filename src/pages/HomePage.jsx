import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Presentation from '@/components/Presentation';
import LieuHoraire from '@/components/LieuHoraire';
import EventsSection from '@/components/EventsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BudgetSection from '@/components/BudgetSection';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dahira Al-Khayria - Construire ensemble une communauté solidaire</title>
        <meta 
          name="description" 
          content="Dahira Al-Khayria est une communauté islamique dédiée à la promotion des valeurs islamiques, l'entraide sociale et le développement spirituel. Découvrez nos projets, événements et faites un don." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <Presentation />
        <LieuHoraire />
        <EventsSection />
        <ProjectsSection />
        <BudgetSection />
        <DonationSection />
        <Footer />
    
      </div>
    </>
  );
};

export default HomePage;