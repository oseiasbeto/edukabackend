"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleActiveModuleUseCase = void 0;
class ToggleActiveModuleUseCase {
    constructor(modulesRepository) {
        this.modulesRepository = modulesRepository;
    }
    async execute(data) {
        if (data.moduleId == undefined) {
            throw new Error("module is required");
        }
        else if (data.action == undefined) {
            throw new Error("action is required");
        }
        else {
            const module = await this.modulesRepository.findById(data.moduleId);
            if (!module) {
                throw new Error("module not found");
            }
            else {
                await this.modulesRepository.isActive(data.moduleId, data.action);
            }
        }
    }
}
exports.ToggleActiveModuleUseCase = ToggleActiveModuleUseCase;
