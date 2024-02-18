"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { username, email, phone, password } = request.body;
        try {
            await this.createUserUseCase.execute({
                username,
                email,
                phone,
                password
            });
            return response.status(201).json();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
