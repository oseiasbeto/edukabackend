"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesUseCase = void 0;
class GetCoursesUseCase {
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
        if (data.format == undefined) {
            throw new Error("format is required");
        }
        const courses = await this.coursesRepository.getCoursesActive(data.page, data.limit, data.format);
        return courses;
    }
}
exports.GetCoursesUseCase = GetCoursesUseCase;
