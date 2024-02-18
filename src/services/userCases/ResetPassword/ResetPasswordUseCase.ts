import moment from "moment";
import { hash } from "bcryptjs"
import { UsersRepository } from "../../../repositories/UsersRepository";
import { IResetPasswordRequestDTO } from "./IResetPasswordRequestDTO";

export class ResetPasswordUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) {}
    async execute(data: IResetPasswordRequestDTO) {
        if(data.token == "" || data.token == undefined) {
            throw new Error("token is required")
        }
        if(data.password == "" || data.password == undefined) {
            throw new Error("password is required")
        }
        const user = await this.usersRepository.findByPasswordResetToken(data.token)
        if(!user) {
            throw new Error("token invalid")
        }
        if(!moment(user.passwordResetExpires).isAfter(moment())) {
            throw new Error("this token is expired.")
        }
        const passwordHash = await hash(data.password, 8)
        await this.usersRepository.setNewPassword(user, passwordHash)
    }
}