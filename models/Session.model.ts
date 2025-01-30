import { Schema, model, models } from "mongoose";

const sessionSchema = new Schema(
  {
    mentorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    learnerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    status: {
      type: String,
      enum: ["pendding", "approved", "rejected", "completed"],
      default: "pendding",
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Session = models.Session || model("Session", sessionSchema);
