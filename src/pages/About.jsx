import { MiniFooter } from "../components/Footer";
import { designerInfo } from "../data/creativesData";

export default function About() {
  return (
    <main>
      <div className="noise"></div>

      <section className="page-hero section">
        <p className="eyebrow">About The Designer</p>
        <h1>Sachin — Graphic Designer & Visual Artist</h1>
        <p className="page-intro">
          Building high-conversion Ad Creatives, Social Media Campaigns, 3D Furniture & Product Renders, and High-CTR Video Thumbnails.
        </p>
      </section>

      {/* Bio Section with Sticky Scroll Image Tracking */}
      <section className="bio-section section">
        <div className="bio-image">
          <img src={designerInfo.avatar} alt="Sachin Graphic Designer" className="bio-avatar-img" />
          <div className="bio-badge">
            <span>SACHIN / सचिन</span>
          </div>
        </div>

        <div className="bio-content">
          <h2>Design with intention. Visuals with impact.</h2>
          <p>
            I’m an independent Graphic Designer & Visual Artist with 5+ years of experience transforming brand stories into high-performing visual assets. My work spans across high-impact ad creatives for EdTech leaders (Law Prep Tutorial), intricate 3D furniture & product modeling (Bhavya Living), apparel identity (Sakshi Taste of Ethnicity), and viral YouTube thumbnail & Reel cover designs.
          </p>

          <p>
            Every creative asset is engineered around clear visual hierarchy, bold contrast, strategic color palette, and stopping power to ensure high click-through rates and unforgettable brand perception.
          </p>

          <p>
            Whether launching a multi-channel paid ad campaign, engineering 3D CAD projections for luxury furniture, or designing scroll-stopping social reels, I bridge the gap between creative artistry and business growth.
          </p>

          <p>
            My process is collaborative, fast, and focused on tangible performance — delivering print-ready vectors, 4K renders, and source files ready for instant deployment.
          </p>
        </div>
      </section>

      <section className="skills-section section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Core Expertise</p>
            <h2>Specialized Capabilities</h2>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Ad Creatives & Paid Media</h3>
            <p>High-converting campaign banners, lead gen graphics, batch announcements, and performance marketing visuals.</p>
          </div>

          <div className="skill-card">
            <h3>Social Media Campaigns</h3>
            <p>Carousel graphics, breaking news posts, festival greetings, and step-by-step process infographics.</p>
          </div>

          <div className="skill-card">
            <h3>3D Furniture & Product Design</h3>
            <p>CAD technical projections, laser-cut woodworking, 3D product renders, and architectural lifestyle scenes.</p>
          </div>

          <div className="skill-card">
            <h3>High-CTR Thumbnails & Reels</h3>
            <p>YouTube thumbnails with strong contrast & curiosity hooks, plus 9:16 portrait reel covers for Instagram/Shorts.</p>
          </div>
        </div>
      </section>

      <section className="timeline section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Career Timeline</p>
            <h2>Experience & Milestones</h2>
          </div>
        </div>

        <div className="timeline-row">
          <span>2020</span>
          <h3>Started as a Brand & Visual Content Designer.</h3>
        </div>

        <div className="timeline-row">
          <span>2022</span>
          <h3>Lead Visual Designer for EdTech & Law Prep Tutorial marketing campaigns.</h3>
        </div>

        <div className="timeline-row">
          <span>2024</span>
          <h3>Expanded into 3D Furniture Design, CAD Technical projections & Apparel Identity.</h3>
        </div>

        <div className="timeline-row">
          <span>2026</span>
          <h3>Delivered 120+ high-performing creative projects with proven CTR boosts.</h3>
        </div>
      </section>

      <MiniFooter linkTo="/contact" linkText="Work with Sachin" />
    </main>
  );
}
