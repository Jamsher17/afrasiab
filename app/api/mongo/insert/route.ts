import React from "react";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Review from "@/app/models/review.mongo";

export async function POST(req: NextRequest, res: NextResponse) {
  const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@afrasiabtravel.9eqqlkw.mongodb.net/?retryWrites=true&w=majority&appName=AfrasiabTravel`;
  let client;

  try {
    client = await mongoose.connect(MONGO_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    console.error("There was an error connecting to the database");
  }

  const data = await req.json();
  const { name, tour_name, rating, review } = data;

  if (
    !name ||
    !tour_name ||
    !rating ||
    !review ||
    review.trim() === "" ||
    name.trim() === "" ||
    tour_name.trim() === ""
  ) {
    return NextResponse.json(
      { message: "Please provide all the fields" },
      {
        status: 400,
      }
    );
  }

  try {
    await Review.create({
      name,
      tour_name,
      rating,
      review,
    });
    return NextResponse.json(
      { message: "Review saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "There was an error saving the review" },
      {
        status: 500,
      }
    );
  }
}
