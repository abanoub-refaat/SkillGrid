"use server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";

interface RegisterValues {
  email: string;
  password: string;
  name: string;
}

export const register = async (values: RegisterValues) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "User already exists",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
  } catch (error) {
    console.log(error);
  }
};
