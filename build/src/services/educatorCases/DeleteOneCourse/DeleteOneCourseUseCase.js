"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCourseUseCase = void 0;
class DeleteOneCourseUseCase {
    constructor(coursesRepository, modulesRepository, lessonsRepository) {
        this.coursesRepository = coursesRepository;
        this.modulesRepository = modulesRepository;
        this.lessonsRepository = lessonsRepository;
    }
    async execute(data) {
        if (data.courseId == undefined) {
            throw new Error("course id is required");
        }
        else {
            const course = await this.coursesRepository.findById(data.courseId);
            if (!course) {
                throw new Error("course not found");
            }
            await this.coursesRepository.deleteOne(course._id);
            await this.modulesRepository.deleteManyByCourseId(course._id);
            await this.lessonsRepository.deleteManyByCourseId(course._id);
        }
    }
}
exports.DeleteOneCourseUseCase = DeleteOneCourseUseCase;
