"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordController = void 0;
class ForgotPasswordController {
    constructor(forgotPasswordUseCase) {
        this.forgotPasswordUseCase = forgotPasswordUseCase;
    }
    async handle(request, response) {
        const { email } = request.body;
        try {
            await this.forgotPasswordUseCase.execute({
                email
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
exports.ForgotPasswordController = ForgotPasswordController;
