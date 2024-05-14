import { config } from "dotenv";

config();

export default {
  localDb: process.env.LOCAL_DB,
  port: process.env.PORT,
};
