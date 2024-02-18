import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { GetCourseByIdController } from "./GetCourseByIdController";
import { GetCourseByIdUseCase } from "./GetCourseByIdUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const getCourseByIdUseCase = new GetCourseByIdUseCase(mongoCoursesRepository)
const getCourseByIdController = new GetCourseByIdController(getCourseByIdUseCase)

export { getCourseByIdController }