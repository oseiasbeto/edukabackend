"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivePurchaseController = void 0;
class ActivePurchaseController {
    constructor(activePurchaseUseCase) {
        this.activePurchaseUseCase = activePurchaseUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        try {
            await this.activePurchaseUseCase.execute({
                idCourse: course_id
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
exports.ActivePurchaseController = ActivePurchaseController;
