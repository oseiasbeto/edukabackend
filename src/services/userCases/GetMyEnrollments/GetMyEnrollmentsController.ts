import { Request, Response } from "express";
import { GetMyEnrollmentsUseCase } from "./GetMyEnrollmentsUseCase";

export class GetMyEnrollmentsController {
    constructor(
        private getMyEnrollmentsUseCase: GetMyEnrollmentsUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)
        const { user } = request
        try {
            const enrollments = await this.getMyEnrollmentsUseCase.execute({
                userId: user._id,
                page,
                limit
            })
            return response.status(200).json({
                enrollments
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}