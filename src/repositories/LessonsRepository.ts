import { Lesson } from "../domain/Lesson";

export interface LessonsRepository {
    findById(id: string): Promise<any>
    save(Lesson: Lesson): Promise<any>
    deleteOne(id: string): Promise<void>
    deleteManyByCourseId(id: string): Promise<void>
    deleteManyByModuleId(id: string): Promise<void>
    updateOne(data: Lesson): Promise<void>
}