import { Link } from "react-router-dom";
import { MiniFooter } from "../components/Footer";
const adClatTeam = "/sachin_work/10.jpg";
const productKogestFull = "/sachin_work/39.jpg";
const productVistaraFull = "/sachin_work/40.jpg";
const outfitGoldSakshi = "/sachin_work/41.jpg";

export default function CaseStudy() {
  return (
    <main>
      <div className="noise"></div>

      <section className="case-hero section">
        <p className="eyebrow reveal-up">Featured Case Study</p>
        <h1 className="reveal-up">Law Prep Tutorial — Visual Ad Campaign</h1>
        <p className="page-intro reveal-up">
          A high-converting ad creative campaign and social media visual system designed to drive student enrollments for CLAT & IPMAT 2027.
        </p>
      </section>

      <section className="case-banner-image reveal-scale">
        <img src={adClatTeam} alt="Law Prep Tutorial Campaign" className="case-banner-img" />
      </section>

      <section className="case-info section">
        <div className="case-meta reveal-up">
          <div>
            <span>Client</span>
            <p>Law Prep Tutorial (LPT)</p>
          </div>

          <div>
            <span>Category</span>
            <p>Ad Creatives & Social Campaign</p>
          </div>

          <div>
            <span>Impact</span>
            <p>3.5x CTR Increase & High Lead Conversion</p>
          </div>
        </div>

        <div className="case-text reveal-up">
          <h2>The Challenge</h2>
          <p>
            Law Prep Tutorial needed a refreshed, high-impact ad graphic direction for their upcoming CLAT 2027 and IPMAT 2027 batch launches. The creatives needed to communicate trust, faculty authority, batch urgency, and clear call-to-actions while standing out in competitive social feeds.
          </p>
        </div>
      </section>

      <section className="case-gallery-images section">
        <div className="case-grid">
          <div className="case-shot-card reveal-up">
            <img src={productKogestFull} alt="Product Design - Kogest Table" />
            <span>Product Design — Kogest Side Table</span>
          </div>

          <div className="case-shot-card reveal-up">
            <img src={productVistaraFull} alt="Product Design — Vistara Sideboard" />
            <span>Furniture CAD — Vistara Sideboard</span>
          </div>

          <div className="case-shot-card reveal-up">
            <img src={outfitGoldSakshi} alt="Apparel Design — Sakshi Ethnic" />
            <span>Apparel Design — Sakshi Taste of Ethnicity</span>
          </div>
        </div>
      </section>

      <section className="case-info section">
        <div className="case-text reveal-up">
          <h2>The Solution & Outcome</h2>
          <p>
            By combining high-contrast typography, strategic brand color placement (crimson red, gold, deep obsidian), structured visual hierarchy, and expressive educator portrait cutouts, the campaign generated record-breaking demo class registrations and set a new standard for EdTech ad creative performance.
          </p>

          <Link to="/work" className="btn magnetic" style={{ marginTop: "24px" }}>
            View All Creatives
            <span>→</span>
          </Link>
        </div>
      </section>

      <MiniFooter linkTo="/contact" linkText="Work with Sachin" />
    </main>
  );
}
