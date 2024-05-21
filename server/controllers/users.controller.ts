import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  getUserByUsername,
} from "../services/users.service";

const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

const getUser = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  res.json(user);
};

const addUser = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.json(user);
};

const getUserByName = async (req: Request, res: Response) => {
  const user = await getUserByUsername(req.params.username);
  res.json(user);
};

export default { getUsers, getUser, addUser, getUserByName };
