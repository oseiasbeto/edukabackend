import { Module } from "../domain/Module";

export interface ModulesRepository {
    findById(id: string): Promise<any>
    findByCourseId(course_id: string): Promise<any>
    findByLessonId(lesson_id: string): Promise<any>
    deleteOne(id: string): Promise<void>
    deleteManyByCourseId(id: string): Promise<void>
    updateOne(module: Module): Promise<void>
    isActive(id: string, action: boolean): Promise<void>
    removeLessonById(id: string): Promise<void>
    addNewLesson(module_id: string, lesson_id: string): Promise<void>
    save(course: Module): Promise<any>
}