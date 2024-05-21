import mongoose from "mongoose";
const CustomerSupportInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const CustomerSupportInfo = mongoose.model(
  "CustomerSupportInfo",
  CustomerSupportInfoSchema
);
