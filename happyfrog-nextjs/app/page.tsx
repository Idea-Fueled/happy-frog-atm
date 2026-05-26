import AnnounceBar from '@/components/AnnounceBar';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Stats from '@/components/Stats';
import WhatYouGet from '@/components/WhatYouGet';
import HowItWorks from '@/components/HowItWorks';
import Equipment from '@/components/Equipment';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <AnnounceBar />
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <WhatYouGet />
        <HowItWorks />
        <Equipment />
        <Comparison />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
