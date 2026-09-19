import { useState } from "react";
import { MiniFooter } from "../components/Footer";
import LightboxModal from "../components/LightboxModal";
import { categories, allCreatives } from "../data/creativesData";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Filter items based on category and search query
  const filteredItems = allCreatives.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.client && item.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const handleOpenLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handleNextLightbox = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <main>
      <div className="noise"></div>

      <section className="page-hero section">
        <p className="eyebrow">Selected Creatives & Portfolio</p>
        <h1>All Work by Sachin</h1>
        <p className="page-intro">
          Explore the full suite of Ad Creatives, Social Media Posts, Product & Furniture Renders, YouTube Thumbnails, and 9:16 Reel Covers.
        </p>
      </section>

      <section className="project-grid-section section">
        {/* Controls Bar */}
        <div className="portfolio-controls">
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery("")}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <p className="results-count">
          Showing {filteredItems.length} of {allCreatives.length} creatives
        </p>

        {/* Grid of All Work */}
        <div className="work-gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-work-card ${item.fullWidth ? "span-full" : ""} ${
                item.category === "reel_covers" ? "reel-aspect" : ""
              }`}
              onClick={() => handleOpenLightbox(index)}
            >
              <div className="card-media-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="media-overlay">
                  <span className="expand-badge">🔍 Zoom View</span>
                </div>
              </div>

              <div className="card-body">
                <div className="card-tags">
                  <span className="cat-badge">{item.categoryLabel}</span>
                  {item.client && <span className="client-badge">{item.client}</span>}
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MiniFooter linkTo="/contact" linkText="Start a Project with Sachin" />

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <LightboxModal
          item={filteredItems[selectedItemIndex]}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      )}
    </main>
  );
}
