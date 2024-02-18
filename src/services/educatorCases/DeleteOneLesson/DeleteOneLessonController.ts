import { Request, Response } from "express";
import { DeleteOneLessonUseCase } from "./DeleteOneLessonUseCase";

export class DeleteOneLessonController {
    constructor(
        private deleteOneLessonUseCase: DeleteOneLessonUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { lesson_id } = request.params
        try {
            await this.deleteOneLessonUseCase.execute({
                lessonId: lesson_id
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(404).json({
                message: err.message
            })
        }
    }
}