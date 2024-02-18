"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneModuleController = void 0;
class DeleteOneModuleController {
    constructor(deleteOneModuleUseCase) {
        this.deleteOneModuleUseCase = deleteOneModuleUseCase;
    }
    async handle(request, response) {
        const { module_id } = request.params;
        try {
            await this.deleteOneModuleUseCase.execute({
                moduleId: module_id
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
exports.DeleteOneModuleController = DeleteOneModuleController;
