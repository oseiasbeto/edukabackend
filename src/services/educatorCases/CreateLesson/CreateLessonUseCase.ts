import youtube from 'get-youtube-id'
import { Lesson } from "../../../domain/Lesson";
import { LessonsRepository } from "../../../repositories/LessonsRepository";
import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { ICreateLessonRequestDTO } from "./ICreateLessonRequestDTO";

export class CreateLessonUseCase {
    constructor(
        private lessonRepository: LessonsRepository,
        private modulesRepository: ModulesRepository
    ) { }
    async execute(data: ICreateLessonRequestDTO) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required")
        }
        else if (data.moduleId == "" || data.moduleId == undefined) {
            throw new Error("moduleId is required")
        }
        else if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("courseId is required")
        }
        else if (data.videoUrl == "" || data.videoUrl == undefined) {
            throw new Error("videoUrl is required")
        } else {
            const module = await this.modulesRepository.findById(data.moduleId)
            if (!module) {
                throw new Error("module is not found")
            }
            const lesson = new Lesson({
                courseId: data.courseId,
                moduleId: data.moduleId,
                title: data.title,
                videoId: youtube(data.videoUrl),
                description: data.description,
                idioma: data.idioma
            })
            const newLesson = await this.lessonRepository.save(lesson)
            await this.modulesRepository.addNewLesson(module._id, newLesson._id)
            return newLesson
        }
    }
}