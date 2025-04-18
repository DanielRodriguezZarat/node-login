import { Response, Request } from "express";
export const getProductos = (req: Request, res: Response) => {
  res.json({ msg: "Obteniendo productos" });
};
