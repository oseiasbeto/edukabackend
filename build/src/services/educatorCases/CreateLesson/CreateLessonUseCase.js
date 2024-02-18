"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLessonUseCase = void 0;
const get_youtube_id_1 = __importDefault(require("get-youtube-id"));
const Lesson_1 = require("../../../domain/Lesson");
class CreateLessonUseCase {
    constructor(lessonRepository, modulesRepository) {
        this.lessonRepository = lessonRepository;
        this.modulesRepository = modulesRepository;
    }
    async execute(data) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required");
        }
        else if (data.moduleId == "" || data.moduleId == undefined) {
            throw new Error("moduleId is required");
        }
        else if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("courseId is required");
        }
        else if (data.videoUrl == "" || data.videoUrl == undefined) {
            throw new Error("videoUrl is required");
        }
        else {
            const module = await this.modulesRepository.findById(data.moduleId);
            if (!module) {
                throw new Error("module is not found");
            }
            const lesson = new Lesson_1.Lesson({
                courseId: data.courseId,
                moduleId: data.moduleId,
                title: data.title,
                videoId: get_youtube_id_1.default(data.videoUrl),
                description: data.description,
                idioma: data.idioma
            });
            const newLesson = await this.lessonRepository.save(lesson);
            await this.modulesRepository.addNewLesson(module._id, newLesson._id);
            return newLesson;
        }
    }
}
exports.CreateLessonUseCase = CreateLessonUseCase;
