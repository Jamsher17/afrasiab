"use client";
import Link from "next/link";
import Image from "next/image";

import { useState, FormEvent } from "react";

//assets
import Logo from "public/logo.jpg";

//icons
import { AiFillFacebook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaVk,
  FaTelegram,
  FaSquareWhatsapp,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//material ui
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
  Button,
} from "@mui/material";

type FormData = {
  name: string;
  message: string;
  contactMethod: string;
};

export default function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
    contactMethod: "t",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "post",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  };

  return (
    <div className="lg:px-[8%] lg:py-[4%] p-[4%] flex align-center flex-col lg:flex-row lg:space-x-12 drop-shadow-[0px_4px_10px_rgba(255,255,255,0.3)]">
      <div className="flex flex-col grow-0 space-y-4">
        <Image src={Logo} className="w-[100px] h-auto" alt="" />
        <div className="text-sm">г. Самарканд, ул. Орзу Махмудова дом 18</div>
        <div className="flex items-center gap-2 text-sm">
          <BsFillTelephoneFill />
          +998 99 771 73 30
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MdEmail />
          info@afrasiab-travel.com
        </div>
        <div className="flex space-x-3 text-yellow">
          <Link href="https://www.facebook.com/Afrasiabtravel?mibextid=LQQJ4d">
            <AiFillFacebook className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://www.instagram.com/turi_po_uzbekistanu/">
            <FaSquareInstagram className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://t.me/afrasiab_admin">
            <FaTelegram className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://vk.com/turvostok">
            <FaVk className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://wa.me/998997717330">
            <FaSquareWhatsapp className="w-[25px] h-[25px]" />
          </Link>
        </div>
      </div>
      <div className="grow lg:flex justify-between">
        <div className="grow lg:flex justify-between">
          <div className="flex flex-col">
            <h4 className="text-base font-bold">Навигация</h4>
            <div className="hidden md:flex flex-col lg:flex-col sm:flex-row lg:space-y-2 mt-2 justify-between">
              <Link href="/">Главная</Link>
              <Link href="/about">О нас</Link>
              <Link href="/tours">Авторские Туры</Link>
              <Link href="/cities">Города</Link>
              <Link href="/sights">Достопримечательности</Link>
              <Link href="/contacts">Контакты</Link>
            </div>
            <div className="block md:hidden flex flex-wrap text-center justify-center">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/">Главная</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/about">О нас</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/tours">Авторские Туры</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/cities">Города</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/sights">Достопримечательности</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/contacts">Контакты</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-bold">Связаться?</h4>
            <p className="text-sm">
              Если хотите, чтобы мы связались с Вами, то оставьте номер телефона
            </p>
            <form onSubmit={handleSubmit}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="t"
                name="radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel
                  control={<Radio />}
                  label="Telegram"
                  value={"t"}
                />

                <FormControlLabel
                  control={<Radio color="success" />}
                  label="WhatsApp"
                  value={"wa"}
                />
              </RadioGroup>
              <div className="flex flex-col">
                <TextField
                  id="name-input"
                  label="Ваше имя"
                  variant="outlined"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
                <TextField
                  id="phone-input"
                  label="Номер телефона"
                  variant="outlined"
                  margin="dense"
                  type="tel"
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <Button
                variant="outlined"
                type="submit"
                size="large"
                color="primary"
              >
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
