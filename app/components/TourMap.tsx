import React from "react";
import Image, { StaticImageData } from "next/image";

//libs
import useEmblaCarousel from "embla-carousel-react";

//icons
import { IoMdTime, IoMdTrain } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";

//assets
import Markdown from "react-markdown";
import sp from "../../public/sp.jpg";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export type TourType = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  imageStyle: string;
  price: string;
  duration: string;
  route: string;
  days: {
    name: string;
    location: string;
    title: string;
    info: string;
    schedule: {
      time: string;
      activity: string;
    }[];
    images: StaticImageData;
  }[];
};

export default function TourMap(tour: TourType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align(viewSize, snapSize, index) {
      return (snapSize * index) / viewSize;
    },
  });

  return (
    <div className="flex flex-col ">
      {/* brief description */}
      <div className="flex flex-col bg-darkYellow rounded-[2rem] py-8 px-8 shadow-lg">
        <div className="flex xl:flex-row flex-col justify-around py-4 space-y-6 xl:space-y-0">
          {/* duration wrapper */}
          <div className="flex flex-col items-center space-y-1 w-full ">
            <IoMdTime size={40} />
            <span className="text-darkBlue font-bold text-[1.5rem]">
              Продолжительность
            </span>
            <span className="text-white text-[1.25rem]">{tour.duration}</span>
          </div>
          {/* route wrapper */}
          <div className="flex flex-col items-center space-y-1 w-full">
            <IoMdTrain size={40} />
            <span className="text-darkBlue font-bold text-[1.5rem]">
              Маршрут
            </span>
            <span className="text-white text-center text-[1.25rem]">
              {tour.route}
            </span>
          </div>
          {/* price wrapper */}
          <div className="flex flex-col items-center space-y-1 w-full">
            <AiOutlineDollar size={40} />
            <span className="text-darkBlue font-bold text-[1.5rem]">Цена</span>
            <span className="text-white text-[1.25rem]"> {tour.price}</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 mt-4">
          <div className="w-full flex flex-row items-center gap-4 justify-center">
            <div className="w-[35vh] border-t-[1px] border-darkBlue" />
            <FaRegThumbsUp size={40} />
            <div className="w-[35vh] border-t-[1px] border-darkBlue" />
          </div>
          <div>
            <Markdown
              children={tour.description}
              className="text-center font-normal xl:text-[1.25rem]"
            />
          </div>
        </div>
      </div>
      {/* schedule title */}
      <div className="xl:text-l text-m mt-10 mb-2 font-semibold text-darkBlue self-center">
        РАСПИСАНИЕ
      </div>
      {Object.values(tour.days).map((day) => (
        <>
          <div className="flex flex-row w-full justify-between">
            <div className="text-m xl:text-l font-normal">{day.location}</div>
            <div className="text-m xl:text-l font-light text-darkYellow">
              {day.name}
            </div>
          </div>
          {/* image and info container */}
          <div className="flex flex-col xl:h-[400px] xl:flex-row space-y-2 xl:space-y-0 xl:space-x-2">
            {/* images container */}
            <div className="flex flex-1 flex-col items-center justify-between lg:space-y-4">
              <div className="flex xl:h-full w-full">
                <Image
                  src={day.images}
                  alt={day.images.src}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-full"
                />
              </div>
              {/* <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex items-center w-96 h-60">
                  {day.images?.map((image) => (
                    <div className="embla__slide flex-grow-0 flex-shrink-0 basis-[100%] w-max h-full">
                      <Image
                        src={image}
                        alt={image.src}
                        style={{ objectFit: "cover" }}
                        className="rounded-lg w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
            {/* info container */}
            <div className="flex flex-1 justify-center items-center bg-blue-gray-50 rounded-xl h-full shadow-md font-body font-semibold border overflow-y-scroll scrollbar">
              <Markdown
                className="whitespace-pre-wrap font-normal w-full h-full px-6 py-6"
                children={
                  (day.info ? `${day.info}\n\n` : "") +
                  Object.values(day.schedule)
                    .map((hour) => `[${hour.time}]:\n${hour.activity}`)
                    .join("\n\n")
                }
              />
            </div>
          </div>
          {/* divider */}
          <div className="h-[5vh] xl:h-[8vh] w-full flex items-center justify-center">
            <div className="border-t-[1px] border-gray-200 w-[100vh] lg:w-[100vh] self-center" />
          </div>
        </>
      ))}
    </div>
  );
}
