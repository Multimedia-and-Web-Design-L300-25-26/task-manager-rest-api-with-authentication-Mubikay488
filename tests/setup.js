import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import User from "../src/models/User.js";
import Task from "../src/models/Task.js";

dotenv.config();

beforeAll(async () => {
  await connectDB();
  await User.deleteMany({});
  await Task.deleteMany({});
}, 20000);

afterAll(async () => {
  await User.deleteMany({});
  await Task.deleteMany({});
  await mongoose.connection.close();
});