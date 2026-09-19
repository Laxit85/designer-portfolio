import { useState } from "react";
import { Link } from "react-router-dom";
import { MiniFooter } from "../components/Footer";

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      q: "What is your typical turnaround time for ad creatives?",
      a: "Single ad creatives or thumbnails take 24–48 hours. Campaign packs (5-10 creatives) take 3–5 business days.",
    },
    {
      q: "Do you provide source files and high-res exports?",
      a: "Yes! You receive print-ready PDFs, high-res JPEGs/PNGs, vector assets, and source PSD/AI files upon request.",
    },
    {
      q: "How does 3D furniture & product modeling work?",
      a: "You provide basic sketches, dimensions, or references. I build the 3D geometry, apply textures, setup lighting, and generate studio renders + CAD drawings.",
    },
    {
      q: "Can you design monthly social media & reel thumbnail retainers?",
      a: "Absolutely! I partner with creators, EdTech brands, and agencies for ongoing monthly content design.",
    },
  ];

  return (
    <main>
      <div className="noise"></div>

      <section className="page-hero section">
        <p className="eyebrow">Design Services</p>
        <h1>High-Impact Creative Solutions by Sachin</h1>
        <p className="page-intro">
          From performance ad creatives to luxury 3D furniture renders and viral video thumbnails.
        </p>
      </section>

      <section className="pricing-section section">
        <div className="pricing-card">
          <span>Performance</span>
          <h2>Ad Creatives & Social Pack</h2>
          <p>High-converting paid ad banners & social campaigns.</p>

          <ul>
            <li>High-CTR ad banners</li>
            <li>Social media posts & carousels</li>
            <li>Infographics & process breakdowns</li>
            <li>A/B testing visual variants</li>
          </ul>

          <Link to="/contact" className="btn magnetic">
            Get Started <span>→</span>
          </Link>
        </div>

        <div className="pricing-card featured-pricing">
          <span>Featured</span>
          <h2>3D Furniture & Product Design</h2>
          <p>Industrial product modeling & CAD blueprints.</p>

          <ul>
            <li>3D furniture & product renders</li>
            <li>Orthographic CAD drawings</li>
            <li>Lifestyle interior context scenes</li>
            <li>High-resolution texture mapping</li>
          </ul>

          <Link to="/contact" className="btn magnetic">
            Get Started <span>→</span>
          </Link>
        </div>

        <div className="pricing-card">
          <span>Viral Growth</span>
          <h2>Thumbnails & Reel Covers</h2>
          <p>Maximize clicks on YouTube & Instagram/Shorts.</p>

          <ul>
            <li>High-contrast YouTube thumbnails</li>
            <li>9:16 vertical reel covers</li>
            <li>Curiosity-driven typography</li>
            <li>Expressive portrait cutouts</li>
          </ul>

          <Link to="/contact" className="btn magnetic">
            Get Started <span>→</span>
          </Link>
        </div>
      </section>

      <section className="faq-section section">
        <div className="section-header">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeFaq === idx ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(idx)}
                type="button"
              >
                {faq.q}
                <span className="faq-icon">{activeFaq === idx ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MiniFooter linkTo="/contact" linkText="Work with Sachin" />
    </main>
  );
}
