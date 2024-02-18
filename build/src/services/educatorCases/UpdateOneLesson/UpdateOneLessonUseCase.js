"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLessonUseCase = void 0;
class UpdateOneLessonUseCase {
    constructor(lessonsRepository) {
        this.lessonsRepository = lessonsRepository;
    }
    async execute(data) {
        if (data.lessonId == undefined) {
            throw new Error("lesson id is required");
        }
        else {
            const lesson = await this.lessonsRepository.findById(data.lessonId);
            if (!lesson) {
                throw new Error("lesson is not found");
            }
            const dataObject = {
                _id: lesson._id,
                moduleId: lesson.moduleId,
                title: data.title,
                idioma: data.idioma,
                videoUrl: data.videoUrl,
                description: data.description
            };
            await this.lessonsRepository.updateOne(dataObject);
        }
    }
}
exports.UpdateOneLessonUseCase = UpdateOneLessonUseCase;
