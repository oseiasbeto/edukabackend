"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAvatarController = void 0;
class UpdateOneAvatarController {
    constructor(updateOneAvatarUseCase) {
        this.updateOneAvatarUseCase = updateOneAvatarUseCase;
    }
    async handle(request, response) {
        const { filename } = request.file;
        const { user } = request;
        console.log(request.file);
        try {
            await this.updateOneAvatarUseCase.execute({
                userId: user._id,
                filename
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
exports.UpdateOneAvatarController = UpdateOneAvatarController;
