import { Request, Response } from "express";
import { ClassRoomUseCase } from "./ClassRoomUseCase";

export class ClassRoomController {
    constructor(
        private classRoomUseCase: ClassRoomUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { course_id } = request.params
        const { user } = request
        try {
            const classRoom = await this.classRoomUseCase.execute({
                courseId: course_id,
                studentId: user._id
            })
            return response.status(200).json({
                classRoom
            })
        } catch (err) {
            return response.status(401).json({
                message: err.message
            })
        }
    }
}