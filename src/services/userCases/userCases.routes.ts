import multer from "multer"
import multerConfig from "../../config/multerConfig";
import { Router } from "express";
import { Request, Response } from "express";
import { createUserController } from "./CreateUser";
import { authUserController } from "./AuthUser";
import { checkAccountController } from "./CheckAccount";
import { forgotPasswordController } from "./ForgotPassword";
import { resetPasswordController } from "./ResetPassword";
import { createPurchaseController } from "./CreatePorchase";
import { ensureAuthentication } from "../../middlewares/ensureAuthentication";
import { findPurchaseByIdController } from "./FindPurchaseById";
import { getCoursesController } from "./GetCourses";
import { classRoomController } from "./ClassRoom";
import { loadSessionController } from "./LoadSession";
import { getLessonByIdController } from "./GetLessionById";
import { updateOneUserController } from "./UpdateOneUser";
import { updateOneAvatarController } from "./UpdateOneAvatar";
import { searchCoursesController } from "./SearchCourses";
import { getMyEnrollmentsController } from "./GetMyEnrollments";
import { userFindByIdController } from "./UserFindById";

const router = Router()

router.post("/", (request: Request, response: Response) => {
    response.status(200).json({
        message: "welcome to api from edukaafrica."
    })
})
router.post("/users/signup", (request: Request, response: Response) => {
    createUserController.handle(request, response)
})
router.post("/users/signin", (request: Request, response: Response) => {
    authUserController.handle(request, response)
})
router.get("/users/check_account/:token", (request: Request, response: Response) => {
    checkAccountController.handle(request, response)
})
router.post("/users/forgot_password", (request: Request, response: Response) => {
    forgotPasswordController.handle(request, response)
})
router.post("/users/reset_password/:token", (request: Request, response: Response) => {
    resetPasswordController.handle(request, response)
})
router.put("/users", ensureAuthentication, (request: Request, response: Response) => {
    updateOneUserController.handle(request, response)
})
router.put("/users/avatar", ensureAuthentication, multer(multerConfig).single("file"), (request: Request, response: Response) => {
    updateOneAvatarController.handle(request, response)
})
router.post("/users/purchase/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    createPurchaseController.handle(request, response)
})
router.get("/users/purchase/:purchase_id", (request: Request, response: Response) => {
    findPurchaseByIdController.handle(request, response)
})
router.get("/users/courses", ensureAuthentication, (request: Request, response: Response) => {
    getCoursesController.handle(request, response)
})
router.get("/users/enrollments", ensureAuthentication, (request: Request, response: Response) => {
    getMyEnrollmentsController.handle(request, response)
})
router.get("/users/courses/search", ensureAuthentication, (request: Request, response: Response) => {
    searchCoursesController.handle(request, response)
})
router.get("/users/classroom/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    classRoomController.handle(request, response)
})
router.get("/users/lesson/:lesson_id", ensureAuthentication, (request: Request, response: Response) => {
    getLessonByIdController.handle(request, response)
})
router.get("/users/user/:id", ensureAuthentication, (request: Request, response: Response) => {
    userFindByIdController.handle(request, response)
})
router.get("/users/loadsession", ensureAuthentication, (request: Request, response: Response) => {
    loadSessionController.handle(request, response)
})

export default router 