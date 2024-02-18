"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivePurchaseUseCase = void 0;
class ActivePurchaseUseCase {
    constructor(usersRepository, courseRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.courseRepository = courseRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        if (data.idCourse == "" || data.idCourse == undefined) {
            throw new Error("id course is required");
        }
        const course = await this.courseRepository.findById(data.idCourse);
        if (!course) {
            throw new Error("course not found");
        }
        const educator = await this.usersRepository.findById(course.educator);
        if (!educator) {
            throw new Error("educator not found");
        }
        await this.courseRepository.activeCourse(course._id);
        await this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: educator.email,
            subject: "O teu curso foi aprovado",
            html: `<p> Olá <strong>${educator.username}</strong> </br></br> O teu curso: ${course.title} foi aprovado agora já está disponível para as vendas. </br> Eduka África </br> abraços!!</p>`
        });
    }
}
exports.ActivePurchaseUseCase = ActivePurchaseUseCase;
