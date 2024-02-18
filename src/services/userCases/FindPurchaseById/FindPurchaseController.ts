import { Request, Response } from "express";
import { FindPurchaseByIdUseCase } from "./FindPurchaseByIdUseCase";

export class FindPurchaseByIdController {
    constructor(
        private findPurchaseByIdUseCase: FindPurchaseByIdUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.purchase_id
        try {
            const purchase = await this.findPurchaseByIdUseCase.execute({
                id
            })
            return response.status(200).json({
                purchase
            })
        } catch (err) {
            return response.status(404).json({
                message: err.message
            })

        }
    }
}