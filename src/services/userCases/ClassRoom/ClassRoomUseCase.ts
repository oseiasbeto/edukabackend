import moment from "moment";
import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { EnrollmentsRepository } from "../../../repositories/EnrollmentsRepository";
import { IClassRoomRequestDTO } from "./IClassRoomRequestDTO";

export class ClassRoomUseCase {
    constructor(
        private coursesRepository: CoursesRepository,
        private enrollmentsRepository: EnrollmentsRepository
    ) { }
    async execute(data: IClassRoomRequestDTO) {
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("course id is required")
        }
        if (data.studentId == "" || data.studentId == undefined) {
            throw new Error("student id is required")
        }
        const course = await this.coursesRepository.findById(data.courseId)
        if (!course) {
            throw new Error("course not found")
        }
        const classRoom = await this.coursesRepository.classRoom(data.courseId)

        return {
            course: classRoom.course,
            modules: classRoom.modules,
            isEducator: true
        }
    }
}