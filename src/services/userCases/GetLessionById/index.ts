import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { GetLessonByIdController } from "./GetLessonByIdController";
import { GetLessonByIdUseCase } from "./GetLessonByIdUseCase";

const mongoLessonsRepository = new MongoLessonsRepository()
const mongoModulesRepository = new MongoModulesRepository()
const getLessonByIdUseCase = new GetLessonByIdUseCase(mongoLessonsRepository, mongoModulesRepository)
const getLessonByIdController = new GetLessonByIdController(getLessonByIdUseCase)

export { getLessonByIdController }