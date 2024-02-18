"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseController = void 0;
class CreateCourseController {
    constructor(createCourseCase) {
        this.createCourseCase = createCourseCase;
    }
    async handle(request, response) {
        const { title, price, category, idioma, emailSupport, description, topics, dataStart, dataEnd, daysatweek, format, requirement, location, timeStart, timeEnd, target, } = request.body;
        const { user } = request;
        const { file } = request;
        try {
            const newCourse = await this.createCourseCase.execute({
                title,
                cover: `${file.filename != undefined ? `http://51.222.200.112:3333/files/${file.filename}` : undefined}`,
                price,
                category,
                idioma,
                emailSupport,
                description,
                educator: user._id,
                topics,
                dataStart,
                dataEnd,
                format,
                requirement,
                daysatweek,
                location,
                timeStart,
                timeEnd,
                target,
                tags: [
                    title,
                    price,
                    idioma,
                    category,
                    user.username
                ]
            });
            return response.status(201).json({
                newCourse
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.CreateCourseController = CreateCourseController;
