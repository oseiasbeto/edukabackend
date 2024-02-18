"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModulesRepository = void 0;
const ModuleSchema_1 = __importDefault(require("../../infra/database/schemas/ModuleSchema"));
class MongoModulesRepository {
    async findById(id) {
        const module = await ModuleSchema_1.default.findOne({
            _id: id
        }).populate("courseId");
        return module;
    }
    async findByCourseId(course_id) {
        const modules = await ModuleSchema_1.default.find({
            courseId: course_id
        }).populate("lessons");
        return modules;
    }
    async findByLessonId(lesson_id) {
        const module = await ModuleSchema_1.default.findOne({
            lessons: lesson_id
        });
        return module;
    }
    async removeLessonById(id) {
        const module = await ModuleSchema_1.default.findOne({
            lessons: id
        });
        await module.updateOne({
            $pull: {
                lessons: id
            }
        });
    }
    async addNewLesson(module_id, lesson_id) {
        await ModuleSchema_1.default.findOneAndUpdate({
            _id: module_id
        }, {
            $push: {
                lessons: lesson_id
            }
        });
    }
    async save(module) {
        const newModule = await ModuleSchema_1.default.create(module);
        return newModule;
    }
    async deleteOne(id) {
        await ModuleSchema_1.default.deleteOne({
            _id: id
        });
    }
    async deleteManyByCourseId(id) {
        await ModuleSchema_1.default.deleteMany({
            courseId: id
        });
    }
    async updateOne(data) {
        await ModuleSchema_1.default.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                freeAt: data.freeAt,
                description: data.description
            }
        });
    }
    async isActive(id, action) {
        await ModuleSchema_1.default.updateOne({
            _id: id
        }, {
            $set: {
                isActive: action
            }
        });
    }
}
exports.MongoModulesRepository = MongoModulesRepository;
