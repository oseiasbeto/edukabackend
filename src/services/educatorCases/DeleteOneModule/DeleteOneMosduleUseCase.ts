import { LessonsRepository } from "../../../repositories/LessonsRepository"
import { ModulesRepository } from "../../../repositories/ModulesRepository"
import { IDeleteOneModuleRequestDTO } from "./IDeleteOneModuleRequestDTO"

export class DeleteOneModuleUseCase {
    constructor(
        private modulesRepository: ModulesRepository,
        private lessonsRepository: LessonsRepository
    ) {}
    async execute(data: IDeleteOneModuleRequestDTO) {
        if (data.moduleId == undefined) {
            throw new Error("module id is required")
        } else {
            const module = await this.modulesRepository.findById(data.moduleId)
            if (!module) {
                throw new Error("module not found")
            } else {
                await this.modulesRepository.deleteOne(module._id)
                await this.lessonsRepository.deleteManyByModuleId(module._id)
            }
        }
    }
}