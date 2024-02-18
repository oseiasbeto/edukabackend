"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneModuleUseCase = void 0;
class DeleteOneModuleUseCase {
    constructor(modulesRepository, lessonsRepository) {
        this.modulesRepository = modulesRepository;
        this.lessonsRepository = lessonsRepository;
    }
    async execute(data) {
        if (data.moduleId == undefined) {
            throw new Error("module id is required");
        }
        else {
            const module = await this.modulesRepository.findById(data.moduleId);
            if (!module) {
                throw new Error("module not found");
            }
            else {
                await this.modulesRepository.deleteOne(module._id);
                await this.lessonsRepository.deleteManyByModuleId(module._id);
            }
        }
    }
}
exports.DeleteOneModuleUseCase = DeleteOneModuleUseCase;
