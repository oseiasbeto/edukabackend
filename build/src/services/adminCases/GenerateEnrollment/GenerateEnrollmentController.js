"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateEnrollmentController = void 0;
class GenerateEnrollmentController {
    constructor(generateEnrollmentUseCase) {
        this.generateEnrollmentUseCase = generateEnrollmentUseCase;
    }
    async handle(request, response) {
        const { course_id, customer_id } = request.params;
        try {
            await this.generateEnrollmentUseCase.execute({
                courseId: course_id,
                customerId: customer_id
            });
            return response.status(201).json();
        }
        catch (err) {
            return response.status(401).json({
                message: err.message
            });
        }
    }
}
exports.GenerateEnrollmentController = GenerateEnrollmentController;
