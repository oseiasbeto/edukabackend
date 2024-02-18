import crypto from "crypto"
import { hash } from "bcryptjs"
import { User } from "../../../domain/User";
import { UsersRepository } from "../../../repositories/UsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";
import { IMailProvider } from "../../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private mailProvider: IMailProvider
    ) { }
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadExists = await this.usersRepository.findByEmail(data.email)

        if (data.username == "" || data.username == undefined) {
            throw new Error("username is required")
        } else if (data.email == "" || data.email == undefined) {
            throw new Error("email is required")
        } else if (data.password == "" || data.password == undefined) {
            throw new Error("password is required")
        } else {
            if (userAlreadExists) {
                throw new Error("user already exists.")
            }
        }
        const passwordHash = await hash(data.password, 8)
        const generateId = crypto.randomBytes(6).toString("hex")
        const generateEmailConfirmToken = crypto.randomBytes(10).toString("hex")

        const user = new User({
            id: generateId,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: passwordHash,
            emailConfirmToken: generateEmailConfirmToken
        })
        await this.usersRepository.save(user)
        this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: user.email,
            subject: "Token para confirmar a tua conta",
            html: `<h1> Olá ${user.username} clique neste link para verificar a tua conta em nossa plataforma token de confirmação: ${generateEmailConfirmToken} </h1>`
        })
    }
}