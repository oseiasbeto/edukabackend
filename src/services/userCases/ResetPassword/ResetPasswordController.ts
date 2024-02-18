import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

export class ResetPasswordController {
    constructor(
        private resetPasswordUseCase: ResetPasswordUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.params
        const { password } = request.body

        try {
            await this.resetPasswordUseCase.execute({
                token,
                password
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}