"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoomUseCase = void 0;
class ClassRoomUseCase {
    constructor(coursesRepository, enrollmentsRepository) {
        this.coursesRepository = coursesRepository;
        this.enrollmentsRepository = enrollmentsRepository;
    }
    async execute(data) {
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("course id is required");
        }
        if (data.studentId == "" || data.studentId == undefined) {
            throw new Error("student id is required");
        }
        const course = await this.coursesRepository.findById(data.courseId);
        if (!course) {
            throw new Error("course not found");
        }
        const classRoom = await this.coursesRepository.classRoom(data.courseId);
        return {
            course: classRoom.course,
            modules: classRoom.modules,
            isEducator: true
        };
    }
}
exports.ClassRoomUseCase = ClassRoomUseCase;
