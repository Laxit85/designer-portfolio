import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let animFrameId = null;
    let isVisible = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
        follower.style.opacity = "1";
        followerX = mouseX;
        followerY = mouseY;
      }

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const handleMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    };

    const animateFollower = () => {
      if (isVisible) {
        followerX += (mouseX - followerX) * 0.16;
        followerY += (mouseY - followerY) * 0.16;
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
      }
      animFrameId = requestAnimationFrame(animateFollower);
    };

    // Global event delegation for hover states on ANY interactive element
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, input, select, textarea, .magnetic, .creative-card, .maroon-card, .gallery-work-card, .slide-img-wrapper, .lightbox-close-btn, .lightbox-close-corner, .lightbox-nav-btn, .filter-btn, .filter-pill, .tag-pill, .btn, [role='button']"
      );
      if (target) {
        cursor.classList.add("active");
        follower.classList.add("active");
      } else {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    animFrameId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="cursor" ref={cursorRef} aria-hidden="true"></div>
      <div className="cursor-follower" ref={followerRef} aria-hidden="true"></div>
    </>
  );
}
