import { Router } from "express";
import { syncUser } from "../controllers/userController.js";

const router = Router()

//  /api/users/sync - POST => sync the clerk user to DB

router.post("/sync", syncUser)

export default router