"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCoursesPushedController = void 0;
class GetCoursesPushedController {
    constructor(getCoursesPushedUseCase) {
        this.getCoursesPushedUseCase = getCoursesPushedUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        try {
            const courses = await this.getCoursesPushedUseCase.execute({
                page,
                limit
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
exports.GetCoursesPushedController = GetCoursesPushedController;
