import { Request, Response } from "express";
import { LoadSessionUseCase } from "./LoadSessionUseCase";

export class LoadSessionController {
    constructor(
        private loadSessionUseCase: LoadSessionUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { user } = request
        try {
            const currentUser = await this.loadSessionUseCase.execute({
                userId: user._id
            })
            return response.status(200).json({
                currentUser
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}