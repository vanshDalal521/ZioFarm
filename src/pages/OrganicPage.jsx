import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Apple, CheckCircle2, ArrowLeft, Leaf, ShieldCheck, Sun } from 'lucide-react';

const products = [
  {
    name: 'Seasonal Vegetables',
    desc: 'Crisp, sun-ripened vegetables grown in Bengal\'s fertile alluvial soil using heirloom seeds and zero chemicals.',
    image: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Zero Pesticides', 'Heirloom Seeds', 'Seasonal'],
  },
  {
    name: 'Fresh Seasonal Fruits',
    desc: 'Naturally sweet fruits ripened on the tree — not in a warehouse. Harvested at peak flavour and delivered fresh.',
    image: 'https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Tree Ripened', 'No Wax Coating', 'Farm Direct'],
  },
  {
    name: 'Heritage Grains & Rice',
    desc: 'Ancient varieties of Bengal rice and grains — Gobindobhog, Tulaipanji, and more — grown exactly as they were for centuries.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['GI Tagged', 'Heritage Variety', 'Polished Naturally'],
  },
  {
    name: 'Aromatic Spices',
    desc: 'Hand-picked, sun-dried spices from Bengal\'s spice farms — turmeric, chilli, coriander — full of colour and aroma.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Sun-Dried', 'No Additives', 'High Curcumin'],
  },
  {
    name: 'Cold-Pressed Oils',
    desc: 'Mustard, coconut, and sesame oils extracted through traditional cold-pressing — full flavour, maximum nutrition.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Cold-Pressed', 'Unrefined', 'High Smoke Point'],
  },
  {
    name: 'Wild Honey',
    desc: 'Raw, unfiltered honey harvested from the Sundarbans mangrove forests — one of the rarest and most prized varieties in the world.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Sundarbans Wild', 'Raw & Unfiltered', 'Antioxidant Rich'],
  },
];

const facts = [
  { icon: Leaf, label: 'Farming', value: 'Zero Chemicals, 100% Organic' },
  { icon: Sun, label: 'Ripening', value: 'Sun-Ripened on the Farm' },
  { icon: ShieldCheck, label: 'Certification', value: 'FSSAI & Organic Certified' },
  { icon: Apple, label: 'Varieties', value: '60+ Seasonal Produce Items' },
];

export default function OrganicPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero organic-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZioFarm — Organic Division</p>
          <h1 className="product-page-hero-title">
            Organic <span className="em">Foods</span>
          </h1>
          <p className="product-page-hero-desc">
            From Bengal's alluvial soil — kissed by the sun and nourished by the Ganges.
            Pure, chemical-free, and full of the flavour that nature intended.
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
            From Bengal's soil to <span className="em">your table</span>
          </h2>
          <p className="section-desc">
            60+ varieties of organic produce, grains, spices, and oils — all grown without a single 
            synthetic chemical, preservative, or shortcut.
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

      {/* Why ZioFarm Organic */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">Our Promise</p>
          <h2 className="section-title">Why choose <span className="em">ZioFarm Organic?</span></h2>
          <div className="product-benefits-grid">
            {[
              { title: 'Zero Synthetic Chemicals', desc: 'Absolutely no synthetic fertilisers, pesticides, herbicides, or fungicides are used on any of our farms — ever.' },
              { title: 'Heirloom Seed Guardians', desc: 'We actively preserve and grow heirloom Bengali seed varieties that are disappearing from modern agriculture.' },
              { title: 'Bengal\'s GI Heritage', desc: 'Our Gobindobhog rice and Tulaipanji varieties carry Geographical Indication (GI) tags — authenticated by the Government of India.' },
              { title: 'Sundarbans Wild Honey', desc: 'Our wild honey is sourced directly from licensed tribal honey hunters in the Sundarbans UNESCO Biosphere Reserve.' },
              { title: 'Compost-Only Farming', desc: 'We use only farm-made compost and natural green manures to enrich our soil — building long-term soil health.' },
              { title: 'Direct from Farm', desc: 'No middlemen. Products travel directly from our farms to our cold storage to your door — eliminating weeks of warehouse storage.' },
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
        <h2>Taste what <span className="em">real organic</span> means</h2>
        <p>Order directly from our Bengal farms and experience freshness you've never tasted before.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
