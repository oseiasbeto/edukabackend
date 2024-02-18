import moment from "moment";
import crypto from "crypto"
import { UsersRepository } from "../../../repositories/UsersRepository";
import { IForgotPasswordRequestDTO } from "./IForgotPasswordRequestDTO";
import { IMailProvider } from "../../../providers/IMailProvider";

export class ForgotPasswordUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private mailProvider: IMailProvider
    ) { }
    async execute(data: IForgotPasswordRequestDTO) {
        if (data.email == "" || data.email == undefined) {
            throw new Error("email is required")
        }
        const user = await this.usersRepository.findByEmail(data.email)
        if (!user) {
            throw new Error("user not found")
        }
        if (user.passwordResetToken) {
            if (moment(user.passwordResetExpires).isAfter(moment())) {
                throw new Error("await the token has been sended expires.")
            }
        }
        const generateResetToken = crypto.randomBytes(10).toString("hex")
        const timeExpires = new Date(moment().add('2', 'hours').toString())

        this.usersRepository.setPasswordResetToken(user, generateResetToken, timeExpires)
        this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: user.email,
            subject: "Token para recuperar a senha",
            html: `<h1> Olá <strong> ${user.username} </strong> clique neste link para recuperar a tua conta em nossa plataforma token: ${generateResetToken} </h1>`
        })
    }
}