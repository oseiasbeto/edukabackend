"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpadateOneUserController = void 0;
class UpadateOneUserController {
    constructor(updateOneUserUseCase) {
        this.updateOneUserUseCase = updateOneUserUseCase;
    }
    async handle(request, response) {
        const { user } = request;
        const { username, social, description } = request.body;
        console.log(username, social, description);
        try {
            await this.updateOneUserUseCase.execute({
                userid: user._id,
                username,
                social,
                description
            });
            return response.status(200).json();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.UpadateOneUserController = UpadateOneUserController;
