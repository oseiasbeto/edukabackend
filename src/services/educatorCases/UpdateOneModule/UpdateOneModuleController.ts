import { Request, Response } from "express";
import { UpdateOneModuleUseCase } from "./UpdateOneModuleUseCase";

export class UpdateOneModuleController {
    constructor(
        private updateOneModuleUseCase: UpdateOneModuleUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const {module_id} = request.params
        const {title, freeAfterDays, idioma, description} = request.body

        try {
            await this.updateOneModuleUseCase.execute({
                moduleId: module_id,
                title,
                freeAfterDays,
                idioma,
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