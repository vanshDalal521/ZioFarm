import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, TrendingUp, Eye, Zap, Target, BarChart3, CheckCircle2 } from 'lucide-react';

const trackingFeatures = [
  {
    icon: Brain,
    title: 'AI Pattern Recognition',
    desc: 'Our AI analyses months of your data to spot patterns invisible to the human eye — predicting health risks before they appear.',
  },
  {
    icon: Activity,
    title: 'Continuous Vitals Monitoring',
    desc: 'Heart rate, blood oxygen, stress levels, respiratory rate — tracked every second and stored securely in your health timeline.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Health Insights',
    desc: 'Get "Future Health" predictions based on your current trends. Know weeks in advance if your sleep or stress needs attention.',
  },
  {
    icon: Eye,
    title: 'Symptom-to-Condition Mapping',
    desc: 'Log symptoms and our AI cross-references your vitals to suggest possible causes — helping you have smarter doctor visits.',
  },
  {
    icon: BarChart3,
    title: 'Weekly Health Reports',
    desc: 'Every Sunday, receive a beautifully designed PDF health report — progress charts, trend analysis, and personalised action items.',
  },
  {
    icon: Target,
    title: 'Goal-Based Adaptive Tracking',
    desc: 'Set a goal — "Lower blood pressure" or "Improve sleep" — and the AI adjusts what it tracks and alerts you on accordingly.',
  },
];

const metrics = [
  { label: 'Heart Rate', detail: 'Real-time BPM + HRV analysis', icon: '❤️' },
  { label: 'Blood Oxygen (SpO2)', detail: 'Continuous saturation monitoring', icon: '🫁' },
  { label: 'Sleep Quality', detail: 'REM, deep & light sleep stages', icon: '🌙' },
  { label: 'Stress Index', detail: 'Cortisol-proxy via HRV', icon: '🧠' },
  { label: 'Steps & Distance', detail: 'GPS-enhanced activity tracking', icon: '👟' },
  { label: 'Calories Burned', detail: 'AI-calibrated to your metabolism', icon: '🔥' },
  { label: 'Hydration Level', detail: 'Guided reminders and intake log', icon: '💧' },
  { label: 'Nutrition Score', detail: 'Linked to ZioFarm meal logs', icon: '🥗' },
];

export default function AITrackingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero ai-tracking-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZiovateCare — Intelligent Analytics</p>
          <h1 className="product-page-hero-title">
            AI <span className="em">Tracking</span>
          </h1>
          <p className="product-page-hero-desc">
            Next-generation health tracking that doesn't just collect data — it understands it. Our AI turns your daily vitals into a living portrait of your health.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="product-facts-bar">
        {[
          { icon: Brain, label: 'AI Model', value: 'Trained on 10M+ Health Records' },
          { icon: Activity, label: 'Metrics Tracked', value: '15+ Vital Signs' },
          { icon: TrendingUp, label: 'Accuracy', value: '97.4% Prediction Accuracy' },
          { icon: Zap, label: 'Processing', value: 'Real-Time Analysis' },
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

      {/* AI Features */}
      <section className="product-page-section">
        <div className="product-page-inner">
          <p className="section-label">AI Capabilities</p>
          <h2 className="section-title">
            Tracking that <span className="em">thinks</span>
          </h2>
          <p className="section-desc">
            We don't just record numbers — our AI interprets them, connects the dots, and translates complex health data into clear, actionable guidance.
          </p>
          <div className="care-features-grid">
            {trackingFeatures.map((f, i) => {
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

      {/* Metrics tracked */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">What We Track</p>
          <h2 className="section-title">
            Every vital, <span className="em">covered</span>
          </h2>
          <p className="section-desc">
            From heart rate to hydration — our AI tracking covers the full spectrum of your health in one unified dashboard.
          </p>
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <span className="metric-emoji">{m.icon}</span>
                <div>
                  <h4>{m.label}</h4>
                  <p>{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy assurance */}
      <section className="product-page-section">
        <div className="product-page-inner">
          <p className="section-label">Your Privacy</p>
          <h2 className="section-title">
            Your data, your <span className="em">control</span>
          </h2>
          <div className="product-benefits-grid">
            {[
              { title: 'End-to-End Encryption', desc: 'All health data is encrypted at rest and in transit using AES-256 — the same standard used by banks.' },
              { title: 'DPDP Act Compliant', desc: 'Fully compliant with India\'s Digital Personal Data Protection Act. Your data stays in India on Indian servers.' },
              { title: 'No Data Selling', desc: 'We will never sell, share, or monetize your personal health data to any third party — ever.' },
              { title: 'Full Data Portability', desc: 'Export your entire health history as a PDF or JSON at any time. You own your data completely.' },
              { title: 'Anonymised AI Training', desc: 'If you opt in to help improve our AI, your data is completely anonymised before being used in any model training.' },
              { title: 'Delete Anytime', desc: 'One tap to permanently delete your entire account and all associated health data from our servers.' },
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
        <h2>Experience the future of <span className="em">health tracking</span></h2>
        <p>Sign up for early access and be among the first to experience ZiovateCare AI.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Get Early Access
        </Link>
      </section>
    </main>
  );
}
