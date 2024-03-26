import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Slider.css";
import "@splidejs/splide/css";

//reviews
import Review from "@/app/components/Review";
import { ReviewProps } from "@/app/components/Review";

export default function Slider({ reviews }: { reviews: ReviewProps[] }) {
  return (
    <div className="w-full overflow-visible">
      <Splide
        tag="section"
        aria-labelledby="My Favorite Images"
        options={{
          type: "loop",
          autoplay: true,
          width: "100%",
          height: 350,
          perMove: 1,
          gap: "1rem",
          focus: "center",
          breakpoints: {
            1600: {
              height: 350,
              perPage: 2,
            },
            768: {
              height: 450,
              perPage: 1,
            },
          },
        }}
      >
        {reviews.map((review) => (
          <SplideSlide className="overflow-visible">
            <Review {...review} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
