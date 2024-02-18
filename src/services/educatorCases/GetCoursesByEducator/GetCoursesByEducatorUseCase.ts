import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { IGetCoursesByEducatorRequestDTO } from "./IGetCoursesByEducatorRequestDTO";

export class GetCoursesByEducatorUseCase {
    constructor(
        private coursesRepository: CoursesRepository
    ) { }
    async execute(data: IGetCoursesByEducatorRequestDTO) {
        if (data.userId == '' || data.userId == undefined) {
            throw new Error("user id is required")
        } else if (data.page == undefined) {
            throw new Error("page is required")
        } else if (data.limit == undefined) {
            throw new Error("limit is required")
        } else {
            const courses = await this.coursesRepository.findByUser(data.userId, data.page, data.limit)
            return courses
        }
    }
}