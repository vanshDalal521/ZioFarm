import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, BadgeIndianRupee, Heart, Cpu, Sun, Wind } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Leaf, title: '100% Organic', desc: 'Every product is certified organic, free from chemicals, pesticides, and artificial additives.' },
  { icon: BadgeIndianRupee, title: 'Affordable Pricing', desc: 'Premium organic products at prices that respect your budget. Quality should never be a luxury.' },
  { icon: Sun, title: 'Sun-Ripened Goodness', desc: 'Our produce is harvested at peak ripeness under the Bengal sun, locking in maximum flavour.' },
  { icon: Heart, title: 'Bengal Heritage', desc: 'Rooted in centuries of Bengal rich agricultural traditions. Every bite carries our homeland taste.' },
  { icon: Wind, title: 'Naturally Grown', desc: 'No forced growth. No artificial ripening. We let nature take its course.' },
  { icon: Cpu, title: 'Tech-Enabled Trust', desc: 'From farm sensors to blockchain traceability — technology ensures purity at every step.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.why-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.why-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.why-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50, rotationX: 20, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section why-section" ref={sectionRef}>
      <div className="why-header">
        <p className="section-label why-label">Why Choose Us</p>
        <h2 className="section-title why-title" style={{ maxWidth: 500 }}>
          Grown with Love.{' '}
          <span className="em">Trusted by Families.</span>
        </h2>
        <p className="section-desc why-desc" style={{ maxWidth: 460 }}>
          Every reason you need to make ZioFarm your trusted partner for organic, pure, and healthy living.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div key={i} className="why-card">
            <div className="icon"><r.icon size={24} /></div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
