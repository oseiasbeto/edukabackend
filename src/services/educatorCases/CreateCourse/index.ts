import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { CreateCourseController } from "./CreateCourseController";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const createCourseCase = new CreateCourseUseCase(mongoCoursesRepository)
const createCourseController = new CreateCourseController(createCourseCase)

export { createCourseController }