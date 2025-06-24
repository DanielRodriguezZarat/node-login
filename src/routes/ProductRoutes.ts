// Importamos el router de express y la función de mi controlador
import { Router } from "express";
import { getProductos } from "../controllers/ProductController";

// Creamos un nuevo router
const router = Router();

// Creamos la ruta principal para obtener los productos
router.get("/", getProductos);

// Exportamos la ruta
export default router;
