import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PoultryPage from './pages/PoultryPage';
import DairyPage from './pages/DairyPage';
import OrganicPage from './pages/OrganicPage';
import HealthAppPage from './pages/HealthAppPage';
import WellnessPlansPage from './pages/WellnessPlansPage';
import AITrackingPage from './pages/AITrackingPage';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const location = useLocation();

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
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poultry" element={<PoultryPage />} />
        <Route path="/dairy" element={<DairyPage />} />
        <Route path="/organic" element={<OrganicPage />} />
        <Route path="/health-app" element={<HealthAppPage />} />
        <Route path="/wellness-plans" element={<WellnessPlansPage />} />
        <Route path="/ai-tracking" element={<AITrackingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
