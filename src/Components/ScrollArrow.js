import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "../app.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <BsFillArrowUpCircleFill
      className="scrollTop text-white"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;
