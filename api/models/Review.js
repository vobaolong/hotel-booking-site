const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema(
  {
    content: {
      type: String,
      minlength: [3, 'Must be three characters long'],
      required: [true, 'Text is required']
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: 'Room',
      required: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
)

module.exports = mongoose.model('Review', ReviewSchema)
