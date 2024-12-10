import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = Scrollbar.init(scrollContainerRef.current, {
        damping: 0.1, 
      });

      // Scroll to the top on mount
      scrollbar.scrollTo(0, 0, 0);
    
      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      id="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;
