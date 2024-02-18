import { Request, Response } from "express";
import { UpdateOneLessonUseCase } from "./UpdateOneLessonUseCase";

export class UpdateOneLessonController {
    constructor(
        private updateOneLessonUseCase: UpdateOneLessonUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { lesson_id } = request.params
        const { title, idioma, videoUrl, description } = request.body
        try {
            await this.updateOneLessonUseCase.execute({
                lessonId: lesson_id,
                title,
                idioma,
                videoUrl,
                description
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}