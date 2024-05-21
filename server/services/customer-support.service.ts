import { CustomerSupportInfo } from "../models/customer-support.model";

const getAllCustomerSupportInfo = async () => {
  const customerSupportInfo = await CustomerSupportInfo.find();
  return customerSupportInfo;
};

const getCustomerSupportInfoById = async (id: string) => {
  const customerSupportInfo = await CustomerSupportInfo.findById(id);
  return customerSupportInfo;
};

const createCustomerSupportInfo = async (customerSupportInfo: any) => {
  const newCustomerSupportInfo = await CustomerSupportInfo.create(
    customerSupportInfo
  );
  return newCustomerSupportInfo;
};

export {
  getAllCustomerSupportInfo,
  getCustomerSupportInfoById,
  createCustomerSupportInfo,
};
