import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt";
import { IUser } from "../types/commonTypes";
import jwt from "jsonwebtoken";


class UserService {

  async addUser(user: IUser){
    try {
       const {email, name, password} = user;
       console.log(user);
    const userExist = await UserModel.findOne({email});
    if(userExist){
      return "User already exist";
    }
    const hashedPassword = await bcrypt.hash(password, 6);
    const userData = new UserModel({...user, password: hashedPassword});
    await userData.save();

    const token = jwt.sign({'user': userData}, "secret", {expiresIn: "1h"});

    return {message: "User added successfully", data: userData, token};

    } catch (error: any) {
      return error.message;
    }
  }
}

export default new UserService()