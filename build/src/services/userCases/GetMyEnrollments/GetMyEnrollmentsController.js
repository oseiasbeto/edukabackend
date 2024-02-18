"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyEnrollmentsController = void 0;
class GetMyEnrollmentsController {
    constructor(getMyEnrollmentsUseCase) {
        this.getMyEnrollmentsUseCase = getMyEnrollmentsUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        const { user } = request;
        try {
            const enrollments = await this.getMyEnrollmentsUseCase.execute({
                userId: user._id,
                page,
                limit
            });
            return response.status(200).json({
                enrollments
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetMyEnrollmentsController = GetMyEnrollmentsController;
