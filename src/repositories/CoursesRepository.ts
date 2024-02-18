import { Course } from "../domain/Course";

export interface CoursesRepository {
    findById(id: string): Promise<any>
    findBySecondId(id: string): Promise<any>
    findByUser(user_id: string, page: Number, limit: Number): Promise<any>
    deleteOne(id: string): Promise<void>
    updateOne(data: Course): Promise<void>
    save(course: Course): Promise<any>
    addNewStudent(course_id: string, student_id: string): Promise<any>
    sendToAdmin(id: string): Promise<any>
    getCoursesPushed(page: Number, limit: Number): Promise<any>
    getCoursesActive(page: Number, limit: Number, format: String): Promise<any>
    getCoursesPurchased(page: Number, limit: Number, id: string): Promise<any>
    searcCourses(page: Number, limit: Number, keywords: string): Promise<any>
    activeCourse(id: string): Promise<any>
    classRoom(course_id: string): Promise<any>
}