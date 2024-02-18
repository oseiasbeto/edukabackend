"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPurchaseByIdUseCase = void 0;
class FindPurchaseByIdUseCase {
    constructor(purchasesRepository) {
        this.purchasesRepository = purchasesRepository;
    }
    async execute(data) {
        if (data.id == "" || data.id == undefined) {
            throw new Error("id is required");
        }
        const purchase = await this.purchasesRepository.findById(data.id);
        return purchase;
    }
}
exports.FindPurchaseByIdUseCase = FindPurchaseByIdUseCase;
