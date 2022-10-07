
import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    desc: {
      type: String,
      required: true,
    },
    
    img: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
  },
  { timestamps: true }
);

PostSchema.virtual('rooms', {
    ref: 'Room',
    localField: '_id',
    foreignField: 'hotel',
    justOne: false,
    count: true
})
export default mongoose.model("Hotel", HotelSchema);