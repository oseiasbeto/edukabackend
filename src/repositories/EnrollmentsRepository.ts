
export interface EnrollmentsRepository {
    findByEnrollment(course_id: string, student_id: string): Promise<any>
    findByEnrollmentsByStudentId(id: string, page: Number, limit: Number): Promise<any>
    generate(student: string, course: string, purchase: string): Promise<void>
}