import { Lesson } from "../../domain/Lesson";
import LessonSchema from "../../infra/database/schemas/LessonSchema";
import { LessonsRepository } from "../LessonsRepository";

export class MongoLessonsRepository implements LessonsRepository {
    async findById(id: string): Promise<any> {
        const lession = await LessonSchema.findById(id)
        return lession
    }
    async save(Lesson: Lesson): Promise<any> {
        const newLesson = await LessonSchema.create(Lesson)
        return newLesson
    }
    async deleteOne(id: string): Promise<void> {
        await LessonSchema.deleteOne({
            _id: id
        })
    }
    async updateOne(data: Lesson): Promise<void> {
        await LessonSchema.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                videoUrl: data.videoUrl,
                description: data.description
            }
        })
    }
    async deleteManyByModuleId(id: string): Promise<void> {
        await LessonSchema.deleteMany({
            moduleId: id
        })
    }
    async deleteManyByCourseId(id: string): Promise<void> {
        await LessonSchema.deleteMany({
            courseId: id
        })
    }
}