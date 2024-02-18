import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { CreateModuleController } from "./CreateModuleController";
import { CreateModuleUseCase } from "./CreateModuleUseCase";

const mongoModulesRepository = new MongoModulesRepository()
const mongoCoursesRepository = new MongoCourseRepository()
const createModuleUseCase = new CreateModuleUseCase(mongoModulesRepository, mongoCoursesRepository)
const createModuleController = new CreateModuleController(createModuleUseCase)

export { createModuleController }