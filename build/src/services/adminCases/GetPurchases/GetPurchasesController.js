"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPurchasesController = void 0;
class GetPurchasesController {
    constructor(getPurchasesUseCase) {
        this.getPurchasesUseCase = getPurchasesUseCase;
    }
    async handle(request, response) {
        const page = Number(request.query.page);
        const limit = Number(request.query.limit);
        try {
            const purchases = await this.getPurchasesUseCase.execute({
                page,
                limit
            });
            return response.status(200).json([
                purchases
            ]);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.GetPurchasesController = GetPurchasesController;
