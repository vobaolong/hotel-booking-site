
import mongoose from "mongoose";

const Schema = mongoose.Schema

const RoomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    bedRoom: {
        type: Number,
        required: true,
    },
    roomType: {
        type: mongoose.Schema.ObjectId,
        ref: 'RoomType',
        required: true
    },
    
  },
  { timestamps: true }
);

PostSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'room',
    justOne: false,
    count: true
})

PostSchema.virtual('bookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'room',
    justOne: false,
    count: true
})
export default mongoose.model("Room", RoomSchema);