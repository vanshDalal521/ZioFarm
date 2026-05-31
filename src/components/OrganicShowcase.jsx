import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = ['Organic Vegetables', 'Seasonal Fruits', 'Heritage Grains', 'Aromatic Spices', 'Cold-Pressed Oils'];

export default function OrganicShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.o-img', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, scale: 0.93, rotationY: 8, transformOrigin: 'right center', duration: 1.2, ease: 'power3.out' });
      gsap.from('.o-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.o-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.o-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }, y: 30, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.o-tag', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.4, stagger: 0.08, ease: 'power2.out' });
      gsap.from('.o-highlight', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, x: -20, rotationY: 5, transformOrigin: 'right center', duration: 0.5, stagger: 0.1, ease: 'power2.out' });
      gsap.from('.o-btn', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="organic" className="showcase section-white" ref={sectionRef}>
      <div className="showcase-image o-img">
        <img src="https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" alt="Organic vegetables" />
      </div>
      <div className="showcase-text">
        <p className="label o-label">Vertical 03 — Organic Food</p>
        <h2 className="o-title">From Bengal's Soil. <span className="em">Straight to Your Plate.</span></h2>
        <p className="desc o-desc">Bengal's alluvial soil, kissed by the sun and nourished by the Ganges, produces the most flavourful organic produce. Our farmers use traditional methods and heirloom seeds to grow food that tastes like home.</p>
        <div className="products">
          {products.map((p, i) => <span key={i} className="product-tag o-tag">{p}</span>)}
        </div>
        <ul className="highlights">
          <li className="o-highlight">Grown in Bengal's fertile alluvial soil</li>
          <li className="o-highlight">Heirloom seeds preserving biodiversity</li>
          <li className="o-highlight">Harvested at peak ripeness</li>
        </ul>
        <a href="#contact" className="btn btn-primary o-btn" style={{ marginTop: '1.5rem' }} onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Explore Products <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
