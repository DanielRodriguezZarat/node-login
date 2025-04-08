import express from "express";

export class Server {
  private app: express.Application; // Creamos una variable tipo express Application
  private port: string; // Creamos una variable tipo string para el puerto
  constructor() {
    // Cuando se inicie la aplicación se ejecuta el constructor al instante
    this.app = express(); // Le asignamos un valor de tipo express para crear el proyecto
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
