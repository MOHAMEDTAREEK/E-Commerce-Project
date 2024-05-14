import { User } from "../models/user";

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (user: any) => {
  const newUser = await User.create(user);
  return newUser;
};
const getUserByUsername = async (username: string) => {
  const user = await User.findOne({
    username: username,
  });
  return user;
};

export { getAllUsers, getUserById, createUser, getUserByUsername };
