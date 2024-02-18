export class Course {
    public _id?: string
    public id: string
    public title: string
    public cover: string
    public price: string
    public category: string
    public idioma?: string
    public emailSupport?: string
    public description?: string
    public tags: string[]
    public daysatweek: string
    public topics: string
    public dataStart: string
    public dataEnd: string
    public format: string
    public requirement: string
    public location: string
    public timeStart: string
    public timeEnd: string
    public target: string
    public educator: string

    constructor(props: Course) {
        Object.assign(this, props)
    }
}