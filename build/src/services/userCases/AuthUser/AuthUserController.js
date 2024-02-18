"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
class AuthUserController {
    constructor(authUserUseCase) {
        this.authUserUseCase = authUserUseCase;
    }
    async handle(request, response) {
        const { email, password } = request.body;
        try {
            const token = await this.authUserUseCase.execute({
                email,
                password
            });
            return response.status(200).json(token);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.AuthUserController = AuthUserController;
