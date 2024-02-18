"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCourseController = void 0;
class UpdateOneCourseController {
    constructor(updateOneCourseUseCase) {
        this.updateOneCourseUseCase = updateOneCourseUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        const { title, category, idioma, description, emailSupport } = request.body;
        try {
            await this.updateOneCourseUseCase.execute({
                id: course_id,
                title,
                category,
                idioma,
                description,
                emailSupport
            });
            return response.status(200).json();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.UpdateOneCourseController = UpdateOneCourseController;
