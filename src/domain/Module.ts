export class Module {
    public _id?: string
    public title: string
    public courseId: string
    public description?: string
    public isActive?: string
    public idioma?: string
    public freeAt?: any

    constructor(props: Module) {
        Object.assign(this, props)
    }
}