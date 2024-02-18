import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { ISearchCoursesRequestDTO } from "./ISearchCoursesRequestDTO";

export class SearchCoursesUseCase {
    constructor(
        private coursesRepository: CoursesRepository
    ) {}
    async execute(data: ISearchCoursesRequestDTO) {
        if (data.page == undefined) {
            throw new Error("page is required")
        }
        else if (data.limit == undefined) {
            throw new Error("limit is required")
        }
        else if (data.keywords == "") {
            throw new Error("keywords is required")
        } else {
            const courses = await this.coursesRepository.searcCourses(data.page, data.limit, data.keywords)
            return courses
        }
    }
}