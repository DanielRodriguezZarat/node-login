import { Server } from "./models/server";
import dotenv from "dotenv";

// dotenv permite acceder a las variables del archivo .env en todo el Back
dotenv.config();

const server = new Server();
