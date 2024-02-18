import { LessonsRepository } from "../../../repositories/LessonsRepository";
import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { IDeleteOneLessonRequestDTO } from "./IDeleteOneLessonRequestDTO";

export class DeleteOneLessonUseCase {
    constructor(
        private lessonsRepository: LessonsRepository,
        private modulesRepostory: ModulesRepository
    ) { }
    async execute(data: IDeleteOneLessonRequestDTO) {
        if (data.lessonId == undefined) {
            throw new Error("lesson id is required")
        } else {
            const lesson = await this.lessonsRepository.findById(data.lessonId)
            if (!lesson) {
                throw new Error("lesson not found")
            } else {
                await this.lessonsRepository.deleteOne(lesson._id)
                await this.modulesRepostory.removeLessonById(lesson._id)
            }
        }
    }
}