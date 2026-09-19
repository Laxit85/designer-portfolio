import { useEffect } from "react";

export default function LightboxModal({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {onPrev && (
          <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous">
            ‹
          </button>
        )}

        {onNext && (
          <button className="lightbox-nav next" onClick={onNext} aria-label="Next">
            ›
          </button>
        )}

        <div className="lightbox-grid">
          <div className="lightbox-image-wrapper">
            <img src={item.image} alt={item.title} className="lightbox-image" />
          </div>

          <div className="lightbox-details">
            <span className="lightbox-badge">{item.categoryLabel}</span>
            <h2>{item.title}</h2>
            {item.client && (
              <p className="lightbox-client">
                <strong>Client / Brand:</strong> {item.client}
              </p>
            )}
            <p className="lightbox-desc">{item.desc}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="lightbox-tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {item.gallery && item.gallery.length > 0 && (
              <div className="lightbox-gallery-preview">
                <h4>Additional Showcase Angles</h4>
                <div className="gallery-thumbs">
                  {item.gallery.map((gImg, idx) => (
                    <img key={idx} src={gImg} alt={`${item.title} angle ${idx + 1}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
