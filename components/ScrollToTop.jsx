"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-primary/80 hover:bg-primary transition-opacity ease-in-out text-white rounded-full shadow-lg duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-primary-dark`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
