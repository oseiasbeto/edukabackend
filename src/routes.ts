import { Router } from "express";
import users from "./services/userCases/userCases.routes";
import admin from "./services/adminCases/adminCases.routes";
import educators from "./services/educatorCases/educatorCases.routes";

const router = Router()

router.use(users)
router.use(educators)
router.use(admin)

export { router }