"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLessonByIdController = void 0;
const MongoLessonsRepository_1 = require("../../../repositories/Implementations/MongoLessonsRepository");
const MongoModulesRepository_1 = require("../../../repositories/Implementations/MongoModulesRepository");
const GetLessonByIdController_1 = require("./GetLessonByIdController");
const GetLessonByIdUseCase_1 = require("./GetLessonByIdUseCase");
const mongoLessonsRepository = new MongoLessonsRepository_1.MongoLessonsRepository();
const mongoModulesRepository = new MongoModulesRepository_1.MongoModulesRepository();
const getLessonByIdUseCase = new GetLessonByIdUseCase_1.GetLessonByIdUseCase(mongoLessonsRepository, mongoModulesRepository);
const getLessonByIdController = new GetLessonByIdController_1.GetLessonByIdController(getLessonByIdUseCase);
exports.getLessonByIdController = getLessonByIdController;
