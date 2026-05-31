import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Egg, Milk, Apple, HeartPulse } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  {
    title: 'Poultry',
    desc: 'Ethically raised free-range poultry. Farm-fresh eggs and premium chicken from happy, healthy birds.',
    products: ['Free-Range Eggs', 'Premium Chicken', 'Organic Feed'],
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600&h=800',
    id: 'poultry',
    icon: Egg,
    hue: 40,
  },
  {
    title: 'Dairy',
    desc: 'Pure, creamy milk from grass-fed cows. Paneer, ghee, butter — untouched and natural.',
    products: ['Fresh Milk', 'Pure Ghee', 'Farm Paneer'],
    image: 'https://images.pexels.com/photos/7584792/pexels-photo-7584792.jpeg?auto=compress&cs=tinysrgb&w=600',
    id: 'dairy',
    icon: Milk,
    hue: 35,
  },
  {
    title: 'Organic Food',
    desc: 'Sun-ripened vegetables, sweet fruits, ancient grains, and aromatic spices from Bengal soil.',
    products: ['Fresh Vegetables', 'Seasonal Fruits', 'Ancient Grains'],
    image: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=600',
    id: 'organic',
    icon: Apple,
    hue: 120,
  },
  {
    title: 'Ziovate Care',
    desc: 'AI-powered health companion for smart wellness tracking and real-time health monitoring.',
    products: ['Health Tracking', 'AI Insights', 'Wellness Plans'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=800',
    id: 'ziovate',
    icon: HeartPulse,
    hue: 0,
  },
];

export default function BusinessVerticals() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.vert-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.vert-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.vertical-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60, rotationX: 25, transformOrigin: 'center bottom', duration: 0.7, stagger: 0.12, ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = useCallback((e, i) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    card.style.transition = 'transform 0.1s ease-out';
  }, []);

  const handleMouseLeave = useCallback((i) => {
    const card = cardRefs.current[i];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="verticals" className="section section-beige verticals-section" ref={sectionRef}>
      <div className="verticals-bg-glow" />
      <div className="farm-dots farm-dots-3" style={{ fontSize: 16, letterSpacing: 10, color: 'var(--sand)' }}>•••</div>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="section-label vert-label">Our Verticals</p>
        <h2 className="section-title vert-title" style={{ maxWidth: 600 }}>
          Four pillars of{' '}
          <span className="em">trust & quality</span>
        </h2>
        <p className="section-desc">
          From farm to table — each vertical is built on generations of Bengal's agricultural wisdom.
        </p>
      </div>

      <div className="verticals-grid">
        {verticals.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              ref={(el) => cardRefs.current[i] = el}
              className="vertical-card"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              onClick={() => scrollTo(v.id)}
            >
              <div className="vertical-bg" style={{ backgroundImage: `url(${v.image})` }} />
              <div className="vertical-glow" />
              <span className="tag">
                <Icon size={14} />
                <span>0{i + 1}</span>
              </span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
              <div className="vertical-products">
                {v.products.map((p, j) => (
                  <span key={j} className="product-chip">{p}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
