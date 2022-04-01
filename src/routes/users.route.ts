import { Router } from "express";
import { API_ROUTES } from "../config/apiRoutes";
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getAllUsersController,
  updateUserController,
} from "../controllers/users";

export default () => {
  const route = Router();

  route.post(API_ROUTES.USERS.CREATE, createUserController);
  route.delete(API_ROUTES.USERS.DELETE, deleteUserController);
  route.get(API_ROUTES.USERS.USER_BY_ID, getUserByIdController);
  route.get(API_ROUTES.USERS.ALL_USERS, getAllUsersController);
  route.put(API_ROUTES.USERS.UPDATE_USER, updateUserController);

  return route;
};
