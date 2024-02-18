"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourseByIdUseCase = void 0;
class GetCourseByIdUseCase {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.courseId == undefined) {
            throw new Error("user id is required");
        }
        else {
            const course = await this.coursesRepository.findBySecondId(data.courseId);
            if (!course) {
                throw new Error("course not found");
            }
            else {
                return course;
            }
        }
    }
}
exports.GetCourseByIdUseCase = GetCourseByIdUseCase;
