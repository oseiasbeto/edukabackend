import { Request, Response } from "express";
import { GetCoursesPushedUseCase } from "./GetCoursePushedUseCase";

export class GetCoursesPushedController {
    constructor(
        private getCoursesPushedUseCase: GetCoursesPushedUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)
        try {
            const courses = await this.getCoursesPushedUseCase.execute({
                page,
                limit
            })
            return response.status(200).json({ courses })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}