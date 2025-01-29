import express from "express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();


userRouter.post("/signup", UserController.addUser)


export default userRouter