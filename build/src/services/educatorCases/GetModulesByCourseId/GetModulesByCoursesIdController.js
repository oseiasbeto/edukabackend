"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModulesByCoursesIdController = void 0;
class GetModulesByCoursesIdController {
    constructor(getModulesByCourseIdUseCase) {
        this.getModulesByCourseIdUseCase = getModulesByCourseIdUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        try {
            const modules = await this.getModulesByCourseIdUseCase.execute({
                courseId: course_id
            });
            return response.status(200).json({
                modules
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetModulesByCoursesIdController = GetModulesByCoursesIdController;
