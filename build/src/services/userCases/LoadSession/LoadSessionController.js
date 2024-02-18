"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSessionController = void 0;
class LoadSessionController {
    constructor(loadSessionUseCase) {
        this.loadSessionUseCase = loadSessionUseCase;
    }
    async handle(request, response) {
        const { user } = request;
        try {
            const currentUser = await this.loadSessionUseCase.execute({
                userId: user._id
            });
            return response.status(200).json({
                currentUser
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.LoadSessionController = LoadSessionController;
