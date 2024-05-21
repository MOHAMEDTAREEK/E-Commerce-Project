import { Request, Response } from "express";
import {
  getAllCustomerSupportInfo,
  getCustomerSupportInfoById,
  createCustomerSupportInfo,
} from "../services/customer-support.service";

const getCustomersSupportInfo = async (req: Request, res: Response) => {
  const customerSupportInfo = await getAllCustomerSupportInfo();
  return res.json(customerSupportInfo);
};

const getCustomerSupportInfo = async (req: Request, res: Response) => {
  const customerSupportInfo = await getCustomerSupportInfoById(req.params.id);
  return res.json(customerSupportInfo);
};

const createCustomerInfo = async (req: Request, res: Response) => {
  const customerSupportInfo = await createCustomerSupportInfo(req.body);
  return res.json(customerSupportInfo);
};

export default {
  getCustomersSupportInfo,
  getCustomerSupportInfo,
  createCustomerInfo,
};
