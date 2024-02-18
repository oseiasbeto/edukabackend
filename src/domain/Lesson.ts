export class Lesson {
    public _id?: string
    public title: string
    public moduleId: string
    public courseId: string
    public videoId: string
    public idioma?: string
    public description?: string

    constructor(props: Lesson) {
        Object.assign(this, props)
    }
}