require("dotenv").config();
import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const password = process.env.MAIL_PASSWORD;
  const myEmail = process.env.MAIL_ADDRESS;

  const body = await request.json();
  const name = body.name;
  const source = body.source;
  const phone = body.phone;
  var method = "";
  var tourName = "";
  var link = "";

  if (source == "footer") {
    method = body.contactMethod == "t" ? "Telegram" : "WhatsApp";
    link = `https://${contactMethod}.me/${phone}`;
  } else {
    tourName = body.tourName;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: [
        "nodirovic17@gmail.com",
        "kvestoman@yahoo.com",
        "info@afrasiab-travel.com",
      ],
      subject: `Afrasiab Travel: Новый запрос от ${name}`,
      text:
        source == "footer"
          ? `${name} просит Afrasiab Travel связаться через ${method}.

        ДАННЫЕ
        Имя: ${name}
        Номер телефона: ${message}

        ЕСЛИ ВСЕ ДАННЫЕ ВВЕДЕНЫ ПРАВИЛЬНО МОЖЕТЕ ИСПОЛЬЗОВАТЬ СЛЕДУЮЩУЮ ССЫЛКУ:
        ${link}
        
        В ином случае свяжитесь вручную`
          : `
          ${name} оставил заявку на тур "${tourName}"
          Номер телефона: ${phone}.`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
