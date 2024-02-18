import { Request, Response } from "express";
import { UpdateOneCourseUseCase } from "./UpdateOneCourseUseCase";

export class UpdateOneCourseController {
    constructor(
        private updateOneCourseUseCase: UpdateOneCourseUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        const { title, category, idioma, description, emailSupport } = request.body
        try {
            await this.updateOneCourseUseCase.execute({
                id: course_id,
                title,
                category,
                idioma,
                description,
                emailSupport
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}