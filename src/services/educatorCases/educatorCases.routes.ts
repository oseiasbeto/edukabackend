import multer from "multer"
import multerConfig from "../../config/multerConfig";
import { Router } from "express";
import { Request, Response } from "express";
import { createCourseController } from "./CreateCourse";
import { ensureAuthentication } from "../../middlewares/ensureAuthentication";
import { createModuleController } from "./CreateModule";
import { createLessonController } from "./CreateLesson";
import { sendCourseToAdminController } from "./SendCourseToAdmin";
import { getCoursesByEducatorController } from "./GetCoursesByEducator";
import { getCourseByIdController } from "./GetCourseById";
import { getModulesByCourseIdController } from "./GetModulesByCourseId";
import { deleteOneLessonController } from "./DeleteOneLesson";
import { updateOneLessonController } from "./UpdateOneLesson";
import { deleteOneModuleController } from "./DeleteOneModule";
import { updateOneModuleController } from "./UpdateOneModule";
import { deleteOneCourseController } from "./DeleteOneCourse";
import { updateOneCourseController } from "./UpdateOneCourse";
import { toggleActiveModuleController } from "./ToggleActiveModule";

const router = Router()

router.post("/courses/create", ensureAuthentication, multer(multerConfig).single("file"), (request: Request, response: Response) => {
    createCourseController.handle(request, response)
})
router.post("/courses/module/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    createModuleController.handle(request, response)
})
router.post("/courses/lesson/:course_id/:module_id", ensureAuthentication, (request: Request, response: Response) => {
    createLessonController.handle(request, response)
})
router.put("/courses/:course_id/pushed", ensureAuthentication, (request: Request, response: Response) => {
    sendCourseToAdminController.handle(request, response)
})
router.get("/courses/current_educator", ensureAuthentication, (request: Request, response: Response) => {
    getCoursesByEducatorController.handle(request, response)
})
router.get("/courses/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    getCourseByIdController.handle(request, response)
})
router.get("/courses/modules/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    getModulesByCourseIdController.handle(request, response)
})
router.put("/courses/module/:module_id", ensureAuthentication, (request: Request, response: Response) => {
    updateOneModuleController.handle(request, response)
})
router.put("/courses/module/:module_id/toggle_active", ensureAuthentication, (request: Request, response: Response) => {
    toggleActiveModuleController.handle(request, response)
})
router.put("/courses/lesson/:lesson_id", ensureAuthentication, (request: Request, response: Response) => {
    updateOneLessonController.handle(request, response)
})
router.put("/courses/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    updateOneCourseController.handle(request, response)
})
router.delete("/courses/:course_id", ensureAuthentication, (request: Request, response: Response) => {
    deleteOneCourseController.handle(request, response)
})
router.delete("/courses/module/:module_id", ensureAuthentication, (request: Request, response: Response) => {
    deleteOneModuleController.handle(request, response)
})
router.delete("/courses/lesson/:lesson_id", ensureAuthentication, (request: Request, response: Response) => {
    deleteOneLessonController.handle(request, response)
})

export default router 