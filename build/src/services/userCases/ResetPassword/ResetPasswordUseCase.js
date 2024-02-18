"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordUseCase = void 0;
const moment_1 = __importDefault(require("moment"));
const bcryptjs_1 = require("bcryptjs");
class ResetPasswordUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.token == "" || data.token == undefined) {
            throw new Error("token is required");
        }
        if (data.password == "" || data.password == undefined) {
            throw new Error("password is required");
        }
        const user = await this.usersRepository.findByPasswordResetToken(data.token);
        if (!user) {
            throw new Error("token invalid");
        }
        if (!moment_1.default(user.passwordResetExpires).isAfter(moment_1.default())) {
            throw new Error("this token is expired.");
        }
        const passwordHash = await bcryptjs_1.hash(data.password, 8);
        await this.usersRepository.setNewPassword(user, passwordHash);
    }
}
exports.ResetPasswordUseCase = ResetPasswordUseCase;
