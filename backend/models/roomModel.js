const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vui lòng nhập tên phòng"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Vui lòng nhập mô tả phòng"],
  },
  price: {
    type: Number,
    required: [true, "Vui lòng nhập giá phòng mỗi đêm"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Hãy chọn loại phòng"],
  },
  maxcount: {
    type: Number,
    required: [true, "Vui lòng chọn số khách tối đa"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  disabledStart: {
    type: Date,
  },
  disabledEnd: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
