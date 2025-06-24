import { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const userRepetido = await User.findOne({ where: { username: username } });

  if (userRepetido) {
    return res.status(400).json({
      msg: "Usuario ya registrado, por favor ingresar otro username",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      password: hashedPassword,
    });

    res.json({ msg: `Usuario ${username} creado` });
  } catch (err) {
    res.status(400).json({
      msg: "No se ha podido registrar",
      error: err,
    });
  }
};

export const login = (req: Request, res: Response) => {
  console.log("desde loging");
  res.json({ msg: "Desde login", body: req.body });
};
