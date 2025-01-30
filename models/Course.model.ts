import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Text,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    dificulty: {
      type: String,
      enum: ["begginner", "intermediate", "advanced"],
      default: "begginner",
    },
  },
  { timestamps: true }
);

export default models.Course || model("Course", courseSchema);
