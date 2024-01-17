import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TextField } from "@mui/material";
import { handleSubmit } from "../service/sendMail";

type FormData = {
  name: string;
  phone: string;
  tourName: string;
  source: string;
};

function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    tourName: "",
    source: "request modal",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-darkBlue bg-opacity-50 fixed h-full w-full flex top-0 z-20 items-center justify-center">
      <div className="bg-white rounded-md w-3/4 h-[55%] lg:h-[60%] relative ">
        <IoCloseSharp
          color="#112B3C"
          size={25}
          className="absolute top-2 right-2"
          onClick={onClose}
        />

        <form
          onSubmit={(e) => handleSubmit(e, formData)}
          className="flex flex-col w-full h-full items-center justify-center gap-4 rounded-md "
        >
          <h1 className="text-m text-yellow">ЗАЯВКА</h1>
          <TextField
            name="name"
            label={"Ваше имя   "}
            className="w-[75%]"
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label={"Ваш номер телефона"}
            className="w-[75%]"
            onChange={handleChange}
          />
          <TextField
            name="tourName"
            label={"Название тура"}
            className="w-[75%]"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-darkBlue w-[75%] h-12 lg:h-14 rounded-md"
          >
            <h1 className="text-white text-base font-bold">Отправить заявку</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
