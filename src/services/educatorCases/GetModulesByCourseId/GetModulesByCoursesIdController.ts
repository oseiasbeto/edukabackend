import { Request, Response } from "express";
import { GetModulesByCourseIdUseCase } from "./GetModulesByCourseIdUseCase";

export class GetModulesByCoursesIdController {
    constructor(
        private getModulesByCourseIdUseCase: GetModulesByCourseIdUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        try {
            const modules = await this.getModulesByCourseIdUseCase.execute({
                courseId: course_id
            })
            return response.status(200).json({
                modules
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}