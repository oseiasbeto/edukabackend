export interface ICreateCourseRequestDTO {
    title: string
    cover: string
    price: string
    category: string
    idioma: string
    description: string
    tags: string[],
    daysatweek: string,
    topics: string,
    dataStart: string,
    dataEnd: string,
    format: string,
    requirement: string,
    location: string,
    timeStart: string,
    timeEnd: string,
    target: string,
    educator: string
    emailSupport: string
}