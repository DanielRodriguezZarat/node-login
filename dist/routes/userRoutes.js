"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post("/", userController_1.login);
router.post("/registrar", userController_1.register);
exports.default = router;
