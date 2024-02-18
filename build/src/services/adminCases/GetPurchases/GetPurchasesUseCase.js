"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPurchasesUseCase = void 0;
class GetPurchasesUseCase {
    constructor(purchasesRepository) {
        this.purchasesRepository = purchasesRepository;
    }
    async execute(data) {
        if (data.page == undefined) {
            throw new Error("page is required");
        }
        else if (data.limit == undefined) {
            throw new Error("limit is required");
        }
        else {
            const purchases = await this.purchasesRepository.findPurchases(data.page, data.limit);
            return purchases;
        }
    }
}
exports.GetPurchasesUseCase = GetPurchasesUseCase;
