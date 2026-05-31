import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Egg, Factory, Truck, Home, Heart, ArrowDown, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    id: 'farm',
    num: '01',
    icon: Egg,
    title: 'Farm Fresh',
    subtitle: 'Where every egg begins',
    tag: 'ZioFarm Free-Range Eggs',
    desc: 'Our hens roam freely on lush Bengal pastures, bathed in sunlight and fed with natural grains. Each egg is hand-collected at dawn, ensuring peak freshness from the very start.',
    stat: '50,000+',
    statLabel: 'Happy Hens',
    image: 'https://images.unsplash.com/photo-1644217147349-4a3381dfbee5?auto=format&fit=crop&q=85&w=1600&h=1000',
    color: '#5B7B4A',
  },
  {
    id: 'factory',
    num: '02',
    icon: Factory,
    title: 'Smart Processing',
    subtitle: 'Precision at every step',
    tag: 'ZioFarm Quality Control',
    desc: 'Every egg enters our AI-powered facility where computer vision scans for quality, automated graders sort by weight, and gentle handling ensures zero cracks. Only the finest 5% make the cut.',
    stat: '99.7%',
    statLabel: 'Quality Pass Rate',
    image: '/smart-processing.png',
    color: '#C1694F',
  },
  {
    id: 'export',
    num: '03',
    icon: Truck,
    title: 'Bulk Export',
    subtitle: 'From Bengal to the world',
    tag: 'ZioFarm Global Export',
    desc: 'Packed in temperature-controlled containers, our eggs travel via冷链 logistics network to distributors, premium hotels, and retailers across continents — always fresh, always on time.',
    stat: '25+',
    statLabel: 'Countries Served',
    image: 'https://images.unsplash.com/photo-1770944182416-911214039dae?auto=format&fit=crop&q=85&w=1600&h=1000',
    color: '#0F3460',
  },
  {
    id: 'delivery',
    num: '04',
    icon: Home,
    title: 'Home Delivery',
    subtitle: 'Freshness at your doorstep',
    tag: 'ZioFarm Fresh Delivery',
    desc: 'Our dedicated logistics team ensures farm-fresh eggs reach your neighbourhood store or home within hours of packing. Temperature-monitored vans, careful handling, and contact-free delivery.',
    stat: '10,000+',
    statLabel: 'Deliveries Monthly',
    image: '/home-delivery.png',
    color: '#5B7B4A',
  },
  {
    id: 'family',
    num: '05',
    icon: Heart,
    title: 'Family Table',
    subtitle: 'Goodness on every plate',
    tag: 'ZioFarm on Your Table',
    desc: 'Golden yolks, rich flavour, pure nutrition. From sunrise omelettes to bedtime boiled eggs — ZioFarm eggs bring families together around meals made with love and trust.',
    stat: '1M+',
    statLabel: 'Eggs Enjoyed Daily',
    image: '/family-table.png',
    color: '#C1694F',
  },
];

export default function EggJourney() {
  const sectionRef = useRef(null);
  const pinsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ej-hero-label', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 20, opacity: 0, duration: 0.5, ease: 'power2.out',
      });
      gsap.from('.ej-hero-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
      });
      gsap.from('.ej-hero-desc', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.3,
      });

      pinsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el.querySelector('.ej-stage-image'), {
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', toggleActions: 'play none none reverse' },
          scale: 1.15, duration: 1.2, ease: 'power2.out',
        });
        gsap.from(el.querySelector('.ej-stage-text'), {
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 20%', toggleActions: 'play none none reverse' },
          y: 60, opacity: 0, rotationX: 5, transformOrigin: 'center top', duration: 0.9, ease: 'power3.out',
        });
        gsap.from(el.querySelector('.ej-stage-num'), {
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 20%', toggleActions: 'play none none reverse' },
          scale: 0.5, opacity: 0, duration: 0.6, ease: 'back.out(2)', delay: 0.2,
        });
        gsap.from(el.querySelector('.ej-stage-stat'), {
          scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 20%', toggleActions: 'play none none reverse' },
          y: 30, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.4,
        });
      });

      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="egg-journey" className="ej-main" ref={sectionRef}>
      <div className="ej-hero">
        <p className="section-label ej-hero-label">Our Core Product</p>
        <h2 className="ej-hero-title">
          The Egg <span className="em">Journey</span>
        </h2>
        <p className="ej-hero-desc">
          From ethically raised hens to your family's breakfast table — trace every step of how ZioFarm delivers nature's perfect food.
        </p>
        <div className="ej-hero-scroll">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </div>
      </div>

      <div className="ej-progress" ref={progressRef} />

      {stages.map((s, i) => (
        <div key={s.id} className="ej-stage" ref={(el) => (pinsRef.current[i] = el)}>
          <div className="ej-stage-dot" style={{ borderColor: s.color }}>
            <span style={{ background: s.color }} />
          </div>
          <div className="ej-stage-image" style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="ej-stage-overlay" />
            <div className="ej-brand-badge" style={{ background: s.color }}>
              <img src="/logo.jpeg" alt="" className="ej-brand-logo" />
            </div>
          </div>
          <div className="ej-stage-text">
            <div className="ej-stage-num" style={{ color: s.color }}>{s.num}</div>
            <div className="ej-stage-icon" style={{ background: `${s.color}15`, color: s.color }}>
              <s.icon size={24} />
            </div>
            <h3 className="ej-stage-title">{s.title}</h3>
            <p className="ej-stage-subtitle">{s.subtitle}</p>
            <p className="ej-stage-desc">{s.desc}</p>
            <div className="ej-stage-stat">
              <span className="ej-stat-num" style={{ color: s.color }}>{s.stat}</span>
              <span className="ej-stat-lbl">{s.statLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
