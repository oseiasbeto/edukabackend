"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLessonController = void 0;
const MongoLessonsRepository_1 = require("../../../repositories/Implementations/MongoLessonsRepository");
const MongoModulesRepository_1 = require("../../../repositories/Implementations/MongoModulesRepository");
const CreateLessonController_1 = require("./CreateLessonController");
const CreateLessonUseCase_1 = require("./CreateLessonUseCase");
const mongoLessonsRepository = new MongoLessonsRepository_1.MongoLessonsRepository();
const mongoModulesRepository = new MongoModulesRepository_1.MongoModulesRepository();
const createLessonUseCase = new CreateLessonUseCase_1.CreateLessonUseCase(mongoLessonsRepository, mongoModulesRepository);
const createLessonController = new CreateLessonController_1.CreateLessonController(createLessonUseCase);
exports.createLessonController = createLessonController;