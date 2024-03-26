"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//assets
import Images from "public/Images.png";
import "../globals.css";
import spinner from "public/animations/spinner2.gif";

//data
import { Cities, tours, tours_ } from "../data/data";

//componets
import TourCard from "../components/TourCard";
import CityCard from "../components/CityCard";
import ContactModal from "../components/ContactModal";

//additional libs
import Slider from "./splide/Slider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClose = () => setShowModal(false);

  const [review, setReiew] = useState({
    name: "",
    tour_name: "",
    rating: 0,
    review: "",
  });
  const handleChange = (e: any) => {
    setReiew({ ...review, [e.target.name]: e.target.value });
  };

  const [reviews, setReviews] = useState([]);
  const [showLeaveReview, setShowLeaveReview] = useState(false);
  const onOpenReview = () => setShowLeaveReview(true);
  const onLeaveReview = () => setShowLeaveReview(false);
  const [uploadingReview, setUploadingReview] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/mongo/getAll");
      const data = await res.json();
      setReviews(data);
    }

    fetchData();
  }, []);

  const handleReview = async () => {
    const notify = () => toast.warn("Заполните все поля", { autoClose: 2000 });
    if (
      !review.name ||
      !review.tour_name ||
      review.rating < 1 ||
      !review.review ||
      review.review.trim() === "" ||
      review.name.trim() === "" ||
      review.tour_name.trim() === ""
    ) {
      notify();
      return;
    }

    setUploadingReview(true);
    await fetch("/api/mongo/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    onLeaveReview();
    setUploadingReview(false);
  };

  return (
    <>
      <div className=" w-full lg:h-screen h-[55vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="background-image w-full h-full relative bg-[url('/samarkand-big.jpg')] "></div>
        <h1 className="h-full w-full font-bold flex flex-col items-center text-white absolute justify-center">
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-3xl text-l">
            ИССЛЕДУЙТЕ
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.75)] lg:p-5 lg:text-6xl text-[60px] lg:leading-[85%] text-yellow">
            УЗБЕКИСТАН
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-3xl text-l">
            ВМЕСТЕ С НАМИ
          </span>

          <button
            onClick={() => setShowModal(true)}
            className="mt-10 lg:mb-14 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-yellow bg-opacity-80 hover:bg-opacity-70 border-white border-[1px] px-6 py-3 rounded-md transition ease-in-out delay-150"
          >
            <p className="text-base font-thin lg:text-l text-white">
              Бронировать
            </p>
          </button>
        </h1>
      </div>
      <div className="lg:px-[8%] lg:pt-[4%] lg:text-start px-[4%] pt-[2%] text-center ">
        <div className="flex lg:flex-row flex-col-reverse lg:space-x-20 mb-20 pt-4">
          <div>
            <Image src={Images} className="lg:w-[1000px] h-auto" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="lg:text-base text-sm text-yellow font-bold">
              О НАС
            </div>
            <h1 className="leading-tight lg:text-2xl text-m text-darkBlue font-bold mb-5">
              ЗА ОРГАНИЗАЦИЮ ВАШЕГО ТУРА МЫ ОТВЕЧАЕМ ГОЛОВОЙ
            </h1>
            <div className="text-base">
              Добро пожаловать в мир путешествий и приключений, где мы открываем
              для вас не только новые места, но и новые возможности для роста и
              развития личности, благодаря нашему опыту, профессионализму и
              заботе о каждом клиенте
            </div>
            <div className="flex flex-row flex-wrap gap-5 my-5 lg:justify-start justify-center">
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">15</div>
                <div className="text-grey">Лет опыта в индустрии</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">1k</div>
                <div className="text-grey">Успешных туров</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">20k</div>
                <div className="text-grey">Довольных клиентов</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">4.9</div>
                <div className="text-grey">Общий рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm lg:text-base text-yellow font-bold">
            АВТОРСКИЕ ТУРЫ
          </div>
          <h1 className="leading-tight text-l lg:text-2xl text-darkBlue font-bold mb-5">
            Программы наших туров
          </h1>
          <div>
            {/* <Carousel /> //!not needed */}
            <div className="flex justify-center">
              <div className="justify-items-center grid-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {tours_.map((tour) => (
                  <div className="m-4">
                    <TourCard key={`key-${tour.id}`} {...tour} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-5 items-center">
          <div className="text-sm lg:text-base text-yellow font-bold">
            ОТЗЫВЫ
          </div>
          <h1 className="text-m leading-tight lg:text-2xl text-darkBlue font-bold mb-5">
            Довольные клиенты по всему миру
          </h1>
          <Slider reviews={reviews} />
          <button
            onClick={onOpenReview}
            className="mb-8 mt-8 transition w-[250px] text-white ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-yellow hover:bg-darkBlue hover:bg-opacity-50 py-2 px-4 rounded-full  border-white border-[1px]"
          >
            <p className="text-base p-2 ">ОСТАВИТЬ ОТЗЫВ</p>
          </button>
          <h1 className="leading-tight mt-8 text-m lg:text-2xl text-darkBlue font-bold ">
            Достопримечательности Узбекистана
          </h1>

          <div className="flex flex-wrap gap-4 justify-center">
            {Cities.map((oneCity) => (
              <CityCard {...oneCity} key={oneCity.id} />
            ))}
          </div>
          <button className="mb-8 mt-8 transition w-[250px] text-white ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-yellow hover:bg-darkBlue hover:bg-opacity-50 py-2 px-4 rounded-full  border-white border-[1px]">
            <Link href="/cities">
              <p className="text-base p-2 ">Просмотреть все</p>
            </Link>
          </button>
        </div>
        <ToastContainer />
      </div>
      {showModal && <ContactModal onClose={onClose} />}
      {showLeaveReview && (
        <div className="bg-darkBlue bg-opacity-50 fixed h-full w-full flex top-0 z-20 items-center justify-center">
          <div className="bg-white rounded-xl w-[90%] lg:w-3/4 h-fit relative flex flex-col items-center justify-center p-6 lg:p-8 gap-5">
            <Rating
              precision={1}
              size="large"
              value={review.rating}
              name="rating"
              onChange={handleChange}
            />
            <TextField
              className="w-full"
              label="Ваше имя"
              onChange={handleChange}
              name="name"
            />
            <FormControl fullWidth>
              <InputLabel id="tour_name">Ваш тур</InputLabel>
              <Select
                labelId="tour_name"
                name="tour_name"
                value={review.tour_name}
                label="Выберите ваш тур"
                onChange={handleChange}
              >
                {tours_.map((tour) => (
                  <MenuItem value={tour.id}>{tour.name}</MenuItem>
                ))}
                <MenuItem value={"Other"}>Другое</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="review"
              multiline
              rows={4}
              className="w-full"
              label="Напишите о ваших впечатлениях"
              onChange={handleChange}
            />
            <div className="flex flex-row w-full justify-between">
              <button
                onClick={onLeaveReview}
                className="w-[49%] h-[65px] bg-white rounded-xl text-darkBlue border-darkBlue border"
              >
                <p>ЗАКРЫТЬ</p>
              </button>
              <button
                onClick={handleReview}
                className="w-[49%] h-[65px] bg-darkBlue rounded-xl text-white "
              >
                {uploadingReview ? (
                  <div className="flex items-center justify-center">
                    <img
                      src={spinner.src}
                      alt=""
                      style={{ width: 25, height: 25 }}
                    />
                  </div>
                ) : (
                  <p>ОСТАВИТЬ ОТЗЫВ</p>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
