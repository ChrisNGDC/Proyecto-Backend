import { Router } from "express";
import { eliminarProductosController } from "../controllers/productosDelete.controller.js"

const router = Router()

router.delete('/productos/:id', eliminarProductosController)

export default router