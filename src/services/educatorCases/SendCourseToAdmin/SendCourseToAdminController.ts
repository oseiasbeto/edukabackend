import { Request, Response } from "express";
import { SendCourseToAminUseCase } from "./SendCourseToAdminUseCase";

export class SendCourseToAdminController {
    constructor(
        private sendCourseToAdminUseCase: SendCourseToAminUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        try {
            await this.sendCourseToAdminUseCase.execute({
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