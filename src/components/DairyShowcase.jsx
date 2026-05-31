import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = ['Fresh Milk', 'Artisan Paneer', 'Pure Ghee', 'Hand-Churned Butter', 'Creamy Cheese'];

export default function DairyShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.d-img', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, scale: 0.93, rotationY: 8, transformOrigin: 'right center', duration: 1.2, ease: 'power3.out' });
      gsap.from('.d-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.d-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.d-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }, y: 30, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.d-tag', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.4, stagger: 0.08, ease: 'power2.out' });
      gsap.from('.d-highlight', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, x: -20, rotationY: 5, transformOrigin: 'right center', duration: 0.5, stagger: 0.1, ease: 'power2.out' });
      gsap.from('.d-btn', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="dairy" className="showcase reverse section-beige" ref={sectionRef}>
      <div className="showcase-image d-img">
        <img src="https://images.pexels.com/photos/2650385/pexels-photo-2650385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" alt="Dairy farming" />
      </div>
      <div className="showcase-text">
        <p className="label d-label">Vertical 02 — Dairy</p>
        <h2 className="d-title">Pure Bengal. <span className="em">Creamy Goodness.</span></h2>
        <p className="desc d-desc">Our cows graze freely on emerald-green Bengal pastures, drinking pure water and breathing fresh air. Their milk is rich, creamy, and full of natural nutrients — churned traditionally for the authentic taste of Bengal.</p>
        <div className="products">
          {products.map((p, i) => <span key={i} className="product-tag d-tag">{p}</span>)}
        </div>
        <ul className="highlights">
          <li className="d-highlight">Grass-fed happy cows</li>
          <li className="d-highlight">Traditional Bilona churning</li>
          <li className="d-highlight">No preservatives or additives</li>
        </ul>
        <a href="#contact" className="btn btn-primary d-btn" style={{ marginTop: '1.5rem' }} onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Explore Products <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
