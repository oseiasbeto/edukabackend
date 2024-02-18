"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordController = void 0;
class ResetPasswordController {
    constructor(resetPasswordUseCase) {
        this.resetPasswordUseCase = resetPasswordUseCase;
    }
    async handle(request, response) {
        const { token } = request.params;
        const { password } = request.body;
        try {
            await this.resetPasswordUseCase.execute({
                token,
                password
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
exports.ResetPasswordController = ResetPasswordController;
