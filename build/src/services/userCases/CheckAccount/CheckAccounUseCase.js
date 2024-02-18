"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAccountUseCase = void 0;
class CheckAccountUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.token == "" || data.token == undefined) {
            throw new Error("token is required");
        }
        const user = await this.usersRepository.findByEmailConfirmToken(data.token);
        if (!user) {
            throw new Error("this token is invalid");
        }
        if (user.isChecked) {
            throw new Error("you already has been checked your account");
        }
        await this.usersRepository.checkAccount(user);
    }
}
exports.CheckAccountUseCase = CheckAccountUseCase;
