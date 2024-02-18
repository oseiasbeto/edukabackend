"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCourseToAminUseCase = void 0;
class SendCourseToAminUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async execute(data) {
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("course id is required");
        }
        const query = await this.courseRepository.sendToAdmin(data.courseId);
        if (!query) {
            throw new Error("course not found");
        }
    }
}
exports.SendCourseToAminUseCase = SendCourseToAminUseCase;
