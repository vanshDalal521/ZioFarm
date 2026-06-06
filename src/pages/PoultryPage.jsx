import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Egg, CheckCircle2, ArrowLeft, Leaf, ShieldCheck, Truck } from 'lucide-react';

const products = [
  {
    name: 'Free-Range Eggs',
    desc: 'Golden-yolk eggs from hens that roam freely on lush Bengal farms. Rich in Omega-3 and natural vitamins.',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Omega-3 Rich', 'No Hormones', 'Daily Fresh'],
  },
  {
    name: 'Premium Chicken',
    desc: 'Tender, flavourful chicken from ethically raised free-range birds fed on natural grain and pure water.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Antibiotic Free', 'Grain Fed', 'Farm Fresh'],
  },
  {
    name: 'Organic Feed',
    desc: 'Our proprietary blend of organic grains, seeds, and herbs — the secret behind the superior taste of ZioFarm poultry.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['100% Organic', 'Non-GMO', 'Heritage Blend'],
  },
];

const facts = [
  { icon: Leaf, label: 'Farming Method', value: 'Free-Range & Ethical' },
  { icon: ShieldCheck, label: 'Certification', value: '100% Organic Certified' },
  { icon: Egg, label: 'Daily Output', value: '5,000+ Fresh Eggs' },
  { icon: Truck, label: 'Delivery', value: 'Farm-to-Door in 24hrs' },
];

export default function PoultryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero poultry-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZioFarm — Poultry Division</p>
          <h1 className="product-page-hero-title">
            Poultry <span className="em">&amp; Eggs</span>
          </h1>
          <p className="product-page-hero-desc">
            Ethically raised, free-range poultry from the heart of Bengal's green farmland. 
            Every egg, every cut — pure, honest, and farm-fresh.
          </p>
        </div>
      </section>

      {/* Facts bar */}
      <div className="product-facts-bar">
        {facts.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="product-fact">
              <Icon size={22} className="product-fact-icon" />
              <div>
                <p className="product-fact-label">{f.label}</p>
                <p className="product-fact-value">{f.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Products grid */}
      <section className="product-page-section">
        <div className="product-page-inner">
          <p className="section-label">Our Products</p>
          <h2 className="section-title">
            Nature's finest, <span className="em">delivered daily</span>
          </h2>
          <p className="section-desc">
            Every product from our poultry division is raised with care, harvested with respect, 
            and delivered with the promise of freshness you can taste.
          </p>

          <div className="product-cards-grid">
            {products.map((p, i) => (
              <div key={i} className="product-card">
                <div className="product-card-image">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="product-card-tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="product-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZioFarm Poultry */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">Our Promise</p>
          <h2 className="section-title">Why choose <span className="em">ZioFarm Poultry?</span></h2>
          <div className="product-benefits-grid">
            {[
              { title: 'Free-Range Freedom', desc: 'Our birds roam 10+ acres of open farmland, ensuring natural behavior, better health, and superior meat quality.' },
              { title: 'Zero Antibiotics', desc: 'We never use antibiotics or growth hormones. What you eat is 100% natural — the way nature intended.' },
              { title: 'Natural Grain Diet', desc: 'Fed on our proprietary blend of organic grains, seeds, and herbs for richer flavour and higher nutrition.' },
              { title: 'Same-Day Fresh', desc: 'Eggs collected at dawn and delivered by noon. Our cold chain ensures maximum freshness to your doorstep.' },
              { title: 'Traceability', desc: 'Every pack carries a QR code you can scan to trace the exact farm, date, and flock your eggs came from.' },
              { title: 'Sustainable Farming', desc: 'We compost all farm waste, use solar power, and practice water recycling across all our poultry units.' },
            ].map((b, i) => (
              <div key={i} className="product-benefit">
                <CheckCircle2 size={22} className="product-benefit-icon" />
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-page-cta">
        <h2>Ready to experience the <span className="em">ZioFarm difference?</span></h2>
        <p>Get farm-fresh poultry and eggs delivered right to your doorstep.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
