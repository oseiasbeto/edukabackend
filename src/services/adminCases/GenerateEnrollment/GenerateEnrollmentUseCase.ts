import { Enrollment } from "../../../domain/Enrollment";
import { IMailProvider } from "../../../providers/IMailProvider";
import { CoursesRepository } from "../../../repositories/CoursesRepository";
import { EnrollmentsRepository } from "../../../repositories/EnrollmentsRepository";
import { PurchasesRepository } from "../../../repositories/PorchasesRepository";
import { UsersRepository } from "../../../repositories/UsersRepository";
import { IGenerateEnrollmentRequestDtO } from "./IGenerateEnrollmentRequestDTO";

export class GenerateEnrollmentUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private coursesRepository: CoursesRepository,
        private enrollmentsRepository: EnrollmentsRepository,
        private purchasesRepository: PurchasesRepository,
        private mailProvider: IMailProvider
    ) { }
    async execute(data: IGenerateEnrollmentRequestDtO) {
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("course id is required")
        }
        if (data.customerId == "" || data.customerId == undefined) {
            throw new Error("customer id is required")
        }
        const customer = await this.usersRepository.findById(data.customerId)
        const course = await this.coursesRepository.findById(data.courseId)
        const purchase = await this.purchasesRepository.findOnePurchase(data.courseId, data.customerId)

        if (!customer) {
            throw new Error("customer not found")
        }
        if (!course) {
            throw new Error("course not found")
        }
        if (!purchase) {
            throw new Error("purchase not exists")
        }
        await this.purchasesRepository.activePurchase(purchase.id)

        const percent = (Number(purchase.course.price) / 10)
        const totalAmmount = (Number(purchase.course.price) - percent)
        await this.usersRepository.setMoneyUser(purchase.course.educator, totalAmmount)

        await this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: customer.email,
            subject: "Comprar finalizada com sucesso",
            html: `<h1> Olá ${customer.username} a tua comprar foi finalizada com sucesso aqui tens o link para acessar o curso: http://educaafrica.com/course/${course._id} </h1>`
        })

        await this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: purchase.customer.email,
            subject: "Venda realizada com sucesso!",
            html: `<h1> Olá ${course.educator.username} houve uma nova compra do seu curso ${purchase.course.title}</h1>`
        })
        const enrollment = new Enrollment({
            student: customer._id,
            course: course._id,
            purchase: purchase._id
        })
        await this.enrollmentsRepository.generate(enrollment.student, enrollment.course, enrollment.purchase)
    }
}