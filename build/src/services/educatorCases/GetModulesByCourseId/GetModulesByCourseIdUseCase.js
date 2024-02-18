"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModulesByCourseIdUseCase = void 0;
class GetModulesByCourseIdUseCase {
    constructor(modulesRepository) {
        this.modulesRepository = modulesRepository;
    }
    async execute(data) {
        if (data.courseId == undefined) {
            throw new Error("user id is required");
        }
        else {
            const modules = await this.modulesRepository.findByCourseId(data.courseId);
            return modules;
        }
    }
}
exports.GetModulesByCourseIdUseCase = GetModulesByCourseIdUseCase;
