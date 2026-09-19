import { useState } from "react";
import { MiniFooter } from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Ad Creatives",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "Ad Creatives",
        details: "",
      });
    }, 2800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <div className="noise"></div>

      <section className="contact-page section">
        <div className="contact-page-left reveal-up">
          <p className="eyebrow">Get In Touch</p>
          <h1>Let’s build visual creatives that command attention.</h1>
          <p className="contact-intro">
            Have an upcoming ad campaign, social media launch, product 3D modeling requirement, or YouTube video strategy? Send a message and let's bring it to life.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:sachin.designer@gmail.com">sachin.designer@gmail.com</a>
            </div>

            <div className="contact-item">
              <span>Social Portfolios</span>
              <div className="social-links-row">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-up" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. rahul@brand.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Project Category</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option>Ad Creatives & Paid Campaign</option>
              <option>Social Media Posts & Infographics</option>
              <option>3D Furniture & Product Renders</option>
              <option>Apparel & Outfit Styling</option>
              <option>YouTube Thumbnails & Reel Covers</option>
              <option>Full Brand Identity System</option>
            </select>
          </div>

          <div className="input-group">
            <label>Project Details / Requirements</label>
            <textarea
              name="details"
              rows={5}
              placeholder="Describe your goals, timeline, and deliverables required..."
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn magnetic" disabled={submitted}>
            {submitted ? (
              <>
                Message Sent Successfully <span>✓</span>
              </>
            ) : (
              <>
                Send Project Inquiry <span>→</span>
              </>
            )}
          </button>
        </form>
      </section>

      <MiniFooter linkTo="/work" linkText="Explore All Work" />
    </main>
  );
}
