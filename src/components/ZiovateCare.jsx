import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Activity, Brain, Shield, Smartphone, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Heart, title: 'Heart Rate Monitor', desc: 'Real-time tracking with AI-powered alerts' },
  { icon: Activity, title: 'Wellness Score', desc: 'Daily activity, sleep & nutrition insights' },
  { icon: Brain, title: 'Health AI Assistant', desc: 'Smart recommendations tailored to you' },
  { icon: Shield, title: 'Medical Connect', desc: 'Instant access to verified healthcare' },
];

export default function ZiovateCare() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.z-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.z-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.z-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out', stagger: 0.1 });
      gsap.from('.z-feature', { scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }, y: 30, rotationX: 15, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.1, ease: 'power2.out' });
      gsap.from('.z-phone', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, x: 40, rotationY: 8, transformOrigin: 'right center', duration: 1, ease: 'power3.out', scale: 0.95 });
      gsap.from('.z-buttons', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ziovate" className="section ziovate-section" ref={sectionRef}>
      <div className="ziovate-grid">
        <div>
          <p className="section-label z-label">Vertical 04 — Ziovate Care</p>
          <h2 className="section-title z-title">
            Your <span className="em">Ultimate Health</span> Assistant
          </h2>
          <p className="z-desc" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '0.75rem', maxWidth: 480 }}>
            Smart healthcare meets organic wellness.
          </p>
          <p className="z-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: 460, lineHeight: 1.7, marginBottom: '2rem' }}>
            AI-powered healthcare companion that monitors your vitals, tracks your wellness journey, and connects you with medical support — all from your palm.
          </p>

          <div className="ziovate-features">
            {features.map((f, i) => (
              <div key={i} className="ziovate-feature z-feature">
                <div className="icon"><f.icon size={18} /></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="z-buttons" style={{ marginTop: '4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-terracotta" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Smartphone size={16} /> Coming Soon
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Bell size={16} /> Get Early Access
            </a>
          </div>
        </div>

        <div className="z-phone" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="phone">
            <h4>Good Morning!</h4>
            <p className="sub">Your health snapshot for today</p>

            <div className="metric">
              <div className="ml">Heart Rate</div>
              <div className="mv">72 <span>BPM</span></div>
              <div className="bar"><div className="fill" style={{ width: '72%' }} /></div>
            </div>

            <div className="metric">
              <div className="ml">Daily Steps</div>
              <div className="mv">6,842 <span>/ 10K</span></div>
              <div className="bar"><div className="fill" style={{ width: '68%' }} /></div>
            </div>

            <div className="metric">
              <div className="ml">Sleep Quality</div>
              <div className="mv">85 <span>/ 100</span></div>
              <div className="bar"><div className="fill" style={{ width: '85%' }} /></div>
            </div>

            <div className="metric">
              <div className="ml">ZioFarm Nutrition Plan</div>
              <p style={{ fontSize: '0.75rem', margin: 0 }}>Today: Organic sprouts & fresh paneer</p>
            </div>

            <div className="metric">
              <div className="ml">Next Checkup</div>
              <p style={{ fontSize: '0.75rem', margin: 0 }}>Dr. Sharma — Tomorrow, 10:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
