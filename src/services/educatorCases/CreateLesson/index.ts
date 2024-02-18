import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { CreateLessonController } from "./CreateLessonController";
import { CreateLessonUseCase } from "./CreateLessonUseCase";

const mongoLessonsRepository = new MongoLessonsRepository()
const mongoModulesRepository = new MongoModulesRepository()
const createLessonUseCase = new CreateLessonUseCase(mongoLessonsRepository, mongoModulesRepository)
const createLessonController = new CreateLessonController(createLessonUseCase)

export { createLessonController }