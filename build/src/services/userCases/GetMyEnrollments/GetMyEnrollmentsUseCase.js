"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyEnrollmentsUseCase = void 0;
class GetMyEnrollmentsUseCase {
    constructor(enrollmetsRepository) {
        this.enrollmetsRepository = enrollmetsRepository;
    }
    async execute(data) {
        if (data.page == undefined) {
            throw new Error("page is required");
        }
        else if (data.limit == undefined) {
            throw new Error("limit is required");
        }
        else if (data.userId == undefined) {
            throw new Error("user id is required");
        }
        else {
            const enrollments = await this.enrollmetsRepository.findByEnrollmentsByStudentId(data.userId, data.page, data.limit);
            return enrollments;
        }
    }
}
exports.GetMyEnrollmentsUseCase = GetMyEnrollmentsUseCase;
