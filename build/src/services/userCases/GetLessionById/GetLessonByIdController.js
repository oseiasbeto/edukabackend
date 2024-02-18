"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLessonByIdController = void 0;
class GetLessonByIdController {
    constructor(getLessonByIdUseCase) {
        this.getLessonByIdUseCase = getLessonByIdUseCase;
    }
    async handle(request, response) {
        const { lesson_id } = request.params;
        try {
            const lession = await this.getLessonByIdUseCase.execute({
                lessionId: lesson_id
            });
            return response.status(200).json({
                lession
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetLessonByIdController = GetLessonByIdController;
