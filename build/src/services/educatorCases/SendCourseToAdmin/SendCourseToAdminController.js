"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCourseToAdminController = void 0;
class SendCourseToAdminController {
    constructor(sendCourseToAdminUseCase) {
        this.sendCourseToAdminUseCase = sendCourseToAdminUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        try {
            await this.sendCourseToAdminUseCase.execute({
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
exports.SendCourseToAdminController = SendCourseToAdminController;
