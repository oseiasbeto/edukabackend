import { Request, Response } from "express";
import { UpdateOneUserUseCase } from "./UpdateOneUserUseCase";

export class UpadateOneUserController {
    constructor(
        private updateOneUserUseCase: UpdateOneUserUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { user } = request
        const { username, social, description } = request.body
        console.log(username, social, description)
        try {
            await this.updateOneUserUseCase.execute({
                userid: user._id,
                username,
                social,
                description
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}