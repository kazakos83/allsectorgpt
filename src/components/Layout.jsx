import { Link } from "react-router-dom";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">Allsector</span>
            <span className="brand-tag">Total Maintenance. One Partner. Nationwide.</span>
          </Link>

          <nav className="nav">
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/contact" className="nav-cta">Request a Quote</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>Allsector</strong>
            <div className="muted">Your National Partner in Property Performance</div>
          </div>

          <div className="footer-links">
            <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
            <a href="/admin" target="_blank" rel="noreferrer">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
