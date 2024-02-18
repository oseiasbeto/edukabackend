"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLessonController = void 0;
class CreateLessonController {
    constructor(createLessonUseCase) {
        this.createLessonUseCase = createLessonUseCase;
    }
    async handle(request, response) {
        const { title, idioma, description, videoUrl } = request.body;
        const { course_id, module_id } = request.params;
        try {
            const newLesson = await this.createLessonUseCase.execute({
                title,
                idioma,
                videoUrl,
                courseId: course_id,
                moduleId: module_id,
                description
            });
            return response.status(201).json({
                newLesson
            });
        }
        catch (err) {
            return response.status(400).send({
                message: err.message
            });
        }
    }
}
exports.CreateLessonController = CreateLessonController;
