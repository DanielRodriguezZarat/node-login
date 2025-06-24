import { Response, Request } from "express";
import { Product } from "../models/product";
export const getProductos = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll();
  res.json({ msg: "success", listProducts });
};
