import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { SearchCoursesController } from "./SearchCoursesController";
import { SearchCoursesUseCase } from "./SearchCoursesUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const searchCoursesUseCase = new SearchCoursesUseCase(mongoCoursesRepository)
const searchCoursesController = new SearchCoursesController(searchCoursesUseCase)

export { searchCoursesController }