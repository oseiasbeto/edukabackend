"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoLessonsRepository = void 0;
const LessonSchema_1 = __importDefault(require("../../infra/database/schemas/LessonSchema"));
class MongoLessonsRepository {
    async findById(id) {
        const lession = await LessonSchema_1.default.findById(id);
        return lession;
    }
    async save(Lesson) {
        const newLesson = await LessonSchema_1.default.create(Lesson);
        return newLesson;
    }
    async deleteOne(id) {
        await LessonSchema_1.default.deleteOne({
            _id: id
        });
    }
    async updateOne(data) {
        await LessonSchema_1.default.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                videoUrl: data.videoUrl,
                description: data.description
            }
        });
    }
    async deleteManyByModuleId(id) {
        await LessonSchema_1.default.deleteMany({
            moduleId: id
        });
    }
    async deleteManyByCourseId(id) {
        await LessonSchema_1.default.deleteMany({
            courseId: id
        });
    }
}
exports.MongoLessonsRepository = MongoLessonsRepository;
