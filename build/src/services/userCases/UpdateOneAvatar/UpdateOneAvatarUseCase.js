"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAvatarUseCase = void 0;
class UpdateOneAvatarUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.userId == undefined) {
            throw new Error("user id is required");
        }
        else if (data.filename == undefined) {
            throw new Error("filename is required");
        }
        else {
            const currentUser = await this.usersRepository.findById(data.userId);
            if (!currentUser) {
                throw new Error("current user is required");
            }
            else {
                const URL = 'http://51.222.200.112:3333/files/';
                const dataObject = {
                    _id: currentUser._id,
                    username: currentUser.username,
                    description: currentUser.description,
                    social: currentUser.social,
                    avatar: URL + data.filename,
                };
                await this.usersRepository.updateOne(dataObject);
            }
        }
    }
}
exports.UpdateOneAvatarUseCase = UpdateOneAvatarUseCase;
