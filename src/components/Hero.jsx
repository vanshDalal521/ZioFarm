import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-title-line', { y: 80, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.3')
        .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-actions .btn', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.hero-bg > img, .hero-bg > video', { scale: 1.2, duration: 1.8, ease: 'power2.out' }, 0);

      gsap.to('.hero-bg', {
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
        y: '25%',
        ease: 'none',
      });

      gsap.to('.hero-bg > img, .hero-bg > video', {
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
        scale: 1.15,
        ease: 'none',
      });

      gsap.to('.hero-content', {
        scrollTrigger: { trigger: '.hero', start: 'center center', end: 'bottom top', scrub: 1.2 },
        y: -40,
        opacity: 0,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-bg">
        <video autoPlay muted loop playsInline>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-float-shape" />
      <div className="hero-float-shape" />
      <div className="hero-float-shape" />
      <div className="farm-dots farm-dots-1" style={{ fontSize: 20, letterSpacing: 8, color: 'var(--sand)' }}>•••</div>
      <div className="farm-dots farm-dots-2" style={{ fontSize: 14, letterSpacing: 6, color: 'var(--primary-light)' }}>•••</div>
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="hero-title-line">Health. Wellness.</div>
          <div className="hero-title-line">
            <span className="em">Reimagined.</span>
          </div>
          <div className="hero-title-line">
            <span className="em">Reimagine Life.</span>
          </div>
        </h1>
        <p className="hero-desc">
          Ziovate Care · Organic Food · Poultry · Dairy<br />
          From cutting-edge health tracking to our family farms to your table. Pure, natural, and advanced.
        </p>
        <div className="hero-actions">
          <a href="#verticals" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#verticals')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore Our Products
          </a>
          <a href="#about" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Our Story
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line" />
        <ArrowDown size={12} />
      </div>
    </section>
  );
}
