"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userRepetido = yield user_1.User.findOne({ where: { username: username } });
    if (userRepetido) {
        return res.status(400).json({
            msg: "Usuario ya registrado, por favor ingresar otro username",
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield user_1.User.create({
            username,
            password: hashedPassword,
        });
        res.json({ msg: `Usuario ${username} creado` });
    }
    catch (err) {
        res.status(400).json({
            msg: "No se ha podido registrar",
            error: err,
        });
    }
});
exports.register = register;
const login = (req, res) => {
    console.log("desde loging");
    res.json({ msg: "Desde login", body: req.body });
};
exports.login = login;
