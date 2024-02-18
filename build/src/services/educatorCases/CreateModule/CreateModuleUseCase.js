"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModuleUseCase = void 0;
const Module_1 = require("../../../domain/Module");
class CreateModuleUseCase {
    constructor(moduleRepository, coursesRepository) {
        this.moduleRepository = moduleRepository;
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required");
        }
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("courseId is required");
        }
        const course = await this.coursesRepository.findById(data.courseId);
        if (!course) {
            throw new Error("course not found");
        }
        const module = new Module_1.Module({
            title: data.title,
            courseId: data.courseId,
            description: data.description,
            idioma: data.idioma,
            freeAt: data.freeAfterDays
        });
        const newModule = await this.moduleRepository.save(module);
        return newModule;
    }
}
exports.CreateModuleUseCase = CreateModuleUseCase;
