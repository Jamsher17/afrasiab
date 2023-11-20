"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {showTopBtn && (
        <IoIosArrowUp
          className="fixed bottom-0 right-0 m-4 z-20 bg-white border-2 border-darkYellow rounded-full h-12 w-12 flex items-center justify-center cursor-pointer animate-movebtn duration-300 hover:bg-white hover:text-blue hover:border-blue"
          onClick={goToTop}
        />
      )}
    </div>
  );
};
export default ScrollToTop;
