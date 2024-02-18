import { Request, Response } from "express";
import { CreatePurchaseUseCase } from "./CreatePorchaseUseCase";

export class CreatePurchaseController {
    constructor(
        private createPurchaseUseCase: CreatePurchaseUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, email, phone, location } = request.body
        const { course_id } = request.params
        const { user } = request
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
            })
            return response.status(201).json({
                newPurchase
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}