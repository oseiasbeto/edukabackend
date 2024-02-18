"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLessonUseCase = void 0;
class DeleteOneLessonUseCase {
    constructor(lessonsRepository, modulesRepostory) {
        this.lessonsRepository = lessonsRepository;
        this.modulesRepostory = modulesRepostory;
    }
    async execute(data) {
        if (data.lessonId == undefined) {
            throw new Error("lesson id is required");
        }
        else {
            const lesson = await this.lessonsRepository.findById(data.lessonId);
            if (!lesson) {
                throw new Error("lesson not found");
            }
            else {
                await this.lessonsRepository.deleteOne(lesson._id);
                await this.modulesRepostory.removeLessonById(lesson._id);
            }
        }
    }
}
exports.DeleteOneLessonUseCase = DeleteOneLessonUseCase;
