import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Heart, Activity, Brain, Shield, Bell, Zap, Star } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Real-Time Heart Monitor',
    desc: 'Track your heart rate 24/7 with medical-grade precision. Instant alerts if anything looks unusual.',
  },
  {
    icon: Activity,
    title: 'Activity & Step Tracker',
    desc: 'Count every step, calorie, and kilometre. Set daily goals and watch your streaks grow.',
  },
  {
    icon: Brain,
    title: 'AI Health Assistant',
    desc: 'Chat with your personal AI health coach anytime. Get instant answers to health questions tailored to you.',
  },
  {
    icon: Shield,
    title: 'Medical Connect',
    desc: 'Book verified doctor consultations directly within the app. No waiting rooms, no hassle.',
  },
  {
    icon: Zap,
    title: 'Sleep Quality Analysis',
    desc: 'Understand your sleep cycles deeply. Wake up refreshed with AI-generated sleep improvement tips.',
  },
  {
    icon: Bell,
    title: 'Smart Health Reminders',
    desc: 'Never miss a medication, hydration goal, or checkup. Your app learns your routine and adapts.',
  },
];

const screenshots = [
  {
    title: 'Dashboard',
    desc: 'All your vitals at a glance — heart rate, steps, sleep score, and wellness index in one beautiful view.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'AI Health Chat',
    desc: 'Ask anything — "Should I exercise today?" or "What does my heart rate variability mean?" — get smart answers instantly.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Doctor Connect',
    desc: 'Browse verified specialists, read reviews, and book video or in-person consultations without leaving the app.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

export default function HealthAppPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero health-app-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZiovateCare — Health Technology</p>
          <h1 className="product-page-hero-title">
            The <span className="em">Health App</span>
          </h1>
          <p className="product-page-hero-desc">
            Your all-in-one AI-powered health companion. Monitor vitals, track wellness, consult doctors, and live better — all from your phone.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span className="app-badge">
              <Smartphone size={16} /> Coming Soon on iOS & Android
            </span>
            <span className="app-badge app-badge-outline">
              <Star size={16} /> Free to Download
            </span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="product-facts-bar">
        {[
          { icon: Heart, label: 'Health Metrics', value: '15+ Vitals Tracked' },
          { icon: Brain, label: 'AI Engine', value: 'Personalised to You' },
          { icon: Shield, label: 'Doctors Network', value: '500+ Verified Specialists' },
          { icon: Star, label: 'User Rating', value: '4.9 / 5.0 Stars' },
        ].map((f, i) => {
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

      {/* Features */}
      <section className="product-page-section">
        <div className="product-page-inner">
          <p className="section-label">App Features</p>
          <h2 className="section-title">
            Everything your health <span className="em">needs</span>
          </h2>
          <p className="section-desc">
            Built with medical professionals and AI researchers, the ZiovateCare app is the most comprehensive health companion available in India.
          </p>
          <div className="care-features-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="care-feature-card">
                  <div className="care-feature-icon"><Icon size={24} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">Inside the App</p>
          <h2 className="section-title">
            Beautifully <span className="em">designed</span> for you
          </h2>
          <div className="product-cards-grid">
            {screenshots.map((s, i) => (
              <div key={i} className="product-card">
                <div className="product-card-image">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="product-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-page-cta">
        <h2>Be the first to <span className="em">experience it</span></h2>
        <p>Join the waitlist and get early access when we launch.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Get Early Access
        </Link>
      </section>
    </main>
  );
}
