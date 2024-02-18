import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { GetCoursesByEducatorController } from "./GetCoursesByEducatorController";
import { GetCoursesByEducatorUseCase } from "./GetCoursesByEducatorUseCase";

const mongoCoursesRepositiry = new MongoCourseRepository()
const getCoursesByEducatorUseCase = new GetCoursesByEducatorUseCase(mongoCoursesRepositiry)
const getCoursesByEducatorController = new GetCoursesByEducatorController(getCoursesByEducatorUseCase)

export { getCoursesByEducatorController }