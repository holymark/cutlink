import mongoose from "mongoose";

export default mongoose.model(
  "URL",
  new mongoose.Schema(
    {
      path: {
        type: String,
        required: true,
      },
      pureId: {
        type: Number,
        required: true,
      },
      encodedId: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);
