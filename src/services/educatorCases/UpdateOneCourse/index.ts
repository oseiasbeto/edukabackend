import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { UpdateOneCourseController } from "./UpdateOneCourseController";
import { UpdateOneCourseUseCase } from "./UpdateOneCourseUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const updateOneCourseUseCase = new UpdateOneCourseUseCase(mongoCoursesRepository)
const updateOneCourseController = new UpdateOneCourseController(updateOneCourseUseCase)

export { updateOneCourseController }