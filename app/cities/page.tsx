"use client";
import CityCard from "../components/CityCard";
import { Cities } from "../data/data";

export default function GridMenu() {
  return (
    <div className="flex justify-center w-full h-fit items-center p-8">
      <div className="container justify-items-center grid-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        {Cities.map((city) => (
          <CityCard key={`key-${city.id}`} {...city} />
        ))}
      </div>
    </div>
  );
}
