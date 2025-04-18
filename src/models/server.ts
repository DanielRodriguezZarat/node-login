import express from "express";
import routerProducts from "../routes/ProductRoutes";

export class Server {
  private app: express.Application; // Creamos una variable tipo express Application
  private port: string; // Creamos una variable tipo string para el puerto
  constructor() {
    // Cuando se inicie la aplicación se ejecuta el constructor al instante
    this.app = express(); // Le asignamos un valor de tipo express para crear el proyecto
    this.port = process.env.PORT || "3000"; // Asignamos la ruta al puerto

    this.listen();
    this.router();
  }
  // Listen ayuda a crear la ruta (localhost:3000)
  listen() {
    // Añadimos a la ruta el puerto
    this.app.listen(this.port, () => {
      console.log("Aplicación corriendo en el puerto" + this.port);
    });
  }

  router() {
    this.app.use("/api/products", routerProducts);
  }
}
