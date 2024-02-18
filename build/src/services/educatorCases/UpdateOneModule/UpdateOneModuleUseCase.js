"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneModuleUseCase = void 0;
class UpdateOneModuleUseCase {
    constructor(modulesRepository) {
        this.modulesRepository = modulesRepository;
    }
    async execute(data) {
        if (data.moduleId == undefined) {
            throw new Error("module id is required");
        }
        else {
            const module = await this.modulesRepository.findById(data.moduleId);
            if (!module) {
                throw new Error("module is not found");
            }
            const dataObject = {
                _id: module._id,
                moduleId: module.moduleId,
                courseId: module.courseId,
                title: data.title,
                description: data.description,
                idioma: data.idioma,
                freeAt: data.freeAfterDays
            };
            await this.modulesRepository.updateOne(dataObject);
        }
    }
}
exports.UpdateOneModuleUseCase = UpdateOneModuleUseCase;
