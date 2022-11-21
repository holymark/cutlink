const mongoose = require("mongoose");

module.exports = mongoose.model(
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
