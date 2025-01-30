import { Schema, model, models } from "mongoose";

const progressSchema = new Schema(
  {
    learnerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    completedLessons: {
      type: [{ type: Schema.Types.ObjectId, ref: "Course" }],
      default: [],
    },
    progressPrecentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { timestamps: true }
);

export default models.Progress || model("Progress", progressSchema);
