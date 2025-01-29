import express, { Request, Response } from "express";
import "dotenv/config";
import { connection } from "./db/db";
import userRouter from "./routes/userRoutes";

const port = process.env.PORT
const app = express();
app.use(express.json());
app.use('/user', userRouter)


app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

app.listen(port || 3000, async() => {
  try {
    await connection;
    console.log("Database connected successfully");
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.log(error)
  }

});