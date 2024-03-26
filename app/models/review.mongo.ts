import mongoose from "mongoose";

export default mongoose.models.Review ||
  mongoose.model(
    "Review",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      tour_name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    })
  );
