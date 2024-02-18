import { Request, Response } from "express";
import { SearchCoursesUseCase } from "./SearchCoursesUseCase";

export class SearchCoursesController {
    constructor(
        private searchCoursesUseCase: SearchCoursesUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const page = Number(request.query.page)
        const limit = Number(request.query.limit)
        const { keywords } = request.query

        try {
            const courses = await this.searchCoursesUseCase.execute({
                page,
                limit,
                keywords
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