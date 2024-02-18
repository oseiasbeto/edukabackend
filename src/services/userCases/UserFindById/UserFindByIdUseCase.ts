import { UsersRepository } from "../../../repositories/UsersRepository";
import { UserFindByIdRequestDTO } from "./IUserFindByIdRequestDTO";

export class UserFindByIdUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) { }
    async execute(data: UserFindByIdRequestDTO) {
        if (data.userId == undefined) {
            throw new Error("user id is required")
        } else {
            const user = await this.usersRepository.findById(data.userId)
            if (!user) {
                throw new Error("user not found")
            } else {
                return user
            }
        }
    }
}