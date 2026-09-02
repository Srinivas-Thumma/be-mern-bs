import express, { Router } from "express";
import User from "../models/user.model.js";
import { home , createUser , getAllUsers , getUserByUserName , updateUser , deleteUser} from "../controllers/user.controllers.js";

let userRouter = express(Router);
//we wrote this line because we want to use the express router to define our routes. The router is a mini express application that can be used to define routes and middleware. We can use the router to define our routes and then use the router in our main application. This way we can keep our code organized and modular.

userRouter.get("/", home);

userRouter.get("/users", getAllUsers)

userRouter.get("/users/:userName", getUserByUserName);

userRouter.post("/create",createUser);

userRouter.put("/update/:userName",updateUser);

userRouter.delete("/delete/:userName", deleteUser);

export default userRouter;
