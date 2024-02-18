import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepository } from "../../../repositories/UsersRepository";
import { IAuthUserRequestDTO } from "./IAuthUserRequestDTO";

export class AuthUserUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) { }
    async execute(data: IAuthUserRequestDTO) {
        if (data.email == "" || data.email == undefined) {
            throw new Error("email is required")
        } else if (data.password == "" || data.password == undefined) {
            throw new Error("password is required")
        }
        const user = await this.usersRepository.findByEmail(data.email)
        if (!user) {
            throw new Error("email or password is incorrect")
        }
        const passwordMath = await compare(data.password, user.password)
        if (!passwordMath) {
            throw new Error("email or password is incorrect")
        }
        const token = sign({
            _id: user._id,
            username: user.username,
            role: user.role,
            email: user.email
        }, "eduka@upunty.com", {
            expiresIn: "1y"
        })
        return { token }
    }
}