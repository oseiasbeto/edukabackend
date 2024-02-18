import { Module } from "../../domain/Module";
import ModuleSchema from "../../infra/database/schemas/ModuleSchema";
import { ModulesRepository } from "../ModulesRepository";

export class MongoModulesRepository implements ModulesRepository {
    async findById(id: string): Promise<any> {
        const module = await ModuleSchema.findOne({
            _id: id
        }).populate("courseId")
        return module
    }
    async findByCourseId(course_id: string): Promise<any> {
        const modules = await ModuleSchema.find({
            courseId: course_id
        }).populate("lessons")
        return modules
    }
    async findByLessonId(lesson_id: string): Promise<any> {
        const module = await ModuleSchema.findOne({
            lessons: lesson_id
        })
        return module
    }
    async removeLessonById(id: string): Promise<void> {
        const module = await ModuleSchema.findOne({
            lessons: id
        })
        await module.updateOne({
            $pull: {
                lessons: id
            }
        })
    }
    async addNewLesson(module_id: string, lesson_id: string): Promise<void> {
        await ModuleSchema.findOneAndUpdate({
            _id: module_id
        }, {
            $push: {
                lessons: lesson_id
            }
        })
    }
    async save(module: Module): Promise<any> {
        const newModule = await ModuleSchema.create(module)
        return newModule
    }
    async deleteOne(id: string): Promise<void> {
        await ModuleSchema.deleteOne({
            _id: id
        })
    }
    async deleteManyByCourseId(id: string): Promise<void> {
        await ModuleSchema.deleteMany({
            courseId: id
        })
    }
    async updateOne(data: Module): Promise<void> {
        await ModuleSchema.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                freeAt: data.freeAt,
                description: data.description
            }
        })
    }
    async isActive(id: string, action: boolean): Promise<void> {
        await ModuleSchema.updateOne({
            _id: id
        }, {
            $set: {
                isActive: action
            }
        })
    }
}