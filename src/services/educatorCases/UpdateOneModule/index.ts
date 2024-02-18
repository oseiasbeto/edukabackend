import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { UpdateOneModuleController } from "./UpdateOneModuleController";
import { UpdateOneModuleUseCase } from "./UpdateOneModuleUseCase";

const mongoModulesRepository = new MongoModulesRepository()
const updateOneModuleUseCase = new UpdateOneModuleUseCase(mongoModulesRepository)
const updateOneModuleController = new UpdateOneModuleController(updateOneModuleUseCase)

export { updateOneModuleController }