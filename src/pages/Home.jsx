import Hero from '../components/Hero';
import Motto from '../components/Motto';
import About from '../components/About';
import BusinessVerticals from '../components/BusinessVerticals';
import PoultryShowcase from '../components/PoultryShowcase';
import EggJourney from '../components/EggJourney';
import DairyShowcase from '../components/DairyShowcase';
import OrganicShowcase from '../components/OrganicShowcase';
import ZiovateCare from '../components/ZiovateCare';
import WhyChooseUs from '../components/WhyChooseUs';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <EggJourney />
      <Motto />
      <About />
      <BusinessVerticals />
      <PoultryShowcase />
      <DairyShowcase />
      <OrganicShowcase />
      <ZiovateCare />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Contact />
    </main>
  );
}
