"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesByEducatorController = void 0;
const MongoCoursesRepository_1 = require("../../../repositories/Implementations/MongoCoursesRepository");
const GetCoursesByEducatorController_1 = require("./GetCoursesByEducatorController");
const GetCoursesByEducatorUseCase_1 = require("./GetCoursesByEducatorUseCase");
const mongoCoursesRepositiry = new MongoCoursesRepository_1.MongoCourseRepository();
const getCoursesByEducatorUseCase = new GetCoursesByEducatorUseCase_1.GetCoursesByEducatorUseCase(mongoCoursesRepositiry);
const getCoursesByEducatorController = new GetCoursesByEducatorController_1.GetCoursesByEducatorController(getCoursesByEducatorUseCase);
exports.getCoursesByEducatorController = getCoursesByEducatorController;