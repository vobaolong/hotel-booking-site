
import mongoose from "mongoose";

const Schema = mongoose.Schema

const BookingSchema = new Schema(
  {
    room: {
        type: mongoose.Schema.ObjectId,
        ref: 'Room',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    endAt: {type: Date, required: 'Ending Date is required!'},
    startAt: {type: Date, required: 'Start Date is required!'},
    totalPrice: Number,
    days: Number,
    end: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);