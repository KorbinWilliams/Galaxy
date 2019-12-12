import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    size: { type: String, required: true, minlength: 5 },
    description: { type: String, required: true },
    numberOfStars: { type: Number },
    imgUrl: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;
