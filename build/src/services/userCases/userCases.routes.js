"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multerConfig_1 = __importDefault(require("../../config/multerConfig"));
const express_1 = require("express");
const CreateUser_1 = require("./CreateUser");
const AuthUser_1 = require("./AuthUser");
const CheckAccount_1 = require("./CheckAccount");
const ForgotPassword_1 = require("./ForgotPassword");
const ResetPassword_1 = require("./ResetPassword");
const CreatePorchase_1 = require("./CreatePorchase");
const ensureAuthentication_1 = require("../../middlewares/ensureAuthentication");
const FindPurchaseById_1 = require("./FindPurchaseById");
const GetCourses_1 = require("./GetCourses");
const ClassRoom_1 = require("./ClassRoom");
const LoadSession_1 = require("./LoadSession");
const GetLessionById_1 = require("./GetLessionById");
const UpdateOneUser_1 = require("./UpdateOneUser");
const UpdateOneAvatar_1 = require("./UpdateOneAvatar");
const SearchCourses_1 = require("./SearchCourses");
const GetMyEnrollments_1 = require("./GetMyEnrollments");
const UserFindById_1 = require("./UserFindById");
const router = express_1.Router();
router.post("/", (request, response) => {
    response.status(200).json({
        message: "welcome to api from edukaafrica."
    });
});
router.post("/users/signup", (request, response) => {
    CreateUser_1.createUserController.handle(request, response);
});
router.post("/users/signin", (request, response) => {
    AuthUser_1.authUserController.handle(request, response);
});
router.get("/users/check_account/:token", (request, response) => {
    CheckAccount_1.checkAccountController.handle(request, response);
});
router.post("/users/forgot_password", (request, response) => {
    ForgotPassword_1.forgotPasswordController.handle(request, response);
});
router.post("/users/reset_password/:token", (request, response) => {
    ResetPassword_1.resetPasswordController.handle(request, response);
});
router.put("/users", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    UpdateOneUser_1.updateOneUserController.handle(request, response);
});
router.put("/users/avatar", ensureAuthentication_1.ensureAuthentication, multer_1.default(multerConfig_1.default).single("file"), (request, response) => {
    UpdateOneAvatar_1.updateOneAvatarController.handle(request, response);
});
router.post("/users/purchase/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    CreatePorchase_1.createPurchaseController.handle(request, response);
});
router.get("/users/purchase/:purchase_id", (request, response) => {
    FindPurchaseById_1.findPurchaseByIdController.handle(request, response);
});
router.get("/users/courses", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetCourses_1.getCoursesController.handle(request, response);
});
router.get("/users/enrollments", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetMyEnrollments_1.getMyEnrollmentsController.handle(request, response);
});
router.get("/users/courses/search", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    SearchCourses_1.searchCoursesController.handle(request, response);
});
router.get("/users/classroom/:course_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    ClassRoom_1.classRoomController.handle(request, response);
});
router.get("/users/lesson/:lesson_id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    GetLessionById_1.getLessonByIdController.handle(request, response);
});
router.get("/users/user/:id", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    UserFindById_1.userFindByIdController.handle(request, response);
});
router.get("/users/loadsession", ensureAuthentication_1.ensureAuthentication, (request, response) => {
    LoadSession_1.loadSessionController.handle(request, response);
});
exports.default = router;
