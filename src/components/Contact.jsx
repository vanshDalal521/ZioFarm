import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, Link, Globe, Share2, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.c-label', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.5, ease: 'power2.out' });
      gsap.from('.c-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 40, rotationX: 15, transformOrigin: 'center top', duration: 0.8, ease: 'power3.out' });
      gsap.from('.c-desc', { scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }, y: 20, rotationX: 10, transformOrigin: 'center top', duration: 0.6, ease: 'power2.out' });
      gsap.from('.c-anim', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 30, rotationX: 15, transformOrigin: 'center bottom', duration: 0.6, stagger: 0.08, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <p className="section-label c-label">Get in Touch</p>
      <h2 className="section-title c-title" style={{ maxWidth: 500 }}>
        Let's grow{' '}
        <span className="em">together</span>
      </h2>
      <p className="section-desc c-desc" style={{ maxWidth: 460 }}>
        Ready to experience premium organic products from Bengal's finest farms? Reach out and let's build a healthier, greener future together.
      </p>

      <div className="contact-grid">
        <form className="contact-form c-anim" onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="row">
            <input type="tel" name="phone" placeholder="Phone Number" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea name="message" placeholder="Tell us how we can help..." required />
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {submitted ? 'Thank You!' : 'Send Message'}
            {submitted ? null : <Send size={16} />}
          </button>
        </form>

        <div className="contact-info">
          <div className="item c-anim">
            <div className="icon"><MapPin size={18} /></div>
            <div className="text">
              <h4>Visit Our Farm</h4>
              <p>ZioFarm Headquarters, Bengal Agri-Tech Hub, Salt Lake, Kolkata, West Bengal 700091</p>
            </div>
          </div>
          <div className="item c-anim">
            <div className="icon"><Phone size={18} /></div>
            <div className="text">
              <h4>Call the Farm</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="item c-anim">
            <div className="icon"><Mail size={18} /></div>
            <div className="text">
              <h4>Email Us</h4>
              <p>hello@ziofarm.in</p>
            </div>
          </div>
          <div className="item c-anim">
            <div className="icon"><Clock size={18} /></div>
            <div className="text">
              <h4>Farm Hours</h4>
              <p>Mon - Saturday: 6:00 AM - 7:00 PM<br />Sunday: Closed (family day)</p>
            </div>
          </div>

          <div className="contact-social">
            <a href="#" aria-label="LinkedIn"><Link size={18} /></a>
            <a href="#" aria-label="Instagram"><Globe size={18} /></a>
            <a href="#" aria-label="Twitter"><Share2 size={18} /></a>
            <a href="#" aria-label="YouTube"><Video size={18} /></a>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235574.8890121707!2d88.08770955202221!3d22.53578094893214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882dbdac27b59%3A0x480e6cf91afb8bb9!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ZioFarm Location"
        />
      </div>
    </section>
  );
}
