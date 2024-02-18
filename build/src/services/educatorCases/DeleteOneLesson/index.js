"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneLessonController = void 0;
const MongoLessonsRepository_1 = require("../../../repositories/Implementations/MongoLessonsRepository");
const MongoModulesRepository_1 = require("../../../repositories/Implementations/MongoModulesRepository");
const DeleteOneLessonController_1 = require("./DeleteOneLessonController");
const DeleteOneLessonUseCase_1 = require("./DeleteOneLessonUseCase");
const mongoLessonsRepository = new MongoLessonsRepository_1.MongoLessonsRepository();
const mongoModulesRepository = new MongoModulesRepository_1.MongoModulesRepository();
const deleteOneLessonUseCase = new DeleteOneLessonUseCase_1.DeleteOneLessonUseCase(mongoLessonsRepository, mongoModulesRepository);
const deleteOneLessonController = new DeleteOneLessonController_1.DeleteOneLessonController(deleteOneLessonUseCase);
exports.deleteOneLessonController = deleteOneLessonController;
