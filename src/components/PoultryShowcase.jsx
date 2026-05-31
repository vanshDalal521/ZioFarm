import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = ['Farm Fresh Eggs', 'Free-Range Chicken', 'Organic Feed'];

export default function PoultryShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.p-img', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, scale: 0.93, rotationY: -8, transformOrigin: 'left center', duration: 1.2, ease: 'power3.out' });
      gsap.from('.p-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.p-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.p-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }, y: 30, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.p-tag', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.4, stagger: 0.08, ease: 'power2.out' });
      gsap.from('.p-highlight', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, x: -20, rotationY: 5, transformOrigin: 'right center', duration: 0.5, stagger: 0.1, ease: 'power2.out' });
      gsap.from('.p-btn', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="poultry" className="showcase section-white" ref={sectionRef}>
      <div className="showcase-image p-img">
        <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800&h=600" alt="Free-range poultry farming" />
      </div>
      <div className="showcase-text">
        <p className="label p-label">Vertical 01 — Poultry</p>
        <h2 className="p-title">Ethically Raised. <span className="em">Naturally Better.</span></h2>
        <p className="desc p-desc">Our chickens roam freely on lush Bengal farms, basking in sunlight and feeding on natural grains. The result? Eggs with deep golden yolks and tender, flavourful chicken — just as nature intended.</p>
        <div className="products">
          {products.map((p, i) => <span key={i} className="product-tag p-tag">{p}</span>)}
        </div>
        <ul className="highlights">
          <li className="p-highlight">Free-range & ethical rearing</li>
          <li className="p-highlight">No hormones or antibiotics</li>
          <li className="p-highlight">Natural grain-fed nutrition</li>
        </ul>
        <a href="#contact" className="btn btn-primary p-btn" style={{ marginTop: '1.5rem' }} onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Explore Products <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
