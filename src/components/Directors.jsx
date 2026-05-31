import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Link as LinkIcon, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const directors = [
  {
    name: 'Aarav Banerjee',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader with 15+ years in sustainable agriculture and organic supply chains across Eastern India.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000',
  },
  {
    name: 'Ishita Sen',
    role: 'COO & Co-Founder',
    bio: 'Operational expert ensuring our farm-to-table process maintains the highest organic standards from Bengal to your home.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000',
  },
  {
    name: 'Rohan Chatterjee',
    role: 'CTO (Ziovate Care)',
    bio: 'Tech innovator driving Ziovate Care — an AI-powered health assistant revolutionizing personal wellness.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000',
  },
];

export default function Directors() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.director-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50, rotationX: 20, transformOrigin: 'center bottom', duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="directors-section" ref={sectionRef}>
      <p className="section-label">Leadership</p>
      <h2 className="section-title" style={{ maxWidth: 500 }}>
        Meet the{' '}
        <span style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>visionaries</span>
      </h2>
      <p className="section-desc" style={{ maxWidth: 460 }}>
        The passionate team behind ZioFarm, bringing premium organic products with the true flavour of Bengal.
      </p>

      <div className="directors-grid">
        {directors.map((d, i) => (
          <div key={i} className="director-card">
            <div className="card-img">
              <img src={d.image} alt={d.name} />
            </div>
            <div className="card-body">
              <h3>{d.name}</h3>
              <p className="role">{d.role}</p>
              <p className="bio">{d.bio}</p>
            </div>
            <div className="social">
              <a href="#"><LinkIcon size={16} /></a>
              <a href="#"><Mail size={16} /></a>
              <a href="#"><Globe size={16} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
