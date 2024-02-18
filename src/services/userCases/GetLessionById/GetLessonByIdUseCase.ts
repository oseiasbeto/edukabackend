import { LessonsRepository } from "../../../repositories/LessonsRepository";
import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IGetLessonRequestDTO } from "./IGetLessonRequestDTO";

export class GetLessonByIdUseCase {
    constructor(
        private lessionsRepository: LessonsRepository,
        private modulesRepository: ModulesRepository
    ) { }
    async execute(data: IGetLessonRequestDTO) {
        if (data.lessionId == undefined) {
            throw new Error("lessionId is required")
        } else {
            const lession = await this.lessionsRepository.findById(data.lessionId)
            if (!lession) {
                throw new Error("lession not found")
            } else {
                const module = await this.modulesRepository.findByLessonId(lession._id)
                if (!module) {
                    throw new Error("module not found")
                } else if(!module.isActive) {
                    throw new Error("the module this lesson isn't active")
                }
                return lession
            }
        }
    }
}