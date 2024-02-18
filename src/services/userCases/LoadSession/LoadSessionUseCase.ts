import { UsersRepository } from "../../../repositories/UsersRepository";
import { ILoadSessionRequestDTO } from "./ILoadSessionRequestDTO";

export class LoadSessionUseCase {
    constructor(
        private usersRepository: UsersRepository
    ) { }
    async execute(data: ILoadSessionRequestDTO) {
        if (data.userId == "" || data.userId == undefined) {
            throw new Error("user id is required")
        }
        const currentUser = await this.usersRepository.findById(data.userId)
        return currentUser
    }
}