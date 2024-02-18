import crypto from "crypto"
import { Course } from "../../../domain/Course";
import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { ICreateCourseRequestDTO } from "./ICreateCourseRequestDTO";

export class CreateCourseUseCase {
    constructor(
        private courseRepository: CoursesRepository
    ) { }
    async execute(data: ICreateCourseRequestDTO) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required")
        }
        if (data.cover == "" || data.cover == undefined) {
            throw new Error("cover is required")
        }
        if (data.price == "" || data.price == undefined) {
            throw new Error("price is required")
        }
        if (data.category == "" || data.category == undefined) {
            throw new Error("category is required")
        }
        if (data.educator == "" || data.educator == undefined) {
            throw new Error("educator is required")
        }
        const generateId = crypto.randomBytes(3).toString("hex")
        const course = new Course({
            id: generateId,
            title: data.title,
            cover: data.cover,
            price: data.price,
            category: data.category,
            idioma: data.idioma,
            description: data.description,
            emailSupport: data.emailSupport,
            educator: data.educator,
            topics: data.topics,
            dataStart: data.dataStart,
            dataEnd: data.dataEnd,
            format: data.format,
            requirement: data.requirement,
            location: data.location,
            timeStart: data.timeStart,
            timeEnd: data.timeEnd,
            target: data.target,
            tags: data.tags
        })
        const newCourse = await this.courseRepository.save(course)
        return newCourse
    }
}