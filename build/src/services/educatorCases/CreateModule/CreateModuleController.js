"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModuleController = void 0;
class CreateModuleController {
    constructor(createModuleUseCase) {
        this.createModuleUseCase = createModuleUseCase;
    }
    async handle(request, response) {
        const { title, description, idioma, freeAfterDays } = request.body;
        const { course_id } = request.params;
        try {
            const newModule = await this.createModuleUseCase.execute({
                title,
                description,
                idioma,
                freeAfterDays,
                courseId: course_id
            });
            return response.status(201).json({
                newModule
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.CreateModuleController = CreateModuleController;
