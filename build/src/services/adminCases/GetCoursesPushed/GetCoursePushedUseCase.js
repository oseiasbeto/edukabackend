"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesPushedUseCase = void 0;
class GetCoursesPushedUseCase {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.page == undefined) {
            throw new Error("page is required");
        }
        if (data.limit == undefined) {
            throw new Error("limit is required");
        }
        const courses = await this.coursesRepository.getCoursesPushed(data.page, data.limit);
        return courses;
    }
}
exports.GetCoursesPushedUseCase = GetCoursesPushedUseCase;
