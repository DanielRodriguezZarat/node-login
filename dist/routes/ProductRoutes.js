"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos el router de express y la función de mi controlador
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
// Creamos un nuevo router
const router = (0, express_1.Router)();
// Creamos la ruta principal para obtener los productos
router.get("/", ProductController_1.getProductos);
// Exportamos la ruta
exports.default = router;
