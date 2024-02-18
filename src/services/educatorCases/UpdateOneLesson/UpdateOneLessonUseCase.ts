import { LessonsRepository } from "../../../repositories/LessonsRepository";
import { IUpdateOneLessonRequestDTO } from "./IUpdateOneLessonRequestDTO";

export class UpdateOneLessonUseCase {
    constructor(
        private lessonsRepository: LessonsRepository
    ) { }
    async execute(data: IUpdateOneLessonRequestDTO) {
        if (data.lessonId == undefined) {
            throw new Error("lesson id is required")
        } else {
            const lesson = await this.lessonsRepository.findById(data.lessonId)
            if (!lesson) {
                throw new Error("lesson is not found")
            }
            const dataObject = {
                _id: lesson._id,
                moduleId: lesson.moduleId,
                title: data.title,
                idioma: data.idioma,
                videoUrl: data.videoUrl,
                description: data.description
            }
            await this.lessonsRepository.updateOne(dataObject)
        }
    }
}