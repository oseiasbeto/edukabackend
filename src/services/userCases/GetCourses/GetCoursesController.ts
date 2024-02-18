import { Request, Response } from "express";
import { GetCoursesUseCase } from "./GetCoursesUseCase";

export class GetCoursesController {
    constructor(
        private getCoursesUseCase: GetCoursesUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)
        const format = request.query.format
        try {
            const courses = await this.getCoursesUseCase.execute({
                page,
                limit,
                format
            })
            return response.status(200).json({ courses })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}