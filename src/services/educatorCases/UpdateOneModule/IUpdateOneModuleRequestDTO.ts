export interface IUpdateOneModuleRequestDTO {
    moduleId: string,
    title: string,
    description?: string,
    idioma?: string,
    freeAfterDays?: any
}