"use client";
import { useState, useEffect } from "react";
import { Reviews } from "@/app/data/data";

// import { EffectCoverflow, Pagination } from "swiper";
import Review from "@/app/components/review";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards, Pagination } from "swiper";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  console.log(isMobile);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        effect={isMobile ? undefined : "cards"}
        grabCursor={true}
        // pagination={{
        //   dynamicBullets: isMobile,
        // }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCards, Pagination]}
        className="mySwiper"
      >
        {Reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="w-[300px] pt-[20xp] border-2 border-grey rounded-2xl bg-white"
          >
            <Review {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
