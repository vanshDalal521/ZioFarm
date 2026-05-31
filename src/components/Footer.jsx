import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>
            <img src="/logo.jpeg" alt="" className="footer-logo" />
            Zio<span>Farm</span>
          </h3>
          <p>Premium organic products at affordable rates with the authentic flavour of Bengal. From our family farms to your table.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#poultry">Poultry</a>
          <a href="#dairy">Dairy</a>
          <a href="#organic">Organic</a>
          <a href="#ziovate">Ziovate Care</a>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <a href="#poultry">Fresh Eggs & Chicken</a>
          <a href="#dairy">Milk & Paneer</a>
          <a href="#organic">Organic Vegetables</a>
          <a href="#organic">Heritage Grains</a>
          <a href="#ziovate">Health App</a>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get farm-fresh updates and organic tips delivered to your inbox.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" />
            <button><ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ZioFarm. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
