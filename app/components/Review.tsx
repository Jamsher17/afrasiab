import Image from "next/image";
import Quote from "public/quote.svg";
import Rating from "./Rating";
import traveler from "public/man_traveler.jpg";
import logo from "public/logo_alt.png";

export interface ReviewProps {
  name: string;
  tour_name: string;
  rating: number;
  review: string;
}

export default function Review({
  name,
  tour_name,
  rating,
  review,
}: ReviewProps) {
  return (
    <>
      <div className="whitespace-pre-wrap drop-shadow-md rounded-xl bg-blue-gray-50 h-[95%] w-full mb-8 flex flex-col items-center justify-center p-5">
        <Image
          src={Quote}
          alt=""
          className="self-end absolute top-[10px] right-10"
        />
        <Image
          src={logo}
          alt=""
          className="self-start absolute top-[10px] rounded-full w-[100px]"
        />
        <h6 className="font-bold">{name}</h6>
        <div>{tour_name == "Other" ? "" : tour_name}</div>
        <div>
          <Rating rating={rating} />
        </div>
        <p className="text-sm text-ellipsis">{review}</p>
      </div>
    </>
  );
}
