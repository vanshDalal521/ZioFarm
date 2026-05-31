import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: 'Priya Mukherjee', title: 'Home Chef, Kolkata', quote: 'ZioFarm organic vegetables taste exactly like the ones I grew up eating in my village. The freshness is unmatched — I can literally taste the difference in my cooking.', rating: 5, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150' },
  { name: 'Arun Das', title: 'Fitness Coach, Siliguri', quote: 'Their farm-fresh eggs and free-range chicken are a staple in my diet. I recommend ZioFarm to all my clients who want clean, high-quality protein sources.', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150' },
  { name: 'Sneha Roy', title: 'Mother of Two, Asansol', quote: 'Since switching to ZioFarm dairy, my kids refuse to drink any other milk. Pure, creamy, and safe — gives me peace of mind knowing my family is eating clean.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150' },
  { name: 'Dr. Anjan Chatterjee', title: 'Nutritionist, Burdwan', quote: 'As a nutritionist, I appreciate ZioFarm commitment to organic purity. Their cold-pressed oils and traditional ghee retain nutritional integrity.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150' },
  { name: 'Sudipta Banerjee', title: 'Restaurant Owner, Bengaluru', quote: 'We source all our organic spices and vegetables from ZioFarm. Their consistent quality and authentic Bengal flavours have elevated our menu.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const maxIndex = testimonials.length - 1;
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.t-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.t-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.t-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c === maxIndex ? 0 : c + 1));

  return (
    <section className="section testimonials-section" ref={sectionRef}>
      <div className="testimonials-header">
        <div>
          <p className="section-label t-label">Testimonials</p>
          <h2 className="section-title t-title" style={{ marginBottom: '0.5rem' }}>
            Voices from{' '}
            <span className="em">our farm family</span>
          </h2>
          <p className="section-desc t-desc">
            Real stories from real people who trust ZioFarm every single day.
          </p>
        </div>
        <div className="testimonial-nav">
          <button onClick={prev}><ChevronLeft size={18} /></button>
          <button onClick={next}><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className="testimonials-track" style={{ transform: `translateX(-${current * (380 + 24)}px)` }}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <Quote size={18} style={{ color: 'var(--terracotta)', opacity: 0.2, marginBottom: '1rem' }} />
            <div className="stars">{'★'.repeat(t.rating)}</div>
            <blockquote>"{t.quote}"</blockquote>
            <div className="author">
              <img src={t.avatar} alt={t.name} />
              <div>
                <div className="name">{t.name}</div>
                <div className="title">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
