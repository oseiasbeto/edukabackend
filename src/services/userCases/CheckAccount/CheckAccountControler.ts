import { Request, Response } from "express";
import { CheckAccountUseCase } from "./CheckAccounUseCase";

export class CheckAccountController {
    constructor(
        private checkAccountUseCase: CheckAccountUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.params
        try {
            await this.checkAccountUseCase.execute({ token })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}