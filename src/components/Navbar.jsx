import { useState, useEffect, useRef } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Poultry', href: '#poultry' },
  { label: 'Dairy', href: '#dairy' },
  { label: 'Organic', href: '#organic' },
  { label: 'Ziovate', href: '#ziovate' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastScroll.current && y > 300);
      lastScroll.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' glass-nav' : ''}${hidden ? ' hidden' : ''}`}>
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/logo.jpeg" alt="ZioFarm" className="nav-logo" />
          Zio<span>Farm</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Get in Touch</a>
        </div>

        <button className={`nav-mobile${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Get in Touch</a>
      </div>
    </>
  );
}
