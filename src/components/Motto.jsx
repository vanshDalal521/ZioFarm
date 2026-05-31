import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Motto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.motto-text', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 40, rotationX: 15, transformOrigin: 'center top', duration: 1.2, ease: 'power3.out',
      });
      gsap.from('.motto-cite', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.8, ease: 'power2.out', delay: 0.3,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="motto-section" ref={sectionRef}>
      <blockquote className="motto-text">
        &ldquo;Premium organic products at affordable rates with the authentic{' '}
        <span>flavour of Bengal</span>.&rdquo;
      </blockquote>
      <cite className="motto-cite">— ZioFarm Promise</cite>
    </section>
  );
}
