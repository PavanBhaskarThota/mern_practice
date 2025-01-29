import { Request, Response } from "express";
import  UserService from "../services/UserService";

class UserController {

  // private userService = new UserService()

  async addUser(req: Request, res: Response) {
    try {
      const user = req.body
      console.log(user);
      const result = await UserService.addUser(user)
      res.status(200).send(result);
      
    } catch (error: any) {
      res.status(500).send({ error: error.message, status:"failed" });
    }
  } 
}

export default new UserController()

