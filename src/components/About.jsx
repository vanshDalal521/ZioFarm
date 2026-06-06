import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 50, suffix: '+', label: 'Partner Farms' },
  { number: 200, suffix: '+', label: 'Premium Products' },
  { number: '10K+', suffix: '', label: 'Happy Families' },
  { number: 15, suffix: '+', label: 'Years of Trust' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.about-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 50, rotationX: 15, transformOrigin: 'center top', duration: 1, ease: 'power3.out' });
      gsap.from('.about-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }, y: 30, rotationX: 10, transformOrigin: 'center top', duration: 0.8, ease: 'power2.out' });
      gsap.from('.about-image', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, x: 40, rotationY: 10, transformOrigin: 'right center', duration: 1, ease: 'power3.out', scale: 0.95 });
      gsap.from('.about-stat', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 30, rotationX: 15, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.1, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section section-cream" ref={sectionRef}>
      <div className="about-grid">
        <div>
          <p className="section-label about-label">Our Story</p>
          <h2 className="section-title about-title">
            Reimagine <span className="em">Health & Life</span> Every Day
          </h2>
          <p className="section-desc about-desc">
            Ziovate is where modern health tracking meets pure, organic agriculture. We bring you farm-fresh food and smart wellness tools — all aimed at a better, healthier you.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: 480 }}>
            Every product and service carries our promise of purity, advanced science, and a healthier tomorrow.
          </p>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="num">{s.number}{s.suffix}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=85&w=800&h=600"
            alt="Bengal farmland at sunrise"
          />
        </div>
      </div>
    </section>
  );
}
