import React from "react";
import Image, { StaticImageData } from "next/image";

//libs
import useEmblaCarousel from "embla-carousel-react";
import { Tab } from "@headlessui/react";

//icons
import { IoMdTime, IoMdTrain } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";

//assets
import Markdown from "react-markdown";

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
    images: StaticImageData[];
  }[];
};

export default function TourMap(tour: TourType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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
          {/* image and info container */}
          <div className="flex flex-col xl:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            {/* images container */}
            <div className="flex items-center flex-col justify-between lg:space-y-4 transition-all">
              <div className="text-m xl:text-l font-light text-darkYellow">
                {day.name}
              </div>
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex items-center w-96 h-60">
                  {day.images?.map((image) => (
                    <div className="embla__slide flex-grow-0 flex-shrink-0 basis-[100%] w-full h-full">
                      <Image
                        src={image}
                        alt={image.src}
                        style={{ objectFit: "cover" }}
                        className="rounded-lg w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[1.25rem] xl:text-l font-bold">
                {day.location}
              </div>
            </div>
            {/* info container */}
            <div className=" flex flex-col space-x-6 w-full">
              <div>
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl overflow-x-scroll no-scrollbar">
                    {day.info && (
                      <Tab
                        key={day.name}
                        className={({ selected }) =>
                          classNames(
                            "w-fit rounded-lg py-3 px-4 text-sm xl:text-[1.25rem] font-medium leading-5 shadow-md",
                            "ring-white/60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2",
                            selected
                              ? "bg-yellow text-white shadow"
                              : "bg-white text-blue-100 hover:bg-darkBlue hover:text-white border"
                          )
                        }
                      >
                        Общая информация
                      </Tab>
                    )}
                    {Object.values(day.schedule).map((hour) => (
                      <Tab
                        key={hour.time}
                        className={({ selected }) =>
                          classNames(
                            "flex w-fit rounded-lg py-3 px-4 text-sm xl:text-[1.25rem] font-medium leading-5 shadow-md",
                            "ring-white/60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2",
                            "items-center justify-center whitespace-nowrap",
                            selected
                              ? "bg-yellow text-white"
                              : "bg-white text-blue-100 hover:bg-darkBlue hover:text-white border"
                          )
                        }
                      >
                        {hour.time == "Конец дня" ? <MdNightlightRound /> : ""}
                        {hour.time}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    {day.info && (
                      <Tab.Panel
                        className="font-medium text-sm xl:text-[1.4rem] py-4 px-6 bg-blue-gray-50 rounded-xl my-4 h-full w-full shadow-md"
                        key={day.title}
                      >
                        <Markdown
                          className="whitespace-pre-wrap"
                          children={day.info}
                        />
                      </Tab.Panel>
                    )}
                    {Object.values(day.schedule).map((hour) => (
                      <Tab.Panel
                        key={hour.activity}
                        className="font-medium text-sm xl:text-[1.4rem] py-4 px-6 bg-blue-gray-50 rounded-xl my-4 h-full w-full shadow-md"
                      >
                        <Markdown children={hour.activity} />
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
          {/* divider */}
          <div className="h-[5vh] xl:h-[8vh] w-full flex items-center justify-center">
            <div className="border-t-[1px] border-darkBlue w-[25vh] lg:w-[50vh] self-center" />
          </div>
        </>
      ))}
    </div>
  );
}
