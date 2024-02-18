import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { GetModulesByCourseIdUseCase } from "./GetModulesByCourseIdUseCase";
import { GetModulesByCoursesIdController } from "./GetModulesByCoursesIdController";

const mongoModulesRepository = new MongoModulesRepository()
const getModulesByCourseIdUseCase = new GetModulesByCourseIdUseCase(mongoModulesRepository)
const getModulesByCourseIdController = new GetModulesByCoursesIdController(getModulesByCourseIdUseCase)

export { getModulesByCourseIdController }