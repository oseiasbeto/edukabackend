"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePurchaseController = void 0;
class CreatePurchaseController {
    constructor(createPurchaseUseCase) {
        this.createPurchaseUseCase = createPurchaseUseCase;
    }
    async handle(request, response) {
        const { username, email, phone, location } = request.body;
        const { course_id } = request.params;
        const { user } = request;
        try {
            const newPurchase = await this.createPurchaseUseCase.execute({
                course: {
                    id: course_id,
                },
                customer: {
                    id: user._id,
                    username,
                    email,
                    phone,
                    location
                }
            });
            return response.status(201).json({
                newPurchase
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.CreatePurchaseController = CreatePurchaseController;
