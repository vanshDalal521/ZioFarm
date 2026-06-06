import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Milk, CheckCircle2, ArrowLeft, Leaf, ShieldCheck, Truck } from 'lucide-react';

const products = [
  {
    name: 'Fresh Whole Milk',
    desc: 'Creamy, pure milk from grass-fed cows, pasteurized gently to retain all natural proteins and vitamins.',
    image: 'https://images.pexels.com/photos/7584792/pexels-photo-7584792.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Grass-Fed', 'Pasteurized', 'High Protein'],
  },
  {
    name: 'Artisan Paneer',
    desc: 'Soft, fresh cottage cheese made daily from our whole milk using traditional methods — creamy inside, firm outside.',
    image: 'https://images.pexels.com/photos/2650385/pexels-photo-2650385.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Made Daily', 'No Preservatives', 'High Calcium'],
  },
  {
    name: 'Pure Bilona Ghee',
    desc: 'Authentic A2 ghee prepared using the traditional Bilona method — slow-churned by hand for unmatched aroma and purity.',
    image: 'https://images.unsplash.com/photo-1626200916896-bb20c6ebe0f1?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['A2 Milk', 'Hand-Churned', 'Traditional Method'],
  },
  {
    name: 'Hand-Churned Butter',
    desc: 'Creamy cultured butter made from the richest cream of our grass-fed cows. No emulsifiers, no additives — pure taste.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Cultured Cream', 'Unsalted & Salted', 'Farm Fresh'],
  },
];

const facts = [
  { icon: Leaf, label: 'Cows\' Diet', value: 'Grass-Fed & Free-Roaming' },
  { icon: ShieldCheck, label: 'Ghee Standard', value: 'Traditional Bilona Method' },
  { icon: Milk, label: 'Daily Production', value: '2,000+ Litres Fresh Milk' },
  { icon: Truck, label: 'Delivery', value: 'Cold-Chain Delivered' },
];

export default function DairyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero dairy-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZioFarm — Dairy Division</p>
          <h1 className="product-page-hero-title">
            Dairy <span className="em">Products</span>
          </h1>
          <p className="product-page-hero-desc">
            Pure, creamy milk and dairy from grass-fed Bengal cows. 
            Crafted with traditional methods and the rich heritage of our land.
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
            Pure, creamy <span className="em">Bengal dairy</span>
          </h2>
          <p className="section-desc">
            Every dairy product we make starts with happy, grass-fed cows grazing on Bengal's 
            emerald pastures — and ends on your table with nothing but goodness.
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

      {/* Why ZioFarm Dairy */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">Our Promise</p>
          <h2 className="section-title">Why choose <span className="em">ZioFarm Dairy?</span></h2>
          <div className="product-benefits-grid">
            {[
              { title: 'Happy Grass-Fed Cows', desc: 'Our cows graze freely on 200+ acres of chemical-free pastures, producing milk naturally richer in CLA and Omega-3.' },
              { title: 'A2 Milk Only', desc: 'We use only A2 beta-casein cows — scientifically proven to be easier to digest and nutritionally superior.' },
              { title: 'Traditional Bilona Ghee', desc: 'Our ghee is made by the ancient Bilona churning method — curd is churned by hand to separate the purest butter before clarification.' },
              { title: 'No Preservatives Ever', desc: 'Every dairy product leaves our facility free of artificial colours, preservatives, emulsifiers, or additives of any kind.' },
              { title: 'Same-Day Paneer', desc: 'Paneer is made fresh every single morning and dispatched immediately. You receive it within hours of production.' },
              { title: 'Full Traceability', desc: 'Scan the QR code on any product to trace the farm, the cow, the production date, and the entire supply chain.' },
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
        <h2>Taste the <span className="em">purity of Bengal dairy</span></h2>
        <p>Order our farm-fresh dairy products and experience the difference yourself.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
