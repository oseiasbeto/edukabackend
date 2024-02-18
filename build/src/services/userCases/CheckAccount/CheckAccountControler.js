"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAccountController = void 0;
class CheckAccountController {
    constructor(checkAccountUseCase) {
        this.checkAccountUseCase = checkAccountUseCase;
    }
    async handle(request, response) {
        const { token } = request.params;
        try {
            await this.checkAccountUseCase.execute({ token });
            return response.status(200).json();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.CheckAccountController = CheckAccountController;
