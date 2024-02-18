import { Request, Response } from "express";
import { GetLessonByIdUseCase } from "./GetLessonByIdUseCase";

export class GetLessonByIdController {
    constructor(
        private getLessonByIdUseCase: GetLessonByIdUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { lesson_id } = request.params
        try {
            const lession = await this.getLessonByIdUseCase.execute({
                lessionId: lesson_id
            })
            return response.status(200).json({
                lession
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}