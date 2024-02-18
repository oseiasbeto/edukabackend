import moment from "moment";
import { Module } from "../../../domain/Module";
import { ModulesRepository } from "../../../repositories/ModulesRepository";
import { ICreateModuleRequestDTO } from "./ICreateModuleRequestDTO";
import { CoursesRepository } from "../../../repositories/CoursesRepository";

export class CreateModuleUseCase {
    constructor(
        private moduleRepository: ModulesRepository,
        private coursesRepository: CoursesRepository
    ) { }
    async execute(data: ICreateModuleRequestDTO) {
        if (data.title == "" || data.title == undefined) {
            throw new Error("title is required")
        }
        if (data.courseId == "" || data.courseId == undefined) {
            throw new Error("courseId is required")
        }
        const course = await this.coursesRepository.findById(data.courseId)
        if (!course) {
            throw new Error("course not found")
        }
        const module = new Module({
            title: data.title,
            courseId: data.courseId,
            description: data.description,
            idioma: data.idioma,
            freeAt: data.freeAfterDays
        })
        const newModule = await this.moduleRepository.save(module)
        return newModule
    }
}