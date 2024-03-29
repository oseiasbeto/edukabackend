"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneCourseController = void 0;
const MongoCoursesRepository_1 = require("../../../repositories/Implementations/MongoCoursesRepository");
const MongoLessonsRepository_1 = require("../../../repositories/Implementations/MongoLessonsRepository");
const MongoModulesRepository_1 = require("../../../repositories/Implementations/MongoModulesRepository");
const DeleteOneCourseController_1 = require("./DeleteOneCourseController");
const DeleteOneCourseUseCase_1 = require("./DeleteOneCourseUseCase");
const mongoCoursesRepository = new MongoCoursesRepository_1.MongoCourseRepository();
const mongoModulesRepository = new MongoModulesRepository_1.MongoModulesRepository();
const mongoLessonsRepository = new MongoLessonsRepository_1.MongoLessonsRepository();
const deleteOneCourseUseCase = new DeleteOneCourseUseCase_1.DeleteOneCourseUseCase(mongoCoursesRepository, mongoModulesRepository, mongoLessonsRepository);
const deleteOneCourseController = new DeleteOneCourseController_1.DeleteOneCourseController(deleteOneCourseUseCase);
exports.deleteOneCourseController = deleteOneCourseController;
