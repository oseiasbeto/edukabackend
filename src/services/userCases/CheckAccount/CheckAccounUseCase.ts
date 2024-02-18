import { UsersRepository } from "../../repositories/UsersRepository";
import { ICheckAccountRequestDTO } from "./ICheckAccountRequestDTO";

export class CheckAccountUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) { }
    async execute(data: ICheckAccountRequestDTO) {
        if (data.token == "" || data.token == undefined) {
            throw new Error("token is required")
        }
        const user = await this.usersRepository.findByEmailConfirmToken(data.token)
        if (!user) {
            throw new Error("this token is invalid")
        }
        if(user.isChecked) {
            throw new Error("you already has been checked your account")
        }
        await this.usersRepository.checkAccount(user)
    }
}