import { Router } from "express";
import * as productController from "../controllers/productController"

const router = Router()

// GET /api/products -> Get all pproducts (public)
router.get("/", productController.getAllProducts)

router.get("/my", productController.getMyProducts)

router.get("/:id", productController.getProductById)

router.post("/", productController.createProduct)

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

export default router