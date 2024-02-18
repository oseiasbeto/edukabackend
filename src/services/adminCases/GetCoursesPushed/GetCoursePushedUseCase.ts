import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { IGetCoursePushedRequestDTo } from "./IGetCoursePushedRequestDTO";

export class GetCoursesPushedUseCase {
    constructor(
        private coursesRepository: CoursesRepository
    ) { }
    async execute(data: IGetCoursePushedRequestDTo) {
        if (data.page == undefined) {
            throw new Error("page is required")
        }
        if (data.limit == undefined) {
            throw new Error("limit is required")
        }
        const courses = await this.coursesRepository.getCoursesPushed(data.page, data.limit)
        return courses
    }
}