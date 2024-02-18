import { Router } from "express";
import { Request, Response } from "express";
import { ensureAuthentication } from "../../middlewares/ensureAuthentication"
import { getCoursePushedController } from "./GetCoursesPushed";
import { activeCourseController } from "./ActiveCourse";
import { generateEnrollmentController } from "./GenerateEnrollment";
import { ensureAdmin } from "../../middlewares/ensureAdmin";
import { getPurchasesController } from "./GetPurchases";

const router = Router()

router.get("/admin/purchases", ensureAuthentication, ensureAdmin, (request: Request, response: Response) => {
    getPurchasesController.handle(request, response)
})
router.put("/admin/enrollments/:course_id/:customer_id", ensureAuthentication, ensureAdmin, (request: Request, response: Response) => {
    generateEnrollmentController.handle(request, response)
})
router.put("/admin/courses/:course_id", ensureAuthentication, ensureAdmin, (request: Request, response: Response) => {
    activeCourseController.handle(request, response)
})
router.get("/admin/courses/pushed", ensureAuthentication, ensureAdmin, (request: Request, response: Response) => {
    getCoursePushedController.handle(request, response)
})

export default router 