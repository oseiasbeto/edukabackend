"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../../../domain/User");
class CreateUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const userAlreadExists = await this.usersRepository.findByEmail(data.email);
        if (data.username == "" || data.username == undefined) {
            throw new Error("username is required");
        }
        else if (data.email == "" || data.email == undefined) {
            throw new Error("email is required");
        }
        else if (data.password == "" || data.password == undefined) {
            throw new Error("password is required");
        }
        else {
            if (userAlreadExists) {
                throw new Error("user already exists.");
            }
        }
        const passwordHash = await bcryptjs_1.hash(data.password, 8);
        const generateId = crypto_1.default.randomBytes(6).toString("hex");
        const generateEmailConfirmToken = crypto_1.default.randomBytes(10).toString("hex");
        const user = new User_1.User({
            id: generateId,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: passwordHash,
            emailConfirmToken: generateEmailConfirmToken
        });
        await this.usersRepository.save(user);
        this.mailProvider.sendMail({
            from: 'Eduka África <edukaafrica@gmail.com>',
            to: user.email,
            subject: "Token para confirmar a tua conta",
            html: `<h1> Olá ${user.username} clique neste link para verificar a tua conta em nossa plataforma token de confirmação: ${generateEmailConfirmToken} </h1>`
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
