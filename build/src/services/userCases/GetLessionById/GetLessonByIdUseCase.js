"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLessonByIdUseCase = void 0;
class GetLessonByIdUseCase {
    constructor(lessionsRepository, modulesRepository) {
        this.lessionsRepository = lessionsRepository;
        this.modulesRepository = modulesRepository;
    }
    async execute(data) {
        if (data.lessionId == undefined) {
            throw new Error("lessionId is required");
        }
        else {
            const lession = await this.lessionsRepository.findById(data.lessionId);
            if (!lession) {
                throw new Error("lession not found");
            }
            else {
                const module = await this.modulesRepository.findByLessonId(lession._id);
                if (!module) {
                    throw new Error("module not found");
                }
                else if (!module.isActive) {
                    throw new Error("the module this lesson isn't active");
                }
                return lession;
            }
        }
    }
}
exports.GetLessonByIdUseCase = GetLessonByIdUseCase;
