"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesController = void 0;
class GetCoursesController {
    constructor(getCoursesUseCase) {
        this.getCoursesUseCase = getCoursesUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        const format = request.query.format;
        try {
            const courses = await this.getCoursesUseCase.execute({
                page,
                limit,
                format
            });
            return response.status(200).json({ courses });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetCoursesController = GetCoursesController;
