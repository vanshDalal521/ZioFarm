import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/logo.jpeg" alt="Ziovate" className="footer-logo" />
          <div>Zio<span>vate</span></div>
          <p>Premium health and organic products at affordable rates. From our family farms to your table, reimagined.</p>
        </div>

        <div className="footer-col">
          <h4>ZioFarm</h4>
          <Link to="/poultry">Poultry &amp; Eggs</Link>
          <Link to="/dairy">Dairy Products</Link>
          <Link to="/organic">Organic Foods</Link>
        </div>

        <div className="footer-col">
          <h4>ZiovateCare</h4>
          <Link to="/health-app">Health App</Link>
          <Link to="/wellness-plans">Wellness Plans</Link>
          <Link to="/ai-tracking">AI Tracking</Link>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get health updates and organic tips delivered to your inbox.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" />
            <button><ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ziovate. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
