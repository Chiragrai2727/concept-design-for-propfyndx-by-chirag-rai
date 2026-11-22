import { useEffect, useState } from 'react';
import { Blogs } from './components/Blogs';
import { Cities } from './components/Cities';
import { CtaBand } from './components/CtaBand';
import { Developers } from './components/Developers';
import { FeaturedDubai } from './components/FeaturedDubai';
import { FeaturedMumbai } from './components/FeaturedMumbai';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { PropertyDetailPage } from './components/PropertyDetailPage';
import { Solutions } from './components/Solutions';
import { WhyInvest } from './components/WhyInvest';
import { PROPERTIES, type PropertyDetail } from './data/content';

function getPropertyFromHash(hash: string): PropertyDetail | null {
  const match = hash.match(/^#\/property\/([^/?#]+)/);
  if (!match) return null;
  const slug = decodeURIComponent(match[1]);
  return PROPERTIES.find((item) => item.slug === slug) ?? null;
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeProperty = getPropertyFromHash(hash);

  return (
    <div className="min-h-screen bg-white text-[#0A2A52]">
      {activeProperty ? (
        <PropertyDetailPage property={activeProperty} />
      ) : (
        <>
          <main>
            <Hero />
            <FeaturedMumbai />
            <Cities />
            <FeaturedDubai />
            <Solutions />
            <WhyInvest />
            <Developers />
            <CtaBand />
            <Blogs />
          </main>
          <Footer />
        </>
      )}
      <FloatingActions />
    </div>
  );
}
