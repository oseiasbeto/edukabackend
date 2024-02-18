"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesByEducatorUseCase = void 0;
class GetCoursesByEducatorUseCase {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.userId == '' || data.userId == undefined) {
            throw new Error("user id is required");
        }
        else if (data.page == undefined) {
            throw new Error("page is required");
        }
        else if (data.limit == undefined) {
            throw new Error("limit is required");
        }
        else {
            const courses = await this.coursesRepository.findByUser(data.userId, data.page, data.limit);
            return courses;
        }
    }
}
exports.GetCoursesByEducatorUseCase = GetCoursesByEducatorUseCase;
