import { Request, Response } from "express";
import { UpdateOneAvatarUseCase } from "./UpdateOneAvatarUseCase";

export class UpdateOneAvatarController {
    constructor(
        private updateOneAvatarUseCase: UpdateOneAvatarUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { filename } = request.file
        const { user } = request
        console.log(request.file)
        try {
            await this.updateOneAvatarUseCase.execute({
                userId: user._id,
                filename
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}