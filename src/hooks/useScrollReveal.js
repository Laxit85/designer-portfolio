import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Select all reveal elements
    const elements = document.querySelectorAll(".reveal-up, .reveal-scale, .reveal-text");

    if (elements.length === 0) return;

    // Immediately reveal elements that are already in or near the viewport
    const revealInView = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("show");
        }
      });
    };

    revealInView();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("show")) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
}
