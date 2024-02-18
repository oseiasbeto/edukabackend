export interface ICreateLessonRequestDTO {
    title: string,
    courseId: string,
    moduleId: string,
    idioma?: string,
    videoUrl: string,
    description?: string
}