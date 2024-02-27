"use client";
import Image from "next/image";
import Clock from "public/Clock_0300.svg";
import Cloud from "public/Cloud.svg";
import USD from "public/USD.svg";
import { useEffect, useState } from "react";
import { useCurrentTime } from "../hooks/currentTime";
import { usePathname } from "next/navigation";
import { FaRegClock } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

export default function HeaderInfo() {
  const [weather, setWeather] = useState<number>(15);
  const [currency, setCurrency] = useState<number>(0);
  const currentTIme = useCurrentTime();
  const path = usePathname();

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setWeather(Number(data.temperature)))
      .catch((error) => {
        console.error("Error fetching user: ", error);
        throw error;
      });
  }, []);

  useEffect(() => {
    fetch("/api/exchange-rate")
      .then((res) => res.json())
      .then((data) => setCurrency(data.result))
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li className="flex justify-between items-center flex-row gap-1">
        <TiWeatherPartlySunny size={20} />
        <p className="block whitespace-nowrap text-sm text-darkBlue font-body font-semibold">
          {Math.round(weather)} C°
        </p>
      </li>
      <li className="flex justify-between items-center flex-row gap-1">
        <FaRegClock size={20} />
        <p className="block text-sm font-body font-semibold text-darkBlue">
          {currentTIme}
        </p>
      </li>
      <li className="flex justify-between items-center flex-row gap-1">
        <HiOutlineCurrencyDollar size={20} />
        <p className="block text-sm text-darkBlue font-body font-semibold">
          {Math.round(currency)}
        </p>
      </li>
    </ul>
  );
}
