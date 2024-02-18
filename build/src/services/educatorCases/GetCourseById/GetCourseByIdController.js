"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourseByIdController = void 0;
class GetCourseByIdController {
    constructor(getCourseByIdUseCase) {
        this.getCourseByIdUseCase = getCourseByIdUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        try {
            const course = await this.getCourseByIdUseCase.execute({
                courseId: course_id
            });
            return response.status(200).json({
                course
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetCourseByIdController = GetCourseByIdController;
