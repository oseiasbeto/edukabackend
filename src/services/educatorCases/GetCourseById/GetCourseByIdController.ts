import { Request, Response } from "express";
import { GetCourseByIdUseCase } from "./GetCourseByIdUseCase";

export class GetCourseByIdController {
    constructor(
        private getCourseByIdUseCase: GetCourseByIdUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        try {
            const course = await this.getCourseByIdUseCase.execute({
                courseId: course_id
            })
            return response.status(200).json({
                course
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}