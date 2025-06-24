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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const ProductRoutes_1 = __importDefault(require("../routes/ProductRoutes"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const product_1 = require("./product");
const user_1 = require("./user");
class Server {
    constructor() {
        // Cuando se inicie la aplicación se ejecuta el constructor al instante
        this.app = (0, express_1.default)(); // Le asignamos un valor de tipo express para crear el proyecto
        this.port = process.env.PORT || "3000"; // Asignamos la ruta al puerto
        this.listen();
        this.dbConnect();
        this.middleware();
        this.router();
    }
    // Listen ayuda a crear la ruta (localhost:3000)
    listen() {
        // Añadimos a la ruta el puerto
        this.app.listen(this.port, () => {
            console.log("Aplicación corriendo en el puerto" + this.port);
        });
    }
    // Router maneja todas las rutas de nuestra apliación
    router() {
        this.app.use("/api/products", ProductRoutes_1.default);
        this.app.use("/api/users", userRoutes_1.default);
    }
    // Middleware aplicamos todos los sistemas de seguridad
    middleware() {
        // Estamos diciendo que puede transcribir lo que recibimos a tipo json
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_1.Product.sync();
                yield user_1.User.sync();
            }
            catch (error) {
                console.log("Error en la conexión de la base de datos");
            }
        });
    }
}
exports.Server = Server;
