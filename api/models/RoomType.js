const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const RoomTypeSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, 'Title must be three characters long'],
      trim: true,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      minlength: [3, 'Description must be three characters long'],
      required: [true, 'Description is required'],
    },
  },
  { timestamps: true }
)

RoomTypeSchema.plugin(uniqueValidator, { message: '{PATH} already exists.' })

module.exports = mongoose.model('RoomType', RoomTypeSchema)
