"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCoursesUseCase = void 0;
class SearchCoursesUseCase {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.page == undefined) {
            throw new Error("page is required");
        }
        else if (data.limit == undefined) {
            throw new Error("limit is required");
        }
        else if (data.keywords == "") {
            throw new Error("keywords is required");
        }
        else {
            const courses = await this.coursesRepository.searcCourses(data.page, data.limit, data.keywords);
            return courses;
        }
    }
}
exports.SearchCoursesUseCase = SearchCoursesUseCase;
