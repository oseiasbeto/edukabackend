"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePurchaseUseCase = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Purchase_1 = require("../../../domain/Purchase");
class CreatePurchaseUseCase {
    constructor(usersRepository, coursesRepository, purchasesRepository, enrollmentsRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.coursesRepository = coursesRepository;
        this.purchasesRepository = purchasesRepository;
        this.enrollmentsRepository = enrollmentsRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        if (data.course.id == "" || data.course.id == undefined) {
            throw new Error("courseId is required");
        }
        if (data.customer.id == "" || data.customer.id == undefined) {
            throw new Error("customerId is required");
        }
        if (data.customer.username == "" || data.customer.username == undefined) {
            throw new Error("username is required");
        }
        if (data.customer.email == "" || data.customer.email == undefined) {
            throw new Error("email is required");
        }
        const customer = await this.usersRepository.findById(data.customer.id);
        if (!customer) {
            throw new Error("customer not found");
        }
        if (!customer.isChecked) {
            throw new Error("check your account");
        }
        const course = await this.coursesRepository.findById(data.course.id);
        if (!course) {
            throw new Error("course not found");
        }
        const enrollment = await this.enrollmentsRepository.findByEnrollment(course._id, customer._id);
        if (enrollment) {
            throw new Error("you already purchased this course.");
        }
        const generateId = crypto_1.default.randomBytes(3).toString("hex");
        const purchase = new Purchase_1.Purchase({
            id: generateId,
            customer: {
                id: customer._id,
                username: data.customer.username,
                email: data.customer.email
            },
            course: {
                id: course._id,
                title: course.title,
                price: course.price,
                educator: course.educator
            },
        });
        const newPurchase = await this.purchasesRepository.save(purchase);
        await this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: customer.email,
            subject: "A tua compra foi registrada con sucesso.",
            html: `<p> Olá ${customer.username} A tua conta foi registrada com sucesso, para obter o acesso ao curso vc deve fazer o depósito ou transferencia para as seguintes coordenadas bancárias:  e envie o comprovativo para o nosso Whatsapp 9485 com o id da compra id_compra: ${generateId} </p>`
        });
        return newPurchase;
    }
}
exports.CreatePurchaseUseCase = CreatePurchaseUseCase;
