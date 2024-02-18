"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFindByIdUseCase = void 0;
class UserFindByIdUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.userId == undefined) {
            throw new Error("user id is required");
        }
        else {
            const user = await this.usersRepository.findById(data.userId);
            if (!user) {
                throw new Error("user not found");
            }
            else {
                return user;
            }
        }
    }
}
exports.UserFindByIdUseCase = UserFindByIdUseCase;
