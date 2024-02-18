"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleActiveModuleController = void 0;
class ToggleActiveModuleController {
    constructor(toggleActiveModuleUseCase) {
        this.toggleActiveModuleUseCase = toggleActiveModuleUseCase;
    }
    async handle(request, response) {
        const { module_id } = request.params;
        const { action } = request.body;
        try {
            await this.toggleActiveModuleUseCase.execute({
                moduleId: module_id,
                action
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
exports.ToggleActiveModuleController = ToggleActiveModuleController;
