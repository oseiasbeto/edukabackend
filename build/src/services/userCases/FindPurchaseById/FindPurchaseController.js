"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPurchaseByIdController = void 0;
class FindPurchaseByIdController {
    constructor(findPurchaseByIdUseCase) {
        this.findPurchaseByIdUseCase = findPurchaseByIdUseCase;
    }
    async handle(request, response) {
        const id = request.params.purchase_id;
        try {
            const purchase = await this.findPurchaseByIdUseCase.execute({
                id
            });
            return response.status(200).json({
                purchase
            });
        }
        catch (err) {
            return response.status(404).json({
                message: err.message
            });
        }
    }
}
exports.FindPurchaseByIdController = FindPurchaseByIdController;
