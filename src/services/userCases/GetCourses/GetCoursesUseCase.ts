import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { IGetCoursePushedRequestDTo } from "../../adminCases/GetCoursesPushed/IGetCoursePushedRequestDTO";

export class GetCoursesUseCase {
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
        if (data.format == undefined) {
            throw new Error("format is required")
        }
        const courses = await this.coursesRepository.getCoursesActive(data.page, data.limit, data.format)
        return courses
    }
}