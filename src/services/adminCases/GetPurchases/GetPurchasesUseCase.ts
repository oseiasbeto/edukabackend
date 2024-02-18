import { PurchasesRepository } from "../../../repositories/PorchasesRepository";
import { IGetPurchasesRequestDTO } from "./IGetPurchasesRequestDTO";

export class GetPurchasesUseCase {
    constructor(
        private purchasesRepository: PurchasesRepository
    ) {}
    async execute(data: IGetPurchasesRequestDTO) {
        if (data.page == undefined) {
            throw new Error("page is required")
        } else if (data.limit == undefined) {
            throw new Error("limit is required")
        } else {
            const purchases = await this.purchasesRepository.findPurchases(data.page, data.limit)
            return purchases
        }
    }
}