import React from "react";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Review from "@/app/models/review.mongo";

export async function GET(req: NextRequest, res: NextResponse) {
  const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@afrasiabtravel.9eqqlkw.mongodb.net/?retryWrites=true&w=majority&appName=AfrasiabTravel`;
  let client;

  try {
    client = await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(error);
  }

  try {
    const reviews = await Review.find({});
    return new NextResponse(JSON.stringify(reviews), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "There was an error fetching the reviews" }),
      {
        status: 500,
      }
    );
  }
}
