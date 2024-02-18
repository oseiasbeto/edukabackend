"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesByEducatorController = void 0;
class GetCoursesByEducatorController {
    constructor(getCoursesByEducatorUseCase) {
        this.getCoursesByEducatorUseCase = getCoursesByEducatorUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        const { user } = request;
        try {
            const courses = await this.getCoursesByEducatorUseCase.execute({
                userId: user._id,
                page,
                limit
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
exports.GetCoursesByEducatorController = GetCoursesByEducatorController;
