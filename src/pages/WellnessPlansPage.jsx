import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Leaf, Moon, Sun, Dumbbell, Droplets, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    icon: Heart,
    name: 'Heart Health Plan',
    tag: 'Most Popular',
    desc: 'A 12-week science-backed program to strengthen your cardiovascular system through diet, movement, and mindfulness.',
    includes: ['Personalised meal plan', 'Daily cardio routines', 'Weekly heart rate analysis', 'Stress management techniques'],
    color: '#ef4444',
  },
  {
    icon: Leaf,
    name: 'Organic Wellness Plan',
    tag: 'ZioFarm Linked',
    desc: 'Combines ZioFarm\'s organic produce with ZiovateCare\'s nutrition AI for a complete farm-to-wellness experience.',
    includes: ['Weekly ZioFarm produce box', 'AI-crafted meal plans', 'Nutrition tracking', 'Gut health monitoring'],
    color: '#059669',
  },
  {
    icon: Dumbbell,
    name: 'Active Fitness Plan',
    tag: 'Trending',
    desc: 'A dynamic 8-week plan that builds strength, improves endurance, and tracks every workout with AI-powered coaching.',
    includes: ['Custom workout schedules', 'Video exercise guidance', 'Progress benchmarking', 'Recovery optimization'],
    color: '#f59e0b',
  },
  {
    icon: Moon,
    name: 'Sleep Restoration Plan',
    tag: 'New',
    desc: 'Scientifically designed to fix your sleep in 4 weeks. Analyse sleep stages and create the perfect bedtime routine.',
    includes: ['Sleep stage analysis', 'Bedtime routine builder', 'Blue light & screen tips', 'Relaxation soundscapes'],
    color: '#8b5cf6',
  },
  {
    icon: Sun,
    name: 'Mental Wellness Plan',
    tag: 'Popular',
    desc: 'Combat stress, anxiety, and burnout with a holistic 6-week programme rooted in mindfulness and cognitive wellness.',
    includes: ['Guided meditations', 'Mood tracking journal', 'Breathing exercises', 'Weekly therapist tips'],
    color: '#0ea5e9',
  },
  {
    icon: Droplets,
    name: 'Detox & Reset Plan',
    tag: 'Seasonal',
    desc: 'A 21-day gentle detox using ZioFarm organic foods and targeted nutritional protocols to reset your gut and energy.',
    includes: ['21-day detox protocol', 'Daily hydration targets', 'Herbal supplement guide', 'ZioFarm detox grocery list'],
    color: '#10b981',
  },
];

export default function WellnessPlansPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Ziovate';
  }, []);

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-page-hero wellness-hero">
        <div className="product-page-hero-overlay" />
        <div className="product-page-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>ZiovateCare — Personalised Wellness</p>
          <h1 className="product-page-hero-title">
            Wellness <span className="em">Plans</span>
          </h1>
          <p className="product-page-hero-desc">
            Science-backed, AI-personalized wellness programs designed around your body, your goals, and your lifestyle. From heart health to deep sleep — we have a plan for you.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="product-facts-bar">
        {[
          { icon: Heart, label: 'Active Plans', value: '6 Specialised Programs' },
          { icon: CheckCircle2, label: 'Success Rate', value: '94% Complete Goals' },
          { icon: Leaf, label: 'ZioFarm Link', value: 'Farm-to-Wellness' },
          { icon: Sun, label: 'Duration', value: '3 to 12 Weeks' },
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

      {/* Plans */}
      <section className="product-page-section">
        <div className="product-page-inner">
          <p className="section-label">Our Programs</p>
          <h2 className="section-title">
            Choose your <span className="em">wellness journey</span>
          </h2>
          <p className="section-desc">
            Each plan is built by certified nutritionists, fitness coaches, and our AI engine — then personalised to your unique health profile.
          </p>

          <div className="wellness-plans-grid">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <div key={i} className="wellness-plan-card">
                  <div className="wellness-plan-header" style={{ borderColor: plan.color }}>
                    <div className="wellness-plan-icon" style={{ background: plan.color + '20', color: plan.color }}>
                      <Icon size={24} />
                    </div>
                    <span className="wellness-plan-tag" style={{ background: plan.color + '15', color: plan.color }}>
                      {plan.tag}
                    </span>
                  </div>
                  <h3>{plan.name}</h3>
                  <p>{plan.desc}</p>
                  <ul className="wellness-plan-includes">
                    {plan.includes.map((item, j) => (
                      <li key={j}>
                        <CheckCircle2 size={15} style={{ color: plan.color }} /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/#contact" className="btn btn-outline wellness-plan-btn" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
                    Get Early Access
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="product-page-section section-beige">
        <div className="product-page-inner">
          <p className="section-label">The Process</p>
          <h2 className="section-title">How your <span className="em">plan is built</span></h2>
          <div className="how-it-works-steps">
            {[
              { step: '01', title: 'Health Profile', desc: 'Complete a detailed health assessment — age, goals, history, lifestyle, and diet preferences.' },
              { step: '02', title: 'AI Analysis', desc: 'Our AI engine cross-references 500+ health parameters to build a programme uniquely suited to your body.' },
              { step: '03', title: 'Plan Delivery', desc: 'Receive your full plan in the app — daily tasks, meals, exercises, and check-ins — all perfectly scheduled.' },
              { step: '04', title: 'Continuous Tracking', desc: 'Your app tracks progress daily. The plan adapts in real time based on your results and how your body responds.' },
            ].map((s, i) => (
              <div key={i} className="how-it-works-step">
                <div className="step-number">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-page-cta">
        <h2>Start your <span className="em">wellness journey today</span></h2>
        <p>Join the waitlist and get early access to all 6 wellness plans when we launch.</p>
        <Link to="/#contact" className="btn btn-primary btn-lg" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}
