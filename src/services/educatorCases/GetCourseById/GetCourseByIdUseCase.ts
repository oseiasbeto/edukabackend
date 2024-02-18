import { CoursesRepository } from "../../../repositories/CoursesRepository"
import { IGetCourseByIdRequestDTO } from "./IGetCourseByIdRequestDTO"

export class GetCourseByIdUseCase {
    constructor(
        private coursesRepository: CoursesRepository
    ) { }
    async execute(data: IGetCourseByIdRequestDTO) {
        if (data.courseId == undefined) {
            throw new Error("user id is required")
        } else {
            const course = await this.coursesRepository.findBySecondId(data.courseId)
            if (!course) {
                throw new Error("course not found")
            } else {
                return course
            }

        }
    }
}