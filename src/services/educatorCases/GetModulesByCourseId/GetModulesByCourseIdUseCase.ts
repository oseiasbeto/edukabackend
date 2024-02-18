import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IGetModulesByCoursesIdRequestDTO } from "./IGetModulesByCoursesIdRequestDTO";

export class GetModulesByCourseIdUseCase {
    constructor(
        private modulesRepository: ModulesRepository
    ) { }
    async execute(data: IGetModulesByCoursesIdRequestDTO) {
        if (data.courseId == undefined) {
            throw new Error("user id is required")
        } else {
            const modules = await this.modulesRepository.findByCourseId(data.courseId)
            return modules
        }
    }
}