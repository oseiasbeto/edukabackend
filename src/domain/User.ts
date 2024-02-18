export class User {
    public _id?: string
    public id: string
    public username: string
    public email: string
    public phone?: string
    public avatar?: string
    public password: string
    public balance?: Number
    public description?: string
    public emailConfirmToken: string
    
    constructor(props: User) {
        Object.assign(this, props)
    }
}