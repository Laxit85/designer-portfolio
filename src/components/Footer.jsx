import { Link } from "react-router-dom";

export function MainFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>SACHIN <span>/ सचिन</span></h3>
          <p>GRAPHIC DESIGNER & VISUAL ARTIST</p>
        </div>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="magnetic">
            Instagram
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer" className="magnetic">
            Behance
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="magnetic">
            Dribbble
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="magnetic">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sachin Graphic Designer. All rights reserved by{" "}
          <a
            href="https://morphnex.in"
            target="_blank"
            rel="noreferrer"
            className="morphnex-link magnetic"
          >
            Morphnex (morphnex.in)
          </a>
        </p>
      </div>
    </footer>
  );
}

export function MiniFooter({ linkTo = "/contact", linkText = "Start a Project" }) {
  return (
    <footer className="mini-footer">
      <p>
        © {new Date().getFullYear()} Sachin Portfolio • All rights reserved by{" "}
        <a
          href="https://morphnex.in"
          target="_blank"
          rel="noreferrer"
          className="morphnex-link"
        >
          Morphnex (morphnex.in)
        </a>
      </p>
      <Link to={linkTo} className="mini-footer-btn">{linkText} →</Link>
    </footer>
  );
}
