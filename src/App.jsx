import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motto from './components/Motto';
import About from './components/About';
import BusinessVerticals from './components/BusinessVerticals';
import PoultryShowcase from './components/PoultryShowcase';
import EggJourney from './components/EggJourney';
import DairyShowcase from './components/DairyShowcase';
import OrganicShowcase from './components/OrganicShowcase';
import ZiovateCare from './components/ZiovateCare';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EggJourney />
        <div className="wheat-divider"><span className="wheat-icon">✦</span></div>
        <Motto />
        <div className="wheat-divider"><span className="wheat-icon">✦</span></div>
        <About />
        <div className="wheat-divider"><span className="wheat-icon">✦</span></div>
        <BusinessVerticals />
        <PoultryShowcase />
        <DairyShowcase />
        <OrganicShowcase />
        <ZiovateCare />
        <div className="wheat-divider"><span className="wheat-icon">✦</span></div>
        <WhyChooseUs />
        <Statistics />
        <div className="wheat-divider"><span className="wheat-icon">✦</span></div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
