"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureAuthentication_1 = require("../../middlewares/ensureAuthentication");
const GetCoursesPushed_1 = require("./GetCoursesPushed");
const ActiveCourse_1 = require("./ActiveCourse");
const GenerateEnrollment_1 = require("./GenerateEnrollment");
const ensureAdmin_1 = require("../../middlewares/ensureAdmin");
const GetPurchases_1 = require("./GetPurchases");
const router = express_1.Router();
router.get("/admin/purchases", ensureAuthentication_1.ensureAuthentication, ensureAdmin_1.ensureAdmin, (request, response) => {
    GetPurchases_1.getPurchasesController.handle(request, response);
});
router.put("/admin/enrollments/:course_id/:customer_id", ensureAuthentication_1.ensureAuthentication, ensureAdmin_1.ensureAdmin, (request, response) => {
    GenerateEnrollment_1.generateEnrollmentController.handle(request, response);
});
router.put("/admin/courses/:course_id", ensureAuthentication_1.ensureAuthentication, ensureAdmin_1.ensureAdmin, (request, response) => {
    ActiveCourse_1.activeCourseController.handle(request, response);
});
router.get("/admin/courses/pushed", ensureAuthentication_1.ensureAuthentication, ensureAdmin_1.ensureAdmin, (request, response) => {
    GetCoursesPushed_1.getCoursePushedController.handle(request, response);
});
exports.default = router;
