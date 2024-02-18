"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesController = void 0;
const MongoCoursesRepository_1 = require("../../../repositories/Implementations/MongoCoursesRepository");
const GetCoursesController_1 = require("./GetCoursesController");
const GetCoursesUseCase_1 = require("./GetCoursesUseCase");
const mongoCoursesRepository = new MongoCoursesRepository_1.MongoCourseRepository();
const getCoursesUseCase = new GetCoursesUseCase_1.GetCoursesUseCase(mongoCoursesRepository);
const getCoursesController = new GetCoursesController_1.GetCoursesController(getCoursesUseCase);
exports.getCoursesController = getCoursesController;
