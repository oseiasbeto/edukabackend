import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { GetCoursesController } from "./GetCoursesController";
import { GetCoursesUseCase } from "./GetCoursesUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const getCoursesUseCase = new GetCoursesUseCase(mongoCoursesRepository)
const getCoursesController = new GetCoursesController(getCoursesUseCase)

export { getCoursesController }