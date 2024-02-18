import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { DeleteOneCourseController } from "./DeleteOneCourseController";
import { DeleteOneCourseUseCase } from "./DeleteOneCourseUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const mongoModulesRepository = new MongoModulesRepository()
const mongoLessonsRepository = new MongoLessonsRepository()

const deleteOneCourseUseCase = new DeleteOneCourseUseCase(mongoCoursesRepository, mongoModulesRepository, mongoLessonsRepository)

const deleteOneCourseController = new DeleteOneCourseController(deleteOneCourseUseCase)

export { deleteOneCourseController }