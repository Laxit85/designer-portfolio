import { useEffect } from "react";

export default function LightboxModal({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top Header Bar */}
      <div className="lightbox-topbar">
        <div className="lightbox-badge-title">
          <span className="lightbox-top-pill">{item.categoryLabel}</span>
          <span className="lightbox-top-name">{item.title}</span>
        </div>

        <button
          className="lightbox-close-btn magnetic"
          onClick={onClose}
          aria-label="Close modal"
          title="Close (Press Escape)"
        >
          <span className="close-text">CLOSE</span>
          <span className="close-icon">✕</span>
        </button>
      </div>

      {/* Screen Side Nav Arrows (Fixed on Overlay, never causing horizontal scroll) */}
      {onPrev && (
        <button
          className="lightbox-nav-btn prev magnetic"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous item"
          title="Previous (Left Arrow)"
        >
          ‹
        </button>
      )}

      {onNext && (
        <button
          className="lightbox-nav-btn next magnetic"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next item"
          title="Next (Right Arrow)"
        >
          ›
        </button>
      )}

      {/* Main Modal Card */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-grid">
          <div className="lightbox-image-wrapper">
            <img src={item.image} alt={item.title} className="lightbox-image" />
          </div>

          <div className="lightbox-details">
            <div className="lightbox-details-header">
              <span className="lightbox-badge">{item.categoryLabel}</span>
              <button
                className="lightbox-close-corner magnetic"
                onClick={onClose}
                aria-label="Close"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

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

            <div className="lightbox-footer-actions">
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="lightbox-download-link magnetic"
              >
                Open Original Image ↗
              </a>
              <span className="lightbox-esc-hint">Press [ESC] or click outside to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
