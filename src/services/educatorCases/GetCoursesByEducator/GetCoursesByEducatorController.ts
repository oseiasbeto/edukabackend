import { Request, Response } from "express";
import { GetCoursesByEducatorUseCase } from "./GetCoursesByEducatorUseCase";

export class GetCoursesByEducatorController {
    constructor(
        private getCoursesByEducatorUseCase: GetCoursesByEducatorUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)
        const { user } = request
        try {
            const courses = await this.getCoursesByEducatorUseCase.execute({
                userId: user._id,
                page,
                limit
            })
            return response.status(200).json({
                courses
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}