"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordUseCase = void 0;
const moment_1 = __importDefault(require("moment"));
const crypto_1 = __importDefault(require("crypto"));
class ForgotPasswordUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        if (data.email == "" || data.email == undefined) {
            throw new Error("email is required");
        }
        const user = await this.usersRepository.findByEmail(data.email);
        if (!user) {
            throw new Error("user not found");
        }
        if (user.passwordResetToken) {
            if (moment_1.default(user.passwordResetExpires).isAfter(moment_1.default())) {
                throw new Error("await the token has been sended expires.");
            }
        }
        const generateResetToken = crypto_1.default.randomBytes(10).toString("hex");
        const timeExpires = new Date(moment_1.default().add('2', 'hours').toString());
        this.usersRepository.setPasswordResetToken(user, generateResetToken, timeExpires);
        this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: user.email,
            subject: "Token para recuperar a senha",
            html: `<h1> Olá <strong> ${user.username} </strong> clique neste link para recuperar a tua conta em nossa plataforma token: ${generateResetToken} </h1>`
        });
    }
}
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
