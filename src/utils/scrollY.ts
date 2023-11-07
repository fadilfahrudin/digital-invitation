import { useState, useEffect } from "react";

const ScrollY = () => {
  const [offset, setOffset] = useState<number>();

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return offset;
};

export default ScrollY;
