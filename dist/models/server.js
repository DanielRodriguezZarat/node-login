"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        // Cuando se inicie la aplicación se ejecuta el constructor al instante
        this.app = (0, express_1.default)(); // Le asignamos un valor de tipo express para crear el proyecto
        this.port = "3000"; // Asignamos la ruta al puerto
        console.log(process.env.PORT);
        this.listen();
    }
    // Listen ayuda a crear la ruta (localhost:3000)
    listen() {
        // Añadimos a la ruta el puerto
        this.app.listen(this.port, () => {
            console.log("Aplicación corriendo en el puerto" + this.port);
        });
    }
}
exports.Server = Server;
