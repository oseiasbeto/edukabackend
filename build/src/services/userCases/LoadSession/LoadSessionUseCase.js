"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSessionUseCase = void 0;
class LoadSessionUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.userId == "" || data.userId == undefined) {
            throw new Error("user id is required");
        }
        const currentUser = await this.usersRepository.findById(data.userId);
        return currentUser;
    }
}
exports.LoadSessionUseCase = LoadSessionUseCase;
