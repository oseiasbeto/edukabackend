import { Request, Response } from "express";
import { GenerateEnrollmentUseCase } from "./GenerateEnrollmentUseCase";

export class GenerateEnrollmentController {
    constructor(
        private generateEnrollmentUseCase: GenerateEnrollmentUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id, customer_id } = request.params
        try {
            await this.generateEnrollmentUseCase.execute({
                courseId: course_id,
                customerId: customer_id
            })
            return response.status(201).json()
        } catch (err) {
            return response.status(401).json({
                message: err.message
            })
        }
    }
}