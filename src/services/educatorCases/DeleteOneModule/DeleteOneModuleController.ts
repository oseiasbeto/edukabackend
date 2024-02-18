import { Request, Response } from "express";
import { DeleteOneModuleUseCase } from "./DeleteOneMosduleUseCase";

export class DeleteOneModuleController {
    constructor(
        private deleteOneModuleUseCase: DeleteOneModuleUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { module_id } = request.params
        try {
            await this.deleteOneModuleUseCase.execute({
                moduleId: module_id
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}