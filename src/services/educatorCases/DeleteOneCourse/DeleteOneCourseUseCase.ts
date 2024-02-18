import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { LessonsRepository } from "../../../repositories/LessonsRepository";
import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IDeleteOneCourseRequestDTO } from "./IDeleteOneCourseRequestDTO";

export class DeleteOneCourseUseCase {
    constructor(
        private coursesRepository: CoursesRepository,
        private modulesRepository: ModulesRepository,
        private lessonsRepository: LessonsRepository
    ) { }
    async execute(data: IDeleteOneCourseRequestDTO) {
        if (data.courseId == undefined) {
            throw new Error("course id is required")
        } else {
            const course = await this.coursesRepository.findById(data.courseId)
            if (!course) {
                throw new Error("course not found")
            }
            await this.coursesRepository.deleteOne(course._id)
            await this.modulesRepository.deleteManyByCourseId(course._id)
            await this.lessonsRepository.deleteManyByCourseId(course._id)
        }
    }
}