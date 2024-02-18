export interface course {
    id: string,
    title: string,
    price: Number,
    educator: string,
}

export interface customer {
    id: string,
    username: string,
    email: string
}

export class Purchase {
    public _id?: string
    public id: string
    public course: course
    public customer: customer

    constructor(props: Purchase) {
        Object.assign(this, props)
    }
}