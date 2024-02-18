"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFindByIdController = void 0;
class UserFindByIdController {
    constructor(userFindByIdUseCase) {
        this.userFindByIdUseCase = userFindByIdUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        try {
            const user = await this.userFindByIdUseCase.execute({
                userId: id
            });
            return response.status(200).json({
                user
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.UserFindByIdController = UserFindByIdController;
