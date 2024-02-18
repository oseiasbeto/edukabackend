"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCourseUseCase = void 0;
class UpdateOneCourseUseCase {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async execute(data) {
        if (data.id == '' || data.id == undefined) {
            throw new Error("id is required");
        }
        else if (data.title == '' || data.title == undefined) {
            throw new Error("title is required");
        }
        else if (data.category == '' || data.category == undefined) {
            throw new Error("category is required");
        }
        else if (data.description == '' || data.description == undefined) {
            throw new Error("description is required");
        }
        else {
            const course = await this.coursesRepository.findById(data.id);
            if (!course) {
                throw new Error("course not found");
            }
            const dataObject = {
                id: course.id,
                tags: course.tags,
                educator: course.educator,
                cover: course.cover,
                price: course.price,
                _id: data.id,
                title: data.title,
                category: data.category,
                idioma: data.idioma,
                emailSupport: data.emailSupport,
                description: data.description
            };
            await this.coursesRepository.updateOne(dataObject);
        }
    }
}
exports.UpdateOneCourseUseCase = UpdateOneCourseUseCase;
