import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { DeleteOneLessonController } from "./DeleteOneLessonController";
import { DeleteOneLessonUseCase } from "./DeleteOneLessonUseCase";

const mongoLessonsRepository = new MongoLessonsRepository()
const mongoModulesRepository = new MongoModulesRepository()

const deleteOneLessonUseCase = new DeleteOneLessonUseCase(mongoLessonsRepository, mongoModulesRepository)
const deleteOneLessonController = new DeleteOneLessonController(deleteOneLessonUseCase)

export { deleteOneLessonController }