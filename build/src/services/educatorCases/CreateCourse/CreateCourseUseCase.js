"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseUseCase = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Course_1 = require("../../../domain/Course");
class CreateCourseUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async execute(data) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required");
        }
        if (data.cover == "" || data.cover == undefined) {
            throw new Error("cover is required");
        }
        if (data.price == "" || data.price == undefined) {
            throw new Error("price is required");
        }
        if (data.category == "" || data.category == undefined) {
            throw new Error("category is required");
        }
        if (data.educator == "" || data.educator == undefined) {
            throw new Error("educator is required");
        }
        const generateId = crypto_1.default.randomBytes(3).toString("hex");
        const course = new Course_1.Course({
            id: generateId,
            title: data.title,
            cover: data.cover,
            price: data.price,
            category: data.category,
            idioma: data.idioma,
            description: data.description,
            emailSupport: data.emailSupport,
            educator: data.educator,
            topics: data.topics,
            dataStart: data.dataStart,
            dataEnd: data.dataEnd,
            format: data.format,
            requirement: data.requirement,
            location: data.location,
            timeStart: data.timeStart,
            timeEnd: data.timeEnd,
            target: data.target,
            tags: data.tags
        });
        const newCourse = await this.courseRepository.save(course);
        return newCourse;
    }
}
exports.CreateCourseUseCase = CreateCourseUseCase;
