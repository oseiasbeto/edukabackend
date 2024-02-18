import { PurchasesRepository } from "../../../repositories/PorchasesRepository";
import { IFindPurchaseByIdRequesrDTO } from "./IFindPurchaseByIdRequestDTO";

export class FindPurchaseByIdUseCase {
    constructor(
        private purchasesRepository: PurchasesRepository
    ) { }
    async execute(data: IFindPurchaseByIdRequesrDTO) {
        if (data.id == "" || data.id == undefined) {
            throw new Error("id is required")
        }
        const purchase = await this.purchasesRepository.findById(data.id)
        return purchase
    }
}