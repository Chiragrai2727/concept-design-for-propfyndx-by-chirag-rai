import { Blogs } from './components/Blogs';
import { Cities } from './components/Cities';
import { CtaBand } from './components/CtaBand';
import { Developers } from './components/Developers';
import { FeaturedDubai } from './components/FeaturedDubai';
import { FeaturedMumbai } from './components/FeaturedMumbai';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { WhyInvest } from './components/WhyInvest';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A2A52]">
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
      <FloatingActions />
    </div>
  );
}
