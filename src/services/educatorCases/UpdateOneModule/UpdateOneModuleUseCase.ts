import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IUpdateOneModuleRequestDTO } from "./IUpdateOneModuleRequestDTO";

export class UpdateOneModuleUseCase {
    constructor(
        private modulesRepository: ModulesRepository
    ) {}
    async execute(data: IUpdateOneModuleRequestDTO) {
        if (data.moduleId == undefined) {
            throw new Error("module id is required")
        } else {
            const module = await this.modulesRepository.findById(data.moduleId)
            if (!module) {
                throw new Error("module is not found")
            }
            const dataObject = {
                _id: module._id,
                moduleId: module.moduleId,
                courseId: module.courseId,
                title: data.title,
                description: data.description,
                idioma: data.idioma,
                freeAt: data.freeAfterDays
            }
            await this.modulesRepository.updateOne(dataObject)
        }
    }
}