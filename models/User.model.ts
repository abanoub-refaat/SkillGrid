import { Schema, model, models } from "mongoose";

export interface UserDocument{
  name: string;
  email: string;
  password: string;
  role: string;
  profileImage: string;
  createdAt: Date;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["learner", "mentor", "admin"],
      default: "learner",
    },
    profileImage: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model<UserDocument>("User", userSchema);
