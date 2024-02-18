import { Request, Response } from "express";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

export class CreateCourseController {
    constructor(
        private createCourseCase: CreateCourseUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            title, 
            price, 
            category, 
            idioma, 
            emailSupport, 
            description ,
            topics,
            dataStart,
            dataEnd,
            daysatweek,
            format,
            requirement,
            location,
            timeStart,
            timeEnd,
            target,
        } = request.body
        const { user } = request
        const { file } = request
        try {
            const newCourse = await this.createCourseCase.execute({
                title,
                cover: `${file.filename != undefined ? `http://51.222.200.112:3333/files/${file.filename}` : undefined}`,
                price,
                category,
                idioma,
                emailSupport,
                description,
                educator: user._id,
                topics,
                dataStart,
                dataEnd,
                format,
                requirement,
                daysatweek,
                location,
                timeStart,
                timeEnd,
                target,
                tags: [
                    title,
                    price,
                    idioma,
                    category,
                    user.username
                ]
            })
            return response.status(201).json({
                newCourse
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}