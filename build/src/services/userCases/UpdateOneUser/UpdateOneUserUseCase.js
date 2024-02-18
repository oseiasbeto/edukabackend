"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserUseCase = void 0;
class UpdateOneUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        if (data.userid == undefined) {
            throw new Error("user id is required");
        }
        else if (data.username == '' || data.username == undefined) {
            throw new Error("username is required");
        }
        else if (data.social == undefined) {
            throw new Error("social is required");
        }
        else {
            const currentUser = await this.usersRepository.findById(data.userid);
            if (!currentUser) {
                throw new Error("currentuser is not found");
            }
            const dataObject = {
                _id: currentUser._id,
                avatar: currentUser.avatar,
                username: data.username != '' || data.username != undefined ? data.username : currentUser.username,
                social: data.social != undefined ? data.social : currentUser.social,
                description: data.description != '' ? data.description : currentUser.description
            };
            await this.usersRepository.updateOne(dataObject);
        }
    }
}
exports.UpdateOneUserUseCase = UpdateOneUserUseCase;
