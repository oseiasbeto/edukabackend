import { Request, Response } from "express";
import { CreateModuleUseCase } from "./CreateModuleUseCase";

export class CreateModuleController {
    constructor(
        private createModuleUseCase: CreateModuleUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, idioma, freeAfterDays } = request.body
        const { course_id } = request.params
        try {
            const newModule = await this.createModuleUseCase.execute({
                title,
                description,
                idioma,
                freeAfterDays,
                courseId: course_id
            })
            return response.status(201).json({
                newModule
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}