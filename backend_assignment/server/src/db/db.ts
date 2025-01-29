import mongoose from "mongoose";
import "dotenv/config";

export const connection = mongoose.connect(process.env.MONGO_URL as string);
