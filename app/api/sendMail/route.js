require("dotenv").config();
import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const password = process.env.MAIL_PASSWORD;
  const myEmail = process.env.MAIL_ADDRESS;

  const { name, message, contactMethod } = await request.json();

  const method = contactMethod == "t" ? "Telegram" : "WhatsApp";
  const link = `https://${contactMethod}.me/${message}`;

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
      text: `${name} просит Afrasiab Travel связаться через ${method}.

        ДАННЫЕ
        Имя: ${name}
        Номер телефона: ${message}

        ЕСЛИ ВСЕ ДАННЫЕ ВВЕДЕНЫ ПРАВИЛЬНО МОЖЕТЕ ИСПОЛЬЗОВАТЬ СЛЕДУЮЩУЮ ССЫЛКУ:
        ${link}
        
        В ином случае свяжитесь вручную`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
