"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCoursesController = void 0;
class SearchCoursesController {
    constructor(searchCoursesUseCase) {
        this.searchCoursesUseCase = searchCoursesUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        const { keywords } = request.query;
        try {
            const courses = await this.searchCoursesUseCase.execute({
                page,
                limit,
                keywords
            });
            return response.status(200).json({
                courses
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.SearchCoursesController = SearchCoursesController;
