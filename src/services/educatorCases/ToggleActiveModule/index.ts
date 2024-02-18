import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { ToggleActiveModuleController } from "./ToggleActiveModuleController";
import { ToggleActiveModuleUseCase } from "./ToggleActiveModuleUseCase";

const mongoModulesRepository = new MongoModulesRepository()
const toggleActiveModuleUseCase = new ToggleActiveModuleUseCase(mongoModulesRepository)

const toggleActiveModuleController = new ToggleActiveModuleController(toggleActiveModuleUseCase)

export { toggleActiveModuleController }