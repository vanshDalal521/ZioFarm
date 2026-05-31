import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 50, suffix: '+', label: 'Partner Farms' },
  { number: 200, suffix: '+', label: 'Products Delivered' },
  { number: 10000, suffix: '+', label: 'Happy Customers' },
  { number: 5000, suffix: '+', label: 'Health App Users' },
];

function AnimatedCounter({ target, suffix }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      scrollTrigger: { trigger: el.parentElement, start: 'top 85%' },
      duration: 2,
      ease: 'power3.out',
      onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString() + suffix; },
    });
  }, [target, suffix]);

  return <div className="num" ref={numRef}>0{suffix}</div>;
}

export default function Statistics() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40, rotationX: 15, transformOrigin: 'center bottom', duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <AnimatedCounter target={s.number} suffix={s.suffix} />
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
