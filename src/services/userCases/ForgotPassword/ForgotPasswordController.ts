import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

export class ForgotPasswordController {
    constructor(
        private forgotPasswordUseCase: ForgotPasswordUseCase
    ) { }
    async handle(request: Request, response: Response) {
        const { email } = request.body

        try {
            await this.forgotPasswordUseCase.execute({
                email
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}