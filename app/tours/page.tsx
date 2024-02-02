"use client";
import { tours_, tours } from "../data/data";
import TourCard from "../components/TourCard";

export default function GridTourMenu() {
  return (
    <div className="flex justify-center py-6">
      <div className="justify-center justify-items-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tours_.map((tour) => (
          <TourCard key={`key-${tour.id}`} {...tour} />
        ))}
      </div>
    </div>
  );
}
