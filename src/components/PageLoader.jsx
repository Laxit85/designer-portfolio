import { useState, useEffect } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? "hide" : ""}`}>
      <div className="loader-text">DESIGNER</div>
    </div>
  );
}
