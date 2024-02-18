import { Request, Response } from "express";
import { CreateLessonUseCase } from "./CreateLessonUseCase";

export class CreateLessonController {
    constructor(
        private createLessonUseCase: CreateLessonUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, idioma, description, videoUrl } = request.body
        const { course_id, module_id } = request.params
        try {
            const newLesson = await this.createLessonUseCase.execute({
                title,
                idioma,
                videoUrl,
                courseId: course_id,
                moduleId: module_id,
                description
            })
            return response.status(201).json({
                newLesson
            })
        } catch (err) {
            return response.status(400).send({
                message: err.message
            })
        }
    }
}