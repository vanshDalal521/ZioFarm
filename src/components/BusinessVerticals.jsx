import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, HeartPulse, X, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: 'ziofarm',
    title: 'ZioFarm',
    subtitle: 'Pure Agriculture',
    desc: 'Our agricultural wing dedicated to pure, organic, and ethically raised produce. From our family farms directly to your table.',
    fullDesc: 'ZioFarm represents the culmination of generations of Bengal\'s agricultural wisdom combined with modern organic practices. We operate over 50 partner farms to ensure every egg, every drop of milk, and every vegetable is completely untouched by harmful chemicals.',
    products: ['Poultry & Free-Range Eggs', 'Premium Dairy & Paneer', 'Organic Vegetables & Grains'],
    features: ['100% Organic Certified', 'Ethically Raised Poultry', 'Grass-fed Dairy Cows'],
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800&h=1000',
    icon: Leaf,
  },
  {
    id: 'ziovatecare',
    title: 'ZiovateCare',
    subtitle: 'Smart Health Tech',
    desc: 'Our advanced health-tech wing. A complete AI-powered companion for wellness, real-time insights, and modern living.',
    fullDesc: 'ZiovateCare bridges the gap between the natural food you consume and your body\'s real-time needs. Using cutting-edge AI and seamless health tracking, we provide personalized wellness plans and immediate insights to optimize your lifestyle.',
    products: ['Health Tracking App', 'Real-time AI Insights', 'Personalized Wellness Plans'],
    features: ['24/7 Vitals Tracking', 'Personalized Diets', 'AI Health Coach'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=1000',
    icon: HeartPulse,
  },
];

export default function BusinessVerticals() {
  const [activeModal, setActiveModal] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.vert-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.vert-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.vertical-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60, rotationX: 25, transformOrigin: 'center bottom', duration: 0.7, stagger: 0.2, ease: 'power2.out',
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
    const rx = ((y - cy) / cy) * -4;
    const ry = ((x - cx) / cx) * 4;
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
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="section-label vert-label">The Ziovate Umbrella</p>
        <h2 className="section-title vert-title" style={{ maxWidth: 700 }}>
          Two pillars of{' '}
          <span className="em">health & purity</span>
        </h2>
        <p className="section-desc">
          Bridging the gap between natural, ethical agriculture and advanced health tracking technology.
        </p>
      </div>

      <div className="verticals-grid pillars-layout">
        {pillars.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              ref={(el) => cardRefs.current[i] = el}
              className="vertical-card pillar-card"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              onClick={() => setActiveModal(v)}
            >
              <div className="vertical-bg" style={{ backgroundImage: `url(${v.image})` }} />
              <div className="vertical-glow" />
              <div className="pillar-content">
                <span className="tag">
                  <Icon size={18} />
                  <span>{v.subtitle}</span>
                </span>
                <h3 className="pillar-title">{v.title}</h3>
                <p className="pillar-desc">{v.desc}</p>
                <div className="vertical-products">
                  {v.products.map((p, j) => (
                    <span key={j} className="product-chip">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeModal && (
        <div className="pillar-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="pillar-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pillar-modal-close" onClick={() => setActiveModal(null)}>
              <X size={24} />
            </button>
            <div className="pillar-modal-image" style={{ backgroundImage: `url(${activeModal.image})` }} />
            <div className="pillar-modal-body">
              <span className="section-label">{activeModal.subtitle}</span>
              <h2 className="section-title">{activeModal.title}</h2>
              <p className="section-desc">{activeModal.fullDesc}</p>
              
              <div className="pillar-modal-lists">
                <div>
                  <h4>Key Products</h4>
                  <ul>
                    {activeModal.products.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Features</h4>
                  <ul>
                    {activeModal.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => {
                setActiveModal(null);
                setTimeout(() => scrollTo(activeModal.id === 'ziofarm' ? 'poultry' : 'ziovate'), 300);
              }}>
                Explore Details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
