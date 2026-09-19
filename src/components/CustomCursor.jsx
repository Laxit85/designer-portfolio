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

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animFrameId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameId = requestAnimationFrame(animateFollower);

    // Hover target listeners
    const bindHoverListeners = () => {
      const hoverTargets = document.querySelectorAll(
        "a, button, .slide-img, .poster-card, .service-card, .gallery-card, .project-card-large, input, select, textarea"
      );

      const onMouseEnter = () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      };

      const onMouseLeave = () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      };

      hoverTargets.forEach((target) => {
        target.addEventListener("mouseenter", onMouseEnter);
        target.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        hoverTargets.forEach((target) => {
          target.removeEventListener("mouseenter", onMouseEnter);
          target.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    };

    const unbindHover = bindHoverListeners();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameId) cancelAnimationFrame(animFrameId);
      unbindHover();
    };
  }, [location.pathname]);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}
