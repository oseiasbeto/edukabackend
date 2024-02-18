import { MongoLessonsRepository } from "../../../repositories/Implementations/MongoLessonsRepository";
import { MongoModulesRepository } from "../../../repositories/Implementations/MongoModulesRepository";
import { DeleteOneModuleController } from "./DeleteOneModuleController";
import { DeleteOneModuleUseCase } from "./DeleteOneMosduleUseCase";

const mongoModulesRepository = new MongoModulesRepository()
const mongoLessonsRepository = new MongoLessonsRepository()
const deleteOneModuleUseCase = new DeleteOneModuleUseCase(mongoModulesRepository, mongoLessonsRepository)
const deleteOneModuleController = new DeleteOneModuleController(deleteOneModuleUseCase)

export { deleteOneModuleController }