import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MainFooter } from "../components/Footer";
import LightboxModal from "../components/LightboxModal";
import { designerInfo, categories, allCreatives } from "../data/creativesData";

export default function Home() {
  // --- Category Filter State ---
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItem, setActiveItem] = useState(null);
  const [activeList, setActiveList] = useState(allCreatives);

  // Filtered Creatives
  const filteredCreatives =
    activeCategory === "all"
      ? allCreatives
      : allCreatives.filter((item) => item.category === activeCategory);

  // Lightbox handlers
  const handleOpenLightbox = (item, list = filteredCreatives) => {
    setActiveList(list);
    setActiveItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
  };

  const handleNextLightbox = () => {
    if (!activeItem || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((c) => c.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % activeList.length;
    setActiveItem(activeList[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!activeItem || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((c) => c.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    setActiveItem(activeList[prevIndex]);
  };

  // --- Work Slider State ---
  const featuredSlides = allCreatives.filter((c) =>
    ["creative-9", "creative-10", "creative-12", "creative-39", "creative-61"].includes(c.id)
  );

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % featuredSlides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % featuredSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [featuredSlides.length]);

  // --- Stats Counter ---
  const [counts, setCounts] = useState({ projects: 0, clients: 0, exp: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const animateCounter = (targetVal, key) => {
              let current = 0;
              const speed = 30;
              const increment = Math.max(1, Math.ceil(targetVal / 50));

              const timer = setInterval(() => {
                current += increment;
                if (current >= targetVal) {
                  setCounts((prev) => ({ ...prev, [key]: targetVal }));
                  clearInterval(timer);
                } else {
                  setCounts((prev) => ({ ...prev, [key]: current }));
                }
              }, speed);
            };

            animateCounter(120, "projects");
            animateCounter(45, "clients");
            animateCounter(5, "exp");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <main>
      {/* Background Texture */}
      <div className="noise"></div>

      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>{designerInfo.title}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-name">{designerInfo.name}</span>
            <span className="hero-line hero-hindi">{designerInfo.hindiName}</span>
            <span className="hero-line hero-tagline red-text">Visual Creatives</span>
          </h1>

          <div className="hero-bottom">
            <p>{designerInfo.bio}</p>

            <div className="hero-cta-group">
              <a href="#portfolio" className="btn magnetic">
                Explore Creatives
                <span>↓</span>
              </a>
              <Link to="/work" className="btn btn-outline magnetic">
                View All Work
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-card">
            <div className="avatar-wrapper">
              <img src={designerInfo.avatar} alt="Sachin Graphic Designer" className="avatar-img" />
            </div>
            <div className="avatar-details">
              <h3>SACHIN</h3>
              <p>Senior Graphic Designer & Visual Artist</p>
              <div className="avatar-tags">
                <span>Ad Creatives</span>
                <span>Product Renders</span>
                <span>Thumbnails</span>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>AD CREATIVES</span>
            <span>•</span>
            <span>SOCIAL MEDIA POSTS</span>
            <span>•</span>
            <span>PRODUCT DESIGNS</span>
            <span>•</span>
            <span>YOUTUBE THUMBNAILS</span>
            <span>•</span>
            <span>REEL COVERS</span>
            <span>•</span>
            <span>BRAND IDENTITY</span>
            <span>•</span>
            <span>AD CREATIVES</span>
            <span>•</span>
            <span>SOCIAL MEDIA POSTS</span>
            <span>•</span>
            <span>PRODUCT DESIGNS</span>
          </div>
        </div>
      </section>

      {/* Featured Works Showcase Slider */}
      <section className="work section" id="featured">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured Highlights</p>
            <h2>Design that demands attention.</h2>
          </div>
          <p className="section-subtitle">
            A quick glimpse at top converting ads, product renders, and thumbnail graphics built for brands.
          </p>
        </div>

        <div className="slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {featuredSlides.map((slide, idx) => (
              <article key={idx} className={`slide ${idx === slideIndex ? "active" : ""}`}>
                <div
                  className="slide-img-wrapper"
                  onClick={() => handleOpenLightbox(slide, featuredSlides)}
                >
                  <img src={slide.image} alt={slide.title} className="slide-real-img" />
                  <div className="slide-hover-overlay">
                    <span>Click to Zoom 🔍</span>
                  </div>
                </div>

                <div className="slide-content">
                  <div>
                    <span className="slide-category-badge">{slide.categoryLabel}</span>
                    <h3>{slide.title}</h3>
                    {slide.client && <p className="slide-client">Client: {slide.client}</p>}
                    <p>{slide.desc}</p>
                  </div>

                  <button
                    className="btn magnetic"
                    style={{ marginTop: "24px", width: "fit-content" }}
                    onClick={() => handleOpenLightbox(slide, featuredSlides)}
                  >
                    View Project Details <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev magnetic" onClick={prevSlide}>
              Prev
            </button>
            <div className="slider-count">
              <span className="current-slide">{String(slideIndex + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(featuredSlides.length).padStart(2, "0")}</span>
            </div>
            <button className="slider-btn next magnetic" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid with Filter Pills (ALL CREATIVES FROM PDF) */}
      <section className="portfolio-section section" id="portfolio">
        <div className="section-header">
          <div>
            <p className="eyebrow">Complete PDF Portfolio</p>
            <h2>All Portfolio Creatives</h2>
          </div>
          <p className="section-subtitle">
            Browse all ad graphics, social media posts, product/furniture designs, thumbnails, and reel covers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {cat.id === "all"
                ? ` (${allCreatives.length})`
                : ` (${allCreatives.filter((c) => c.category === cat.id).length})`}
            </button>
          ))}
        </div>

        {/* Creatives Grid - Guaranteed Visible & Instant Render */}
        <div className="creatives-grid">
          {filteredCreatives.map((item, index) => (
            <div
              key={item.id}
              className={`creative-card ${item.fullWidth ? "full-width-card" : ""} ${
                item.category === "reel_covers" ? "reel-card" : ""
              }`}
              onClick={() => handleOpenLightbox(item, filteredCreatives)}
            >
              <div className="creative-img-box">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="creative-card-overlay">
                  <span className="zoom-icon">🔎 Zoom View</span>
                </div>
              </div>

              <div className="creative-card-info">
                <div className="card-top-meta">
                  <span className="cat-pill">{item.categoryLabel}</span>
                  {item.client && <span className="client-pill">{item.client}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.tags && (
                  <div className="card-tags">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx}>#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product & Outfit Designs Showcase (Maroon Theme section from PDF) */}
      <section className="maroon-showcase-section section">
        <div className="section-header light-text">
          <div>
            <p className="eyebrow gold-eyebrow">Product & Apparel Showcase</p>
            <h2>Furniture Renders & Outfit Designs</h2>
          </div>
          <p className="section-subtitle light">
            3D modeling, technical CAD projections, laser-carved cabinetry, and high-end fashion concepts.
          </p>
        </div>

        <div className="maroon-grid">
          <div
            className="maroon-card"
            onClick={() => handleOpenLightbox(allCreatives.find((c) => c.id === "creative-39"), allCreatives)}
          >
            <div className="maroon-img-wrapper">
              <img
                src={allCreatives.find((c) => c.id === "creative-39")?.image}
                alt="Product Design Concept"
              />
            </div>
            <div className="maroon-info">
              <span className="maroon-tag">Furniture Design</span>
              <h3>3D Product & Furniture Render #39</h3>
              <p>Minimalist product model with custom materials & warm studio lighting.</p>
            </div>
          </div>

          <div
            className="maroon-card"
            onClick={() => handleOpenLightbox(allCreatives.find((c) => c.id === "creative-40"), allCreatives)}
          >
            <div className="maroon-img-wrapper">
              <img
                src={allCreatives.find((c) => c.id === "creative-40")?.image}
                alt="3D Furniture Render"
              />
            </div>
            <div className="maroon-info">
              <span className="maroon-tag">Cabinetry / CAD</span>
              <h3>3D Product & Furniture Render #40</h3>
              <p>Precision 3D modeling and elevation renderings for custom woodwork.</p>
            </div>
          </div>

          <div
            className="maroon-card"
            onClick={() => handleOpenLightbox(allCreatives.find((c) => c.id === "creative-41"), allCreatives)}
          >
            <div className="maroon-img-wrapper">
              <img
                src={allCreatives.find((c) => c.id === "creative-41")?.image}
                alt="3D Product Design"
              />
            </div>
            <div className="maroon-info">
              <span className="maroon-tag">Heritage Furniture</span>
              <h3>3D Product & Furniture Render #41</h3>
              <p>Teak wood finish settee & furniture modeling with clean technical setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Sachin */}
      <section className="about section" id="about">
        <div className="about-left">
          <p className="eyebrow">About Designer</p>
          <h2>Crafting visual identities, ads, and product concepts that convert.</h2>
        </div>

        <div className="about-right">
          <p>
            With years of experience designing for EdTech leaders like Law Prep Tutorial, fashion brands like Sakshi, and furniture manufacturers like Bhavya Living, I bring visual precision and strategic impact to every creative asset.
          </p>

          <div className="stats" ref={statsRef}>
            <div>
              <h3>{counts.projects > 0 ? `${counts.projects}+` : "0"}</h3>
              <span>Projects Completed</span>
            </div>

            <div>
              <h3>{counts.clients > 0 ? `${counts.clients}+` : "0"}</h3>
              <span>Brands Served</span>
            </div>

            <div>
              <h3>{counts.exp > 0 ? `${counts.exp}+` : "0"}</h3>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="services section" id="services">
        <div className="section-header">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Visual Solutions Offered</h2>
          </div>
        </div>

        <div className="service-list">
          <div className="service-card">
            <span>01</span>
            <h3>Ad Creatives</h3>
            <p>
              High-converting promotional banners, ad campaign visuals, and lead generation banners tailored for social media & Google ads.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Social Media Posts</h3>
            <p>
              Engaging carousel graphics, news updates, festival greetings, and detailed 5-step process infographics.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Product & 3D Design</h3>
            <p>
              Furniture modeling, technical CAD blueprints, product render presentation, and apparel editorial showcases.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Thumbnails & Reels</h3>
            <p>
              High-CTR YouTube thumbnails, 9:16 portrait reel covers, podcast short covers, and viral social media visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">Work Together</p>
          <h2>Ready to transform your brand visuals?</h2>
          <a href="mailto:sachin.designer@gmail.com" className="big-link magnetic">
            sachin.designer@gmail.com
          </a>
        </div>

        <MainFooter />
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <LightboxModal
          item={activeItem}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      )}
    </main>
  );
}
