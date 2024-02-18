"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneModuleController = void 0;
class UpdateOneModuleController {
    constructor(updateOneModuleUseCase) {
        this.updateOneModuleUseCase = updateOneModuleUseCase;
    }
    async handle(request, response) {
        const { module_id } = request.params;
        const { title, freeAfterDays, idioma, description } = request.body;
        try {
            await this.updateOneModuleUseCase.execute({
                moduleId: module_id,
                title,
                freeAfterDays,
                idioma,
                description
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
exports.UpdateOneModuleController = UpdateOneModuleController;
