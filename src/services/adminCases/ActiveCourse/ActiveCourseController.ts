import { Request, Response } from "express";
import { ActivePurchaseUseCase } from "./ActiveCourseUseCase";

export class ActivePurchaseController {
    constructor(
        private activePurchaseUseCase: ActivePurchaseUseCase
    ) { }
    async handle(request: Request, response: Response) {
        const { course_id } = request.params
        try {
            await this.activePurchaseUseCase.execute({
                idCourse: course_id
            })
            return response.status(200).json()
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}