import { IMailProvider } from "../../../providers/IMailProvider";
import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { UsersRepository } from "../../../repositories/UsersRepository";
import { IActivePurchaseRequestDTO } from "./IActiveCourseRequestDTO";

export class ActivePurchaseUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private courseRepository: CoursesRepository,
        private mailProvider: IMailProvider
    ) { }
    async execute(data: IActivePurchaseRequestDTO) {
        if (data.idCourse == "" || data.idCourse == undefined) {
            throw new Error("id course is required")
        }
        const course = await this.courseRepository.findById(data.idCourse)
        if (!course) {
            throw new Error("course not found")
        }
        const educator = await this.usersRepository.findById(course.educator)
        if (!educator) {
            throw new Error("educator not found")
        }
        await this.courseRepository.activeCourse(course._id)
        await this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: educator.email,
            subject: "O teu curso foi aprovado",
            html: `<p> Olá <strong>${educator.username}</strong> </br></br> O teu curso: ${course.title} foi aprovado agora já está disponível para as vendas. </br> Eduka África </br> abraços!!</p>`
        })
    }
}