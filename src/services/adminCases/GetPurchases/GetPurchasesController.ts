import { Request, Response } from "express";
import { GetPurchasesUseCase } from "./GetPurchasesUseCase";

export class GetPurchasesController {
    constructor(
        private getPurchasesUseCase: GetPurchasesUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)

        try {
            const purchases = await this.getPurchasesUseCase.execute({
                page,
                limit
            })
            return response.status(200).json([
                purchases
            ])
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}