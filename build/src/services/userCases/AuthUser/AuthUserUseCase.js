"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.email == "" || data.email == undefined) {
            throw new Error("email is required");
        }
        else if (data.password == "" || data.password == undefined) {
            throw new Error("password is required");
        }
        const user = await this.usersRepository.findByEmail(data.email);
        if (!user) {
            throw new Error("email or password is incorrect");
        }
        const passwordMath = await bcryptjs_1.compare(data.password, user.password);
        if (!passwordMath) {
            throw new Error("email or password is incorrect");
        }
        const token = jsonwebtoken_1.sign({
            _id: user._id,
            username: user.username,
            role: user.role,
            email: user.email
        }, "eduka@upunty.com", {
            expiresIn: "1y"
        });
        return { token };
    }
}
exports.AuthUserUseCase = AuthUserUseCase;
