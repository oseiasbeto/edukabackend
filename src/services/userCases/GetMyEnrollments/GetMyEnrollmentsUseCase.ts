import { EnrollmentsRepository } from "../../../repositories/EnrollmentsRepository";
import { IGetMyEnrollmentsUseCaseRequestDTO } from "./IGetMyEnrollmentsUseCaseRequestDTO";

export class GetMyEnrollmentsUseCase {
    constructor(
        private enrollmetsRepository: EnrollmentsRepository,
    ) { }
    async execute(data: IGetMyEnrollmentsUseCaseRequestDTO) {
        if (data.page == undefined) {
            throw new Error("page is required")
        } else if (data.limit == undefined) {
            throw new Error("limit is required")
        }
        else if (data.userId == undefined) {
            throw new Error("user id is required")
        } else {
            const enrollments = await this.enrollmetsRepository.findByEnrollmentsByStudentId(data.userId, data.page, data.limit)
            return enrollments
        }
    }
}