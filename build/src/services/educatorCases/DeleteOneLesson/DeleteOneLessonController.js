"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLessonController = void 0;
class DeleteOneLessonController {
    constructor(deleteOneLessonUseCase) {
        this.deleteOneLessonUseCase = deleteOneLessonUseCase;
    }
    async handle(request, response) {
        const { lesson_id } = request.params;
        try {
            await this.deleteOneLessonUseCase.execute({
                lessonId: lesson_id
            });
            return response.status(200).json();
        }
        catch (err) {
            return response.status(404).json({
                message: err.message
            });
        }
    }
}
exports.DeleteOneLessonController = DeleteOneLessonController;
