"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLessonController = void 0;
class UpdateOneLessonController {
    constructor(updateOneLessonUseCase) {
        this.updateOneLessonUseCase = updateOneLessonUseCase;
    }
    async handle(request, response) {
        const { lesson_id } = request.params;
        const { title, idioma, videoUrl, description } = request.body;
        try {
            await this.updateOneLessonUseCase.execute({
                lessonId: lesson_id,
                title,
                idioma,
                videoUrl,
                description
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
exports.UpdateOneLessonController = UpdateOneLessonController;
