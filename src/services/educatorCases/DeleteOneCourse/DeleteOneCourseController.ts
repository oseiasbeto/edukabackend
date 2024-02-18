import { Request, Response } from "express";
import { DeleteOneCourseUseCase } from "./DeleteOneCourseUseCase";

export class DeleteOneCourseController {
    constructor(
        private deleteOneCourseUseCase: DeleteOneCourseUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        try {
            await this.deleteOneCourseUseCase.execute({
                courseId: course_id
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}