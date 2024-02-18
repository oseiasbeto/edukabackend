import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { ISendCourseToAdminRequestDTO } from "./ISendCourseToAdminRequestDTO";

export class SendCourseToAminUseCase {
    constructor(
        private courseRepository: CoursesRepository
    ) { }
    async execute(data: ISendCourseToAdminRequestDTO) {
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("course id is required")
        }
        const query = await this.courseRepository.sendToAdmin(data.courseId)
        if(!query) {
            throw new Error("course not found")
        }
    }
}