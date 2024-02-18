export class Enrollment {
    public _id?: string
    public course: string
    public student: string
    public purchase: string

    constructor(props: Enrollment) {
        Object.assign(this, props)
    }
}