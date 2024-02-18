import { Request, Response } from "express";
import { UserFindByIdUseCase } from "./UserFindByIdUseCase";

export class UserFindByIdController {
    constructor(
        private userFindByIdUseCase: UserFindByIdUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        try {
            const user = await this.userFindByIdUseCase.execute({
                userId: id
            })
            return response.status(200).json({
                user
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}