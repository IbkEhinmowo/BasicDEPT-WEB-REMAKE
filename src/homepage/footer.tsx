import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">BASIC/DEPT®</h2>
          <p className="footer-tagline">
            Building products, services, and eCommerce experiences that turn
            cultural values into company value.
          </p>
        </div>

        <div className="footer-section">
          <h3>NAVIGATE</h3>
          <ul className="footer-links">
            <li>
              <a href="#work">WORK</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#new">NEW</a>
            </li>
            <li>
              <a href="#thinking">THINKING</a>
            </li>
            <li>
              <a href="#careers">CAREERS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONNECT</h3>
          <ul className="footer-links">
            <li>
              <a href="#instagram">INSTAGRAM</a>
            </li>
            <li>
              <a href="#twitter">TWITTER</a>
            </li>
            <li>
              <a href="#linkedin">LINKEDIN</a>
            </li>
            <li>
              <a href="#facebook">FACEBOOK</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p className="newsletter-text">
            Stay up to date with our latest work and thinking.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 BASIC/DEPT®. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
