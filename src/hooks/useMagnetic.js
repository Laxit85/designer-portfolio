import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useMagnetic() {
  const location = useLocation();

  useEffect(() => {
    const items = document.querySelectorAll(".magnetic");

    const handleMouseMove = (e) => {
      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const handleMouseLeave = (e) => {
      const item = e.currentTarget;
      item.style.transform = "translate(0, 0)";
    };

    items.forEach((item) => {
      item.addEventListener("mousemove", handleMouseMove);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mousemove", handleMouseMove);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [location.pathname]);
}
