import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { UpdateOneLessonController } from "./UpdateOneLessonController";
import { UpdateOneLessonUseCase } from "./UpdateOneLessonUseCase";

const mongoLessonsRepository = new MongoLessonsRepository()
const updateOneLessonUseCase = new UpdateOneLessonUseCase(mongoLessonsRepository)
const updateOneLessonController = new UpdateOneLessonController(updateOneLessonUseCase)

export { updateOneLessonController }