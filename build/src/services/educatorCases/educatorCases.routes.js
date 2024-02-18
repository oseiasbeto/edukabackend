"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multerConfig_1 = __importDefault(require("../../config/multerConfig"));
const express_1 = require("express");
const CreateCourse_1 = require("./CreateCourse");
const ensureAuthentication_1 = require("../../middlewares/ensureAuthentication");
const CreateModule_1 = require("./CreateModule");
const CreateLesson_1 = require("./CreateLesson");
const SendCourseToAdmin_1 = require("./SendCourseToAdmin");
const GetCoursesByEducator_1 = require("./GetCoursesByEducator");
const GetCourseById_1 = require("./GetCourseById");
const GetModulesByCourseId_1 = require("./GetModulesByCourseId");
const DeleteOneLesson_1 = require("./DeleteOneLesson");
const UpdateOneLesson_1 = require("./UpdateOneLesson");
const DeleteOneModule_1 = require("./DeleteOneModule");
const UpdateOneModule_1 = require("./UpdateOneModule");
const DeleteOneCourse_1 = require("./DeleteOneCourse");
const UpdateOneCourse_1 = require("./UpdateOneCourse");
const ToggleActiveModule_1 = require("./ToggleActiveModule");
const router = express_1.Router();
router.post("/courses/create", ensureAuthentication_1.ensureAuthentication, multer_1.default(multerConfig_1.default).single("file"), (request, response) => {
    CreateCourse_1.createCourseController.handle(request, response);
});
router.post("/courses/module/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    CreateModule_1.createModuleController.handle(request, response);
});
router.post("/courses/lesson/:course_id/:module_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    CreateLesson_1.createLessonController.handle(request, response);
});
router.put("/courses/:course_id/pushed", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    SendCourseToAdmin_1.sendCourseToAdminController.handle(request, response);
});
router.get("/courses/current_educator", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetCoursesByEducator_1.getCoursesByEducatorController.handle(request, response);
});
router.get("/courses/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetCourseById_1.getCourseByIdController.handle(request, response);
});
router.get("/courses/modules/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetModulesByCourseId_1.getModulesByCourseIdController.handle(request, response);
});
router.put("/courses/module/:module_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    UpdateOneModule_1.updateOneModuleController.handle(request, response);
});
router.put("/courses/module/:module_id/toggle_active", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    ToggleActiveModule_1.toggleActiveModuleController.handle(request, response);
});
router.put("/courses/lesson/:lesson_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    UpdateOneLesson_1.updateOneLessonController.handle(request, response);
});
router.put("/courses/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    UpdateOneCourse_1.updateOneCourseController.handle(request, response);
});
router.delete("/courses/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    DeleteOneCourse_1.deleteOneCourseController.handle(request, response);
});
router.delete("/courses/module/:module_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    DeleteOneModule_1.deleteOneModuleController.handle(request, response);
});
router.delete("/courses/lesson/:lesson_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    DeleteOneLesson_1.deleteOneLessonController.handle(request, response);
});
exports.default = router;
