"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCourseController = void 0;
class DeleteOneCourseController {
    constructor(deleteOneCourseUseCase) {
        this.deleteOneCourseUseCase = deleteOneCourseUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        try {
            await this.deleteOneCourseUseCase.execute({
                courseId: course_id
            });
            return response.status(200).json();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.DeleteOneCourseController = DeleteOneCourseController;
