import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  console.log("desde register");

  res.json({ msg: "Desde register" });
};

export const login = (req: Request, res: Response) => {
  console.log("desde loging");
  res.json({ msg: "Desde login", body: req.body });
};
