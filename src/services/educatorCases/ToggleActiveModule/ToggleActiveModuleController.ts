import { Request, Response } from "express";
import { ToggleActiveModuleUseCase } from "./ToggleActiveModuleUseCase";

export class ToggleActiveModuleController {
    constructor(
        private toggleActiveModuleUseCase: ToggleActiveModuleUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { module_id } = request.params
        const { action } = request.body

        try {
            await this.toggleActiveModuleUseCase.execute({
                moduleId: module_id,
                action
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}