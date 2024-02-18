import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IToggleActiveModuleRequestDTO } from "./IToggleActiveModuleRequestDTO";

export class ToggleActiveModuleUseCase {
    constructor(
        private modulesRepository: ModulesRepository
    ) { }
    async execute(data: IToggleActiveModuleRequestDTO) {
        if (data.moduleId == undefined) {
            throw new Error("module is required")
        } else if (data.action == undefined) {
            throw new Error("action is required")
        } else {
            const module = await this.modulesRepository.findById(data.moduleId)
            if (!module) {
                throw new Error("module not found")
            } else {
                await this.modulesRepository.isActive(data.moduleId, data.action)
            }
        }
    }
}